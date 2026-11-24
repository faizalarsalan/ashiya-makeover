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
  Sticker3DBrush,
  Sticker3DCompact,
  Sticker3DGift,
  Sticker3DHeart,
  Sticker3DLipstick,
  Sticker3DSparkle,
} from "./Soft3DStickers";

type MoodTab = {
  id: string;
  label: string;
  emoji: string;
  slideIndex: number;
  lookId: string;
  bannerTitle: string;
  bannerSub: string;
};

const HERO_MOODS: MoodTab[] = [
  {
    id: "bridal",
    label: "Bridal Dulhan",
    emoji: "👑",
    slideIndex: 0,
    lookId: "signature-hd-bridal",
    bannerTitle: "15% – 25% OFF Signature HD & Airbrush Dulhan",
    bannerSub: "Includes glass-skin prep, floral gajra braid & double-dupatta pinning",
  },
  {
    id: "reception",
    label: "Reception Glam",
    emoji: "✨",
    slideIndex: 2,
    lookId: "engagement-reception",
    bannerTitle: "Crystal Tiara & Soft-Glam Reception Special",
    bannerSub: "Champagne shimmer eyes, pearl hair setting & complimentary lashes",
  },
  {
    id: "haldi",
    label: "Haldi Glow",
    emoji: "🌼",
    slideIndex: 4,
    lookId: "haldi-mehndi-dew",
    bannerTitle: "Fresh Sun-Kissed Haldi & Mehndi Floral Dew",
    bannerSub: "Pair with Bridal to unlock 20%–25% OFF your whole booking automatically",
  },
  {
    id: "party",
    label: "Sister Squad",
    emoji: "🎀",
    slideIndex: 3,
    lookId: "engagement-reception",
    bannerTitle: "Sister, Mom & Bridesmaid Party Bundle",
    bannerSub: "Add 2+ party looks to jump straight to our MAX 25% Wedding Bundle!",
  },
];

type StickerPerkTip = {
  id: string;
  title: string;
  badge: string;
  detail: string;
};

const STICKER_PERKS: StickerPerkTip[] = [
  {
    id: "gift",
    title: "Double-Dupatta & Jewelry Pinning",
    badge: "Worth ₹1,500 FREE",
    detail: "Tap Step 4 in the Offer Builder to unlock complimentary bridal draping & matha patti setting.",
  },
  {
    id: "lip",
    title: "3D Mink Lashes + Touch-Up Lip Kit",
    badge: "Bride Favorite",
    detail: "Stay camera-ready from varmala through vidaai with a matching shade mini touch-up.",
  },
  {
    id: "compact",
    title: "Glass-Skin Hydration Barrier Prep",
    badge: "Zero Cakey Feel",
    detail: "Every Hazaribagh bride gets custom serum & pore-smoothing prep matched to her undertone.",
  },
];

