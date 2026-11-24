export const BRAND = {
  name: "Ashiya Makeover",
  monogram: "A",
  handle: "@makeupby_ashiyanaaz",
  city: "Hazaribagh, Jharkhand",
  tagline: "Your beauty, my passion — Let's create magic.",
  phoneDisplay: "+91 92631 84142",
  phoneRaw: "919263184142",
  whatsappBase: "https://wa.me/919263184142",
  instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/",
  threadsUrl: "https://www.threads.com/@makeupby_ashiyanaaz",
  followersCount: "125+",
  postsCount: "21+",
};

export type LookOption = {
  id: string;
  name: string;
  subtitle: string;
  basePrice: number;
  duration: string;
  badge: string;
  includes: string[];
};

export const PRIMARY_LOOKS: LookOption[] = [
  {
    id: "signature-hd-bridal",
    name: "Signature HD Dulhan",
    subtitle: "Luminous dewy bridal base that glows in person & 4K lens",
    basePrice: 14999,
    duration: "3.5 hrs",
    badge: "Most Loved",
    includes: [
      "Skin-first hydration & glass-glow prep",
      "Waterproof HD base & customized undertone match",
      "Bridal hairstyle + fresh floral gajra pinning",
      "Lehenga & double dupatta draping + mink lashes",
    ],
  },
  {
    id: "royal-airbrush-bridal",
    name: "Royal Airbrush Bridal",
    subtitle: "Featherlight 18-hour sweat & tear-proof luxury finish",
    basePrice: 19999,
    duration: "4 hrs",
    badge: "Luxury Choice",
    includes: [
      "Silicone/Airbrush long-wear bridal perfection",
      "Custom eye artistry (cut-crease or soft smoky halo)",
      "Intricate bridal bun/braid + jewelry setting",
      "Free touch-up mini lipstick kit + lens application",
    ],
  },
  {
    id: "engagement-reception",
    name: "Engagement & Reception Glam",
    subtitle: "Soft champagne shimmer & sculpted glow for evening lights",
    basePrice: 8999,
    duration: "2.5 hrs",
    badge: "Bestseller",
    includes: [
      "Soft-glam shimmer eyes & glossy rose/nude lips",
      "Textured waves, sleek bun, or tiara hair setting",
      "Gown/saree pinning & accessory placement",
      "Complimentary faux lashes",
    ],
  },
  {
    id: "haldi-mehndi-dew",
    name: "Haldi & Mehndi Floral Dew",
    subtitle: "Breezy sunlit skin glow made for daytime celebrations",
    basePrice: 6499,
    duration: "2 hrs",
    badge: "Cute & Fresh",
    includes: [
      "Breathable radiant skin tint & rosy blush flush",
      "Floral braid or open curls with phoolon ka gehna",
      "Sweat-resistant daytime setting mist",
      "Zero cakey feel — super camera friendly",
    ],
  },
];

export type WeddingSeasonWindow = {
  id: string;
  label: string;
  months: string;
  slotsLeft: number;
  bonusNote: string;
  extraPerk: string;
};

export const SEASON_WINDOWS: WeddingSeasonWindow[] = [
  {
    id: "winter-peak",
    label: "Winter Shadi Peak",
    months: "Nov – Dec",
    slotsLeft: 4,
    bonusNote: "High Demand Dates Filling Fast",
    extraPerk: "Free Moisturizing Glass-Skin Prep Mask",
  },
  {
    id: "newyear-baraat",
    label: "Jan – Feb Baraat",
    months: "Jan – Feb",
    slotsLeft: 7,
    bonusNote: "Early-Bird Priority Slot Open",
    extraPerk: "Free Bridal Trial Glow Session (worth ₹2,500)",
  },
  {
    id: "spring-nikah",
    label: "Spring Wedding Season",
    months: "Mar – Apr",
    slotsLeft: 9,
    bonusNote: "Sweetest Early Lock-In Perks",
    extraPerk: "Free Party Touch-Up Kit + Floral Gajra",
  },
];

export type MysteryPerk = {
  id: string;
  title: string;
  valueLabel: string;
  detail: string;
  codeSuffix: string;
};

