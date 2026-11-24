"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { type CalculatedOffer, formatINR } from "@/lib/offer-calculator";

export function MobileStickyBar({ calculated }: { calculated: CalculatedOffer }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#fff9f7]/95 backdrop-blur-md border-t border-[#f0cbd7] px-4 py-3 shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#c94a6a]">
            {calculated.discountPercent}% Offer • Code {calculated.promoCode}
          </p>
          <p className="font-display text-2xl font-bold text-[#2d1b22] leading-none">
            {formatINR(calculated.finalPrice)}
            <span className="text-xs font-sans font-semibold text-[#2f7a53] ml-1.5">
              (Save {formatINR(calculated.totalSavings)})
            </span>
          </p>
        </div>

        <a
          href={calculated.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#c94a6a] hover:bg-[#ad3453] text-white px-4 py-2.5 text-xs font-semibold shadow-sm shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Lock Offer
        </a>
      </div>
    </div>
  );
}
