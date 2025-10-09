"use client";

import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Share2 } from "lucide-react";

export function ShareWithFriends() {
  const shareTwitter = () => {
    const text = 'Playing Parking Fury 3D: Night City! Night city parking challenge, so thrilling!';
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <Card className="bg-gray-800/50 border-cyan-500/30 backdrop-blur-sm">
      <div className="p-4 lg:p-6">
        <h3 className="flex items-center gap-2 text-cyan-200 mb-3 lg:mb-4 text-sm lg:text-base">
          <Share2 className="w-4 h-4 lg:w-5 lg:h-5" />
          Share with Friends
        </h3>
        <div className="flex gap-2">
          <Button 
            onClick={shareTwitter}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-xs lg:text-sm py-2 lg:py-3 touch-target"
          >
            Twitter
          </Button>
          <Button 
            onClick={shareFacebook}
            className="flex-1 bg-blue-800 hover:bg-blue-900 text-xs lg:text-sm py-2 lg:py-3 touch-target"
          >
            Facebook
          </Button>
        </div>
      </div>
    </Card>
  );
}