export const MYSTERY_PERKS: MysteryPerk[] = [
  {
    id: "free-draping",
    title: "Complimentary Double-Dupatta & Jewelry Setting",
    valueLabel: "₹1,500 Value FREE",
    detail: "We pin your bridal veil, lehenga pleats & matha patti cleanly so nothing shifts all night.",
    codeSuffix: "DRAPE",
  },
  {
    id: "mink-lashes-lip",
    title: "Free 3D Mink Lashes + Mini Touch-Up Lip Tint",
    valueLabel: "₹1,200 Value FREE",
    detail: "Keep your pout fresh from varmala through vidaai with a matching shade touch-up.",
    codeSuffix: "GLOW",
  },
  {
    id: "extra-500",
    title: "Extra ₹500 Instant Early-Bride Reward",
    valueLabel: "₹500 Extra Off",
    detail: "Stacks right on top of your 15%–25% Wedding Season bundle discount when booked this week.",
    codeSuffix: "LOVE500",
  },
];

export type GalleryCategory =
  | "all"
  | "bridal"
  | "party"
  | "hairstyles"
  | "work";

export type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "all">;
  categoryLabel: string;
  image: string;
  instagramUrl: string;
  dateLabel: string;
  skinFinish: string;
  eyeAndLip: string;
  hairStyling: string;
  recommendedLookId: string;
  caption: string;
  isPinned?: boolean;
};

