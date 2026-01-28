"use client";

import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import StarBackground from "../components/StarBackground";
import BusinessNav from "../components/BusinessNav";
import Footer from "../components/Footer";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      <StarBackground starCount={80} opacityMultiplier={0.45} showLogo={false} />
      
      {/* Navigation */}
      <BusinessNav />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  For Businesses
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
                Turn Your Craft Into <br/>
                <span className="italic font-serif text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-white to-zinc-500 animate-gradient-x">
                  Digital Dominance
                </span>
              </h1>
              <p className="text-zinc-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12">
                We help local businesses, trades, and brands build modern digital systems that turn attention into authority and traffic into revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact"
                  className="bg-white text-black px-10 py-4 text-sm font-bold hover:bg-zinc-200 transition-all uppercase tracking-wide inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </Link>
                <Link 
                  href="/our-work"
                  className="border border-zinc-800 text-white px-10 py-4 text-sm font-bold hover:border-zinc-700 hover:bg-zinc-900 transition-all uppercase tracking-wide"
                >
                  See Our Work
                </Link>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20">
              <Link 
                href="/about"
                className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">About Us</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Learn about our story and the team behind Modivi Group
                </p>
              </Link>

              <Link 
                href="/solutions"
                className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
                    <path d="M6 18a4 4 0 0 1-1.967-.516"/>
                    <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Solutions</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Explore our comprehensive digital solutions for your business
                </p>
              </Link>

              <Link 
                href="/contact"
                className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Contact</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Ready to get started? Let&apos;s discuss your project
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

