"use client";

import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  ArrowLeft,
  ArrowRight,
  CalendarHeart,
  Check,
  Copy,
  Crown,
  Gift,
  Heart,
  Layers,
  LayoutList,
  MessageCircle,
  Minus,
  Plus,
  Wand2,
} from "lucide-react";
import {
  MYSTERY_PERKS,
  PRIMARY_LOOKS,
  SEASON_WINDOWS,
} from "@/lib/brand-data";
import {
  Sticker3DBow,
  Sticker3DCompact,
  Sticker3DGift,
} from "./Soft3DStickers";
import {
  type CalculatedOffer,
  type OfferConfigState,
  HALDI_COMBO_PRICE,
  SQUAD_LOOK_PRICE,
  formatINR,
} from "@/lib/offer-calculator";

type Props = {
  offerState: OfferConfigState;
  setOfferState: React.Dispatch<React.SetStateAction<OfferConfigState>>;
  calculated: CalculatedOffer;
};

const DECK_TABS = [
  { id: 0, shortLabel: "1 • Season", title: "When is the Big Celebration?" },
  { id: 1, shortLabel: "2 • Look", title: "Choose Your Signature Look" },
  { id: 2, shortLabel: "3 • Squad", title: "Stack Functions & Squad" },
  { id: 3, shortLabel: "4 • Gift", title: "Cute Bridal Surprise Box" },
];