export const HIGHLIGHT_BUBBLES: {
  id: GalleryCategory;
  label: string;
  emoji: string;
  thumb: string;
}[] = [
  { id: "all", label: "All Looks", emoji: "✨", thumb: "/images/hero-bride.jpg" },
  { id: "bridal", label: "Bridal Dulhan", emoji: "👑", thumb: "/images/look-bridal-royal.jpg" },
  { id: "party", label: "Party Makeup", emoji: "🎀", thumb: "/images/look-party-glam.jpg" },
  { id: "hairstyles", label: "Hairstyles", emoji: "💁‍♀️", thumb: "/images/look-hairstyles.jpg" },
  { id: "work", label: "Work & Mehndi", emoji: "🌿", thumb: "/images/look-mehndi-work.jpg" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "tiara-princess",
    title: "Crystal Tiara Reception Bride",
    category: "bridal",
    categoryLabel: "Bridal & Reception",
    image: "/images/look-reception-tiara.jpg",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/p/DVArPYfD6Wh/",
    dateLabel: "Pinned • Feb 20",
    skinFinish: "Luminous Soft-Focus Rose Glow",
    eyeAndLip: "Crystal Champagne Lid + Glossy Berry Pink",
    hairStyling: "Voluminous Soft Curls + Sparkling Tiara",
    recommendedLookId: "engagement-reception",
    caption: "Princess reception glow with delicate shimmer & crystal tiara framing.",
    isPinned: true,
  },
  {
    id: "royal-dulhan-hd",
    title: "Royal Crimson Dulhan Glam",
    category: "bridal",
    categoryLabel: "Signature Bridal",
    image: "/images/look-bridal-royal.jpg",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/reel/DUGM_09j9Jc/",
    dateLabel: "Pinned Reel • Jan 29",
    skinFinish: "18-Hr Waterproof HD Golden Dew",
    eyeAndLip: "Bronze-Rose Cut Crease + Velvet Crimson",
    hairStyling: "Matha Patti & Nath Precision Placement",
    recommendedLookId: "royal-airbrush-bridal",
    caption: "Classic Hazaribagh Dulhan magic — sculpted eyes, soft skin texture, zero flash-back.",
    isPinned: true,
  },
  {
    id: "blush-pearl-bride",
    title: "Pastel Blush Kundan Bride",
    category: "bridal",
    categoryLabel: "Soft Bridal",
    image: "/images/hero-bride.jpg",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/p/DZe1d8pD9P0/",
    dateLabel: "Pinned • Jun 12",
    skinFinish: "Glass-Skin Hydration Prep",
    eyeAndLip: "Soft Winged Liner + Berry Rose Matte",
    hairStyling: "Wispy Curls + Delicate Kundan Tikka",
    recommendedLookId: "signature-hd-bridal",
    caption: "Soft feminine bridal artistry crafted for day-to-night warmth.",
    isPinned: true,
  },
  {
    id: "party-champagne-glam",
    title: "Champagne Sequin Party Glam",
    category: "party",
    categoryLabel: "Party Makeup",
    image: "/images/look-party-glam.jpg",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/reel/DgHTxPFzJsC/",
    dateLabel: "Reel • Nov 23",
    skinFinish: "Silky Radiant Satin Finish",
    eyeAndLip: "Peach-Champagne Shimmer + Satin Mauve",
    hairStyling: "Side-Pinned Glossy Waves & Pearl Clips",
    recommendedLookId: "engagement-reception",
    caption: "Sister-of-the-bride & party glam that stays radiant through the sangeet.",
  },
  {
    id: "mogra-braid-hairstyle",
    title: "Mogra & Jadau Bridal Braid",
    category: "hairstyles",
    categoryLabel: "Hairstyles",
    image: "/images/look-hairstyles.jpg",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/reel/DgFYnG5Tyxk/",
    dateLabel: "Reel • Nov 23",
    skinFinish: "Seamless Veil & Dupatta Anchor",
    eyeAndLip: "Styled for Traditional Lehenga Look",
    hairStyling: "Woven Fresh Mogra + Baby's Breath + Jadau Pins",
    recommendedLookId: "signature-hd-bridal",
    caption: "Every braid and floral strand anchored with care for effortless dancing.",
  },
  {
    id: "bridal-mehndi-work",
    title: "Bridal Mehndi & Bangle Styling",
    category: "work",
    categoryLabel: "Work & Mehndi",
    image: "/images/look-mehndi-work.jpg",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/p/De_9_O6Ex75/",
    dateLabel: "Post • Oct 27",
    skinFinish: "Soft Sunlit Bridal Detail",
    eyeAndLip: "Paired with Pastel Mehndi Glow",
    hairStyling: "Complete Hand & Outfit Coordination",
    recommendedLookId: "haldi-mehndi-dew",
    caption: "Delicate bridal details & mehndi aesthetics from our Hazaribagh studio.",
  },
  {
    id: "haldi-floral-dew",
    title: "Haldi Sun-Kissed Floral Glow",
    category: "party",
    categoryLabel: "Haldi & Engagement",
    image: "/images/look-haldi-engagement.jpg",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/reel/DdJk34IzYf0/",
    dateLabel: "Reel • Sep 11",
    skinFinish: "Lightweight Dewy Tint",
    eyeAndLip: "Peachy Flush + Glossy Rose Tint",
    hairStyling: "Phoolon Ka Gehna + Wispy Curls",
    recommendedLookId: "haldi-mehndi-dew",
    caption: "Fresh, playful & sweat-friendly daytime glow for Haldi and intimate Roka.",
  },
  {
    id: "atelier-luxury-kit",
    title: "Curated Luxury Bridal Vanity",
    category: "work",
    categoryLabel: "Studio Kit",
    image: "/images/look-studio-vanity.jpg",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/reel/DfrnY2XTBlW/",
    dateLabel: "Reel • Nov 13",
    skinFinish: "100% Sanitized Brushes & Pro Formulas",
    eyeAndLip: "Rose-Nude Palettes & Velvet Lipsticks",
    hairStyling: "Pearl Accessories & Silk Prep",
    recommendedLookId: "signature-hd-bridal",
    caption: "Skin-safe luxury formulas & spotless brush hygiene for every Hazaribagh bride.",
  },
];

export type WalkthroughStep = {
  step: number;
  title: string;
  tag: string;
  summary: string;
  exampleMath: string;
  proTip: string;
};

