"use client";

import Link from "next/link";

type HeaderProps = {
  titleFull?: string;
  titleShort?: string;
  gameAnchor?: string;
};

export function Header({
  titleFull = "Parking Fury 3D",
  titleShort = "Parking Fury 3D",
  gameAnchor = "#game-iframe",
}: HeaderProps) {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm border-b border-blue-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <h1
            className="text-lg sm:text-xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            style={{
              textShadow:
                "0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.1)",
            }}
          >
            <span className="hidden sm:inline">{titleFull}</span>
            <span className="sm:hidden">{titleShort}</span>
          </h1>
          <nav className="flex space-x-3 lg:space-x-6">
            <Link href="/" className="text-blue-300 hover:text-blue-100 transition-colors text-sm lg:text-base touch-target">Home</Link>
            <Link href={gameAnchor} className="text-blue-300 hover:text-blue-100 transition-colors text-sm lg:text-base touch-target">Game</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}


