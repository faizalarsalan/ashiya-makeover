"use client";

import React, { useState } from "react";
import { Instagram, Menu, X, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/brand-data";
import { BrandMonogram } from "./BrandMonogram";
import { Sticker3DBow, Sticker3DSparkle } from "./Soft3DStickers";

export function Navbar({ activeDiscountPercent }: { activeDiscountPercent: number }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Cute Announcement Strip with 3D Soft Stickers */}
      <div className="bg-gradient-to-r from-[#b8385a] via-[#c94a6a] to-[#d4607c] text-white px-3 sm:px-4 py-1.5 sm:py-2 text-center text-[11px] sm:text-sm font-medium relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2">
          <Sticker3DBow className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
          <span className="truncate">
            <span className="sm:hidden">Shadi Special: Save up to <strong>25% OFF</strong></span>
            <span className="hidden sm:inline">Wedding Season Special in Hazaribagh: Save up to <strong>25% OFF</strong> + Free Bridal Perk</span>
          </span>
          <a
            href="#wedding-offer"
            className="inline-flex items-center gap-1 rounded-full bg-white/20 hover:bg-white/30 px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold transition whitespace-nowrap shrink-0"
          >
            {activeDiscountPercent}% Off →
          </a>
          <Sticker3DSparkle className="w-5 h-5 shrink-0 hidden sm:block" />
        </div>
      </div>

      {/* Main Nav */}
      <nav className="backdrop-blur-md bg-[#fff9f7]/90 border-b border-[#f3d6df]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 group">
            <BrandMonogram className="w-10 h-10 shrink-0 transition-transform group-hover:scale-105" />
            <div className="leading-tight">
              <span className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#2d1b22] block">
                {BRAND.name}
              </span>
              <span className="text-[11px] font-medium text-[#9e4761] tracking-wide block">
                {BRAND.handle} • Hazaribagh
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-[#5c3d48] whitespace-nowrap">
            <a href="#before-after" className="hover:text-[#c94a6a] transition-colors whitespace-nowrap">
              Before & After
            </a>
            <a href="#wedding-offer" className="hover:text-[#c94a6a] transition-colors whitespace-nowrap">
              Wedding Offer
            </a>
            <a href="#discount-walkthrough" className="hover:text-[#c94a6a] transition-colors whitespace-nowrap">
              Walkthrough
            </a>
            <a href="#insta-gallery" className="hover:text-[#c94a6a] transition-colors whitespace-nowrap">
              Gallery
            </a>
            <a href="#reviews" className="hover:text-[#c94a6a] transition-colors whitespace-nowrap">
              Reviews
            </a>
            <a href="#packages" className="hover:text-[#c94a6a] transition-colors whitespace-nowrap">
              Packages
            </a>
          </div>

          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="p-2.5 rounded-full border border-[#f0cfd9] bg-white text-[#c94a6a] hover:bg-[#fff0f4] transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-[#c94a6a] hover:bg-[#ad3453] text-white px-5 py-2.5 text-sm font-semibold shadow-sm transition cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl border border-[#f0cfd9] bg-white text-[#2d1b22]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#f3d6df] bg-[#fff9f7] px-4 py-4 space-y-3">
            <div className="flex flex-col gap-2 text-sm font-medium text-[#4a2e38]">
              <a
                href="#before-after"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#fff0f4]"
              >
                🪄 Before & After Slider
              </a>
              <a
                href="#wedding-offer"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#fff0f4]"
              >
                ✨ Interactive Wedding Offer
              </a>
              <a
                href="#discount-walkthrough"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#fff0f4]"
              >
                🎀 Discount Walkthrough
              </a>
              <a
                href="#insta-gallery"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#fff0f4]"
              >
                📸 Insta Image Gallery
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#fff0f4]"
              >
                💖 Bride Reviews
              </a>
              <a
                href="#packages"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#fff0f4]"
              >
                💄 Bridal Packages
              </a>
            </div>
            <div className="pt-2 flex gap-2">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#e9bfd0] bg-white py-2.5 text-sm font-semibold text-[#c94a6a]"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#c94a6a] py-2.5 text-sm font-semibold text-white"
              >
                <MessageCircle className="w-4 h-4" />
                Book Date
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
