"use client";

import Image from "next/image";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black text-white relative">
      
      {/* Header / Logo */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0">
        <Image 
          src="/assets/MG-White.png" 
          alt="Modivi Group" 
          width={48} 
          height={48} 
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center z-10 w-full py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-normal mb-4 uppercase text-center">
          Who are you?
        </h1>
        <p className="text-zinc-400 text-base md:text-xl mb-12 text-center max-w-2xl font-medium">
          Select your profile to continue to your personalized experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 w-full max-w-7xl px-6">
          <ProfileCard 
            title="Business Owner/Entity"
            subtitle="Growth & Modernization"
            description="Turn your physical success into digital dominance by modernizing your brand."
            tags={['Advertising', 'Marketing', 'Lead Gen', 'Branding', 'Web Design', 'Social Media']}
            href="/business"
            lottie="/assets/Plumbers.lottie"
          />
          <ProfileCard 
            title="Musician / DJ" 
            subtitle="Artist Development"
            description="For artists seeking to grow their social presence, book more gigs, and maintain content cadence."
            tags={['Bookings', 'Social Growth', 'Content', 'Promo']}
            href="/musician"
            lottie="/assets/Music.lottie"
          />
          <ProfileCard 
            title="Streamer" 
            subtitle="Brand Distribution"
            description="For content creators focused on expanding their reach through clips and distribution systems."
            tags={['Distribution', 'Clips', 'Growth', 'Branding']}
            href="/streamer"
            lottie="/assets/Streamer.lottie"
          />
        </div>
      </div>

      {/* Definition Card */}
      <div className="mt-20 mb-24 max-w-xl mx-auto px-6">
        <div className="group border border-zinc-900 bg-zinc-950/20 backdrop-blur-sm p-6 rounded-2xl transition-all duration-500 hover:border-zinc-700">
          <div className="flex flex-col gap-2 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 group-hover:text-zinc-400 transition-colors">
              Etymology // Modivi Group (mo-di-fy)
            </span>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed italic group-hover:text-zinc-300 transition-colors">
              &quot;<span className="text-zinc-200 font-semibold not-italic">Modus vivendi</span>&quot; (Latin for &quot;way of living&quot;) is a practical, often temporary, agreement allowing conflicting parties to coexist peacefully.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
