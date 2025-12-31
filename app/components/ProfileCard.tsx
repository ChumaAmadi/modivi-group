"use client";

import Link from "next/link";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface ProfileCardProps {
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  href: string;
  icon?: string; // Optional icon path
  lottie?: string; // Optional lottie animation path
}

export default function ProfileCard({ title, subtitle, description, tags, href, icon, lottie }: ProfileCardProps) {
  return (
    <Link 
      href={href}
      className="group relative flex flex-col w-full max-w-sm h-full
                 border border-zinc-800 rounded-2xl overflow-hidden
                 hover:border-white transition-all duration-300 bg-black cursor-pointer shadow-xl mx-auto"
    >
      {/* Header Section */}
      <div className="h-36 w-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors duration-300 relative flex items-center justify-center overflow-hidden shrink-0">
         {/* Background Pattern / Decoration */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent" />
         
         {/* Animation/Graphic in Header */}
         {lottie && (
             <div className="w-32 h-32 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
               <DotLottieReact
                  src={lottie}
                  loop
                  autoplay
               />
             </div>
         )}
         
         {/* Floating Icon Circle - Positioned relative to header bottom */}
         <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-16 h-16 rounded-full border-4 border-black bg-black flex items-center justify-center">
               <div className="w-full h-full rounded-full bg-zinc-900 group-hover:bg-white transition-colors duration-300 flex items-center justify-center border border-zinc-800 group-hover:border-white">
                  {icon ? (
                    <Image src={icon} alt={title} width={24} height={24} className="invert group-hover:invert-0 transition-all duration-300" />
                  ) : (
                    <div className="w-7 h-7 bg-white group-hover:bg-black rounded-full transition-colors duration-300" />
                  )}
               </div>
            </div>
         </div>
      </div>

      {/* Body Section */}
      <div className="flex-1 w-full bg-black px-5 pb-5 pt-9 flex flex-col items-center text-center">
        {/* Fixed height container for Title to ensure alignment */}
        <div className="h-12 flex items-center justify-center mb-1">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">{title}</h3>
        </div>
        
        {/* Fixed height container for Subtitle */}
        {subtitle && (
          <div className="h-5 flex items-center justify-center mb-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-200 transition-colors">
              {subtitle}
            </p>
          </div>
        )}
        
        {/* Fixed height container for Description to ensure alignment */}
        <div className="h-20 flex items-start justify-center mb-4">
          <p className="text-zinc-500 text-sm leading-relaxed px-2 group-hover:text-zinc-400 transition-colors line-clamp-3">
            {description}
          </p>
        </div>

        {/* Optional Tags/Skills Footer */}
        {tags && tags.length > 0 && (
          <div className="w-full pt-3 border-t border-zinc-900 mt-auto min-h-[85px]">
             <div className="flex flex-wrap justify-center gap-1.5">
               {tags.map((tag, i) => (
                 <span key={i} className="text-[10px] font-medium text-zinc-500 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 group-hover:border-zinc-700 transition-colors whitespace-nowrap">
                   {tag}
                 </span>
               ))}
             </div>
          </div>
        )}
      </div>
    </Link>
  );
}
