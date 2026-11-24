"use client";

import React, { useState } from "react";
import { ArrowRight, Calculator, CheckCircle2, Sparkles } from "lucide-react";
import { WALKTHROUGH_STEPS } from "@/lib/brand-data";
import { Sticker3DSparkle } from "./Soft3DStickers";
import {
  type OfferConfigState,
  calculateWeddingOffer,
  formatINR,
} from "@/lib/offer-calculator";

type WalkthroughScenario = {
  id: string;
  label: string;
  badge: string;
  state: OfferConfigState;
  story: string;
};

const SCENARIOS: WalkthroughScenario[] = [
  {
    id: "solo-bride",
    label: "Solo Dulhan",
    badge: "15% Off",
    story: "Just your main wedding morning HD bridal look — clean 15% seasonal welcome savings.",
    state: {
      seasonId: "newyear-baraat",
      lookId: "signature-hd-bridal",
      includeHaldiCombo: false,
      squadCount: 0,
      revealedPerkIndex: 0,
    },
  },
  {
    id: "bride-haldi",
    label: "Bride + Haldi",
    badge: "20% Off",
    story: "Adding your Haldi or Engagement look jumps your ENTIRE cart from 15% to 20% OFF!",
    state: {
      seasonId: "winter-peak",
      lookId: "signature-hd-bridal",
      includeHaldiCombo: true,
      squadCount: 0,
      revealedPerkIndex: 1,
    },
  },
  {
    id: "full-dulhan-squad",
    label: "Dulhan + 2 Sisters",
    badge: "25% Max Off",
    story: "Most popular in Hazaribagh! Bridal + Haldi + 2 Sister Party looks unlocks the full 25% bundle.",
    state: {
      seasonId: "spring-nikah",
      lookId: "royal-airbrush-bridal",
      includeHaldiCombo: true,
      squadCount: 2,
      revealedPerkIndex: 2,
    },
  },
];

export function DiscountWalkthrough({
  onApplyScenario,
}: {
  onApplyScenario: (state: OfferConfigState) => void;
}) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeScenarioId, setActiveScenarioId] = useState<string>("full-dulhan-squad");

  const activeScenario =
    SCENARIOS.find((s) => s.id === activeScenarioId) ?? SCENARIOS[2];
  const previewOffer = calculateWeddingOffer(activeScenario.state);

  const handleLoadIntoBuilder = () => {
    onApplyScenario(activeScenario.state);
    const el = document.getElementById("wedding-offer");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="discount-walkthrough" className="py-16 sm:py-24 bg-[#fff9f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0f4] border border-[#f2cbd7] pl-2.5 pr-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#b53759]">
            <Sticker3DSparkle className="w-5 h-5 shrink-0" />
            Step-by-Step Discount Walkthrough
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#2d1b22]">
            Zero Hidden Catch —{" "}
            <span className="italic text-[#c94a6a]">How Your Savings Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6c4d58]">
            Tap any step below to see exactly how our Wedding Season offer works, or test a real bride-and-family math
            example in one click.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive 4-Step Accordion / Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {WALKTHROUGH_STEPS.map((item) => {
              const isOpen = activeStep === item.step;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(item.step)}
                  className={`w-full text-left rounded-3xl border p-5 transition cursor-pointer ${
                    isOpen
                      ? "bg-white border-[#c94a6a] shadow-card-soft"
                      : "bg-white/75 border-[#f2d6df] hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isOpen
                            ? "bg-[#c94a6a] text-white"
                            : "bg-[#fff0f4] text-[#c94a6a] border border-[#f4ceda]"
                        }`}
                      >
                        0{item.step}
                      </span>
                      <div>
                        <p className="font-display text-xl sm:text-2xl font-semibold text-[#2d1b22]">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-[#fce7ee] text-[#a93354] px-3 py-1 text-[11px] font-bold">
                      {item.tag}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="mt-4 pl-11 space-y-3">
                      <p className="text-sm text-[#5c3d48] leading-relaxed">
                        {item.summary}
                      </p>
                      <div className="rounded-2xl bg-[#fff4f7] border border-[#f3d4de] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#9f2c4b]">
                        {item.exampleMath}
                      </div>
                      <p className="text-xs text-[#755561] flex items-start gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#c79a52] shrink-0 mt-0.5" />
                        <span>
                          <strong>Ashiya’s Tip:</strong> {item.proTip}
                        </span>
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Interactive Walkthrough Math Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-b from-[#fff1f5] to-white border border-[#efc9d5] p-6 shadow-petal space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#b53759]">
                  Real Bride Walkthrough
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#2d1b22] mt-1">
                  Compare Example Savings
                </h3>
              </div>

              {/* Scenario Switcher Pills */}
              <div className="grid grid-cols-3 gap-2">
                {SCENARIOS.map((sc) => {
                  const selected = sc.id === activeScenarioId;
                  return (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setActiveScenarioId(sc.id)}
                      className={`rounded-2xl px-2.5 py-2.5 text-center border transition cursor-pointer ${
                        selected
                          ? "bg-[#c94a6a] border-[#c94a6a] text-white shadow-sm"
                          : "bg-white border-[#f0d0db] text-[#4c2e38] hover:bg-[#fff6f8]"
                      }`}
                    >
                      <span className="block text-xs font-bold leading-tight">
                        {sc.label}
                      </span>
                      <span
                        className={`block text-[10px] mt-0.5 font-semibold ${
                          selected ? "text-[#fde4a8]" : "text-[#c94a6a]"
                        }`}
                      >
                        {sc.badge}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs sm:text-sm text-[#634450] leading-relaxed">
                {activeScenario.story}
              </p>

              {/* Step-by-Step Math Card */}
              <div className="rounded-2xl bg-white border border-[#f2d6df] p-4 space-y-2.5 text-sm">
                <div className="flex justify-between text-[#5c3d48]">
                  <span>1. Base Package Value</span>
                  <span className="font-semibold text-[#2d1b22]">
                    {formatINR(previewOffer.subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-[#a93354] font-semibold">
                  <span>2. Stacked {previewOffer.discountPercent}% Discount</span>
                  <span>-{formatINR(previewOffer.tierDiscountAmount)}</span>
                </div>
                {previewOffer.extraCashDiscount > 0 && (
                  <div className="flex justify-between text-[#a93354] font-semibold">
                    <span>3. Mystery Gift Cash Bonus</span>
                    <span>-{formatINR(previewOffer.extraCashDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#2f7a53] text-xs font-semibold pt-1">
                  <span>4. Free Season Perks</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Included Free
                  </span>
                </div>

                <div className="pt-3 border-t border-[#f3dce3] flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-[#6c4d58]">
                    Walkthrough Final Total
                  </span>
                  <div className="text-right">
                    <span className="font-display text-3xl font-bold text-[#2d1b22]">
                      {formatINR(previewOffer.finalPrice)}
                    </span>
                    <span className="block text-[11px] font-bold text-[#c94a6a]">
                      Total Saved: {formatINR(previewOffer.totalSavings)}!
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleLoadIntoBuilder}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#2d1b22] hover:bg-[#452833] text-white py-3 px-5 text-sm font-semibold transition cursor-pointer"
              >
                Load This Setup in Offer Builder
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