export const WALKTHROUGH_STEPS: WalkthroughStep[] = [
  {
    step: 1,
    title: "Choose Your Main Bridal or Glam Look",
    tag: "Starts at 15% Off",
    summary:
      "Pick Signature HD Dulhan, Royal Airbrush, Reception Glam, or Haldi Glow. Even a single booking unlocks our 15% Wedding Season Welcome Discount automatically.",
    exampleMath: "Example: Signature HD Dulhan ₹14,999 → ₹12,749 (Save ₹2,250 instantly)",
    proTip: "Not sure between HD and Airbrush? Pick HD now — we help test what suits your skin best during your prep call!",
  },
  {
    step: 2,
    title: "Add a Pre-Wedding Function or Squad",
    tag: "Jumps to 20% – 25% Off",
    summary:
      "Pair your Bridal look with Haldi/Engagement OR add 2+ Party Makeups for your sister, mom, or besties. Adding a 2nd look bumps your whole cart to 20% off; a full bundle unlocks 25% off!",
    exampleMath: "Example: Bridal + Haldi + 2 Sisters (₹28,497) at 25% Off → ₹21,373 (Save ₹7,124!)",
    proTip: "Families in Hazaribagh love booking the Bride + 2 Sisters bundle so everyone's tone & hair harmonize in wedding portraits.",
  },
  {
    step: 3,
    title: "Tap to Reveal Your Bonus Wedding Perk",
    tag: "Free ₹500–₹2,500 Value",
    summary:
      "Reveal your Mystery Bridal Bow Box in the offer section to lock an extra free gift — like Double-Dupatta Draping, 3D Mink Lashes + Lip Tint, or an extra ₹500 off.",
    exampleMath: "Promo Code Auto-Applied: ASHIYA25 + Bonus Gift Added Free",
    proTip: "Your Wedding Month choice also unlocks a seasonal freebie like a Moisturizing Glass-Skin Mask or Bridal Trial Glow.",
  },
  {
    step: 4,
    title: "Book Your Date in 1 Click on WhatsApp",
    tag: "Zero Forms Hassle",
    summary:
      "Hit 'Book Now on WhatsApp' — your exact discounted summary, savings breakdown, and promo code pre-fill cleanly to Ashiya's WhatsApp (+91 92631 84142).",
    exampleMath: "Instant Hazaribagh studio or venue slot confirmation directly with Ashiya",
    proTip: "Only a small booking advance holds your muhurat/nikah date — remaining balance on your wedding day!",
  },
];

export type HeroReelSlide = {
  id: string;
  label: string;
  tag: string;
  title: string;
  videoSrc: string;
  poster: string;
  lookId: string;
  instagramUrl: string;
};

export const HERO_REEL_SLIDES: HeroReelSlide[] = [
  {
    id: "blush-bride-reel",
    label: "Blush Bride",
    tag: "Signature Bridal",
    title: "Pastel Blush Kundan Look",
    videoSrc: "/videos/reel-blush-bride.mp4",
    poster: "/images/hero-bride.jpg",
    lookId: "signature-hd-bridal",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/p/DZe1d8pD9P0/",
  },
  {
    id: "royal-dulhan-reel",
    label: "Royal Dulhan",
    tag: "Airbrush Bridal",
    title: "Crimson Royal Dulhan",
    videoSrc: "/videos/reel-royal-dulhan.mp4",
    poster: "/images/look-bridal-royal.jpg",
    lookId: "royal-airbrush-bridal",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/reel/DUGM_09j9Jc/",
  },
  {
    id: "tiara-bride-reel",
    label: "Tiara Glam",
    tag: "Reception Star",
    title: "Crystal Tiara Reception",
    videoSrc: "/videos/reel-tiara-bride.mp4",
    poster: "/images/look-reception-tiara.jpg",
    lookId: "engagement-reception",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/p/DVArPYfD6Wh/",
  },
  {
    id: "party-glam-reel",
    label: "Party Look",
    tag: "Sister & Squad",
    title: "Champagne Sequin Glam",
    videoSrc: "/videos/reel-party-glam.mp4",
    poster: "/images/look-party-glam.jpg",
    lookId: "engagement-reception",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/reel/DgHTxPFzJsC/",
  },
  {
    id: "haldi-dew-reel",
    label: "Haldi Dew",
    tag: "Floral Glow",
    title: "Haldi Sun-Kissed Glow",
    videoSrc: "/videos/reel-haldi-dew.mp4",
    poster: "/images/look-haldi-engagement.jpg",
    lookId: "haldi-mehndi-dew",
    instagramUrl: "https://www.instagram.com/makeupby_ashiyanaaz/reel/DdJk34IzYf0/",
  },
];

