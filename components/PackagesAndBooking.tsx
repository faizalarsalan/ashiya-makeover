"use client";

import React, { useState } from "react";
import {
  Check,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Copy,
  Award,
} from "lucide-react";
import { BRAND, PRIMARY_LOOKS } from "@/lib/brand-data";
import { type CalculatedOffer, formatINR } from "@/lib/offer-calculator";
import { Sticker3DHeart } from "./Soft3DStickers";

export function PackagesAndBooking({
  selectedLookId,
  onSelectPackage,
  calculated,
}: {
  selectedLookId: string;
  onSelectPackage: (lookId: string) => void;
  calculated: CalculatedOffer;
}) {
  const [clientName, setClientName] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [venueArea, setVenueArea] = useState("Hazaribagh Town");
  const [clientPhone, setClientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submittedPass, setSubmittedPass] = useState<string | null>(null);
  const [copiedPass, setCopiedPass] = useState(false);

  const featuredPackages = PRIMARY_LOOKS.slice(0, 3);

  const handleChoosePackage = (lookId: string) => {
    onSelectPackage(lookId);
    const el = document.getElementById("wedding-offer");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customText = [
      `Hi Ashiya Makeover (${BRAND.handle})! 💖`,
      `I'd like to book my Wedding Season Offer:`,
      `• Bride / Client Name: ${clientName || "Bride-to-be"}`,
      `• Event Date: ${weddingDate || "Flexible / Discussing"}`,
      `• Venue / Area: ${venueArea}`,
      `• Contact Number: ${clientPhone || "See WhatsApp"}`,
      `• Package Selected: ${calculated.primaryLook.name}`,
      `• Discount Tier: ${calculated.discountPercent}% OFF (Code: ${calculated.promoCode})`,
      calculated.perk ? `• Free Gift Unlocked: ${calculated.perk.title}` : null,
      `• Estimated Total: ${formatINR(calculated.finalPrice)} (Saved ${formatINR(calculated.totalSavings)})`,
      notes ? `• Look Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setSubmittedPass(customText);
    const url = `${BRAND.whatsappBase}?text=${encodeURIComponent(customText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopySummary = async () => {
    if (!submittedPass) return;
    try {
      await navigator.clipboard.writeText(submittedPass);
      setCopiedPass(true);
      setTimeout(() => setCopiedPass(false), 2000);
    } catch {
      // Ignore clipboard failure
    }
  };

  return (
    <>
      {/* Signature Packages & Trust Pillars */}
      <section id="packages" className="scroll-mt-28 py-16 sm:py-24 bg-[#fff9f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0f4] border border-[#f2cbd7] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#b53759]">
              <Award className="w-3.5 h-3.5" />
              Bridal & Party Packages
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#2d1b22]">
              Transparent Rates,{" "}
              <span className="italic text-[#c94a6a]">Every Detail Included</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6c4d58]">
              Every package includes gentle skin prep, custom undertone blending, hairstyling, and lehenga/saree pinning —
              with instant 15% to 25% Wedding Season discounts.
            </p>
          </div>

          {/* 3-Card Package Grid */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {featuredPackages.map((pkg) => {
              const isHighlighted = pkg.id === "signature-hd-bridal";
              const isSelected = selectedLookId === pkg.id;
              const seasonalStartPrice = Math.round(pkg.basePrice * 0.75);

              return (
                <div
                  key={pkg.id}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition ${
                    isHighlighted
                      ? "bg-gradient-to-b from-[#fff2f6] to-white border-2 border-[#c94a6a] shadow-petal relative"
                      : "bg-white border border-[#f2d6df] shadow-card-soft"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                          isHighlighted
                            ? "bg-[#c94a6a] text-white"
                            : "bg-[#fce7ee] text-[#a93354]"
                        }`}
                      >
                        {pkg.badge}
                      </span>
                      <span className="text-xs font-semibold text-[#7b5c67]">
                        {pkg.duration}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#2d1b22]">
                        {pkg.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6c4d58] mt-1">
                        {pkg.subtitle}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#f4e0e6]">
                      <p className="text-xs text-[#8f6c78] line-through">
                        Regular {formatINR(pkg.basePrice)}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-4xl font-bold text-[#2d1b22]">
                          {formatINR(seasonalStartPrice)}
                        </span>
                        <span className="text-xs font-semibold text-[#c94a6a]">
                          with 25% bundle
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 pt-2">
                      {pkg.includes.map((inc) => (
                        <li
                          key={inc}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4e323c]"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#fff0f4] text-[#c94a6a] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleChoosePackage(pkg.id)}
                    className={`mt-7 w-full rounded-full py-3 px-5 text-sm font-semibold transition cursor-pointer ${
                      isSelected
                        ? "bg-[#2d1b22] text-white"
                        : isHighlighted
                        ? "bg-[#c94a6a] hover:bg-[#ad3453] text-white shadow-sm"
                        : "border border-[#eabccf] bg-[#fff9fb] hover:bg-[#fff0f4] text-[#2d1b22]"
                    }`}
                  >
                    {isSelected
                      ? "Selected in Offer Builder ✓"
                      : "Customize With Discount →"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* 4-Card Trust Pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {[
              {
                icon: Sparkles,
                title: "Skin-First Prep",
                desc: "Hydrating serum & barrier prep so makeup never cracks or looks cakey in HD photos.",
              },
              {
                icon: ShieldCheck,
                title: "100% Brush Hygiene",
                desc: "Spotless sanitized brushes and skin-safe luxury formulas tailored for Indian undertones.",
              },
              {
                icon: Heart,
                title: "Hair & Draping Included",
                desc: "Floral mogra braids, tiara setting, and crisp double-dupatta lehenga pinning done for you.",
              },
              {
                icon: MapPin,
                title: "Hazaribagh & Venue Visits",
                desc: "Get ready comfortably at our Hazaribagh studio or book on-location venue styling.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl bg-white border border-[#f2d6df] p-5 space-y-2 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fff0f4] text-[#c94a6a] flex items-center justify-center">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h4 className="font-display text-xl font-semibold text-[#2d1b22]">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#6c4d58] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final High-Converting WhatsApp Booking Section */}
      <section id="booking" className="scroll-mt-28 py-16 sm:py-24 bg-[#fff0f4] border-t border-[#f3d4de]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-[32px] bg-white border border-[#efcad6] shadow-petal overflow-hidden grid lg:grid-cols-12">
            {/* Left Info & Direct Contact */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#2d1b22] via-[#3c222d] to-[#53293a] text-white p-7 sm:p-9 flex flex-col justify-between gap-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 pl-2 pr-3.5 py-1 text-xs font-semibold text-[#fde4a8]">
                  <Sticker3DHeart className="w-5 h-5 shrink-0" />
                  Direct Bridal Desk
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
                  Ready to Hold Your Wedding Date?
                </h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  Share your event date and venue in Hazaribagh or nearby Jharkhand. Your{" "}
                  <strong className="text-[#fde4a8]">{calculated.discountPercent}% Offer</strong> ({calculated.promoCode}) is
                  pre-attached automatically!
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <a
                  href={`tel:+${BRAND.phoneRaw}`}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 hover:bg-white/15 px-4 py-3 transition"
                >
                  <Phone className="w-4 h-4 text-[#fde4a8]" />
                  <div>
                    <p className="text-[11px] text-white/70">Call for Booking</p>
                    <p className="font-semibold">{BRAND.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={calculated.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-[#c94a6a] hover:bg-[#b53759] px-4 py-3 transition"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <div>
                    <p className="text-[11px] text-white/85">Fastest Reply</p>
                    <p className="font-semibold">Instant WhatsApp Chat →</p>
                  </div>
                </a>

                <div className="flex items-center gap-2 text-xs text-white/75 pt-2">
                  <MapPin className="w-4 h-4 text-[#fde4a8] shrink-0" />
                  <span>Serving Hazaribagh, Ranchi Road, Canary Hill & Destination Venues</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Booking Form */}
            <div className="lg:col-span-7 p-7 sm:p-9">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="rounded-2xl bg-[#fff6f9] border border-[#f5d4df] px-4 py-3 flex items-center justify-between gap-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-[#2d1b22]">
                      Attached Offer:{" "}
                    </span>
                    <span className="text-[#b53759] font-bold">
                      {calculated.primaryLook.name} ({calculated.discountPercent}% Off)
                    </span>
                  </div>
                  <span className="font-bold text-[#2d1b22]">
                    {formatINR(calculated.finalPrice)}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block space-y-1.5 text-xs font-semibold text-[#5c3d48]">
                    <span>Your Lovely Name *</span>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g., Ayesha / Sana"
                      className="w-full rounded-xl border border-[#ebc8d4] bg-[#fffcfd] px-3.5 py-2.5 text-sm text-[#2d1b22] focus:outline-none focus:ring-2 focus:ring-[#c94a6a]/30 focus:border-[#c94a6a]"
                    />
                  </label>

                  <label className="block space-y-1.5 text-xs font-semibold text-[#5c3d48]">
                    <span>Wedding / Event Date *</span>
                    <input
                      type="date"
                      required
                      value={weddingDate}
                      onChange={(e) => setWeddingDate(e.target.value)}
                      className="w-full rounded-xl border border-[#ebc8d4] bg-[#fffcfd] px-3.5 py-2.5 text-sm text-[#2d1b22] focus:outline-none focus:ring-2 focus:ring-[#c94a6a]/30 focus:border-[#c94a6a]"
                    />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block space-y-1.5 text-xs font-semibold text-[#5c3d48]">
                    <span>Your WhatsApp Number *</span>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border border-[#ebc8d4] bg-[#fffcfd] px-3.5 py-2.5 text-sm text-[#2d1b22] focus:outline-none focus:ring-2 focus:ring-[#c94a6a]/30 focus:border-[#c94a6a]"
                    />
                  </label>

                  <label className="block space-y-1.5 text-xs font-semibold text-[#5c3d48]">
                    <span>Studio or Venue Area</span>
                    <select
                      value={venueArea}
                      onChange={(e) => setVenueArea(e.target.value)}
                      className="w-full rounded-xl border border-[#ebc8d4] bg-[#fffcfd] px-3.5 py-2.5 text-sm text-[#2d1b22] focus:outline-none focus:ring-2 focus:ring-[#c94a6a]/30 focus:border-[#c94a6a]"
                    >
                      <option value="Hazaribagh Studio Visit">Hazaribagh Studio Visit</option>
                      <option value="Hazaribagh Town Venue">Hazaribagh Town / Hotel Venue</option>
                      <option value="Nearby Jharkhand (Ramgarh / Ranchi / Chatra)">
                        Nearby Jharkhand (Ramgarh / Ranchi / Chatra)
                      </option>
                    </select>
                  </label>
                </div>

                <label className="block space-y-1.5 text-xs font-semibold text-[#5c3d48]">
                  <span>Outfit Color or Look Vibe (Optional)</span>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g., Pastel blush lehenga, want soft dewy eyes & mogra braid..."
                    className="w-full rounded-xl border border-[#ebc8d4] bg-[#fffcfd] px-3.5 py-2.5 text-sm text-[#2d1b22] focus:outline-none focus:ring-2 focus:ring-[#c94a6a]/30 focus:border-[#c94a6a]"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c94a6a] to-[#b03253] hover:from-[#b03253] hover:to-[#942644] text-white py-3.5 px-6 text-sm sm:text-base font-semibold shadow-petal transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Generate Offer Pass & Open WhatsApp
                </button>
              </form>

              {submittedPass && (
                <div className="mt-5 rounded-2xl bg-[#f5fbf7] border border-[#b9e2c8] p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#256945] flex items-center gap-1.5">
                      <Check className="w-4 h-4" />
                      Your Wedding Offer Pass is Ready!
                    </p>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1 rounded-full bg-white border border-[#b9e2c8] px-3 py-1 text-[11px] font-semibold text-[#256945] cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      {copiedPass ? "Copied!" : "Copy Message"}
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap text-[11px] text-[#2b4d3a] font-sans leading-relaxed">
                    {submittedPass}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
