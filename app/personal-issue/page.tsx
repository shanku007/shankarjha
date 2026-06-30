"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Heart, Users, Briefcase, ArrowRight, Brain, Target, Home, Compass, Sparkles, Ruler, Music, Utensils, Code, Rocket, Activity } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SocialProfileCards from "@/components/SocialProfileCards";
import ObfuscatedPhone from "@/components/ObfuscatedPhone";
import Link from "next/link";

export default function PersonalPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [personalImages, setPersonalImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch images dynamically from the API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        const data = await response.json();
        setPersonalImages(data.images || []);
      } catch (error) {
        console.error('Error fetching images:', error);
        // Fallback to empty array if API fails
        setPersonalImages([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const hobbies = [
    {
      title: "Sports",
      description: "Staying active through sports keeps me grounded and energized, whether it's cricket, football, or any competitive activity that challenges both body and mind.",
      icon: Activity,
      gradient: "from-green-100 to-emerald-100",
      iconColor: "text-green-600",
      bgGradient: "from-green-400/10 to-emerald-400/10",
    },
    {
      title: "Startups & Entrepreneurship",
      description: "I'm passionate about the startup ecosystem—from ideation to execution, learning from founders, and understanding what makes products succeed in the market.",
      icon: Rocket,
      gradient: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-600",
      bgGradient: "from-blue-400/10 to-cyan-400/10",
    },
    {
      title: "Building Side Projects",
      description: "I love hacking on side projects and experimenting with new technologies. It's where I learn fastest and turn curiosity into working prototypes.",
      icon: Code,
      gradient: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600",
      bgGradient: "from-purple-400/10 to-pink-400/10",
    },
    {
      title: "Music",
      description: "Music is a constant companion—whether listening to explore new sounds or using it as a backdrop for deep work and reflection.",
      icon: Music,
      gradient: "from-pink-100 to-rose-100",
      iconColor: "text-pink-600",
      bgGradient: "from-pink-400/10 to-rose-400/10",
    },
    {
      title: "Cooking",
      description: "Experimenting in the kitchen is both creative and practical. I enjoy trying new recipes and techniques, turning cooking into a form of mindful practice.",
      icon: Utensils,
      gradient: "from-orange-100 to-amber-100",
      iconColor: "text-orange-600",
      bgGradient: "from-orange-400/10 to-amber-400/10",
    },
  ];

  const philosophies = [
    {
      title: "Advaita - Oneness",
      description: "I believe in the fundamental unity of all existence. The separation between self and other, between observer and observed, is an illusion. Understanding this oneness brings peace and clarity to all aspects of life.",
    },
    {
      title: "Karma - Action & Consequence",
      description: "Every action has consequences, and we are responsible for our choices. I strive to act with awareness and intention, knowing that my actions shape not just my future, but also impact the world around me.",
    },
    {
      title: "Dharma - Righteous Duty",
      description: "Living in alignment with one's dharma means fulfilling one's duties with integrity and purpose. I believe in doing what is right, not just what is convenient, and serving a purpose greater than oneself.",
    },
    {
      title: "Self-Realization",
      description: "The journey inward is as important as the journey outward. Through self-reflection and meditation, I seek to understand my true nature beyond the ego and material identifications.",
    },
    {
      title: "Detachment & Equanimity",
      description: "While I engage fully in life and work, I practice detachment from outcomes. This doesn't mean indifference, but rather maintaining equanimity in success and failure, understanding that both are part of the journey.",
    },
    {
      title: "Service & Compassion",
      description: "True fulfillment comes from serving others and acting with compassion. I believe that our work and actions should contribute to the well-being of others and the greater good.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden mt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/25 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/25 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              Personal Journey
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A glimpse into my background, education, values, interests, and the people who matter most
            </p>
          </div>
        </div>
      </section>

      {/* Background & Personal Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Personal Details */}
            <Card className="border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-1 glass">
              <CardHeader className="relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-bl-full"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Personal Details</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-pink-600 mt-1" />
                    <div>
                      <p className="font-semibold">Date of Birth</p>
                      <p className="text-foreground/70">29th November 1998</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <p className="font-semibold">Birthplace</p>
                      <p className="text-foreground/70">Harari village, Madhubani District, Bihar, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Home className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">Current Residence</p>
                      <p className="text-foreground/70">New Delhi, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Ruler className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold">Height</p>
                      <p className="text-foreground/70">5'11"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Background */}
            <Card className="border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-1 glass">
              <CardHeader className="relative">
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-br-full"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                    <Compass className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Background</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-foreground/80 leading-relaxed">
                  I was born in <span className="font-semibold text-blue-600">Harari village</span> of Madhubani District, Bihar. I spent my early life in Bihar itself and moved to Delhi where I started my schooling.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-foreground/60">
                    <span className="font-semibold text-foreground/80">Political Ideology:</span> Center-Right
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Section */}
          <Card className="border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-1 glass mt-8">
            <CardHeader className="relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-bl-full"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100 hover:shadow-md transition-all">
                  <h4 className="font-semibold text-indigo-900 text-lg mb-2">B.Tech</h4>
                  <p className="text-sm font-medium text-foreground/80">Information Technology</p>
                  <p className="text-sm text-foreground/70 mt-1">Bharati Vidyapeeth College of Engineering</p>
                  <p className="text-xs text-foreground/60 mt-2">Guru Gobind Singh Indraprastha University</p>
                  <p className="text-xs text-indigo-600 font-medium mt-2">2016 - 2020</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100 hover:shadow-md transition-all">
                  <h4 className="font-semibold text-blue-900 text-lg mb-2">12th Standard</h4>
                  <p className="text-sm text-foreground/70 mt-1">Govt. Co-ed Senior Secondary School RK Puram</p>
                  <p className="text-xs text-foreground/60 mt-2">New Delhi, India</p>
                  <p className="text-xs text-blue-600 font-medium mt-2">95%</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100 hover:shadow-md transition-all">
                  <h4 className="font-semibold text-purple-900 text-lg mb-2">10th Standard</h4>
                  <p className="text-sm text-foreground/70 mt-1">Govt. Co-ed Senior Secondary School RK Puram</p>
                  <p className="text-xs text-foreground/60 mt-2">New Delhi, India</p>
                  <p className="text-xs text-purple-600 font-medium mt-2">9.6 CGPA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Personal Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Personal Insights
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
              From a village in Madhubani to building software in Delhi—the worldview, values, and ambitions that drive how I live and what I build
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Spirituality & Science */}
            <Card className="border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-2 glass group">
              <CardHeader>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100">
                    <Brain className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Spirituality & Science</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  I am <span className="font-semibold text-purple-600">spiritual, not religious</span>. Advaita's idea of oneness shapes how I see the world far more than any ritual does—I'd rather sit with the hard questions of existence through introspection than inherit answers secondhand.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  At the same time I'm a firm <span className="font-semibold text-blue-600">proponent of scientific temper</span>—evidence over assertion, inquiry over dogma. For me science and spirituality aren't rivals; both are honest attempts to get closer to what's true, and I refuse to give up either one.
                </p>
              </CardContent>
            </Card>

            {/* Practicality & Balance */}
            <Card className="border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-2 glass group">
              <CardHeader>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100">
                    <Heart className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Practicality & Balance</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  At core I'm a <span className="font-semibold text-blue-600">practical person</span>. I feel things deeply, but I don't let emotion drive—it gets a seat at the table, not the wheel. Engineering taught me to weigh trade-offs honestly, and I apply the same discipline to life as I do to code.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  I <span className="font-semibold text-purple-600">respect culture, but contextually</span>. I trace where a tradition came from, how it evolved, and whether it still earns its place today. That's also where my <span className="font-semibold text-foreground/80">center-right</span> instinct shows: keep what works, question what's merely inherited.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Goals & Aspirations */}
            <Card className="border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-2 glass group">
              <CardHeader>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Goals & Aspirations</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  My <span className="font-semibold text-green-600">primary goal</span> is to build a software startup that solves a real problem at scale. As an Engineering Lead and Director, I already live this daily—shipping fintech and SaaS platforms 0→1, chasing product-market fit, and compounding what I learn with every build.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Entrepreneurship isn't a someday plan; it's the path I'm already walking. Turning ideas into products that matter, building teams that execute, and creating value that compounds—that's the work I want to be doing for the rest of my life.
                </p>
              </CardContent>
            </Card>

            {/* Lifestyle & Preferences */}
            <Card className="border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-2 glass group">
              <CardHeader>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400/10 to-amber-400/10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-orange-100 to-amber-100">
                    <Home className="h-5 w-5 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Lifestyle & Preferences</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  Having grown up in <span className="font-semibold text-orange-600">Harari village</span>, I still prefer that environment—the quiet, the closeness to nature, the simplicity. The one non-negotiable is <span className="font-semibold text-blue-600">strong digital access</span>: give me a fast connection and I can build from anywhere, village or city, no difference.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  I'm not much of a routine traveler, but <span className="font-semibold text-purple-600">unique, unexplored places</span> pull me in. Hidden corners, authentic cultures, paths most people skip—that's the kind of travel that feels worth the trip.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hobbies & Interests Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Hobbies & Interests
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
              Activities and passions that shape who I am beyond work
            </p>
          </div>

          {/* Hobbies as Chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={index}
                  className={`group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-violet-200/50 bg-gradient-to-r ${hobby.gradient} shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default`}
                >
                  <Icon className={`h-4 w-4 ${hobby.iconColor} transition-transform group-hover:scale-110`} />
                  <span className={`font-medium text-sm ${hobby.iconColor}`}>
                    {hobby.title}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <Card className="border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 glass relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-full"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Professional Portfolio</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4">
              <p className="text-foreground/80 leading-relaxed text-lg">
                I'm currently working as an <span className="font-semibold text-blue-600">Engineering Lead & Product Builder</span>, specializing in building scalable SaaS platforms and fintech solutions. I help founders and teams transform ideas into market-ready tech products, with expertise in full-stack development, machine learning, and 0→1 product building.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Currently serving as <span className="font-semibold">Director at <Link href="https://www.consenko.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors underline">Consenko Studios</Link></span> and <span className="font-semibold">Engineering Lead at Wizcart Technologies</span>, where I lead engineering teams and build innovative platforms that connect users with skilled and verified service providers.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-modern-lg hover:shadow-glow">
                  <Link href="/">
                    Know More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media Profile Cards */}
      <SocialProfileCards />
      
      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
              <Card className="border border-violet-200/50 shadow-modern glass inline-block max-w-md">
              <CardContent className="p-6">
                <p className="text-sm text-foreground/60 mb-3">To know me more, contact me at:</p>
                <ObfuscatedPhone className="text-lg font-semibold text-blue-600 hover:text-purple-600 transition-colors justify-center" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Family Photos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-8 w-8 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Family Photos
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
              Precious moments with the people who matter most
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {isLoading ? (
              <div className="col-span-full text-center py-12">
                <p className="text-foreground/60">Loading images...</p>
              </div>
            ) : personalImages.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-foreground/60">No images found</p>
              </div>
            ) : (
              personalImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group glass"
                onClick={() => setSelectedImage(image)}
                data-image-protected="true"
              >
                <div className="relative aspect-square overflow-hidden" data-image-protected="true">
                  <Image
                    src={`/images/personal/${image}`}
                    alt={`Family photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    data-image-protected="true"
                    loading="lazy"
                  />
                </div>
              </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Philosophies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="h-8 w-8 text-pink-600" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                My Philosophies
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophies.map((philosophy, index) => (
              <Card
                key={index}
                className="border border-violet-200/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-2 glass group"
              >
                <CardHeader>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
                  <CardTitle className="text-xl relative z-10 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-pink-600 to-purple-600 rounded-full"></span>
                    {philosophy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-foreground/80 leading-relaxed">{philosophy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle>Family Photo</DialogTitle>
                <DialogDescription>Precious memories</DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video w-full" data-image-protected="true">
                <Image
                  src={`/images/personal/${selectedImage}`}
                  alt="Family photo"
                  fill
                  className="object-contain rounded-lg"
                  sizes="100vw"
                  data-image-protected="true"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

