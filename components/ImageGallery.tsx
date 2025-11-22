"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "portfolio" | "personal";
  title?: string;
}

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Placeholder images - replace with actual images
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      alt: "Project Screenshot 1",
      category: "portfolio",
      title: "SaaS Platform Dashboard",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      alt: "Project Screenshot 2",
      category: "portfolio",
      title: "FinTech Application",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      alt: "Project Screenshot 3",
      category: "portfolio",
      title: "ML Pipeline Interface",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      alt: "Personal Photo 1",
      category: "personal",
      title: "Conference Talk",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      alt: "Personal Photo 2",
      category: "personal",
      title: "Team Collaboration",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      alt: "Personal Photo 3",
      category: "personal",
      title: "Workshop Session",
    },
  ];

  const [filter, setFilter] = useState<"all" | "portfolio" | "personal">("all");

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-orange-600 mx-auto rounded-full mb-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === "all"
                ? "bg-gradient-to-r from-pink-600 to-orange-600 text-white shadow-lg"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("portfolio")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === "portfolio"
                ? "bg-gradient-to-r from-pink-600 to-orange-600 text-white shadow-lg"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setFilter("personal")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === "personal"
                ? "bg-gradient-to-r from-pink-600 to-orange-600 text-white shadow-lg"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            Personal
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group bg-white/80 backdrop-blur-sm relative"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Category badge */}
              <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
              
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title && (
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    )}
                    <p className="text-sm text-white/90 capitalize flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedImage.title || selectedImage.alt}</DialogTitle>
                  <DialogDescription className="capitalize">
                    {selectedImage.category}
                  </DialogDescription>
                </DialogHeader>
                <div className="relative aspect-video w-full">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain rounded-lg"
                    sizes="100vw"
                  />
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

