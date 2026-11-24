import {
  BRAND,
  MYSTERY_PERKS,
  PRIMARY_LOOKS,
  SEASON_WINDOWS,
  type LookOption,
  type MysteryPerk,
  type WeddingSeasonWindow,
} from "./brand-data";

export const SQUAD_LOOK_PRICE = 3499;
export const HALDI_COMBO_PRICE = 5499;
export const EXTRA_500_PERK_VALUE = 500;

export type OfferConfigState = {
  seasonId: string;
  lookId: string;
  includeHaldiCombo: boolean;
  squadCount: number;
  revealedPerkIndex: number | null;
};

export type CalculatedOffer = {
  season: WeddingSeasonWindow;
  primaryLook: LookOption;
  totalLooksCount: number;
  subtotal: number;
  discountPercent: number;
  tierLabel: string;
  nextTierTip: string | null;
  tierDiscountAmount: number;
  extraCashDiscount: number;
  totalSavings: number;
  finalPrice: number;
  perk: MysteryPerk | null;
  promoCode: string;
  whatsappUrl: string;
  bookingSummaryText: string;
};

export function formatINR(amount: number): string {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

export function calculateWeddingOffer(state: OfferConfigState): CalculatedOffer {
  const season =
    SEASON_WINDOWS.find((s) => s.id === state.seasonId) ?? SEASON_WINDOWS[0];
  const primaryLook =
    PRIMARY_LOOKS.find((l) => l.id === state.lookId) ?? PRIMARY_LOOKS[0];

  const haldiAdd = state.includeHaldiCombo ? HALDI_COMBO_PRICE : 0;
  const squadAdd = state.squadCount * SQUAD_LOOK_PRICE;
  const subtotal = primaryLook.basePrice + haldiAdd + squadAdd;

  const totalLooksCount =
    1 + (state.includeHaldiCombo ? 1 : 0) + state.squadCount;

  // Tier rules:
  // 1 look = 15% Welcome Offer
  // 2 looks = 20% Combo Offer
  // 3+ looks = 25% Full Dulhan Bundle
  let discountPercent = 15;
  let tierLabel = "15% Welcome Bridal Offer";
  let nextTierTip: string | null =
    "Add Haldi/Engagement OR 1 Bridesmaid Look to jump to 20% OFF!";

  if (totalLooksCount === 2) {
    discountPercent = 20;
    tierLabel = "20% Dual-Look Combo Offer";
    nextTierTip =
      "Add 1 more Bridesmaid or Pre-Wedding Look to unlock MAX 25% OFF!";
  } else if (totalLooksCount >= 3) {
    discountPercent = 25;
    tierLabel = "25% Mega Dulhan Bundle (Max Savings!)";
    nextTierTip = null;
  }

  const tierDiscountAmount = Math.round((subtotal * discountPercent) / 100);
  const perk =
    state.revealedPerkIndex !== null
      ? MYSTERY_PERKS[state.revealedPerkIndex % MYSTERY_PERKS.length]
      : null;

  const extraCashDiscount =
    perk?.id === "extra-500" ? EXTRA_500_PERK_VALUE : 0;

  const totalSavings = tierDiscountAmount + extraCashDiscount;
  const finalPrice = Math.max(0, subtotal - totalSavings);

  const promoCode = perk
    ? `ASHIYA${discountPercent}-${perk.codeSuffix}`
    : `ASHIYA${discountPercent}`;

  const squadLine =
    state.squadCount > 0
      ? `• Bridesmaid/Party Looks: ${state.squadCount}x (${formatINR(squadAdd)})`
      : "• Bridesmaid/Party Looks: None";

  const haldiLine = state.includeHaldiCombo
    ? `• Pre-Wedding Haldi/Engagement Add-on: Yes (${formatINR(HALDI_COMBO_PRICE)})`
    : "• Pre-Wedding Haldi/Engagement Add-on: No";

  const perkLine = perk
    ? `• Unlocked Gift: ${perk.title} (${perk.valueLabel})`
    : "• Unlocked Gift: Not revealed yet";

  const bookingSummaryText = [
    `Hi Ashiya Makeover (${BRAND.handle})! ✨`,
    `I'd love to lock the Wedding Season Special Offer:`,
    `• Season Window: ${season.label} (${season.months})`,
    `• Primary Look: ${primaryLook.name} (${formatINR(primaryLook.basePrice)})`,
    haldiLine,
    squadLine,
    `• Applied Tier: ${discountPercent}% OFF (Code: ${promoCode})`,
    perkLine,
    `• Seasonal Bonus: ${season.extraPerk}`,
    `• Estimated Total: ${formatINR(finalPrice)} (Saved ${formatINR(totalSavings)}!)`,
    `Please share slot availability in Hazaribagh 💖`,
  ].join("\n");

  const whatsappUrl = `${BRAND.whatsappBase}?text=${encodeURIComponent(
    bookingSummaryText
  )}`;

  return {
    season,
    primaryLook,
    totalLooksCount,
    subtotal,
    discountPercent,
    tierLabel,
    nextTierTip,
    tierDiscountAmount,
    extraCashDiscount,
    totalSavings,
    finalPrice,
    perk,
    promoCode,
    whatsappUrl,
    bookingSummaryText,
  };
}