export function HeroSection({
  onSelectLook,
}: {
  onSelectLook: (lookId: string) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMoodId, setActiveMoodId] = useState("bridal");
  const [activeStickerId, setActiveStickerId] = useState("gift");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const activeSlide = HERO_REEL_SLIDES[activeIndex] ?? HERO_REEL_SLIDES[0];
  const activeMood =
    HERO_MOODS.find((m) => m.id === activeMoodId) ?? HERO_MOODS[0];
  const activeStickerPerk =
    STICKER_PERKS.find((s) => s.id === activeStickerId) ?? STICKER_PERKS[0];

  useEffect(() => {
    if (!isPlaying || isHovering) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_REEL_SLIDES.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [isPlaying, isHovering]);

  const handleMoodPick = (mood: MoodTab) => {
    setActiveMoodId(mood.id);
    setActiveIndex(mood.slideIndex);
    onSelectLook(mood.lookId);
  };

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
    <section className="relative overflow-hidden pt-5 pb-0 sm:pt-10">
      {/* Multi-Layered Silk & Rose Petal Atelier Backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/images/hero-bg-silk.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-70 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff7f9]/78 via-[#fff1f5]/68 to-[#fff9f7]/95" />
        <div className="absolute inset-0 bg-atelier-glow opacity-80" />
        <div className="absolute inset-0 bg-petal-dots opacity-45" />

        {/* Ambient Soft 3D Sticker Accents in Backdrop Corners */}
        <div className="hidden md:block absolute top-10 right-10 animate-float-gentle opacity-90">
          <Sticker3DBrush className="w-14 h-14 rotate-12" />
        </div>
        <div className="hidden lg:block absolute bottom-24 left-6 animate-float-slow opacity-85">
          <Sticker3DCompact className="w-12 h-12 -rotate-12" />
        </div>
        <div className="sm:hidden absolute top-16 right-3 animate-float-gentle opacity-90">
          <Sticker3DBow className="w-10 h-10 rotate-12" />
        </div>
        <div className="sm:hidden absolute top-64 left-2 animate-float-slow opacity-80">
          <Sticker3DBrush className="w-9 h-9 -rotate-12" />
        </div>
      </div>

      {/* Main Interactive Hero Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Banners, Headline, Interactive Mood Selector & Stickers */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left">
          {/* Compact Single-Line Location & Handle Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#f2cbd7] bg-white/95 backdrop-blur-sm pl-2 pr-3 sm:pl-2.5 sm:pr-4 py-1 sm:py-1.5 text-[11px] sm:text-sm font-medium text-[#9e3754] shadow-sm whitespace-nowrap max-w-full">
            <Sticker3DHeart className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <MapPin className="w-3.5 h-3.5 text-[#c94a6a] shrink-0" />
            <span>Hazaribagh, Jharkhand</span>
            <span className="text-[#dcb1bf]">•</span>
            <span className="truncate">{BRAND.handle}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.55rem] font-semibold leading-[1.07] tracking-tight text-[#2d1b22]">
            Soft-Glam Bridal Magic, Crafted for Your{" "}
            <span className="italic text-[#c94a6a] inline-flex items-center gap-1.5">
              Forever Glow.
              <Sticker3DSparkle className="w-6 h-6 sm:w-7 sm:h-7 inline-block -mt-1.5" />
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#5e404b] leading-relaxed max-w-xl mx-auto lg:mx-0">
            <span className="font-semibold text-[#2d1b22]">
              “Your beauty, my passion — Let’s create magic.”
            </span>{" "}
            Dewy Dulhan glam, floral Haldi glow & sister party looks tailored for Hazaribagh brides.
          </p>

          {/* Interactive Celebration Mood Banner Card */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-md border border-[#f2ced9] p-3.5 sm:p-4 shadow-card-soft text-left space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#b53759] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#c94a6a]" />
                Interactive Mood & Offer Banner
              </span>
              <span className="text-[11px] font-semibold text-[#7b5865]">
                Tap to switch reel ✨
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
              {HERO_MOODS.map((mood) => {
                const selected = mood.id === activeMoodId;
                return (
                  <button
                    key={mood.id}
                    type="button"
                    onClick={() => handleMoodPick(mood)}
                    className={`rounded-2xl px-2.5 py-2 text-xs font-semibold border transition cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap ${
                      selected
                        ? "bg-[#c94a6a] border-[#c94a6a] text-white shadow-sm"
                        : "bg-[#fff8fa] border-[#f2d6df] text-[#4c2e38] hover:border-[#c94a6a]"
                    }`}
                  >
                    <span>{mood.emoji}</span>
                    <span>{mood.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-[#fff1f5] to-[#fff8ec] border border-[#f5d7e0] px-3.5 py-2.5 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-[#2d1b22] truncate">
                  {activeMood.bannerTitle}
                </p>
                <p className="text-[11px] text-[#6c4d58] line-clamp-1">
                  {activeMood.bannerSub}
                </p>
              </div>
              <a
                href="#wedding-offer"
                className="shrink-0 rounded-full bg-white border border-[#ebc2cf] hover:bg-[#fff0f4] px-3 py-1 text-[11px] font-bold text-[#c94a6a] whitespace-nowrap transition"
              >
                Build →
              </a>
            </div>
          </div>

          {/* Primary Single-Line Pill CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5">
            <a
              href="#wedding-offer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c94a6a] to-[#b53759] hover:from-[#b53759] hover:to-[#9f2c4b] text-white px-6 py-3 sm:py-3.5 text-sm sm:text-[15px] font-semibold shadow-petal transition transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Gift className="w-4 h-4 text-[#fde4a8] shrink-0" />
              Claim 25% Wedding Offer
            </a>
            <a
              href="#insta-gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#ebcad5] bg-white/95 hover:bg-[#fff0f4] text-[#2d1b22] px-6 py-3 sm:py-3.5 text-sm sm:text-[15px] font-semibold shadow-sm transition whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-[#c94a6a] shrink-0" />
              See Insta Gallery
            </a>
          </div>

          {/* Interactive 3D Sticker Tap-for-Perk Strip */}
          <div className="rounded-3xl bg-white/88 backdrop-blur-md border border-[#f2ced9] p-3.5 shadow-sm text-left space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-[#9e3754] uppercase tracking-wider">
                Tap a 3D Sticker for Your Included Perk
              </span>
              <span className="rounded-full bg-[#fce7ee] px-2.5 py-0.5 text-[10px] font-bold text-[#b53759]">
                {activeStickerPerk.badge}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setActiveStickerId("gift")}
                className={`rounded-2xl p-2 border flex flex-col items-center gap-1 transition cursor-pointer ${
                  activeStickerId === "gift"
                    ? "bg-[#fff1f5] border-[#c94a6a] scale-[1.02] shadow-sm"
                    : "bg-white/90 border-[#f2dbe3] hover:border-[#e4b3c3]"
                }`}
              >
                <Sticker3DGift className="w-8 h-8" />
                <span className="text-[11px] font-semibold text-[#2d1b22]">Free Draping</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveStickerId("lip")}
                className={`rounded-2xl p-2 border flex flex-col items-center gap-1 transition cursor-pointer ${
                  activeStickerId === "lip"
                    ? "bg-[#fff1f5] border-[#c94a6a] scale-[1.02] shadow-sm"
                    : "bg-white/90 border-[#f2dbe3] hover:border-[#e4b3c3]"
                }`}
              >
                <Sticker3DLipstick className="w-8 h-8" />
                <span className="text-[11px] font-semibold text-[#2d1b22]">Lashes + Lip</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveStickerId("compact")}
                className={`rounded-2xl p-2 border flex flex-col items-center gap-1 transition cursor-pointer ${
                  activeStickerId === "compact"
                    ? "bg-[#fff1f5] border-[#c94a6a] scale-[1.02] shadow-sm"
                    : "bg-white/90 border-[#f2dbe3] hover:border-[#e4b3c3]"
                }`}
              >
                <Sticker3DCompact className="w-8 h-8" />
                <span className="text-[11px] font-semibold text-[#2d1b22]">Glass Prep</span>
              </button>
            </div>

            <p className="text-xs text-[#5c3d48] leading-snug px-1">
              <strong className="text-[#2d1b22]">{activeStickerPerk.title}:</strong>{" "}
              {activeStickerPerk.detail}
            </p>
          </div>
        </div>

        {/* Right Column: Rounded-Arch Video Loop Slider & Floating 3D Sticker Banners */}
        <div className="lg:col-span-6 relative flex flex-col items-center">
          <div
            className="relative w-full max-w-[395px]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Soft Gold Outer Arch Ring */}
            <div
              className="absolute -inset-3 rounded-t-[999px] rounded-b-[40px] border border-[#e9c893]/80 pointer-events-none"
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
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-[#2d1b22] flex items-center justify-center shadow-md transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next video reel"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-[#2d1b22] flex items-center justify-center shadow-md transition cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Bottom Gradient, Reel Controls & Look Overlay */}
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
              className="animate-float-slow absolute -top-2 -right-2 sm:-right-7 rounded-2xl border border-[#f5d0dc] bg-white/95 backdrop-blur-md pl-2.5 pr-3.5 py-2 shadow-card-soft flex items-center gap-2 hover:scale-[1.03] transition z-20"
            >
              <Sticker3DGift className="w-9 h-9 shrink-0 -rotate-6" />
              <div className="text-left">
                <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#b53759]">
                  Shadi Season Special
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#2d1b22]">
                  15% – 25% OFF + Gift
                </p>
              </div>
            </a>

            {/* Cute Floating Banner Mid-Left with Soft 3D Lipstick Sticker */}
            <a
              href="#insta-gallery"
              className="hidden sm:flex absolute bottom-32 -left-8 rounded-2xl border border-[#f5d0dc] bg-white/95 backdrop-blur-md pl-2 pr-3.5 py-2 shadow-card-soft items-center gap-2 hover:scale-[1.03] transition z-20"
            >
              <Sticker3DLipstick className="w-9 h-9 shrink-0 -rotate-12" />
              <div>
                <p className="text-xs font-bold text-[#2d1b22]">{BRAND.handle}</p>
                <p className="text-[11px] text-[#6c4d58]">5 Looping Bridal Reels</p>
              </div>
            </a>

            {/* Soft 3D Bow Sticker Accent */}
            <div className="absolute top-12 -left-3 sm:-left-5 z-20 pointer-events-none animate-float-gentle">
              <Sticker3DBow className="w-10 h-10 sm:w-11 sm:h-11 -rotate-12" />
            </div>
          </div>

          {/* Interactive Mini Reel Loop Thumbnails Under Hero Arch */}
          <div className="mt-4 flex items-center justify-center gap-2 flex-wrap max-w-[420px]">
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
                      : "bg-white/95 border-[#f0cfd9] text-[#5c3d48] hover:border-[#c94a6a]"
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

      {/* Bottom Interactive Animated Sticker & Offer Marquee Banner */}
      <div className="relative z-10 border-y border-[#f2ced9] bg-white/85 backdrop-blur-md py-2.5 overflow-hidden">
        <div className="flex w-max animate-marquee-ribbon items-center gap-6 px-4">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-6 shrink-0">
              <a
                href="#wedding-offer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2d1b22] hover:text-[#c94a6a] transition whitespace-nowrap"
              >
                <Sticker3DBow className="w-5 h-5" />
                <span>25% OFF Full Dulhan Bundle</span>
              </a>
              <span className="text-[#e3b5c4]">•</span>
              <a
                href="#discount-walkthrough"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2d1b22] hover:text-[#c94a6a] transition whitespace-nowrap"
              >
                <Sticker3DGift className="w-5 h-5" />
                <span>Free Dupatta & Jewelry Pinning</span>
              </a>
              <span className="text-[#e3b5c4]">•</span>
              <a
                href="#insta-gallery"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2d1b22] hover:text-[#c94a6a] transition whitespace-nowrap"
              >
                <Sticker3DBrush className="w-5 h-5" />
                <span>HD & Airbrush Waterproof Finish</span>
              </a>
              <span className="text-[#e3b5c4]">•</span>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2d1b22] hover:text-[#c94a6a] transition whitespace-nowrap"
              >
                <Sticker3DHeart className="w-5 h-5" />
                <span>Hazaribagh Studio & Venue Visits</span>
              </a>
              <span className="text-[#e3b5c4]">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
