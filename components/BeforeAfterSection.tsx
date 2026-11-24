"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, MoveHorizontal, Sparkles } from "lucide-react";
import { BEFORE_AFTER_ITEMS } from "@/lib/brand-data";
import { Sticker3DBrush, Sticker3DSparkle } from "./Soft3DStickers";

export function BeforeAfterSection({
  onSelectLookForOffer,
}: {
  onSelectLookForOffer: (lookId: string) => void;
}) {
  const [activePairIndex, setActivePairIndex] = useState(0);
  const [splitPercent, setSplitPercent] = useState(52);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  const activePair =
    BEFORE_AFTER_ITEMS[activePairIndex] ?? BEFORE_AFTER_ITEMS[0];

  const updateSplitFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplitPercent(Math.min(96, Math.max(4, Math.round(pct))));
  };

  const handleBookTransform = () => {
    onSelectLookForOffer(activePair.recommendedLookId);
    const el = document.getElementById("wedding-offer");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="before-after" className="py-16 sm:py-24 bg-[#fff9f7] border-t border-[#f4d7e0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0f4] border border-[#f2cbd7] pl-2.5 pr-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#b53759] shadow-sm">
            <Sticker3DBrush className="w-6 h-6 shrink-0" />
            Real Skin Transformation • Before & After
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#2d1b22]">
            Drag to Reveal the{" "}
            <span className="italic text-[#c94a6a]">Ashiya Soft-Glam Glow</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6c4d58]">
            We enhance your natural features without masking your real skin. Slide left or right to compare bare prep
            skin against our luminous bridal finish.
          </p>
        </div>

        {/* Pair Selector Pills */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap">
          {BEFORE_AFTER_ITEMS.map((item, idx) => {
            const active = idx === activePairIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActivePairIndex(idx);
                  setSplitPercent(50);
                }}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border transition cursor-pointer ${
                  active
                    ? "bg-[#c94a6a] border-[#c94a6a] text-white shadow-sm"
                    : "bg-white border-[#efccd8] text-[#5c3d48] hover:border-[#c94a6a]"
                }`}
              >
                {item.occasion}
              </button>
            );
          })}
        </div>

        {/* Interactive Split Comparison Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Draggable Comparison Frame */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-4">
            <div
              ref={containerRef}
              onPointerDown={(e) => {
                isDraggingRef.current = true;
                (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
                updateSplitFromClientX(e.clientX);
              }}
              onPointerMove={(e) => {
                if (!isDraggingRef.current) return;
                updateSplitFromClientX(e.clientX);
              }}
              onPointerUp={() => {
                isDraggingRef.current = false;
              }}
              className="relative w-full max-w-[440px] aspect-[3/4] rounded-[28px] overflow-hidden border-4 border-white shadow-petal bg-[#fce7ee] select-none touch-none cursor-ew-resize"
            >
              {/* AFTER Layer (Full Underneath) */}
              <img
                src={activePair.afterImage}
                alt={`${activePair.occasion} After Makeup`}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />

              {/* BEFORE Layer (Clipped from right to splitPercent) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - splitPercent}% 0 0)`,
                }}
              >
                <img
                  src={activePair.beforeImage}
                  alt={`${activePair.occasion} Before Makeup`}
                  draggable={false}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Labels */}
              <span className="absolute top-3.5 left-3.5 rounded-full bg-[#2d1b22]/75 backdrop-blur-md text-white px-3 py-1 text-[11px] font-semibold pointer-events-none">
                Before Prep
              </span>
              <span className="absolute top-3.5 right-3.5 rounded-full bg-[#c94a6a]/90 backdrop-blur-md text-white px-3 py-1 text-[11px] font-semibold pointer-events-none">
                After Ashiya Glam ✨
              </span>

              {/* Vertical Divider Line + Handle */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(45,27,34,0.4)] pointer-events-none"
                style={{ left: `${splitPercent}%` }}
              >
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#c94a6a] shadow-lg flex items-center justify-center text-[#c94a6a]">
                  <MoveHorizontal className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Accessible Slider + Quick Split Buttons */}
            <div className="w-full max-w-[440px] rounded-2xl bg-white border border-[#f2d6df] px-4 py-3 space-y-2 shadow-sm">
              <input
                type="range"
                min={4}
                max={96}
                value={splitPercent}
                onChange={(e) => setSplitPercent(Number(e.target.value))}
                aria-label="Slide between Before and After makeup"
                className="w-full accent-[#c94a6a] cursor-pointer"
              />
              <div className="flex items-center justify-between gap-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setSplitPercent(92)}
                  className="rounded-full bg-[#fff4f7] hover:bg-[#fce7ee] px-3 py-1 text-[#5c3d48] cursor-pointer"
                >
                  See Before
                </button>
                <button
                  type="button"
                  onClick={() => setSplitPercent(50)}
                  className="rounded-full bg-[#fff4f7] hover:bg-[#fce7ee] px-3 py-1 text-[#c94a6a] cursor-pointer"
                >
                  50 / 50 Split
                </button>
                <button
                  type="button"
                  onClick={() => setSplitPercent(8)}
                  className="rounded-full bg-[#c94a6a] hover:bg-[#ad3453] px-3 py-1 text-white cursor-pointer"
                >
                  Full After Glow ✨
                </button>
              </div>
            </div>
          </div>

          {/* Right Technique Breakdown Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white border border-[#f2d6df] p-6 sm:p-8 shadow-petal space-y-5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fce7ee] px-3 py-1 text-xs font-bold text-[#a93354]">
                  <Sticker3DSparkle className="w-4 h-4" />
                  {activePair.occasion}
                </span>
                <span className="text-xs font-semibold text-[#7b5c67]">
                  {activePair.duration}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#2d1b22] leading-tight">
                {activePair.title}
              </h3>

              <div className="rounded-2xl bg-[#fff4f7] border border-[#f3d4de] px-4 py-3 text-xs sm:text-sm font-semibold text-[#9f2c4b]">
                Skin Focus: {activePair.skinFocus}
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#85626e]">
                  Step-by-Step Studio Breakdown
                </p>
                <ul className="space-y-2.5">
                  {activePair.techniques.map((step) => (
                    <li
                      key={step}
                      className="flex items-start gap-2.5 text-sm text-[#4e323c]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#fff0f4] text-[#c94a6a] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        ✓
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={handleBookTransform}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c94a6a] to-[#b03253] hover:from-[#b03253] hover:to-[#942644] text-white py-3.5 px-6 text-sm sm:text-base font-semibold shadow-petal transition cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#fde4a8]" />
                Book This Transformation (Up to 25% Off)
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
