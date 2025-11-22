"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ConsenkoSection() {
  return (
    <section id="consenko" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Company
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Leading innovation at Consenko Studios
          </p>
        </div>

        <Card className="border-2 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Consenko Studios</CardTitle>
                  <CardDescription className="text-base">
                    Product & Process Engineering Group
                  </CardDescription>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-2"
              >
                <Link
                  href="https://www.consenko.com"
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
              Consenko is the ultimate engineering partner, a product and process engineering group dedicated to empowering global entrepreneurs and organizations with cutting-edge digital solutions and innovations. We specialize in crafting minimal viable products, seamless system integration, strategic app development, and AI-driven business transformation.
            </p>
            <div className="relative w-full bg-slate-100 rounded-lg overflow-hidden" style={{ paddingBottom: "75%", minHeight: "600px" }}>
              <iframe
                src="https://www.consenko.com"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Consenko Website"
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
            Director at Consenko Studios Private Limited
          </p>
        </div>
      </div>
    </section>
  );
}

