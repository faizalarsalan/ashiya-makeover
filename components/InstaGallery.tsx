"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Heart,
  Instagram,
  Pin,
  Sparkles,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  BRAND,
  GALLERY_ITEMS,
  HIGHLIGHT_BUBBLES,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/brand-data";
import { BrandMonogram } from "./BrandMonogram";

export function InstaGallery({
  onSelectLookForOffer,
}: {
  onSelectLookForOffer: (lookId: string) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBookLook = (lookId: string) => {
    onSelectLookForOffer(lookId);
    setSelectedItem(null);
    const el = document.getElementById("wedding-offer");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const navigateModal = (dir: -1 | 1) => {
    if (!selectedItem) return;
    const idx = filteredItems.findIndex((i) => i.id === selectedItem.id);
    if (idx === -1) return;
    const nextIdx = (idx + dir + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[nextIdx]);
  };

  return (
    <section id="insta-gallery" className="scroll-mt-28 py-16 sm:py-24 bg-[#fff4f7] border-y border-[#f4d7e0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#f2cbd7] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#b53759]">
              <Instagram className="w-3.5 h-3.5" />
              Curated Instagram Showcase • {BRAND.handle}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#2d1b22]">
              Explore Our{" "}
              <span className="italic text-[#c94a6a]">Insta Lookbook & Highlights</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6c4d58]">
              Tap a highlight bubble just like on Instagram to filter by Bridal Dulhan, Party Makeup, Hairstyles, or
              Mehndi — and click any look to see the full breakdown or try it in your Wedding Offer.
            </p>
          </div>

          {/* Authentic Mini Profile Card */}
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 rounded-2xl bg-white border border-[#f2d6df] px-4 py-3 shadow-card-soft hover:border-[#c94a6a] transition self-start"
          >
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]">
              <BrandMonogram className="w-11 h-11 rounded-full bg-white p-0.5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-[#2d1b22] flex items-center gap-1.5">
                {BRAND.handle}
                <ExternalLink className="w-3.5 h-3.5 text-[#c94a6a]" />
              </p>
              <p className="text-xs text-[#6c4d58]">
                {BRAND.postsCount} Posts • {BRAND.followersCount} Followers • Hazaribagh
              </p>
            </div>
          </a>
        </div>

        {/* Instagram Story Highlight Bubbles */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 no-scrollbar">
          {HIGHLIGHT_BUBBLES.map((bubble) => {
            const isSelected = activeCategory === bubble.id;
            return (
              <button
                key={bubble.id}
                type="button"
                onClick={() => setActiveCategory(bubble.id)}
                className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer"
              >
                <div
                  className={`p-[3px] rounded-full transition-transform group-hover:scale-105 ${
                    isSelected
                      ? "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] shadow-md"
                      : "bg-[#ecc9d4]"
                  }`}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white bg-[#fff0f4]">
                    <img
                      src={bubble.thumb}
                      alt={bubble.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold whitespace-nowrap px-2.5 py-0.5 rounded-full transition ${
                    isSelected
                      ? "bg-[#c94a6a] text-white"
                      : "text-[#5c3d48] group-hover:text-[#c94a6a]"
                  }`}
                >
                  {bubble.emoji} {bubble.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive IG Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5">
          {filteredItems.map((item) => {
            const isLiked = !!likedIds[item.id];
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#f2d6df] shadow-card-soft cursor-pointer text-left"
              >
                <div className="aspect-square overflow-hidden bg-[#fce7ee] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* Subtle top tags */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
                    {item.isPinned ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#2d1b22]/75 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] font-semibold">
                        <Pin className="w-2.5 h-2.5 text-[#fde4a8]" />
                        Pinned
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-white/85 backdrop-blur-sm text-[#9f2c4b] px-2.5 py-1 text-[10px] font-bold">
                        {item.categoryLabel}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(e) => toggleLike(item.id, e)}
                      aria-label={`Heart ${item.title}`}
                      className="w-7 h-7 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center text-[#c94a6a] hover:scale-110 transition cursor-pointer"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${isLiked ? "fill-[#c94a6a]" : ""}`}
                      />
                    </button>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-3 sm:p-4 space-y-1">
                  <p className="font-display text-lg sm:text-xl font-semibold text-[#2d1b22] leading-snug line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#6c4d58] line-clamp-1">
                    {item.skinFinish}
                  </p>
                  <div className="pt-1.5 flex items-center justify-between text-[11px] font-semibold text-[#c94a6a]">
                    <span>Inspect Look →</span>
                    <span className="text-[#8a6a75] font-medium">{item.dateLabel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* IG Profile CTA Strip */}
        <div className="text-center pt-2">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#eabccf] bg-white hover:bg-[#fff0f4] text-[#2d1b22] px-6 py-3 text-sm font-semibold shadow-sm transition"
          >
            <Instagram className="w-4 h-4 text-[#c94a6a]" />
            View All 21+ Reels & Posts on {BRAND.handle}
            <ExternalLink className="w-3.5 h-3.5 text-[#8a6a75]" />
          </a>
        </div>
      </div>

      {/* Interactive Look Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[60] bg-[#2d1b22]/65 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl bg-[#fff9f7] border border-[#f2d2dc] overflow-hidden shadow-2xl grid md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close look preview"
              className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#f0cfd9] flex items-center justify-center text-[#2d1b22] hover:bg-[#fff0f4] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Left Photo */}
            <div className="md:col-span-6 bg-[#fce7ee] relative aspect-square md:aspect-auto">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => navigateModal(-1)}
                aria-label="Previous look"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 flex items-center justify-center text-[#2d1b22] shadow hover:bg-white cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => navigateModal(1)}
                aria-label="Next look"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 flex items-center justify-center text-[#2d1b22] shadow hover:bg-white cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Right Breakdown */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#b53759]">
                  <span className="rounded-full bg-[#fce7ee] px-3 py-1">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-[#8a6a75]">{selectedItem.dateLabel}</span>
                </div>

                <h3 className="font-display text-3xl font-semibold text-[#2d1b22]">
                  {selectedItem.title}
                </h3>

                <p className="text-sm text-[#5c3d48] leading-relaxed">
                  {selectedItem.caption}
                </p>

                <div className="space-y-2.5 rounded-2xl bg-white border border-[#f2d6df] p-4 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-[#9f2c4b]">Skin Finish: </span>
                    <span className="text-[#4a2e38]">{selectedItem.skinFinish}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#9f2c4b]">Eyes & Lips: </span>
                    <span className="text-[#4a2e38]">{selectedItem.eyeAndLip}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#9f2c4b]">Hair & Setting: </span>
                    <span className="text-[#4a2e38]">{selectedItem.hairStyling}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => handleBookLook(selectedItem.recommendedLookId)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#c94a6a] hover:bg-[#ad3453] text-white py-3 px-5 text-sm font-semibold shadow-sm transition cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#fde4a8]" />
                  Apply This Look to Offer Builder
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={selectedItem.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#ebcad5] bg-white hover:bg-[#fff0f4] text-[#2d1b22] py-2.5 px-5 text-xs sm:text-sm font-semibold transition"
                >
                  <Instagram className="w-4 h-4 text-[#c94a6a]" />
                  Open Original Post on Instagram ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
