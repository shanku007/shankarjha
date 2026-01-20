"use client";

import Link from "next/link";

interface SignatureLogoProps {
  className?: string;
  showText?: boolean;
}

export default function SignatureLogo({ className = "", showText = false }: SignatureLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 group ${className}`}>
      <div className="relative flex items-center">
        {/* Full name "Shankar Jha" in elegant flowing style */}
        <svg
          width="160"
          height="40"
          viewBox="0 0 160 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Text with gradient */}
          <text
            x="80"
            y="28"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="24"
            fontWeight="400"
            textAnchor="middle"
            fill="url(#signatureGradient)"
            className="animate-fade-in"
            style={{ fontStyle: 'italic', letterSpacing: '1.5px' }}
          >
            Shankar Jha
          </text>

          {/* Flowing underline decoration */}
          <path
            d="M15 34 Q40 36, 65 34 Q90 32, 115 34 Q140 36, 145 34"
            stroke="url(#signatureGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            className="animate-draw"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0.6 }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(262, 83%, 58%)" />
              <stop offset="50%" stopColor="hsl(280, 91%, 70%)" />
              <stop offset="100%" stopColor="hsl(330, 81%, 60%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {showText && (
        <span className="text-xl font-bold gradient-text hidden sm:inline-block">
          Shankar Jha
        </span>
      )}
    </Link>
  );
}
