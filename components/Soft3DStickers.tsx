import React from "react";

export function Sticker3DBow({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_6px_10px_rgba(173,52,83,0.28)]`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bowLeft" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFD6E4" />
          <stop offset="55%" stopColor="#F48AA9" />
          <stop offset="100%" stopColor="#C94A6A" />
        </radialGradient>
        <radialGradient id="bowRight" cx="65%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFD6E4" />
          <stop offset="55%" stopColor="#F48AA9" />
          <stop offset="100%" stopColor="#C94A6A" />
        </radialGradient>
        <radialGradient id="bowKnot" cx="35%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#FFF5E1" />
          <stop offset="60%" stopColor="#F5C98B" />
          <stop offset="100%" stopColor="#C79248" />
        </radialGradient>
      </defs>
      {/* Left Ribbon Tail */}
      <path d="M26 35C22 44 17 51 12 54C16 55 21 53 25 48L29 37Z" fill="#D45779" />
      {/* Right Ribbon Tail */}
      <path d="M38 35C42 44 47 51 52 54C48 55 43 53 39 48L35 37Z" fill="#D45779" />
      {/* Left Loop */}
      <path
        d="M31 31C23 20 11 16 8 24C5 32 13 42 29 35Z"
        fill="url(#bowLeft)"
        stroke="#FFF6F8"
        strokeWidth="1.5"
      />
      {/* Right Loop */}
      <path
        d="M33 31C41 20 53 16 56 24C59 32 51 42 35 35Z"
        fill="url(#bowRight)"
        stroke="#FFF6F8"
        strokeWidth="1.5"
      />
      {/* Soft Gloss Highlights */}
      <ellipse cx="18" cy="24" rx="5" ry="2.2" transform="rotate(-15 18 24)" fill="white" fillOpacity="0.55" />
      <ellipse cx="46" cy="24" rx="5" ry="2.2" transform="rotate(15 46 24)" fill="white" fillOpacity="0.55" />
      {/* Center Puffy Pearl Knot */}
      <circle cx="32" cy="32" r="7.5" fill="url(#bowKnot)" stroke="#FFFDF9" strokeWidth="1.5" />
      <ellipse cx="29.8" cy="29.6" rx="2.4" ry="1.4" transform="rotate(-25 29.8 29.6)" fill="white" fillOpacity="0.7" />
    </svg>
  );
}

export function Sticker3DGift({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_6px_12px_rgba(173,52,83,0.24)]`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="giftBody" x1="12" y1="24" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE8EF" />
          <stop offset="100%" stopColor="#F4B2C5" />
        </linearGradient>
        <linearGradient id="giftLid" x1="10" y1="20" x2="54" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF5F8" />
          <stop offset="100%" stopColor="#F7C2D2" />
        </linearGradient>
      </defs>
      {/* Box Base */}
      <rect x="13" y="27" width="38" height="27" rx="7" fill="url(#giftBody)" stroke="#FFFFFF" strokeWidth="1.6" />
      {/* Vertical Ribbon */}
      <rect x="28" y="27" width="8" height="27" fill="#C94A6A" />
      {/* Lid */}
      <rect x="10" y="20" width="44" height="10" rx="5" fill="url(#giftLid)" stroke="#FFFFFF" strokeWidth="1.6" />
      <rect x="28" y="20" width="8" height="10" fill="#D95778" />
      {/* Top Puffy Bow */}
      <path d="M31 20C25 11 17 11 17 16C17 20 24 21 31 20Z" fill="#D95778" stroke="#FFF4F7" strokeWidth="1.2" />
      <path d="M33 20C39 11 47 11 47 16C47 20 40 21 33 20Z" fill="#E96D8D" stroke="#FFF4F7" strokeWidth="1.2" />
      <circle cx="32" cy="19.5" r="3.5" fill="#F6CE8B" stroke="#FFFDF8" strokeWidth="1" />
      {/* Soft Shine */}
      <rect x="15" y="22" width="10" height="2.4" rx="1.2" fill="white" fillOpacity="0.65" />
    </svg>
  );
}

