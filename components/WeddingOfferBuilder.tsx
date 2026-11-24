"use client";

import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  CalendarHeart,
  Check,
  Copy,
  Crown,
  Heart,
  MessageCircle,
  Minus,
  Plus,
  Sparkles,
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

// 42px incremental sticky offset keeps each earlier card's header badge + title clearly visible as a stepped lip
const STICKY_TOPS = [110, 152, 194, 236];

const QUICK_JUMP_STEPS = [
  { id: 0, label: "1 • Season" },
  { id: 1, label: "2 • Look" },
  { id: 2, label: "3 • Squad" },
  { id: 3, label: "4 • Gift" },
];

export function WeddingOfferBuilder({
  offerState,
  setOfferState,
  calculated,
}: Props) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [cardScales, setCardScales] = useState<number[]>([1, 1, 1, 1]);
  const [cardDims, setCardDims] = useState<number[]>([1, 1, 1, 1]);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const anchorRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let rafId = 0;

    const updateStackTransform = () => {
      rafId = 0;

      // Only apply sticky scale progression at md+ (>= 768px) where sticky stacking runs
      if (window.innerWidth < 768) {
        setCardScales([1, 1, 1, 1]);
        setCardDims([1, 1, 1, 1]);
        return;
      }

      const rects = STICKY_TOPS.map((_, idx) =>
        cardRefs.current[idx]?.getBoundingClientRect() ?? null
      );

      const nextScales = [1, 1, 1, 1];
      const nextDims = [1, 1, 1, 1];

      for (let i = 0; i < 3; i++) {
        const myRect = rects[i];
        if (!myRect) continue;

        const travel = Math.max(200, myRect.height * 0.88);
        let coverDepth = 0;

        for (let j = i + 1; j < 4; j++) {
          const nextRect = rects[j];
          if (!nextRect) continue;
          const dist = nextRect.top - STICKY_TOPS[j];
          const progress = Math.min(1, Math.max(0, 1 - dist / travel));
          coverDepth += progress;
        }

        // Shrink gently from top edge (transform-origin: top) as later opaque cards ride over
        nextScales[i] = Number((1 - coverDepth * 0.028).toFixed(4));
        nextDims[i] = Number((1 - Math.min(0.1, coverDepth * 0.032)).toFixed(3));
      }

      setCardScales(nextScales);
      setCardDims(nextDims);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateStackTransform);
      }
    };

    updateStackTransform();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToStepCard = (stepIndex: number) => {
    const anchor = anchorRefs.current[stepIndex];
    if (!anchor) return;
    const offset = window.innerWidth >= 768 ? STICKY_TOPS[stepIndex] : 108;
    const targetY =
      anchor.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
  };

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

  return (
    <section
      id="wedding-offer"
      className="scroll-mt-28 py-16 sm:py-24 bg-[#fff4f7] border-y border-[#f4d7e0]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#f2cbd7] pl-2.5 pr-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#b53759] shadow-sm">
            <Sticker3DCompact className="w-6 h-6 shrink-0" />
            Interactive Wedding Season Special Offer
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#2d1b22]">
            Build Your Bridal Glow &{" "}
            <span className="italic text-[#c94a6a]">Watch Your Savings Grow</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6c4d58]">
            Scroll through the 4 bridal cards below — on desktop each opaque card rides cleanly up over the previous one
            leaving a clickable top tab while stacking up to{" "}
            <strong className="text-[#2d1b22]">25% OFF + a free gift</strong>.
          </p>
        </div>

        {/* Quick Jump Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {QUICK_JUMP_STEPS.map((step) => (
            <button
              key={step.id}
              type="button"
              onClick={() => scrollToStepCard(step.id)}
              className="rounded-full bg-white border border-[#efd0da] hover:border-[#c94a6a] hover:bg-[#fff0f4] px-3.5 py-1.5 text-xs font-semibold text-[#4c2e38] shadow-sm transition cursor-pointer"
            >
              {step.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Uniform-height CSS Sticky Stacking Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 pb-6">
            {/* Card 1 */}
            <div ref={(el) => { anchorRefs.current[0] = el; }} className="h-0 -mb-6 md:-mb-8" />
            <div
              ref={(el) => { cardRefs.current[0] = el; }}
              style={{
                top: `${STICKY_TOPS[0]}px`,
                transform: `scale(${cardScales[0]})`,
                transformOrigin: "top center",
                filter: `brightness(${cardDims[0]})`,
              }}
              className="md:sticky z-10 md:min-h-[370px] flex flex-col justify-between rounded-3xl bg-white border border-[#efd0da] p-5 sm:p-6 shadow-petal transition-[filter] duration-150 will-change-transform"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => scrollToStepCard(0)}
                    className="flex items-center gap-2.5 text-left cursor-pointer group"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#fff0f4] group-hover:bg-[#c94a6a] group-hover:text-white text-[#c94a6a] font-bold text-xs flex items-center justify-center border border-[#f5ceda] transition">
                      1
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#2d1b22]">
                      When is the Big Celebration?
                    </h3>
                  </button>
                  <CalendarHeart className="w-5 h-5 text-[#c94a6a] shrink-0" />
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  {SEASON_WINDOWS.map((win) => {
                    const selected = offerState.seasonId === win.id;
                    return (
                      <button
                        key={win.id}
                        type="button"
                        onClick={() =>
                          setOfferState((prev) => ({ ...prev, seasonId: win.id }))
                        }
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
              </div>

              <p className="mt-4 pt-3 border-t border-[#f6e5eb] text-xs text-[#7b5c67] flex items-center justify-between">
                <span>Selected Season Bonus: <strong className="text-[#2f7a53]">{calculated.season.extraPerk}</strong></span>
                <button
                  type="button"
                  onClick={() => scrollToStepCard(1)}
                  className="font-semibold text-[#c94a6a] hover:underline cursor-pointer whitespace-nowrap ml-2"
                >
                  Next: Look ↓
                </button>
              </p>
            </div>

            {/* Card 2 */}
            <div ref={(el) => { anchorRefs.current[1] = el; }} className="h-0 -mb-6 md:-mb-8" />
            <div
              ref={(el) => { cardRefs.current[1] = el; }}
              style={{
                top: `${STICKY_TOPS[1]}px`,
                transform: `scale(${cardScales[1]})`,
                transformOrigin: "top center",
                filter: `brightness(${cardDims[1]})`,
              }}
              className="md:sticky z-20 md:min-h-[370px] flex flex-col justify-between rounded-3xl bg-white border border-[#efd0da] p-5 sm:p-6 shadow-petal transition-[filter] duration-150 will-change-transform"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => scrollToStepCard(1)}
                    className="flex items-center gap-2.5 text-left cursor-pointer group"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#fff0f4] group-hover:bg-[#c94a6a] group-hover:text-white text-[#c94a6a] font-bold text-xs flex items-center justify-center border border-[#f5ceda] transition">
                      2
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#2d1b22]">
                      Choose Your Signature Look
                    </h3>
                  </button>
                  <Crown className="w-5 h-5 text-[#c79a52] shrink-0" />
                </div>

                {/* 2x2 grid even on mobile so Card 2 stays compact */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                  {PRIMARY_LOOKS.map((look) => {
                    const selected = offerState.lookId === look.id;
                    return (
                      <button
                        key={look.id}
                        type="button"
                        onClick={() =>
                          setOfferState((prev) => ({ ...prev, lookId: look.id }))
                        }
                        className={`text-left rounded-2xl p-3 sm:p-4 border transition cursor-pointer flex flex-col justify-between ${
                          selected
                            ? "border-[#c94a6a] bg-[#fff5f8] ring-2 ring-[#f7cbd7]"
                            : "border-[#f1dce3] bg-white hover:border-[#e6b6c5]"
                        }`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <span className="inline-block rounded-full bg-[#fce7ee] text-[#a93354] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide">
                              {look.badge}
                            </span>
                            <span className="hidden sm:inline text-xs font-medium text-[#7b5c67]">
                              {look.duration}
                            </span>
                          </div>
                          <p className="font-display text-lg sm:text-xl font-semibold text-[#2d1b22] mt-1.5 leading-snug">
                            {look.name}
                          </p>
                          <p className="hidden sm:block text-xs text-[#6c4d58] mt-1 leading-relaxed line-clamp-2">
                            {look.subtitle}
                          </p>
                        </div>
                        <div className="mt-2.5 pt-2 border-t border-[#f5e3e9] flex items-center justify-between gap-1">
                          <span className="text-xs sm:text-sm font-bold text-[#2d1b22]">
                            {formatINR(look.basePrice)}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-semibold text-[#c94a6a]">
                            {selected ? "Selected ✓" : "Select"}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="mt-4 pt-3 border-t border-[#f6e5eb] text-xs text-[#7b5c67] flex items-center justify-between">
                <span>Active Look: <strong className="text-[#2d1b22]">{calculated.primaryLook.name}</strong></span>
                <button
                  type="button"
                  onClick={() => scrollToStepCard(2)}
                  className="font-semibold text-[#c94a6a] hover:underline cursor-pointer whitespace-nowrap ml-2"
                >
                  Next: Squad ↓
                </button>
              </p>
            </div>

            {/* Card 3 */}
            <div ref={(el) => { anchorRefs.current[2] = el; }} className="h-0 -mb-6 md:-mb-8" />
            <div
              ref={(el) => { cardRefs.current[2] = el; }}
              style={{
                top: `${STICKY_TOPS[2]}px`,
                transform: `scale(${cardScales[2]})`,
                transformOrigin: "top center",
                filter: `brightness(${cardDims[2]})`,
              }}
              className="md:sticky z-30 md:min-h-[370px] flex flex-col justify-between rounded-3xl bg-white border border-[#efd0da] p-5 sm:p-6 shadow-petal transition-[filter] duration-150 will-change-transform"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => scrollToStepCard(2)}
                    className="flex items-center gap-2.5 text-left cursor-pointer group"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#fff0f4] group-hover:bg-[#c94a6a] group-hover:text-white text-[#c94a6a] font-bold text-xs flex items-center justify-center border border-[#f5ceda] transition">
                      3
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#2d1b22]">
                      Stack Functions & Squad (20%–25% Off!)
                    </h3>
                  </button>
                  <Wand2 className="w-5 h-5 text-[#c94a6a] shrink-0" />
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
                    onClick={() =>
                      setOfferState((prev) => ({
                        ...prev,
                        includeHaldiCombo: !prev.includeHaldiCombo,
                      }))
                    }
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
                      {formatINR(SQUAD_LOOK_PRICE)} each before discount — soft glam + hair + draping
                    </p>
                  </div>
                  <div className="flex items-center gap-3 self-start sm:self-center">
                    <button
                      type="button"
                      aria-label="Decrease bridesmaid looks"
                      onClick={() =>
                        setOfferState((prev) => ({
                          ...prev,
                          squadCount: Math.max(0, prev.squadCount - 1),
                        }))
                      }
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
                      onClick={() =>
                        setOfferState((prev) => ({
                          ...prev,
                          squadCount: Math.min(8, prev.squadCount + 1),
                        }))
                      }
                      className="w-9 h-9 rounded-full border border-[#c94a6a] bg-[#c94a6a] hover:bg-[#ad3453] flex items-center justify-center text-white cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-4 pt-3 border-t border-[#f6e5eb] text-xs text-[#7b5c67] flex items-center justify-between">
                <span>Current Tier: <strong className="text-[#c94a6a]">{calculated.discountPercent}% OFF ({calculated.totalLooksCount} looks)</strong></span>
                <button
                  type="button"
                  onClick={() => scrollToStepCard(3)}
                  className="font-semibold text-[#c94a6a] hover:underline cursor-pointer whitespace-nowrap ml-2"
                >
                  Next: Gift ↓
                </button>
              </p>
            </div>

            {/* Card 4 (Opaque top covering card with solid outer border so nothing bleeds through) */}
            <div ref={(el) => { anchorRefs.current[3] = el; }} className="h-0 -mb-6 md:-mb-8" />
            <div
              ref={(el) => { cardRefs.current[3] = el; }}
              style={{
                top: `${STICKY_TOPS[3]}px`,
                transform: `scale(${cardScales[3]})`,
                transformOrigin: "top center",
              }}
              className="md:sticky z-40 md:min-h-[390px] flex flex-col justify-between rounded-3xl bg-[#fff3f7] bg-gradient-to-br from-[#fff0f5] via-[#fffafc] to-[#fff6ea] border border-[#e5b3c4] p-5 sm:p-6 shadow-petal will-change-transform"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b53759]">
                    <Sticker3DBow className="w-6 h-6 shrink-0" />
                    Step 4 • Cute Bridal Surprise Box
                  </div>
                  <span className="rounded-full bg-white border border-[#efc9d5] px-2.5 py-0.5 text-[11px] font-bold text-[#c94a6a]">
                    Code: {calculated.promoCode}
                  </span>
                </div>

                <div className="rounded-2xl bg-white border-2 border-dashed border-[#e3a8bc] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                  <div className="space-y-1.5">
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
                    onClick={handleRevealOrCyclePerk}
                    className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#2d1b22] hover:bg-[#462934] text-white pl-3.5 pr-5 py-2.5 text-sm font-semibold shadow-sm transition cursor-pointer"
                  >
                    <Sticker3DGift className="w-7 h-7 shrink-0" />
                    {calculated.perk ? "Try Another Gift ✨" : "Unwrap Gift 🎁"}
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#eed2dc] flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-[#6c4d58] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#c79a52]" />
                  All 4 steps stacked! Total savings: <strong className="text-[#c94a6a]">{formatINR(calculated.totalSavings)}</strong>
                </p>
                <a
                  href={calculated.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#c94a6a] hover:bg-[#ad3453] text-white px-4 py-2 text-xs font-semibold transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Lock Now on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Live Offer Receipt & WhatsApp Lock */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 z-20">
            <div className="rounded-3xl bg-white border border-[#f0cbd7] p-5 shadow-petal space-y-4">
              {/* Header + Tier Meter */}
              <div className="space-y-2">
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
                <div className="space-y-1">
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
              <div className="space-y-2 text-sm border-y border-[#f4e0e6] py-3.5">
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
              <div className="space-y-2.5">
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
                <div className="flex items-center justify-between rounded-2xl bg-[#fff4f7] border border-[#f3cdd9] px-3.5 py-2">
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
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c94a6a] to-[#b03253] hover:from-[#b03253] hover:to-[#942644] text-white py-3 px-6 text-sm sm:text-base font-semibold shadow-petal transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Lock This {calculated.discountPercent}% Offer on WhatsApp
                </a>

                <a
                  href="#booking"
                  className="w-full inline-flex items-center justify-center rounded-full border border-[#ebcad5] bg-white hover:bg-[#fff0f4] text-[#2d1b22] py-2 px-5 text-xs sm:text-sm font-semibold transition"
                >
                  Or Customize Your Date Below ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