export function WeddingOfferBuilder({
  offerState,
  setOfferState,
  calculated,
}: Props) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isExpandedMode, setIsExpandedMode] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setHasEntered(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fireCuteConfetti = () => {
    try {
      confetti({
        particleCount: 55,
        spread: 68,
        origin: { y: 0.72 },
        colors: ["#c94a6a", "#f4a6bd", "#e9c78f", "#ffffff"],
      });
    } catch {
      // Ignore if reduced-motion or non-DOM context blocks confetti
    }
  };

  const handleRevealOrCyclePerk = () => {
    setOfferState((prev) => {
      const nextIndex =
        prev.revealedPerkIndex === null
          ? 0
          : (prev.revealedPerkIndex + 1) % MYSTERY_PERKS.length;
      return { ...prev, revealedPerkIndex: nextIndex };
    });
    fireCuteConfetti();
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(calculated.promoCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      // Fallback ignored
    }
  };

  const tierProgressPercent =
    calculated.discountPercent === 15
      ? 38
      : calculated.discountPercent === 20
      ? 72
      : 100;

  const getStackStyle = (cardIdx: number): React.CSSProperties => {
    if (isExpandedMode) {
      return {
        transitionDelay: `${cardIdx * 90}ms`,
      };
    }

    const offset = (cardIdx - activeCardIndex + 4) % 4;
    const translateY = offset * 16;
    const scale = 1 - offset * 0.032;
    const opacity = offset === 0 ? 1 : offset === 1 ? 0.92 : offset === 2 ? 0.8 : 0.68;
    const zIndex = 40 - offset * 10;

    return {
      transform: hasEntered
        ? `translate3d(0, ${translateY}px, 0) scale(${scale})`
        : `translate3d(0, ${translateY + 26}px, 0) scale(${scale * 0.97})`,
      opacity: hasEntered ? opacity : 0,
      zIndex,
      transitionDelay: hasEntered ? "0ms" : `${cardIdx * 90}ms`,
    };
  };

  const stepWrapperClass = (cardIdx: number) => {
    if (isExpandedMode) {
      const stickyOffsets = [
        "lg:sticky lg:top-[114px] z-10",
        "lg:sticky lg:top-[156px] z-20",
        "lg:sticky lg:top-[198px] z-30",
        "lg:sticky lg:top-[240px] z-40",
      ];
      return `${stickyOffsets[cardIdx]} transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`;
    }

    const isFront = cardIdx === activeCardIndex;
    return `col-start-1 row-start-1 origin-top transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isFront ? "pointer-events-auto" : "pointer-events-auto cursor-pointer"
    }`;
  };

  const renderDeckFooter = (cardIdx: number) => {
    if (isExpandedMode) return null;
    return (
      <div className="mt-5 pt-4 border-t border-[#f4e0e6] flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setActiveCardIndex((cardIdx + 3) % 4)}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#ebcad5] bg-white hover:bg-[#fff0f4] px-3.5 py-1.5 text-xs font-semibold text-[#5c3d48] transition cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </button>

        <div className="flex items-center gap-1.5">
          {DECK_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Jump to ${t.title}`}
              onClick={() => setActiveCardIndex(t.id)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                t.id === activeCardIndex
                  ? "w-6 bg-[#c94a6a]"
                  : "w-2 bg-[#e8c6d1] hover:bg-[#d899ad]"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActiveCardIndex((cardIdx + 1) % 4)}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#c94a6a] hover:bg-[#ad3453] text-white px-4 py-1.5 text-xs font-semibold shadow-sm transition cursor-pointer"
        >
          {cardIdx === 3 ? "Start Over" : "Next Step"}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="wedding-offer"
      className="py-16 sm:py-24 bg-[#fff4f7] border-y border-[#f4d7e0]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#f2cbd7] pl-2.5 pr-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#b53759] shadow-sm">
            <Sticker3DCompact className="w-6 h-6 shrink-0" />
            Interactive Wedding Season Special Offer
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#2d1b22]">
            Build Your Bridal Glow &{" "}
            <span className="italic text-[#c94a6a]">Watch Your Savings Grow</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6c4d58]">
            Flip through our 4 stacked bridal cards below or expand all steps at once — our live calculator stacks up to{" "}
            <strong className="text-[#2d1b22]">25% OFF + a free mystery gift</strong> in real time.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Stacked Animated Bridal Cards */}
          <div className="lg:col-span-7 space-y-4">
            {/* Deck Tab Strip + Stack/Expand Mode Switch */}
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-white/90 border border-[#f2d6df] p-2 shadow-sm">
              <div className="flex items-center gap-1.5 flex-wrap">
                {DECK_TABS.map((tab) => {
                  const active = !isExpandedMode && activeCardIndex === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setIsExpandedMode(false);
                        setActiveCardIndex(tab.id);
                      }}
                      className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
                        active
                          ? "bg-[#c94a6a] text-white shadow-sm"
                          : "bg-[#fff8fa] text-[#5c3d48] hover:bg-[#fce7ee]"
                      }`}
                    >
                      {tab.shortLabel}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setIsExpandedMode((prev) => !prev)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#ebd0d9] bg-white hover:bg-[#fff0f4] px-3 py-1.5 text-xs font-semibold text-[#2d1b22] transition cursor-pointer ml-auto"
              >
                {isExpandedMode ? (
                  <>
                    <Layers className="w-3.5 h-3.5 text-[#c94a6a]" />
                    Stacked Deck
                  </>
                ) : (
                  <>
                    <LayoutList className="w-3.5 h-3.5 text-[#c94a6a]" />
                    Expand All 4
                  </>
                )}
              </button>
            </div>

            {/* Cards Container: Stacked Grid Deck OR Vertical Scroll-Stack */}
            <div
              className={
                isExpandedMode
                  ? "space-y-6"
                  : "relative grid items-start pb-12"
              }
            >
              {/* Card 1: Wedding Month Window */}
              <div
                style={getStackStyle(0)}
                onClick={() => {
                  if (!isExpandedMode && activeCardIndex !== 0) {
                    setActiveCardIndex(0);
                  }
                }}
                className={`${stepWrapperClass(0)} rounded-3xl bg-white border ${
                  !isExpandedMode && activeCardIndex === 0
                    ? "border-[#e7b4c4] shadow-petal"
                    : "border-[#f2d6df] shadow-card-soft"
                } p-5 sm:p-6`}
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-[#fff0f4] text-[#c94a6a] font-bold text-xs flex items-center justify-center border border-[#f5ceda]">
                      1
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-[#2d1b22]">
                      When is the Big Celebration?
                    </h3>
                  </div>
                  <CalendarHeart className="w-5 h-5 text-[#c94a6a]" />
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  {SEASON_WINDOWS.map((win) => {
                    const selected = offerState.seasonId === win.id;
                    return (
                      <button
                        key={win.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOfferState((prev) => ({ ...prev, seasonId: win.id }));
                        }}
                        className={`text-left rounded-2xl p-3.5 border transition cursor-pointer ${
                          selected
                            ? "border-[#c94a6a] bg-[#fff5f8] ring-2 ring-[#f7cbd7]"
                            : "border-[#f1dce3] bg-[#fffcfb] hover:border-[#e6b6c5]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold text-[#c94a6a]">
                            {win.months}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#fce7ee] text-[#9e3754]">
                            {win.slotsLeft} slots left
                          </span>
                        </div>
                        <p className="font-semibold text-sm text-[#2d1b22] mt-1.5">
                          {win.label}
                        </p>
                        <p className="text-[11px] text-[#6c4d58] mt-1 leading-snug">
                          + {win.extraPerk}
                        </p>
                      </button>
                    );
                  })}
                </div>
                {renderDeckFooter(0)}
              </div>

              {/* Card 2: Primary Look Selector (with 4 staggered look cards) */}
              <div
                style={getStackStyle(1)}
                onClick={() => {
                  if (!isExpandedMode && activeCardIndex !== 1) {
                    setActiveCardIndex(1);
                  }
                }}
                className={`${stepWrapperClass(1)} rounded-3xl bg-white border ${
                  !isExpandedMode && activeCardIndex === 1
                    ? "border-[#e7b4c4] shadow-petal"
                    : "border-[#f2d6df] shadow-card-soft"
                } p-5 sm:p-6`}
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-[#fff0f4] text-[#c94a6a] font-bold text-xs flex items-center justify-center border border-[#f5ceda]">
                      2
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-[#2d1b22]">
                      Choose Your Signature Look
                    </h3>
                  </div>
                  <Crown className="w-5 h-5 text-[#c79a52]" />
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  {PRIMARY_LOOKS.map((look, lookIdx) => {
                    const selected = offerState.lookId === look.id;
                    return (
                      <button
                        key={look.id}
                        type="button"
                        style={{
                          transitionDelay: hasEntered ? `${lookIdx * 65}ms` : "0ms",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setOfferState((prev) => ({ ...prev, lookId: look.id }));
                        }}
                        className={`text-left rounded-2xl p-4 border transition-all duration-500 cursor-pointer relative ${
                          hasEntered
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-3"
                        } ${
                          selected
                            ? "border-[#c94a6a] bg-[#fff5f8] ring-2 ring-[#f7cbd7]"
                            : "border-[#f1dce3] bg-white hover:border-[#e6b6c5]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="inline-block rounded-full bg-[#fce7ee] text-[#a93354] text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wide">
                            {look.badge}
                          </span>
                          <span className="text-xs font-medium text-[#7b5c67]">
                            {look.duration}
                          </span>
                        </div>
                        <p className="font-display text-xl font-semibold text-[#2d1b22] mt-2">
                          {look.name}
                        </p>
                        <p className="text-xs text-[#6c4d58] mt-1 leading-relaxed">
                          {look.subtitle}
                        </p>
                        <div className="mt-3 pt-2.5 border-t border-[#f5e3e9] flex items-center justify-between">
                          <span className="text-sm font-bold text-[#2d1b22]">
                            {formatINR(look.basePrice)}
                          </span>
                          <span className="text-[11px] font-semibold text-[#c94a6a]">
                            {selected ? "Selected ✓" : "Select Look"}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {renderDeckFooter(1)}
              </div>

              {/* Card 3: Stack Pre-Wedding & Squad Looks */}
              <div
                style={getStackStyle(2)}
                onClick={() => {
                  if (!isExpandedMode && activeCardIndex !== 2) {
                    setActiveCardIndex(2);
                  }
                }}
                className={`${stepWrapperClass(2)} rounded-3xl bg-white border ${
                  !isExpandedMode && activeCardIndex === 2
                    ? "border-[#e7b4c4] shadow-petal"
                    : "border-[#f2d6df] shadow-card-soft"
                } p-5 sm:p-6 space-y-4`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-[#fff0f4] text-[#c94a6a] font-bold text-xs flex items-center justify-center border border-[#f5ceda]">
                      3
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-[#2d1b22]">
                      Stack Functions & Squad (Unlock 20%–25% Off!)
                    </h3>
                  </div>
                  <Wand2 className="w-5 h-5 text-[#c94a6a]" />
                </div>

                {/* Haldi / Engagement Combo Toggle */}
                <div className="rounded-2xl border border-[#f2dce3] bg-[#fffafd] p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-sm sm:text-base text-[#2d1b22]">
                        Add Haldi / Mehndi / Engagement Look
                      </p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fff0d9] text-[#9b6a1e]">
                        Combo +{formatINR(HALDI_COMBO_PRICE)}
                      </span>
                    </div>
                    <p className="text-xs text-[#6c4d58] mt-0.5">
                      Includes fresh daytime glow + floral hairstyling. Instantly bumps discount tier!
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={offerState.includeHaldiCombo}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOfferState((prev) => ({
                        ...prev,
                        includeHaldiCombo: !prev.includeHaldiCombo,
                      }));
                    }}
                    className={`shrink-0 w-14 h-8 rounded-full p-1 transition cursor-pointer ${
                      offerState.includeHaldiCombo ? "bg-[#c94a6a]" : "bg-[#e7cfd7]"
                    }`}
                  >
                    <span
                      className={`block w-6 h-6 rounded-full bg-white shadow-sm transition-transform ${
                        offerState.includeHaldiCombo ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Squad / Sister / Bridesmaid Counter */}
                <div className="rounded-2xl border border-[#f2dce3] bg-[#fffafd] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-[#2d1b22]">
                      Sister, Mom & Bridesmaid Party Looks
                    </p>
                    <p className="text-xs text-[#6c4d58] mt-0.5">
                      {formatINR(SQUAD_LOOK_PRICE)} each before discount — includes soft glam + hairstyling + draping
                    </p>
                  </div>
                  <div className="flex items-center gap-3 self-start sm:self-center">
                    <button
                      type="button"
                      aria-label="Decrease bridesmaid looks"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOfferState((prev) => ({
                          ...prev,
                          squadCount: Math.max(0, prev.squadCount - 1),
                        }));
                      }}
                      className="w-9 h-9 rounded-full border border-[#e7c5d0] bg-white hover:bg-[#fff0f4] flex items-center justify-center text-[#2d1b22] cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold text-base text-[#2d1b22]">
                      {offerState.squadCount}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase bridesmaid looks"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOfferState((prev) => ({
                          ...prev,
                          squadCount: Math.min(8, prev.squadCount + 1),
                        }));
                      }}
                      className="w-9 h-9 rounded-full border border-[#c94a6a] bg-[#c94a6a] hover:bg-[#ad3453] flex items-center justify-center text-white cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {renderDeckFooter(2)}
              </div>

              {/* Card 4: Cute Mystery Gift Box Unlocker */}
              <div
                style={getStackStyle(3)}
                onClick={() => {
                  if (!isExpandedMode && activeCardIndex !== 3) {
                    setActiveCardIndex(3);
                  }
                }}
                className={`${stepWrapperClass(3)} rounded-3xl bg-gradient-to-br from-[#fff0f5] via-white to-[#fff7ea] border-2 border-dashed ${
                  !isExpandedMode && activeCardIndex === 3
                    ? "border-[#d87c99] shadow-petal"
                    : "border-[#eab4c5] shadow-card-soft"
                } p-5 sm:p-6 relative`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b53759]">
                      <Sticker3DBow className="w-6 h-6 shrink-0" />
                      Step 4 • Cute Bridal Surprise Box
                    </div>
                    {calculated.perk ? (
                      <>
                        <h4 className="font-display text-2xl font-semibold text-[#2d1b22]">
                          🎀 Unlocked: {calculated.perk.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#6c4d58]">
                          <span className="font-bold text-[#b53759]">{calculated.perk.valueLabel}</span> —{" "}
                          {calculated.perk.detail}
                        </p>
                      </>
                    ) : (
                      <>
                        <h4 className="font-display text-2xl font-semibold text-[#2d1b22]">
                          Tap to Unwrap a Bonus Wedding Perk!
                        </h4>
                        <p className="text-xs sm:text-sm text-[#6c4d58]">
                          Win complimentary double-dupatta draping, 3D mink lashes + lip tint, or an extra ₹500 off!
                        </p>
                      </>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRevealOrCyclePerk();
                    }}
                    className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#2d1b22] hover:bg-[#462934] text-white pl-3.5 pr-5 py-2.5 text-sm font-semibold shadow-sm transition cursor-pointer"
                  >
                    <Sticker3DGift className="w-7 h-7 shrink-0" />
                    {calculated.perk ? "Try Another Gift ✨" : "Unwrap Gift 🎁"}
                  </button>
                </div>
                {renderDeckFooter(3)}
              </div>
            </div>
          </div>

          {/* Right Column: Live Offer Receipt & WhatsApp Lock */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-white border border-[#f0cbd7] p-6 shadow-petal space-y-5">
              {/* Header + Tier Meter */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff0f4] border border-[#f5cdd9] px-3 py-1 text-xs font-bold text-[#c94a6a]">
                    <Heart className="w-3.5 h-3.5 fill-[#c94a6a]" />
                    {calculated.tierLabel}
                  </span>
                  <span className="text-xs font-semibold text-[#7b5c67]">
                    {calculated.totalLooksCount}{" "}
                    {calculated.totalLooksCount === 1 ? "Look" : "Looks"}
                  </span>
                </div>

                {/* Progress Meter */}
                <div className="space-y-1.5">
                  <div className="h-2.5 w-full rounded-full bg-[#f8e4eb] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#e07b96] via-[#c94a6a] to-[#c79a52] transition-all duration-300"
                      style={{ width: `${tierProgressPercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] font-semibold text-[#85626e]">
                    <span className={calculated.discountPercent >= 15 ? "text-[#c94a6a]" : ""}>
                      15% Single
                    </span>
                    <span className={calculated.discountPercent >= 20 ? "text-[#c94a6a]" : ""}>
                      20% Combo
                    </span>
                    <span className={calculated.discountPercent >= 25 ? "text-[#c94a6a]" : ""}>
                      25% Full Dulhan
                    </span>
                  </div>
                </div>

                {calculated.nextTierTip && (
                  <p className="text-xs rounded-xl bg-[#fff8fa] border border-[#f6dce4] px-3 py-2 text-[#9b3451] font-medium">
                    💡 {calculated.nextTierTip}
                  </p>
                )}
              </div>

              {/* Line Items */}
              <div className="space-y-2.5 text-sm border-y border-[#f4e0e6] py-4">
                <div className="flex justify-between text-[#5c3d48]">
                  <span>{calculated.primaryLook.name}</span>
                  <span className="font-semibold text-[#2d1b22]">
                    {formatINR(calculated.primaryLook.basePrice)}
                  </span>
                </div>

                {offerState.includeHaldiCombo && (
                  <div className="flex justify-between text-[#5c3d48]">
                    <span>Haldi / Engagement Add-on</span>
                    <span className="font-semibold text-[#2d1b22]">
                      {formatINR(HALDI_COMBO_PRICE)}
                    </span>
                  </div>
                )}

                {offerState.squadCount > 0 && (
                  <div className="flex justify-between text-[#5c3d48]">
                    <span>Party / Squad Looks ({offerState.squadCount}×)</span>
                    <span className="font-semibold text-[#2d1b22]">
                      {formatINR(offerState.squadCount * SQUAD_LOOK_PRICE)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-[#a93354] font-semibold pt-1">
                  <span>Wedding Season Discount ({calculated.discountPercent}%)</span>
                  <span>-{formatINR(calculated.tierDiscountAmount)}</span>
                </div>

                {calculated.extraCashDiscount > 0 && (
                  <div className="flex justify-between text-[#a93354] font-semibold">
                    <span>Mystery Box Bonus</span>
                    <span>-{formatINR(calculated.extraCashDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between items-start gap-3 text-xs text-[#7d5864] pt-1">
                  <span>Season Freebie ({calculated.season.months})</span>
                  <span className="font-semibold text-[#2f7a53] text-right">
                    {calculated.season.extraPerk} (FREE)
                  </span>
                </div>

                {calculated.perk && calculated.perk.id !== "extra-500" && (
                  <div className="flex justify-between items-start gap-3 text-xs text-[#7d5864]">
                    <span>Mystery Gift</span>
                    <span className="font-semibold text-[#2f7a53] text-right">
                      {calculated.perk.title} (FREE)
                    </span>
                  </div>
                )}
              </div>

              {/* Final Price & Copy Code */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#7b5c67]">Original Total</p>
                    <p className="text-sm line-through text-[#9f828c]">
                      {formatINR(calculated.subtotal)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-[#c94a6a]">
                      You Save {formatINR(calculated.totalSavings)}
                    </p>
                    <p className="font-display text-4xl font-bold text-[#2d1b22]">
                      {formatINR(calculated.finalPrice)}
                    </p>
                  </div>
                </div>

                {/* Promo Code Pill */}
                <div className="flex items-center justify-between rounded-2xl bg-[#fff4f7] border border-[#f3cdd9] px-3.5 py-2.5">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-[#8c5d6d]">
                      Active Offer Code
                    </p>
                    <p className="text-sm font-bold tracking-wide text-[#2d1b22]">
                      {calculated.promoCode}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#ebc2cf] hover:bg-[#fce7ee] px-3 py-1.5 text-xs font-semibold text-[#b53759] transition cursor-pointer"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Primary WhatsApp CTA */}
                <a
                  href={calculated.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c94a6a] to-[#b03253] hover:from-[#b03253] hover:to-[#942644] text-white py-3.5 px-6 text-sm sm:text-base font-semibold shadow-petal transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Lock This {calculated.discountPercent}% Offer on WhatsApp
                </a>

                <a
                  href="#booking"
                  className="w-full inline-flex items-center justify-center rounded-full border border-[#ebcad5] bg-white hover:bg-[#fff0f4] text-[#2d1b22] py-2.5 px-5 text-xs sm:text-sm font-semibold transition"
                >
                  Or Customize Your Date Below ↓
                </a>

                <p className="text-[11px] text-center text-[#876773]">
                  Indicative Hazaribagh studio rates — final quote & travel confirmed directly with Ashiya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
