import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

function sanitize(input: string): string {
  const normalized = input.normalize("NFKC");
  const noControls = normalized.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
  const noAngles = noControls.replace(/[<>]/g, "");
  const collapsed = noAngles.replace(/\s+/g, " ").trim();
  return collapsed.slice(0, 500);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawContent = String(body?.content ?? "");
    const content = sanitize(rawContent);

    if (!content) {
      return NextResponse.json({ error: "Empty content" }, { status: 400 });
    }

    const { error } = await supabase.from("game_comment").insert({
      game_name: "Parking Fury 3D: Night City",
      content,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


