"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  // Placeholder blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Building SaaS Products from 0→1",
      description: "Lessons learned from building scalable SaaS platforms and transforming ideas into market-ready products.",
      date: "Coming Soon",
      category: "Product",
    },
    {
      id: 2,
      title: "Machine Learning in Production",
      description: "Best practices for deploying ML models and building robust pipelines for real-world applications.",
      date: "Coming Soon",
      category: "Engineering",
    },
    {
      id: 3,
      title: "FinTech & Compliance Engineering",
      description: "Navigating the complexities of building compliant financial technology solutions.",
      date: "Coming Soon",
      category: "FinTech",
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Blog
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-4"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Thoughts on software engineering, product building, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group bg-white/80 backdrop-blur-sm relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-bl-full group-hover:from-purple-400/20 group-hover:to-pink-400/20 transition-all"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full group-hover:from-purple-200 group-hover:to-pink-200 transition-all">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground bg-slate-100 px-2 py-1 rounded-full">{post.date}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors relative z-10">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {post.description}
                </CardDescription>
                <Button variant="ghost" className="group/btn w-full justify-start" disabled>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More blog posts coming soon. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
}

