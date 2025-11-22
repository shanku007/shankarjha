"use client";

import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import WizcartSection from "@/components/WizcartSection";
import ConsenkoSection from "@/components/ConsenkoSection";
import PhilosophiesSection from "@/components/PhilosophiesSection";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { Button } from "@/components/ui/button";
import { Mail, ArrowDown, Code, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Animated background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-blue-400/20 rotate-45 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-4 border-purple-400/20 rotate-12 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-pink-400/20 rotate-45 animate-float animation-delay-4000"></div>
        </div>

        {/* Cursor follower effect */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-slide-in-up">
            {/* Icon badges */}
            <div className="flex justify-center gap-4 mb-6">
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-float">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-float animation-delay-2000">
                <Rocket className="h-6 w-6 text-purple-600" />
              </div>
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-float animation-delay-4000">
                <Sparkles className="h-6 w-6 text-pink-600" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Shankar Jha
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-semibold text-foreground/80">
                <span>Engineering Lead</span>
                <span className="text-blue-600">×</span>
                <span>Product Builder</span>
              </div>
              <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Transforming ideas into <span className="font-semibold text-blue-600">scalable</span>, market-ready tech products
                <br />
                <span className="text-base">Exploring SaaS, Compliance & FinTech</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <Link href="#about">
                  Learn More About Me
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105"
              >
                <ObfuscatedEmail className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </ObfuscatedEmail>
              </Button>
            </div>

            {/* Social Links in Hero */}
            <div className="pt-8">
              <p className="text-sm text-foreground/60 mb-4">Follow me on</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/_shankar.jha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 group"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6 text-pink-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/ShankarJha_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-500 group"
                  aria-label="Twitter"
                >
                  <svg className="h-6 w-6 text-sky-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/shankarjha29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 group"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="pt-12 animate-bounce">
              <Link href="#about" className="inline-block">
                <ArrowDown className="h-8 w-8 text-foreground/40 hover:text-foreground/60 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Philosophies Section */}
      <PhilosophiesSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Wizcart Section */}
      <WizcartSection />

      {/* Consenko Section */}
      <ConsenkoSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-block mb-6 p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Mail className="h-8 w-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Build Something Together
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're validating an idea or scaling early traction, I bring full-stack engineering, product thinking, and a founder's mindset to your build.
          </p>
          <ObfuscatedEmail 
            className="inline-flex items-center justify-center text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-md font-medium" 
            showText={true}
          >
            <Mail className="mr-2 h-5 w-5" />
          </ObfuscatedEmail>
        </div>
      </section>
    </>
  );
}

