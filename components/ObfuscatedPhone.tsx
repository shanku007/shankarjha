"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

interface ObfuscatedPhoneProps {
  className?: string;
  showIcon?: boolean;
}

export default function ObfuscatedPhone({ 
  className = "",
  showIcon = true
}: ObfuscatedPhoneProps) {
  const [phone, setPhone] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Obfuscated phone - using character codes to prevent scraping
    const part1 = String.fromCharCode(43); // "+"
    const part2 = String.fromCharCode(57, 49); // "91"
    const part3 = String.fromCharCode(55, 50, 49, 48); // "7210"
    const part4 = String.fromCharCode(51, 51, 56, 54, 48, 57); // "338609"
    
    // Reconstruct phone
    const reconstructed = part1 + part2 + part3 + part4;
    setPhone(reconstructed);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <span className={className} aria-label="Phone number">
        Loading...
      </span>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Open phone dialer
    window.location.href = `tel:${phone}`;
  };

  return (
    <a
      href={`tel:${phone}`}
      className={`flex items-center gap-2 ${className}`}
      onClick={handleClick}
      data-phone={btoa(phone)} // Base64 encoded for extra obfuscation
      data-obfuscated="true"
    >
      {showIcon && <Phone className="h-4 w-4" />}
      <span>{phone}</span>
    </a>
  );
}

