"use client";

import { useEffect } from "react";
import { Linkedin, Instagram, Twitter, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SocialMediaSection() {
  useEffect(() => {
    // Load Instagram embed script
    if (typeof window !== "undefined" && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Load Twitter embed script
    if (typeof window !== "undefined" && (window as any).twttr) {
      (window as any).twttr.widgets.load();
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    }
  }, []);

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
  ];

  return (
    <section id="socials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-4"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Follow me on social media for updates, insights, and more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

        {/* Embedded Feeds Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Instagram Embed */}
          <Card className="border-2 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">Instagram</CardTitle>
                  <p className="text-xs text-muted-foreground">@_shankar.jha</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center p-4">
                <div className="text-center">
                  <Instagram className="h-12 w-12 text-pink-500 mx-auto mb-3" />
                  <p className="text-sm text-foreground/70 mb-4">
                    Follow me on Instagram for daily updates
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <Link
                      href="https://www.instagram.com/_shankar.jha/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Twitter/X Embed */}
          <Card className="border-2 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500">
                  <Twitter className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">Twitter</CardTitle>
                  <p className="text-xs text-muted-foreground">@ShankarJha_</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg flex items-center justify-center p-4">
                <div className="text-center">
                  <Twitter className="h-12 w-12 text-sky-500 mx-auto mb-3" />
                  <p className="text-sm text-foreground/70 mb-4">
                    Follow me on Twitter for tech insights
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <Link
                      href="https://x.com/ShankarJha_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LinkedIn Embed */}
          <Card className="border-2 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">LinkedIn</CardTitle>
                  <p className="text-xs text-muted-foreground">shankarjha29</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center p-4">
                <div className="text-center">
                  <Linkedin className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <p className="text-sm text-foreground/70 mb-4">
                    Connect with me on LinkedIn
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <Link
                      href="https://www.linkedin.com/in/shankarjha29"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Direct Links Section */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60 mb-6">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialProfiles.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.name}
                  asChild
                  variant="outline"
                  className={`border-2 hover:bg-gradient-to-r ${social.color} hover:text-white transition-all duration-300`}
                >
                  <Link href={social.url} target="_blank" rel="noopener noreferrer">
                    <Icon className="mr-2 h-4 w-4" />
                    {social.name}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

