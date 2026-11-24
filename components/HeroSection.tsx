"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ChevronLeft,
  ChevronRight,
  Gift,
  Instagram,
  MapPin,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import { BRAND, HERO_REEL_SLIDES } from "@/lib/brand-data";
import {
  Sticker3DBow,
  Sticker3DGift,
  Sticker3DHeart,
  Sticker3DLipstick,
  Sticker3DSparkle,
} from "./Soft3DStickers";

export function HeroSection({
  onSelectLook,
}: {
  onSelectLook: (lookId: string) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const activeSlide = HERO_REEL_SLIDES[activeIndex] ?? HERO_REEL_SLIDES[0];

  useEffect(() => {
    if (!isPlaying || isHovering) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_REEL_SLIDES.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [isPlaying, isHovering]);

  const goPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + HERO_REEL_SLIDES.length) % HERO_REEL_SLIDES.length
    );
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_REEL_SLIDES.length);
  };

  const handleTryActiveLook = () => {
    onSelectLook(activeSlide.lookId);
    const el = document.getElementById("wedding-offer");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-atelier-glow pt-8 pb-16 sm:pt-12 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Copy & Conversion Stack */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          {/* Top Location Pill Banner with Soft 3D Heart Sticker */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f2cbd7] bg-white/95 pl-2.5 pr-4 py-1.5 text-xs sm:text-sm font-medium text-[#9e3754] shadow-sm">
            <Sticker3DHeart className="w-6 h-6 shrink-0" />
            <MapPin className="w-3.5 h-3.5 text-[#c94a6a]" />
            <span>Hazaribagh, Jharkhand</span>
            <span className="text-[#dcb1bf]">•</span>
            <span>{BRAND.handle}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.65rem] font-semibold leading-[1.08] tracking-tight text-[#2d1b22] relative">
            Soft-Glam Bridal Magic, Crafted for Your{" "}
            <span className="italic text-[#c94a6a] inline-flex items-center gap-1.5">
              Forever Glow.
              <Sticker3DSparkle className="w-7 h-7 inline-block -mt-2" />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#664652] leading-relaxed max-w-xl mx-auto lg:mx-0">
            <span className="font-semibold text-[#2d1b22]">
              “Your beauty, my passion — Let’s create magic.”
            </span>{" "}
            Whether it’s your royal Dulhan morning, sunny Haldi, or sister-of-the-bride glam, Ashiya Makeover gives you
            breathable, radiant skin that glows effortlessly on camera.
          </p>

          {/* Primary Single-Line Pill CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
            <a
              href="#wedding-offer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c94a6a] to-[#b53759] hover:from-[#b53759] hover:to-[#9f2c4b] text-white px-6 py-3.5 text-sm sm:text-[15px] font-semibold shadow-petal transition transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Gift className="w-4 h-4 text-[#fde4a8] shrink-0" />
              Claim 25% Wedding Offer
            </a>
            <a
              href="#insta-gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#ebcad5] bg-white/95 hover:bg-[#fff0f4] text-[#2d1b22] px-6 py-3.5 text-sm sm:text-[15px] font-semibold transition whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-[#c94a6a] shrink-0" />
              See Insta Gallery
            </a>
          </div>

          {/* Friendly Micro Trust Strip */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#f3d8e1] max-w-lg mx-auto lg:mx-0">
            <div className="rounded-2xl bg-white/85 border border-[#f5dfe6] px-3 py-2.5 text-center lg:text-left">
              <p className="font-display text-2xl font-bold text-[#c94a6a]">Up to 25%</p>
              <p className="text-[11px] sm:text-xs font-medium text-[#6c4d58]">Wedding Season Off</p>
            </div>
            <div className="rounded-2xl bg-white/85 border border-[#f5dfe6] px-3 py-2.5 text-center lg:text-left">
              <p className="font-display text-2xl font-bold text-[#2d1b22]">HD & Air</p>
              <p className="text-[11px] sm:text-xs font-medium text-[#6c4d58]">Waterproof Glow</p>
            </div>
            <div className="rounded-2xl bg-white/85 border border-[#f5dfe6] px-3 py-2.5 text-center lg:text-left">
              <p className="font-display text-2xl font-bold text-[#2d1b22]">1-Click</p>
              <p className="text-[11px] sm:text-xs font-medium text-[#6c4d58]">WhatsApp Booking</p>
            </div>
          </div>
        </div>

        {/* Right Hero Looping Video Slider Inside Rounded Arch */}
        <div className="lg:col-span-6 relative flex flex-col items-center">
          <div
            className="relative w-full max-w-[405px]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Decorative soft gold ring */}
            <div
              className="absolute -inset-3 rounded-t-[999px] rounded-b-[40px] border border-[#e9c893]/70 pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Arch Video Loop Player */}
            <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[32px] border-4 border-white shadow-petal bg-[#fce7ee] aspect-[3/4]">
              <video
                key={activeSlide.videoSrc}
                src={activeSlide.videoSrc}
                poster={activeSlide.poster}
                autoPlay
                loop
                muted
                playsInline
                aria-label={`${activeSlide.title} looping bridal reel`}
                className="w-full h-full object-cover object-top"
              />

              {/* Left / Right Slider Arrows */}
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous video reel"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#2d1b22] flex items-center justify-center shadow-md transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next video reel"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#2d1b22] flex items-center justify-center shadow-md transition cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Bottom Gradient, Reel Controls & Look Overlay (zero arch-corner clipping) */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#2d1b22]/85 via-[#2d1b22]/40 to-transparent" />
              <div className="absolute bottom-3.5 inset-x-4 space-y-2.5 text-white z-10">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2d1b22]/60 backdrop-blur-md text-white px-2.5 py-1 text-[10px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff85a6] animate-pulse" />
                    Looping Reel {activeIndex + 1}/{HERO_REEL_SLIDES.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPlaying((p) => !p)}
                    aria-label={isPlaying ? "Pause slider auto-advance" : "Resume slider auto-advance"}
                    className="w-7 h-7 rounded-full bg-[#2d1b22]/60 hover:bg-[#2d1b22]/85 backdrop-blur-md text-white flex items-center justify-center transition cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                  </button>
                </div>

                {/* Story Progress Pills */}
                <div className="flex items-center gap-1.5">
                  {HERO_REEL_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      aria-label={`Play reel: ${slide.label}`}
                      onClick={() => setActiveIndex(idx)}
                      className="flex-1 h-1.5 rounded-full bg-white/35 overflow-hidden cursor-pointer backdrop-blur-sm"
                    >
                      <span
                        className={`block h-full rounded-full transition-all duration-300 ${
                          idx === activeIndex
                            ? "w-full bg-white"
                            : idx < activeIndex
                            ? "w-full bg-white/75"
                            : "w-0 bg-white"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-[#fde4a8] font-semibold">
                      {activeSlide.tag}
                    </p>
                    <p className="font-display text-xl font-semibold leading-tight">
                      {activeSlide.title}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleTryActiveLook}
                    className="shrink-0 inline-flex items-center gap-1 rounded-full bg-white/25 hover:bg-white/35 backdrop-blur-md px-3 py-1.5 text-xs font-semibold transition cursor-pointer whitespace-nowrap"
                  >
                    <Sparkles className="w-3 h-3 text-[#fde4a8]" />
                    Try Look <ArrowDownRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Cute Top-Right Floating Offer Banner with Soft 3D Gift Sticker */}
            <a
              href="#wedding-offer"
              className="animate-float-slow absolute -top-2 -right-2 sm:-right-8 rounded-2xl border border-[#f5d0dc] bg-white/95 backdrop-blur-md pl-2.5 pr-4 py-2.5 shadow-card-soft flex items-center gap-2.5 hover:scale-[1.03] transition z-20"
            >
              <Sticker3DGift className="w-10 h-10 shrink-0 -rotate-6" />
              <div className="text-left">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#b53759]">
                  Shadi Season Special
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#2d1b22]">
                  15% – 25% OFF + Free Gift
                </p>
              </div>
            </a>

            {/* Cute Floating Banner Pill Mid-Left with Soft 3D Lipstick Sticker (cleanly above bottom caption) */}
            <a
              href="#insta-gallery"
              className="hidden sm:flex absolute bottom-28 -left-9 rounded-2xl border border-[#f5d0dc] bg-white/95 backdrop-blur-md pl-2 pr-3.5 py-2 shadow-card-soft items-center gap-2 hover:scale-[1.03] transition z-20"
            >
              <Sticker3DLipstick className="w-9 h-9 shrink-0 -rotate-12" />
              <div>
                <p className="text-xs font-bold text-[#2d1b22]">{BRAND.handle}</p>
                <p className="text-[11px] text-[#6c4d58]">5 Looping Bridal Reels</p>
              </div>
            </a>

            {/* Cute Soft 3D Bow Sticker Accent */}
            <div className="hidden sm:block absolute top-14 -left-5 z-20 pointer-events-none animate-float-slow">
              <Sticker3DBow className="w-11 h-11 -rotate-12" />
            </div>
          </div>

          {/* Interactive Mini Reel Loop Thumbnails Under Hero Arch */}
          <div className="mt-5 flex items-center justify-center gap-2 flex-wrap max-w-[420px]">
            {HERO_REEL_SLIDES.map((slide, idx) => {
              const selected = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`inline-flex items-center gap-1.5 rounded-full pl-1 pr-3 py-1 text-xs font-semibold border transition cursor-pointer ${
                    selected
                      ? "bg-[#c94a6a] border-[#c94a6a] text-white shadow-sm"
                      : "bg-white/90 border-[#f0cfd9] text-[#5c3d48] hover:border-[#c94a6a]"
                  }`}
                >
                  <img
                    src={slide.poster}
                    alt={slide.label}
                    className="w-5 h-5 rounded-full object-cover border border-white/80"
                  />
                  <span>{slide.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