export function Sticker3DLipstick({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_6px_12px_rgba(173,52,83,0.24)]`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lipColor" x1="25" y1="8" x2="39" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF7A9E" />
          <stop offset="55%" stopColor="#D63B63" />
          <stop offset="100%" stopColor="#9E2243" />
        </linearGradient>
        <linearGradient id="lipGold" x1="22" y1="26" x2="42" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF0D2" />
          <stop offset="55%" stopColor="#E6B872" />
          <stop offset="100%" stopColor="#BC893D" />
        </linearGradient>
        <linearGradient id="lipCase" x1="21" y1="36" x2="43" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE6EE" />
          <stop offset="100%" stopColor="#EFA2B9" />
        </linearGradient>
      </defs>
      {/* Lipstick Bullet */}
      <path d="M26 27V14C26 11 32 7 37 11C38.5 12.2 38 15 38 18V27H26Z" fill="url(#lipColor)" />
      <path d="M28.5 14C29.5 12.5 32 11 34 12" stroke="white" strokeOpacity="0.65" strokeWidth="2" strokeLinecap="round" />
      {/* Gold Collar */}
      <rect x="23" y="26" width="18" height="11" rx="3" fill="url(#lipGold)" stroke="#FFFDF8" strokeWidth="1.2" />
      {/* Blush Pink Tube */}
      <rect x="21" y="36" width="22" height="20" rx="5.5" fill="url(#lipCase)" stroke="#FFFFFF" strokeWidth="1.5" />
      <rect x="24.5" y="39" width="3.5" height="13" rx="1.75" fill="white" fillOpacity="0.55" />
    </svg>
  );
}

export function Sticker3DHeart({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_6px_10px_rgba(173,52,83,0.28)]`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="heart3d" cx="35%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#FFC2D4" />
          <stop offset="48%" stopColor="#EB5B82" />
          <stop offset="100%" stopColor="#B42A4F" />
        </radialGradient>
      </defs>
      <path
        d="M32 54C32 54 10 40.5 10 23.5C10 15.5 16.2 10 23.2 10C27.8 10 30.8 12.6 32 15.2C33.2 12.6 36.2 10 40.8 10C47.8 10 54 15.5 54 23.5C54 40.5 32 54 32 54Z"
        fill="url(#heart3d)"
        stroke="#FFF8FA"
        strokeWidth="2"
      />
      <ellipse cx="21.5" cy="19" rx="4.5" ry="2.4" transform="rotate(-32 21.5 19)" fill="white" fillOpacity="0.65" />
      <path d="M46 8L47.5 11.5L51 13L47.5 14.5L46 18L44.5 14.5L41 13L44.5 11.5L46 8Z" fill="#FFE0A3" stroke="#FFFDF6" strokeWidth="0.8" />
    </svg>
  );
}

export function Sticker3DCompact({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_6px_10px_rgba(173,52,83,0.22)]`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="compactOuter" cx="35%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#FFF0F5" />
          <stop offset="70%" stopColor="#F5B4C7" />
          <stop offset="100%" stopColor="#D67291" />
        </radialGradient>
        <radialGradient id="blushPan" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFA9C1" />
          <stop offset="100%" stopColor="#C94A6A" />
        </radialGradient>
      </defs>
      {/* Mirror Lid */}
      <circle cx="32" cy="21" r="14" fill="url(#compactOuter)" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="32" cy="21" r="10.5" fill="#E6F4FA" stroke="#E9C78F" strokeWidth="1.5" />
      <path d="M26 17L33 14M25 22L36 17" stroke="white" strokeOpacity="0.8" strokeWidth="1.8" strokeLinecap="round" />
      {/* Base Compact */}
      <circle cx="32" cy="41" r="15.5" fill="url(#compactOuter)" stroke="#FFFFFF" strokeWidth="1.6" />
      <circle cx="32" cy="41" r="11" fill="url(#blushPan)" stroke="#F4D7A3" strokeWidth="1.3" />
      <ellipse cx="28.5" cy="37.5" rx="3.2" ry="1.6" transform="rotate(-25 28.5 37.5)" fill="white" fillOpacity="0.45" />
    </svg>
  );
}

export function Sticker3DSparkle({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_4px_8px_rgba(199,154,82,0.35)]`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sparkle3d" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFFDF2" />
          <stop offset="55%" stopColor="#FFE09C" />
          <stop offset="100%" stopColor="#D19842" />
        </radialGradient>
      </defs>
      <path
        d="M24 4C25.8 14.2 33.8 22.2 44 24C33.8 25.8 25.8 33.8 24 44C22.2 33.8 14.2 25.8 4 24C14.2 22.2 22.2 14.2 24 4Z"
        fill="url(#sparkle3d)"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="20" r="2.2" fill="white" fillOpacity="0.7" />
    </svg>
  );
}
