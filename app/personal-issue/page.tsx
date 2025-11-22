"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Heart, Users, Briefcase, ArrowRight } from "lucide-react";
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
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden mt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Personal Journey
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A glimpse into my background, values, and the people who matter most
            </p>
          </div>
        </div>
      </section>

      {/* Background & Birth Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Birth Information */}
            <Card className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-bl-full"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Birth Information</CardTitle>
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
                </div>
              </CardContent>
            </Card>

            {/* Background */}
            <Card className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="relative">
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-br-full"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Background</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-foreground/80 leading-relaxed">
                  I was born in <span className="font-semibold text-blue-600">Harari village</span> of Madhubani District, Bihar. I spent my early life in Bihar itself and moved to Delhi where I completed my 10th from <span className="font-semibold">Govt. Co-ed Senior Secondary School RK Puram</span>, New Delhi, and 12th from the same school.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  I completed my <span className="font-semibold text-purple-600">B.Tech in Information Technology</span> from Bharati Vidyapeeth College of Engineering, which falls under Guru Gobind Singh Indraprastha University.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
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
                Currently serving as <span className="font-semibold">Director at Consenko Studios</span> and <span className="font-semibold">Engineering Lead at Wizcart Technologies</span>, where I lead engineering teams and build innovative platforms that connect users with skilled and verified service providers.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
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
            <Card className="border-2 shadow-lg bg-white/80 backdrop-blur-sm inline-block max-w-md">
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
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                className="overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group bg-white/80 backdrop-blur-sm"
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
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                My Philosophies
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophies.map((philosophy, index) => (
              <Card
                key={index}
                className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group"
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

