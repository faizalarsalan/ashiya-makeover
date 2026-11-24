"use client";

import React, { useId } from "react";

export function Sticker3DBow({ className = "w-9 h-9" }: { className?: string }) {
  const uid = useId();
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_6px_10px_rgba(173,52,83,0.28)]`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${uid}-bowLeft`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFD6E4" />
          <stop offset="55%" stopColor="#F48AA9" />
          <stop offset="100%" stopColor="#C94A6A" />
        </radialGradient>
        <radialGradient id={`${uid}-bowRight`} cx="65%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFD6E4" />
          <stop offset="55%" stopColor="#F48AA9" />
          <stop offset="100%" stopColor="#C94A6A" />
        </radialGradient>
        <radialGradient id={`${uid}-bowKnot`} cx="35%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#FFF5E1" />
          <stop offset="60%" stopColor="#F5C98B" />
          <stop offset="100%" stopColor="#C79248" />
        </radialGradient>
      </defs>
      <path d="M26 35C22 44 17 51 12 54C16 55 21 53 25 48L29 37Z" fill="#D45779" />
      <path d="M38 35C42 44 47 51 52 54C48 55 43 53 39 48L35 37Z" fill="#D45779" />
      <path
        d="M31 31C23 20 11 16 8 24C5 32 13 42 29 35Z"
        fill={`url(#${uid}-bowLeft)`}
        stroke="#FFF6F8"
        strokeWidth="1.5"
      />
      <path
        d="M33 31C41 20 53 16 56 24C59 32 51 42 35 35Z"
        fill={`url(#${uid}-bowRight)`}
        stroke="#FFF6F8"
        strokeWidth="1.5"
      />
      <ellipse cx="18" cy="24" rx="5" ry="2.2" transform="rotate(-15 18 24)" fill="white" fillOpacity="0.55" />
      <ellipse cx="46" cy="24" rx="5" ry="2.2" transform="rotate(15 46 24)" fill="white" fillOpacity="0.55" />
      <circle cx="32" cy="32" r="7.5" fill={`url(#${uid}-bowKnot)`} stroke="#FFFDF9" strokeWidth="1.5" />
      <ellipse cx="29.8" cy="29.6" rx="2.4" ry="1.4" transform="rotate(-25 29.8 29.6)" fill="white" fillOpacity="0.7" />
    </svg>
  );
}

export function Sticker3DGift({ className = "w-10 h-10" }: { className?: string }) {
  const uid = useId();
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_6px_12px_rgba(173,52,83,0.24)]`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}-giftBody`} x1="12" y1="24" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE8EF" />
          <stop offset="100%" stopColor="#F4B2C5" />
        </linearGradient>
        <linearGradient id={`${uid}-giftLid`} x1="10" y1="20" x2="54" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF5F8" />
          <stop offset="100%" stopColor="#F7C2D2" />
        </linearGradient>
      </defs>
      <rect x="13" y="27" width="38" height="27" rx="7" fill={`url(#${uid}-giftBody)`} stroke="#FFFFFF" strokeWidth="1.6" />
      <rect x="28" y="27" width="8" height="27" fill="#C94A6A" />
      <rect x="10" y="20" width="44" height="10" rx="5" fill={`url(#${uid}-giftLid)`} stroke="#FFFFFF" strokeWidth="1.6" />
      <rect x="28" y="20" width="8" height="10" fill="#D95778" />
      <path d="M31 20C25 11 17 11 17 16C17 20 24 21 31 20Z" fill="#D95778" stroke="#FFF4F7" strokeWidth="1.2" />
      <path d="M33 20C39 11 47 11 47 16C47 20 40 21 33 20Z" fill="#E96D8D" stroke="#FFF4F7" strokeWidth="1.2" />
      <circle cx="32" cy="19.5" r="3.5" fill="#F6CE8B" stroke="#FFFDF8" strokeWidth="1" />
      <rect x="15" y="22" width="10" height="2.4" rx="1.2" fill="white" fillOpacity="0.65" />
    </svg>
  );
}

export function Sticker3DLipstick({ className = "w-10 h-10" }: { className?: string }) {
  const uid = useId();
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_6px_12px_rgba(173,52,83,0.24)]`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}-lipColor`} x1="25" y1="8" x2="39" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF7A9E" />
          <stop offset="55%" stopColor="#D63B63" />
          <stop offset="100%" stopColor="#9E2243" />
        </linearGradient>
        <linearGradient id={`${uid}-lipGold`} x1="22" y1="26" x2="42" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF0D2" />
          <stop offset="55%" stopColor="#E6B872" />
          <stop offset="100%" stopColor="#BC893D" />
        </linearGradient>
        <linearGradient id={`${uid}-lipCase`} x1="21" y1="36" x2="43" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE6EE" />
          <stop offset="100%" stopColor="#EFA2B9" />
        </linearGradient>
      </defs>
      <path d="M26 27V14C26 11 32 7 37 11C38.5 12.2 38 15 38 18V27H26Z" fill={`url(#${uid}-lipColor)`} />
      <path d="M28.5 14C29.5 12.5 32 11 34 12" stroke="white" strokeOpacity="0.65" strokeWidth="2" strokeLinecap="round" />
      <rect x="23" y="26" width="18" height="11" rx="3" fill={`url(#${uid}-lipGold)`} stroke="#FFFDF8" strokeWidth="1.2" />
      <rect x="21" y="36" width="22" height="20" rx="5.5" fill={`url(#${uid}-lipCase)`} stroke="#FFFFFF" strokeWidth="1.5" />
      <rect x="24.5" y="39" width="3.5" height="13" rx="1.75" fill="white" fillOpacity="0.55" />
    </svg>
  );
}

