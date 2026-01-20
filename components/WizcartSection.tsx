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
            Projects I'm currently building and working on
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Wizcart */}
          <Card className="border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-1 glass overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-violet-200/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-modern-lg">
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
                  className="border-2 border-violet-200 hover:border-violet-300"
                  size="sm"
                >
                  <Link
                    href="https://wizcart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-foreground/80 mb-4 leading-relaxed">
                An online platform connecting you with skilled and verified service providers. Whether you need professional services, expert consultation, or specialized assistance, Wizcart makes it easy to find and connect with the right service providers.
              </p>
            </CardContent>
          </Card>

          {/* Khataai */}
          <Card className="border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-1 glass overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-violet-200/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-modern-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Khataai</CardTitle>
                    <CardDescription className="text-base">
                      Developer Platform
                    </CardDescription>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-violet-200 hover:border-violet-300"
                  size="sm"
                >
                  <Link
                    href="https://dev.khataai.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-foreground/80 mb-4 leading-relaxed">
                A developer platform and tooling ecosystem designed to empower developers with the resources and tools they need to build better software faster.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-foreground/60 text-sm">
            Engineering Lead at Wizcart Technologies LLC
          </p>
        </div>
      </div>
    </section>
  );
}

