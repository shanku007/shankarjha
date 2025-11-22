"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WizcartSection() {
  return (
    <section id="wizcart" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What I'm Building
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Currently working on Wizcart - An online platform connecting you with skilled and verified service providers
          </p>
        </div>

        <Card className="border-2 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Wizcart</CardTitle>
                  <CardDescription className="text-base">
                    Service Provider Platform
                  </CardDescription>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-2"
              >
                <Link
                  href="https://wizcart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Wizcart is an online platform designed to connect you with a network of skilled and verified service providers. Whether you need professional services, expert consultation, or specialized assistance, Wizcart makes it easy to find and connect with the right service providers.
            </p>
            <div className="relative w-full bg-slate-100 rounded-lg overflow-hidden" style={{ paddingBottom: "75%", minHeight: "600px" }}>
              <iframe
                src="https://wizcart.com"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Wizcart Website"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-foreground/60 text-sm">
            Engineering Lead at Wizcart Technologies LLC
          </p>
        </div>
      </div>
    </section>
  );
}

