"use client";

import React from "react";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

type CommentItem = { id: string; author: string; content: string; time: string };

function sanitize(input: string): string {
  const normalized = input.normalize("NFKC");
  const withoutControls = normalized.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
  const withoutAngles = withoutControls.replace(/[<>]/g, "");
  const collapsed = withoutAngles.replace(/\s+/g, " ").trim();
  return collapsed.slice(0, 500);
}

function formatRelativeTime(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diffSec = Math.max(0, Math.floor((now - then) / 1000));
  if (diffSec < 10) return "just now";
  if (diffSec < 60) return `${diffSec}s ago`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDay = Math.floor(diffHr / 24);
  return `${diffDay}d ago`;
}

export function Comments({ gameName = "Parking Fury 3D: Night City" }: { gameName?: string }) {
  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState<CommentItem[]>([]);
  const [isSending, setIsSending] = React.useState(false);
  const [cooldownUntil, setCooldownUntil] = React.useState<number>(0);

  const fetchComments = React.useCallback(async () => {
    const { data, error } = await supabase
      .from("game_comment")
      .select("*")
      .eq("game_name", gameName)
      .order("created_at", { ascending: false })
      .limit(100);
    if (error) return;
    const mapped = (data || []).map((row) => ({
      id: `db-${String(row.id)}`,
      author: "Anonymous Player",
      content: String(row.content ?? ""),
      time: formatRelativeTime(String(row.created_at)),
    }));
    setComments(mapped);
  }, [gameName]);

  React.useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const addComment = async () => {
    if (!comment.trim()) return;
    const safe = sanitize(comment);
    if (!safe) return;
    const now = Date.now();
    if (now < cooldownUntil || isSending) return;
    setIsSending(true);

    const optimistic: CommentItem = {
      id: `temp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      author: "Anonymous Player",
      content: safe,
      time: "just now",
    };
    setComments([optimistic, ...comments]);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: safe }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(`Failed to save comment: ${data?.error || `HTTP ${res.status}`}`);
      }
      fetchComments();
    } finally {
      setComment("");
      setIsSending(false);
      setCooldownUntil(Date.now() + 4000);
    }
  };

  return (
    <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm">
      <div className="p-4 lg:p-6">
        <h3 className="flex items-center gap-2 text-purple-200 mb-3 lg:mb-4 text-sm lg:text-base">
          <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
          Player Comments
        </h3>
        <div className="space-y-3 lg:space-y-4 mb-3 lg:mb-4">
          <Textarea
            placeholder="Share your parking skills!"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400 text-sm lg:text-base min-h-[80px] lg:min-h-[100px]"
          />
          <Button
            onClick={addComment}
            disabled={isSending || Date.now() < cooldownUntil}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base py-2 lg:py-3 touch-target"
          >
            {isSending ? "Sending..." : Date.now() < cooldownUntil ? "Please input..." : "Send"}
          </Button>
        </div>
        <Separator className="bg-purple-500/30 mb-3 lg:mb-4" />
        <div className="space-y-2 lg:space-y-3 h-40 lg:h-48 overflow-y-auto pr-2">
          {comments.map((c) => (
            <div key={c.id} className="text-xs lg:text-sm">
              <div className="flex justify-between items-start mb-1">
                <span className="text-purple-300 font-medium">{c.author}</span>
                <span className="text-gray-500 text-xs">{c.time}</span>
              </div>
              <p className="text-gray-300">{c.content}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}


