"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export default function AboutSection() {
    const skills = [
        "Platform as a Service (PAAS)",
        "Software as a Service (SaaS)",
        "Software Development",
        "Machine Learning",
        "Full Stack Development",
        "Product Engineering",
    ];

    const certifications = [
        "Introduction to Data Science in Python",
        "Convolutional Neural Networks",
        "Neural Networks and Deep Learning",
        "Sequence Models",
        "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
    ];

    const experience = [
        {
            company: "Consenko Studios Private Limited",
            role: "Director",
            period: "February 2025 - Present",
            location: "Noida, Uttar Pradesh, India",
        },
        {
            company: "Wizcart Technologies LLC",
            role: "Engineering Lead",
            period: "February 2025 - Present",
            location: "Noida, Uttar Pradesh, India",
        },
        {
            company: "AVIZVA",
            role: "Senior Development Engineer - Applied Machine Learning",
            period: "April 2023 - February 2025",
            location: "Gurugram, Haryana, India",
        },
    ];

    return (
        <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <div className="flex justify-center gap-2 mt-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse animation-delay-2000"></div>
                        <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse animation-delay-4000"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Main Content */}
                    <div className="space-y-6">
                        <Card className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                            <CardHeader className="relative">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-full"></div>
                                <CardTitle className="text-2xl relative z-10">Engineering Lead & Product Builder</CardTitle>
                                <CardDescription className="text-base relative z-10">
                                    Exploring SaaS, Compliance & FinTech | Hit me Up if you are building something exciting.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 relative z-10">
                                <p className="text-foreground/80 leading-relaxed">
                                    I help founders and teams turn ideas into working software — <span className="font-semibold text-blue-600">fast</span>. As a software engineer and <span className="font-semibold text-purple-600">0→1 product builder</span>, I specialize in transforming vision into scalable, functional, and market-ready tech products. From building SaaS platforms to developing tools for compliance-heavy industries, I bring a bias for execution and a deep understanding of both product and code.
                                </p>
                                <p className="text-foreground/80 leading-relaxed">
                                    I'm especially interested in collaborating with serial founders and SaaS operators looking to accelerate MVP development, and anyone solving real-world problems with technology. Whether you're validating an idea or scaling early traction, I bring full-stack engineering, product thinking, and a founder's mindset to your build.
                                </p>
                                <div className="pt-4">
                                    <Button asChild variant="outline" className="w-full sm:w-auto border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                                        <ObfuscatedEmail className="flex items-center">
                                            <Mail className="mr-2 h-4 w-4" />
                                            Get in Touch
                                        </ObfuscatedEmail>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Skills & Certifications */}
                    <div className="space-y-6">
                        <Card className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                            <CardHeader className="relative">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-bl-full"></div>
                                <CardTitle className="text-xl relative z-10 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></span>
                                    Top Skills
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 hover:scale-105 cursor-default"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                            <CardHeader className="relative">
                                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-br-full"></div>
                                <CardTitle className="text-xl relative z-10 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></span>
                                    Languages
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                                        <span className="font-medium">English</span>
                                        <span className="text-sm text-muted-foreground bg-white px-3 py-1 rounded-full">Professional Working</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                                        <span className="font-medium">Hindi</span>
                                        <span className="text-sm text-muted-foreground bg-white px-3 py-1 rounded-full">Full Professional</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                            <CardHeader className="relative">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-bl-full"></div>
                                <CardTitle className="text-xl relative z-10 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-gradient-to-b from-yellow-600 to-orange-600 rounded-full"></span>
                                    Certifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <ul className="space-y-3">
                                    {certifications.map((cert, index) => (
                                        <li key={index} className="flex items-start group">
                                            <span className="text-blue-600 mr-3 mt-1 group-hover:scale-125 transition-transform">✓</span>
                                            <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Experience */}
                <Card className="border-2 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-bl-full"></div>
                        <CardTitle className="text-2xl relative z-10 flex items-center gap-3">
                            <span className="w-2 h-8 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full"></span>
                            Recent Experience
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <div className="space-y-6">
                            {experience.map((exp, index) => (
                                <div
                                    key={index}
                                    className="relative pl-6 py-4 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 rounded-r-lg transition-all duration-300 group border-l-4"
                                    style={{
                                        borderLeftColor: index === 0 ? '#3b82f6' : index === 1 ? '#9333ea' : '#ec4899',
                                    }}
                                >
                                    <div
                                        className="absolute -left-2 top-6 w-4 h-4 rounded-full group-hover:scale-125 transition-transform"
                                        style={{
                                            backgroundColor: index === 0 ? '#3b82f6' : index === 1 ? '#9333ea' : '#ec4899',
                                        }}
                                    ></div>
                                    <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                                    <p className="text-blue-600 font-medium">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground">{exp.period} • {exp.location}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

