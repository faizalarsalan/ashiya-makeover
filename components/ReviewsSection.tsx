"use client";

import React, { useState } from "react";
import { Instagram, MapPin, Quote, Star } from "lucide-react";
import { BRAND, CLIENT_REVIEWS } from "@/lib/brand-data";
import { Sticker3DHeart, Sticker3DSparkle } from "./Soft3DStickers";

type ReviewFilter = "all" | "bridal" | "party" | "haldi";

export function ReviewsSection() {
  const [filter, setFilter] = useState<ReviewFilter>("all");

  const visibleReviews =
    filter === "all"
      ? CLIENT_REVIEWS
      : CLIENT_REVIEWS.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="scroll-mt-28 py-16 sm:py-24 bg-[#fff4f7] border-t border-[#f4d7e0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header + Rating Summary Pill */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#f2cbd7] pl-2.5 pr-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#b53759] shadow-sm">
              <Sticker3DHeart className="w-5 h-5 shrink-0" />
              Bride & Family Reviews • Hazaribagh
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#2d1b22]">
              Real Love From Our{" "}
              <span className="italic text-[#c94a6a]">Dulhans & Sisters</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6c4d58]">
              Skin-first prep, punctual venue styling, and gentle care — see what brides across Hazaribagh share after
              their big celebration.
            </p>
          </div>

          <div className="inline-flex items-center gap-3.5 rounded-2xl bg-white border border-[#f0cbd7] px-5 py-3.5 shadow-card-soft self-start">
            <Sticker3DSparkle className="w-7 h-7 shrink-0" />
            <div>
              <div className="flex items-center gap-1 text-[#d19030]">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#e4a644] text-[#e4a644]" />
                ))}
                <span className="ml-1.5 text-sm font-bold text-[#2d1b22]">5.0</span>
              </div>
              <p className="text-xs text-[#6c4d58] font-medium">
                Bridal Studio Feedback • {BRAND.city}
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { id: "all", label: "All Love ✨" },
            { id: "bridal", label: "Bridal Dulhan 👑" },
            { id: "party", label: "Sister Squad 🎀" },
            { id: "haldi", label: "Haldi & Hair 🌼" },
          ].map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as ReviewFilter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold border transition cursor-pointer ${
                  active
                    ? "bg-[#c94a6a] border-[#c94a6a] text-white shadow-sm"
                    : "bg-white border-[#efccd8] text-[#5c3d48] hover:border-[#c94a6a]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Review Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {visibleReviews.map((review) => (
            <article
              key={review.id}
              className="rounded-3xl bg-white border border-[#f2d6df] p-6 shadow-card-soft flex flex-col justify-between gap-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-[#e4a644]">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#e4a644]" />
                    ))}
                  </div>
                  <span className="rounded-full bg-[#fff0f4] border border-[#f5cdd9] px-3 py-0.5 text-[11px] font-bold text-[#b53759]">
                    {review.highlightTag}
                  </span>
                </div>

                <div className="relative pl-6">
                  <Quote className="w-4 h-4 text-[#e3a3b6] absolute left-0 top-1" />
                  <p className="text-sm sm:text-[15px] text-[#4a2e38] leading-relaxed">
                    “{review.quote}”
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f5e3e9] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fce4ec] to-[#f4b9cb] border border-white shadow-sm flex items-center justify-center font-display text-base font-bold text-[#9f2c4b]">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2d1b22]">{review.name}</p>
                    <p className="text-[11px] text-[#6c4d58] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#c94a6a]" />
                      {review.area}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#85626e] text-right">
                  {review.lookBooked}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom IG Link */}
        <div className="text-center">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#eabccf] bg-white hover:bg-[#fff0f4] px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#2d1b22] shadow-sm transition"
          >
            <Instagram className="w-4 h-4 text-[#c94a6a]" />
            See More Bridal Stories on {BRAND.handle} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
