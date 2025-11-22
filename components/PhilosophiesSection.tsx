"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Users, Zap, Scale } from "lucide-react";

export default function PhilosophiesSection() {
  const philosophies = [
    {
      title: "Continuous Learning",
      description: "I believe in the power of continuous learning and growth. Every challenge is an opportunity to learn something new and become better.",
      icon: Lightbulb,
    },
    {
      title: "Building for Impact",
      description: "Technology should solve real problems and create meaningful impact. I focus on building products that make a difference in people's lives.",
      icon: Target,
    },
    {
      title: "Collaboration & Teamwork",
      description: "Great products are built by great teams. I value collaboration, open communication, and the collective intelligence of diverse perspectives.",
      icon: Users,
    },
    {
      title: "Execution Over Perfection",
      description: "Perfect is the enemy of done. I believe in shipping fast, learning from feedback, and iterating to build better solutions.",
      icon: Zap,
    },
    {
      title: "Work-Life Balance",
      description: "Sustainable success comes from maintaining a healthy balance between work, personal growth, and relationships with family and friends.",
      icon: Scale,
    },
    {
      title: "Customer-Centric Approach",
      description: "Understanding user needs and solving real problems drives everything I build. The best products emerge from deep empathy and user feedback.",
      icon: Target,
    },
  ];

  return (
    <section id="philosophies" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Philosophies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Principles that guide my work and approach to building products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((philosophy, index) => {
            const Icon = philosophy.icon;
            return (
              <Card
                key={index}
                className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group"
              >
                <CardHeader>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                      {philosophy.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-foreground/80 leading-relaxed">{philosophy.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

