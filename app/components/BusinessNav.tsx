"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "home", label: "Home", href: "/business", isScroll: false },
  { id: "about", label: "About", href: "/about", isScroll: false },
  { id: "work", label: "Our Work", href: "/our-work", isScroll: false },
  { id: "solutions", label: "Solutions", href: "/solutions", isScroll: false },
  { id: "contact", label: "Contact", href: "/contact", isScroll: false },
];

export default function BusinessNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Set active section based on pathname
    if (pathname === "/business") {
      setActiveSection("home");
    } else if (pathname === "/about") {
      setActiveSection("about");
    } else if (pathname === "/our-work") {
      setActiveSection("work");
    } else if (pathname === "/solutions") {
      setActiveSection("solutions");
    } else if (pathname === "/contact") {
      setActiveSection("contact");
    }
  }, [pathname]);


  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <video 
            src="/assets/logo.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-12 h-12 object-contain"
          />
          <span className="font-bold tracking-widest text-lg hidden sm:block group-hover:text-zinc-300 transition-colors">
            MODIVI GROUP
          </span>
        </Link>

        {/* Navigation Tabs */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-950/50 border border-zinc-800 rounded-full px-2 py-1.5">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`
                relative px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300
                ${activeSection === item.id 
                  ? "text-black" 
                  : "text-zinc-400 hover:text-zinc-200"
                }
              `}
            >
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-white rounded-full -z-10 animate-in fade-in duration-200" />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link 
          href="/contact"
          className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-zinc-200 transition-colors uppercase tracking-wide"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-center gap-1 px-4 pb-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`
              relative px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300
              ${activeSection === item.id 
                ? "text-black bg-white rounded-full" 
                : "text-zinc-500 hover:text-zinc-200"
              }
            `}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
