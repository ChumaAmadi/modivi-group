"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import StarBackground from "../components/StarBackground";
import BusinessNav from "../components/BusinessNav";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      <StarBackground starCount={80} opacityMultiplier={0.45} showLogo={false} />
      
      {/* Navigation */}
      <BusinessNav />

      <div className="relative z-10">
        {/* About Section / Hero Section */}
        <section id="about" className="pt-32 pb-20 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm group/badge hover:border-zinc-700 transition-colors cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 group-hover/badge:text-zinc-300 transition-colors">
                  Who are we?
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                We unify <span className="italic font-serif text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-white to-zinc-500 animate-gradient-x">brand love</span> <br/>
                and <span className="relative inline-block">
                  buying behavior
                  <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-white/40 to-transparent" />
                </span>.
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Founded in Boston, Modivi is a tech-driven media agency at the intersection of culture and commerce. 
                We specialize in scaling brands through a multi-disciplinary approach, drawing from our deep roots 
                in trade industries, music, and digital distribution.
              </p>
            </div>
            <div className="relative w-full max-w-lg min-h-[400px] aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-50" />
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

        {/* Founders Section */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Meet the team
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                Our Founders
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                The visionaries behind Modivi Group, bringing diverse expertise from trade, music, and digital innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Founder 1 */}
              <div className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
                <div className="relative aspect-square bg-zinc-900 border-b border-zinc-800 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                  {/* Placeholder for founder image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Founder Name</h3>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-4">Co-Founder & CEO</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Brief description about the founder&apos;s background, expertise, and role in the company. Add their unique contribution to the team.
                  </p>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
                <div className="relative aspect-square bg-zinc-900 border-b border-zinc-800 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                  {/* Placeholder for founder image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Founder Name</h3>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-4">Co-Founder & CTO</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Brief description about the founder&apos;s background, expertise, and role in the company. Add their unique contribution to the team.
                  </p>
                </div>
              </div>

              {/* Founder 3 */}
              <div className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
                <div className="relative aspect-square bg-zinc-900 border-b border-zinc-800 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                  {/* Placeholder for founder image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Founder Name</h3>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-4">Co-Founder & CMO</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Brief description about the founder&apos;s background, expertise, and role in the company. Add their unique contribution to the team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
