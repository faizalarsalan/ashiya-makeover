import React from "react";

export function BrandMonogram({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" fill="#2D1B22" stroke="#D8AE6E" strokeWidth="1.75" />
      <circle
        cx="32"
        cy="32"
        r="24.5"
        stroke="#D8AE6E"
        strokeOpacity="0.65"
        strokeWidth="1"
        strokeDasharray="2.5 2.5"
      />
      <path
        d="M32 7C34 10 36 11 38.5 10.5C37 13 38.5 14.5 41 15C38 15.8 36 15.2 32 13C28 15.2 26 15.8 23 15C25.5 14.5 27 13 25.5 10.5C28 11 30 10 32 7Z"
        fill="#E9C78F"
      />
      <path
        d="M32 57C34 54 36 53 38.5 53.5C37 51 38.5 49.5 41 49C38 48.2 36 48.8 32 51C28 48.8 26 48.2 23 49C25.5 49.5 27 51 25.5 53.5C28 53 30 54 32 57Z"
        fill="#E9C78F"
      />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fill="#F5DCB0"
        fontSize="26"
        fontWeight="600"
        fontFamily="Georgia, serif"
      >
        A
      </text>
    </svg>
  );
}
