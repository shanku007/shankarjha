"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: Array<{ href: string; label: string; isHome?: boolean }> = [
    { href: "/", label: "Home", isHome: true },
    { href: "#about", label: "About" },
    { href: "#blog", label: "Blog" },
    { href: "#wizcart", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // If not on home page, prepend "/" to make links go to home page
  const getNavHref = (href: string, isHome?: boolean) => {
    if (isHome) return "/";
    return pathname === "/" ? href : `/${href}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
            
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 relative group"
            >
              <span className="relative z-10">Shankar Jha</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getNavHref(item.href, item.isHome)}
                className="text-foreground/80 hover:text-foreground transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md shadow-lg -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getNavHref(item.href, item.isHome)}
                className="block py-3 px-2 text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

