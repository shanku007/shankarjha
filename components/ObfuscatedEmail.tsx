"use client";

import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
  className?: string;
  showText?: boolean;
  children?: React.ReactNode;
}

export default function ObfuscatedEmail({ 
  className = "", 
  showText = true,
  children 
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Obfuscated email - split into parts to prevent simple scraping
    // Using character codes and string manipulation
    const part1 = String.fromCharCode(116, 104, 101); // "the"
    const part2 = String.fromCharCode(46); // "."
    const part3 = String.fromCharCode(115, 104, 97, 110, 107, 97, 114); // "shankar"
    const part4 = String.fromCharCode(46); // "."
    const part5 = String.fromCharCode(106, 104, 97); // "jha"
    const part6 = String.fromCharCode(64); // "@"
    const part7 = String.fromCharCode(103, 109, 97, 105, 108); // "gmail"
    const part8 = String.fromCharCode(46); // "."
    const part9 = String.fromCharCode(99, 111, 109); // "com"
    
    // Reconstruct email
    const reconstructed = part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8 + part9;
    setEmail(reconstructed);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <span className={className} aria-label="Email address">
        {children || "Loading..."}
      </span>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Decode and open email client
    window.location.href = `mailto:${email}`;
  };

  // If children are provided and showText is false, render children with email in href
  if (children && !showText) {
    return (
      <a
        href={`mailto:${email}`}
        className={className}
        onClick={handleClick}
        data-email={btoa(email)} // Base64 encoded for extra obfuscation
        data-obfuscated="true"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={handleClick}
      data-email={btoa(email)} // Base64 encoded for extra obfuscation
      data-obfuscated="true"
    >
      {showText ? email : children}
    </a>
  );
}

