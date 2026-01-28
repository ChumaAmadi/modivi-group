"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { 
    id: "home", 
    label: "Home", 
    href: "/business", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  { 
    id: "about", 
    label: "About", 
    href: "/about", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4m0-4h.01"/>
      </svg>
    )
  },
  { 
    id: "work", 
    label: "Our Work", 
    href: "/our-work", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M7 7h10M7 12h10M7 17h10"/>
      </svg>
    )
  },
  { 
    id: "solutions", 
    label: "Solutions", 
    href: "/solutions", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2Z"/>
      </svg>
    )
  },
  { 
    id: "contact", 
    label: "Contact", 
    href: "/contact", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    )
  },
];

export default function BusinessNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Set active section based on pathname
    if (pathname === "/business") {
      setActiveSection("home");
    } else if (pathname === "/about") {
      setActiveSection("about");
    } else if (pathname === "/our-work") {
      setActiveSection("work");
    } else if (pathname.startsWith("/solutions")) {
      setActiveSection("solutions");
    } else if (pathname === "/contact") {
      setActiveSection("contact");
    }
  }, [pathname]);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);


  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <video 
              src="/assets/logo.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <span className="font-bold tracking-widest text-sm sm:text-base lg:text-lg hidden sm:block group-hover:text-zinc-300 transition-colors">
              MODIVI GROUP
            </span>
          </Link>

          {/* Desktop Navigation Tabs */}
          <div className="hidden lg:flex items-center gap-1 bg-zinc-950/50 border border-zinc-800 rounded-full px-2 py-1.5">
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
                  <div className="absolute inset-0 bg-white rounded-full -z-10 animate-in fade-in duration-200 shadow-[0_0_25px_rgba(255,255,255,0.6)]" />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <a 
            href="https://form.jotform.com/260270918663057"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-white text-black px-6 py-2 text-sm font-bold hover:bg-zinc-200 transition-colors uppercase tracking-wide"
          >
            Get Started
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-zinc-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="6" y2="6"/>
                <line x1="3" x2="21" y1="12" y2="12"/>
                <line x1="3" x2="21" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-in */}
      <div className={`
        fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black border-l border-zinc-800 z-40 lg:hidden
        transform transition-all duration-500 ease-out shadow-2xl
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        
        <div className="relative flex flex-col h-full">
          {/* Menu Header */}
          <div className="px-6 pt-8 pb-6 border-b border-zinc-800/50">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">Navigation</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`
                    group relative flex items-center gap-4 px-4 py-4 text-sm font-bold uppercase tracking-wider 
                    transition-all duration-300 rounded-xl overflow-hidden
                    ${mobileMenuOpen ? 'animate-in slide-in-from-right-10 fade-in' : ''}
                    ${activeSection === item.id 
                      ? "bg-white text-black shadow-lg" 
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                    }
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-zinc-200 -z-10" />
                  )}
                  
                  {/* Number badge */}
                  <div className={`
                    w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0
                    ${activeSection === item.id 
                      ? "bg-black/10 text-black" 
                      : "bg-zinc-900 text-zinc-600 group-hover:bg-zinc-800 group-hover:text-zinc-400"
                    }
                  `}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Icon */}
                  <div className={`shrink-0 ${activeSection === item.id ? 'text-black' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                    {item.icon}
                  </div>
                  
                  {/* Label */}
                  <span className="flex-1">{item.label}</span>
                  
                  {/* Arrow indicator */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`shrink-0 transition-transform group-hover:translate-x-1 ${activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Menu Footer with CTA */}
          <div className="px-6 py-6 border-t border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm">
            <a 
              href="https://form.jotform.com/260270918663057"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full bg-white text-black px-6 py-4 text-sm font-bold hover:bg-zinc-100 transition-all uppercase tracking-wide text-center rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </span>
            </a>
            
            {/* Tagline */}
            <p className="text-center text-zinc-600 text-xs mt-4 font-medium tracking-wide">
              Modivi Your Business
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
