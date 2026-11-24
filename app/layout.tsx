import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashiya Makeover (@makeupby_ashiyanaaz) | Bridal & Glam Makeup Artist in Hazaribagh",
  description:
    "Feminine soft-glam bridal, engagement, party makeup & hairstyling by Ashiya Makeover in Hazaribagh, Jharkhand. Unlock up to 25% Wedding Season Special Offer & book directly on WhatsApp.",
  keywords: [
    "Ashiya Makeover",
    "makeupby_ashiyanaaz",
    "Bridal Makeup Artist Hazaribagh",
    "Makeup Artist Jharkhand",
    "Wedding Season Makeup Offer",
    "Party Makeup Hazaribagh",
  ],
  openGraph: {
    title: "Ashiya Makeover | Wedding Season Special Offer (Up to 25% Off)",
    description:
      "Your beauty, my passion — Let's create magic. Bridal HD, Airbrush, Party Glam & Hairstyles in Hazaribagh, Jharkhand.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="antialiased selection:bg-[#f7c8d6] selection:text-[#2d1b22]">
        {children}
      </body>
    </html>
  );
}
