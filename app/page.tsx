"use client";

import React, { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WeddingOfferBuilder } from "@/components/WeddingOfferBuilder";
import { DiscountWalkthrough } from "@/components/DiscountWalkthrough";
import { InstaGallery } from "@/components/InstaGallery";
import { PackagesAndBooking } from "@/components/PackagesAndBooking";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import {
  type OfferConfigState,
  calculateWeddingOffer,
} from "@/lib/offer-calculator";

export default function HomePage() {
  const [offerState, setOfferState] = useState<OfferConfigState>({
    seasonId: "winter-peak",
    lookId: "signature-hd-bridal",
    includeHaldiCombo: true,
    squadCount: 1,
    revealedPerkIndex: 0,
  });

  const calculated = useMemo(
    () => calculateWeddingOffer(offerState),
    [offerState]
  );

  const handleSelectLook = (lookId: string) => {
    setOfferState((prev) => ({ ...prev, lookId }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeDiscountPercent={calculated.discountPercent} />
      <main className="flex-1">
        <HeroSection onSelectLook={handleSelectLook} />
        <WeddingOfferBuilder
          offerState={offerState}
          setOfferState={setOfferState}
          calculated={calculated}
        />
        <DiscountWalkthrough onApplyScenario={setOfferState} />
        <InstaGallery onSelectLookForOffer={handleSelectLook} />
        <PackagesAndBooking
          selectedLookId={offerState.lookId}
          onSelectPackage={handleSelectLook}
          calculated={calculated}
        />
      </main>
      <Footer />
      <MobileStickyBar calculated={calculated} />
    </div>
  );
}
