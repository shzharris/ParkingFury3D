"use client";

import Link from "next/link";

type FooterProps = {
  year?: number;
};

export function Footer({ year = new Date().getFullYear() }: FooterProps) {
  return (
    <footer className="bg-gray-900 border-t border-blue-500/30 py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center text-center">
          <div>
            <p className="text-gray-400 text-xs lg:text-sm">© {year} Black Flame Digital Service Company LLC. Game copyright belongs to third parties.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
            <Link href="/privacy" className="text-blue-300 hover:text-blue-100 transition-colors text-xs lg:text-sm touch-target">Privacy Policy</Link>
            <a href="https://gamedistribution.com/" target='_blank' className="text-blue-300 hover:text-blue-100 transition-colors text-xs lg:text-sm touch-target">Partnership</a>
            <Link href="#contact" className="text-blue-300 hover:text-blue-100 transition-colors text-xs lg:text-sm touch-target">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


