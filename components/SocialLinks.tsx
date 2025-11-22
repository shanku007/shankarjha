"use client";

import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shankarjha29",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_shankar.jha/",
    icon: Instagram,
    color: "hover:text-pink-600",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/shankar.jha.14/",
    icon: Facebook,
    color: "hover:text-blue-500",
  },
  {
    name: "Twitter",
    url: "https://x.com/ShankarJha_",
    icon: Twitter,
    color: "hover:text-sky-500",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <Button
              variant="ghost"
              size="icon"
              className={`text-slate-400 ${social.color} transition-all hover:scale-110`}
            >
              <Icon className="h-5 w-5" />
            </Button>
          </Link>
        );
      })}
    </div>
  );
}

