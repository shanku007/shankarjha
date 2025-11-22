import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageProtection from "@/components/ImageProtection";
import Clarity from "@/components/Clarity";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shankar Jha | Engineering Lead & Product Builder",
  description: "Engineering Lead & Product Builder (0→1) | Exploring SaaS, Compliance & FinTech | Building scalable tech products",
  keywords: ["Engineering Lead", "Software Engineer", "Product Builder", "SaaS", "FinTech", "Full Stack Developer"],
  authors: [{ name: "Shankar Jha" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Shankar Jha | Engineering Lead & Product Builder",
    description: "Engineering Lead & Product Builder (0→1) | Exploring SaaS, Compliance & FinTech",
    type: "website",
  },
  other: {
    'referrer-policy': 'no-referrer-when-downgrade',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Clarity />
        <ImageProtection />
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://platform.twitter.com/widgets.js"
          strategy="lazyOnload"
          charSet="utf-8"
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