export type BeforeAfterTransformation = {
  id: string;
  title: string;
  occasion: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  skinFocus: string;
  techniques: string[];
  recommendedLookId: string;
};

export const BEFORE_AFTER_ITEMS: BeforeAfterTransformation[] = [
  {
    id: "pastel-blush-transform",
    title: "Natural Bare Skin → Pastel Blush Kundan Glow",
    occasion: "Signature HD Dulhan",
    beforeImage: "/images/before-blush-bride.jpg",
    afterImage: "/images/hero-bride.jpg",
    duration: "3.5 hrs session",
    skinFocus: "Under-eye color neutralizing + dewy glass-skin barrier",
    techniques: [
      "Peach corrector for natural under-eye warmth — zero grey cast",
      "Breathable HD foundation blended to true neck & chest undertone",
      "Soft winged liner, feathery brows & berry-rose matte lip",
      "Wispy curl framing + kundan matha patti & dupatta setting",
    ],
    recommendedLookId: "signature-hd-bridal",
  },
  {
    id: "royal-crimson-transform",
    title: "Un-Retouched Prep → Royal Crimson Dulhan Glam",
    occasion: "Royal Airbrush Bridal",
    beforeImage: "/images/before-royal-bride.jpg",
    afterImage: "/images/look-bridal-royal.jpg",
    duration: "4 hrs session",
    skinFocus: "18-hr sweat & tear-proof airbrush finish",
    techniques: [
      "Micro-mist hydration + oil-balanced primer for Hazaribagh humidity",
      "Bronze-rose cut-crease eyes + velvet crimson long-wear pout",
      "3D lashes blended naturally into the lash line",
      "Crisp matha patti, nath & floral bun anchoring",
    ],
    recommendedLookId: "royal-airbrush-bridal",
  },
];

export type ClientReview = {
  id: string;
  name: string;
  initials: string;
  area: string;
  category: "bridal" | "party" | "haldi";
  lookBooked: string;
  quote: string;
  highlightTag: string;
};

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "rev-sana",
    name: "Sana Parween",
    initials: "SP",
    area: "Canary Hill, Hazaribagh",
    category: "bridal",
    lookBooked: "Royal Airbrush Bridal",
    highlightTag: "16-Hr Sweat-Proof",
    quote:
      "I wanted zero cakey texture and natural-looking skin for my Nikah photos — Ashiya di matched my exact undertone and my base stayed luminous from 4 PM till 2 AM.",
  },
  {
    id: "rev-priya",
    name: "Priya Kumari",
    initials: "PK",
    area: "Korrah, Hazaribagh",
    category: "bridal",
    lookBooked: "Signature HD Dulhan + Haldi",
    highlightTag: "Saved ₹6,200 Bundle",
    quote:
      "Booked the Wedding Season combo for my Haldi and Shaadi plus my two sisters! Her double-dupatta pinning didn't budge once during pheras.",
  },
  {
    id: "rev-anamika",
    name: "Anamika Verma",
    initials: "AV",
    area: "Matwari, Hazaribagh",
    category: "party",
    lookBooked: "Sister Party Glam (3 Squad)",
    highlightTag: "25% Squad Discount",
    quote:
      "Me, my mom, and cousin got ready together at Ashiya Makeover. Super hygienic brushes, warm vibes, and everyone at the sangeet asked who did our soft-glam eyes.",
  },
  {
    id: "rev-farheen",
    name: "Farheen Naaz",
    initials: "FN",
    area: "Dipugarha, Hazaribagh",
    category: "haldi",
    lookBooked: "Haldi Floral Dew + Hair",
    highlightTag: "Fresh Mogra Braid",
    quote:
      "The floral mogra hairstyling and fresh peachy dewy look were so lightweight! She arrived early at our venue and made me feel so calm before the ceremony.",
  },
];