export function Sticker3DHeart({ className = "w-8 h-8" }: { className?: string }) {
  const uid = useId();
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_6px_10px_rgba(173,52,83,0.28)]`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${uid}-heart3d`} cx="35%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#FFC2D4" />
          <stop offset="48%" stopColor="#EB5B82" />
          <stop offset="100%" stopColor="#B42A4F" />
        </radialGradient>
      </defs>
      <path
        d="M32 54C32 54 10 40.5 10 23.5C10 15.5 16.2 10 23.2 10C27.8 10 30.8 12.6 32 15.2C33.2 12.6 36.2 10 40.8 10C47.8 10 54 15.5 54 23.5C54 40.5 32 54 32 54Z"
        fill={`url(#${uid}-heart3d)`}
        stroke="#FFF8FA"
        strokeWidth="2"
      />
      <ellipse cx="21.5" cy="19" rx="4.5" ry="2.4" transform="rotate(-32 21.5 19)" fill="white" fillOpacity="0.65" />
      <path d="M46 8L47.5 11.5L51 13L47.5 14.5L46 18L44.5 14.5L41 13L44.5 11.5L46 8Z" fill="#FFE0A3" stroke="#FFFDF6" strokeWidth="0.8" />
    </svg>
  );
}

export function Sticker3DCompact({ className = "w-9 h-9" }: { className?: string }) {
  const uid = useId();
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_6px_10px_rgba(173,52,83,0.22)]`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${uid}-compactOuter`} cx="35%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#FFF0F5" />
          <stop offset="70%" stopColor="#F5B4C7" />
          <stop offset="100%" stopColor="#D67291" />
        </radialGradient>
        <radialGradient id={`${uid}-blushPan`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFA9C1" />
          <stop offset="100%" stopColor="#C94A6A" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="21" r="14" fill={`url(#${uid}-compactOuter)`} stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="32" cy="21" r="10.5" fill="#E6F4FA" stroke="#E9C78F" strokeWidth="1.5" />
      <path d="M26 17L33 14M25 22L36 17" stroke="white" strokeOpacity="0.8" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="32" cy="41" r="15.5" fill={`url(#${uid}-compactOuter)`} stroke="#FFFFFF" strokeWidth="1.6" />
      <circle cx="32" cy="41" r="11" fill={`url(#${uid}-blushPan)`} stroke="#F4D7A3" strokeWidth="1.3" />
      <ellipse cx="28.5" cy="37.5" rx="3.2" ry="1.6" transform="rotate(-25 28.5 37.5)" fill="white" fillOpacity="0.45" />
    </svg>
  );
}

export function Sticker3DSparkle({ className = "w-7 h-7" }: { className?: string }) {
  const uid = useId();
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_4px_8px_rgba(199,154,82,0.45)]`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${uid}-sparkle3d`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFF7D6" />
          <stop offset="50%" stopColor="#F9CA68" />
          <stop offset="100%" stopColor="#C7882A" />
        </radialGradient>
      </defs>
      <path
        d="M24 4C25.8 14.2 33.8 22.2 44 24C33.8 25.8 25.8 33.8 24 44C22.2 33.8 14.2 25.8 4 24C14.2 22.2 22.2 14.2 24 4Z"
        fill={`url(#${uid}-sparkle3d)`}
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="20" r="2.2" fill="white" fillOpacity="0.75" />
    </svg>
  );
}

export function Sticker3DBrush({ className = "w-9 h-9" }: { className?: string }) {
  const uid = useId();
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_6px_10px_rgba(173,52,83,0.24)]`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${uid}-bristle`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFEBF1" />
          <stop offset="60%" stopColor="#F49DB8" />
          <stop offset="100%" stopColor="#C95679" />
        </radialGradient>
        <linearGradient id={`${uid}-ferrule`} x1="20" y1="28" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF1D6" />
          <stop offset="55%" stopColor="#E7B975" />
          <stop offset="100%" stopColor="#BC893D" />
        </linearGradient>
        <linearGradient id={`${uid}-handle`} x1="12" y1="44" x2="26" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFDDE8" />
          <stop offset="100%" stopColor="#E488A6" />
        </linearGradient>
      </defs>
      {/* Fluffy Brush Bristles */}
      <path
        d="M27 25C24 17 28 9 37 8C46 7 55 14 55 23C55 31 47 36 39 34L27 25Z"
        fill={`url(#${uid}-bristle)`}
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
      <ellipse cx="42" cy="16" rx="6" ry="3" transform="rotate(-25 42 16)" fill="white" fillOpacity="0.5" />
      {/* Rose-Gold Ferrule */}
      <path
        d="M20 35L28 24L40 33L31 43L20 35Z"
        fill={`url(#${uid}-ferrule)`}
        stroke="#FFFDF9"
        strokeWidth="1.4"
      />
      {/* Pastel Pink Handle */}
      <path
        d="M9 52C7.5 50.5 8 48 10 46L21 35L31 42L19 54C17 56 14 56 12 54L9 52Z"
        fill={`url(#${uid}-handle)`}
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
    </svg>
  );
}
