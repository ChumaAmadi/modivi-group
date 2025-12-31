"use client";

import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface ConstructionPageProps {
  title: string;
}

export default function ConstructionPage({ title }: ConstructionPageProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="relative group">
        {/* Decorative Frame */}
        <div className="absolute -inset-4 bg-gradient-to-b from-zinc-800 to-transparent rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
        
        <div className="relative w-64 h-64 md:w-96 md:h-96 mb-12 bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl p-8 backdrop-blur-3xl">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
          
          <DotLottieReact
            src="/assets/Website.lottie"
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
      </div>
      
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-black tracking-normal uppercase bg-clip-text text-transparent bg-linear-to-b from-white to-zinc-500">
          {title}
        </h1>
        
        <div className="w-12 h-1 bg-white mx-auto rounded-full opacity-20" />
        
        <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
          We&apos;re busy <span className="text-zinc-300">building something exceptional</span>. Stay tuned.
        </p>

        <div className="pt-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <span>Go Back Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><path d="m15 18-6-6 6-6"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

