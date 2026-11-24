import React from "react";
import { Instagram, MapPin, Phone, Sparkles } from "lucide-react";
import { BRAND } from "@/lib/brand-data";
import { BrandMonogram } from "./BrandMonogram";

export function Footer() {
  return (
    <footer className="bg-[#2d1b22] text-[#f7e7ec] py-12 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3.5 text-center md:text-left">
          <BrandMonogram className="w-12 h-12 shrink-0" />
          <div>
            <p className="font-display text-2xl font-semibold text-white">
              {BRAND.name}
            </p>
            <p className="text-xs text-[#e8b4c4] flex items-center justify-center md:justify-start gap-1.5 mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
              {BRAND.city} • {BRAND.handle}
            </p>
            <p className="text-xs text-white/70 mt-1 italic">
              “{BRAND.tagline}”
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-semibold transition"
          >
            <Instagram className="w-4 h-4 text-[#f5b4c8]" />
            Instagram
          </a>
          <a
            href={BRAND.threadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-semibold transition"
          >
            <Sparkles className="w-4 h-4 text-[#fde4a8]" />
            Threads
          </a>
          <a
            href={`tel:+${BRAND.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#c94a6a] hover:bg-[#b53759] text-white px-4 py-2 text-xs font-semibold transition"
          >
            <Phone className="w-4 h-4" />
            {BRAND.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
