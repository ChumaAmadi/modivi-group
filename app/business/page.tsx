"use client";

import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import StarBackground from "../components/StarBackground";
import ImageCarousel from "../components/ImageCarousel";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      <StarBackground starCount={80} opacityMultiplier={0.45} showLogo={false} />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <video 
              src="/assets/logo.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-12 h-12 object-contain"
            />
            <span className="font-bold tracking-widest text-lg hidden sm:block">MODIVI GROUP</span>
          </Link>
          <button className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-zinc-200 transition-colors uppercase tracking-wide">
            Get Started
          </button>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm group/badge hover:border-zinc-700 transition-colors cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 group-hover/badge:text-zinc-300 transition-colors">
                  Who are we?
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                We unify <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-500 animate-gradient-x">brand love</span> <br/>
                and <span className="relative inline-block">
                  buying behavior
                  <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </span>.
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Founded in Boston, Modivi is a tech-driven media agency at the intersection of culture and commerce. 
                We specialize in scaling brands through a multi-disciplinary approach, drawing from our deep roots 
                in trade industries, music, and digital distribution.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <Link 
                  href="/about" 
                  className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-zinc-300 transition-colors"
                >
                  Learn about our founders
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-lg min-h-[400px] aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
              <div className="absolute inset-0 flex items-start justify-center p-4 pt-0">
                <div className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-700 scale-110 transform-gpu -mt-12">
                  <DotLottieReact 
                    src="/assets/Brand-Building.lottie" 
                    autoplay 
                    loop 
                  />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Based in</p>
                    <p className="text-sm font-bold">Boston, MA</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Established</p>
                    <p className="text-sm font-bold">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services/Focus Section */}
        <section className="py-24 px-6 border-b border-zinc-900 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent)]">
          <div className="max-w-5xl mx-auto text-center mb-20 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-px h-24 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-zinc-600">
              Modernize Your Business
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              From <span className="text-zinc-200">local trades</span> and <span className="text-zinc-200">restaurants</span> to high-growth <span className="text-zinc-200">e-commerce</span> brands. We build the digital systems that turn local attention into global authority. 
              We help you look modern, stay consistent, and convert traffic into revenue.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">The Digital Blind Spot</h2>
              <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                You&apos;ve mastered your craft, but the digital landscape moves faster than most businesses can keep up with. 
                While you focus on operations, your competitors are winning the battle for local attention. 
                We close the gap between your real-world excellence and your online reputation.
              </p>
              <ul className="space-y-5">
                {[
                  { title: 'Brand Authority', desc: 'Transform from a local option into the industry leader.' },
                  { title: 'Consistent Presence', desc: 'Stay top-of-mind without lifting a finger.' },
                  { title: 'Lead Optimization', desc: 'Convert casual browsers into loyal, high-value clients.' }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col gap-1 group/item">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full group-hover/item:scale-125 transition-transform" />
                      <span className="text-zinc-200 font-bold uppercase tracking-wider text-sm">{item.title}</span>
                    </div>
                    <p className="text-zinc-500 text-sm pl-4.5">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative h-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
                <ImageCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Modivi Group. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

