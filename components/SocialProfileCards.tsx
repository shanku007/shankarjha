"use client";

import { Linkedin, Instagram, Twitter, ExternalLink, Facebook } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SocialProfileCards() {
  const socialProfiles = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/_shankar.jha/",
      icon: Instagram,
      color: "from-pink-500 to-purple-500",
      hoverColor: "hover:from-pink-600 hover:to-purple-600",
      username: "_shankar.jha",
    },
    {
      name: "Twitter",
      url: "https://x.com/ShankarJha_",
      icon: Twitter,
      color: "from-sky-400 to-blue-500",
      hoverColor: "hover:from-sky-500 hover:to-blue-600",
      username: "ShankarJha_",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shankarjha29",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      username: "shankarjha29",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/shankar.jha.14/",
      icon: Facebook,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      username: "shankar.jha.14",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-4"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Follow me on social media for updates, insights, and more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialProfiles.map((social, index) => {
            const Icon = social.icon;
            return (
              <Card
                key={social.name}
                className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm relative overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative gradient corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${social.color} opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-full`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${social.color} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Link href={social.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <CardTitle className="text-xl">{social.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">@{social.username}</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${social.color} ${social.hoverColor} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <Link href={social.url} target="_blank" rel="noopener noreferrer">
                      Visit Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

