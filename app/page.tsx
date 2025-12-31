"use client";

import ProfileCard from "./components/ProfileCard";
import StarBackground from "./components/StarBackground";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between py-8 px-6 text-white relative overflow-hidden">
      <StarBackground />
      
      {/* Header / Logo */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0">
        <video 
          src="/assets/logo.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-16 h-16 object-contain opacity-90"
        />
      </div>

      <div className="flex flex-col items-center z-10 w-full mt-8 flex-1 justify-center">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-black tracking-normal mb-2 uppercase">
            Who are you?
          </h1>
          <p className="text-zinc-500 text-sm md:text-base max-w-xl font-medium">
            Select your profile to continue to your experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 w-full max-w-6xl px-4">
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

      {/* Definition Card - Condensed */}
      <div className="z-10 w-full max-w-lg mt-8 mb-4">
        <div className="group border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-4 rounded-xl transition-all duration-500 hover:border-zinc-800">
          <div className="flex flex-col gap-1 text-center">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600 group-hover:text-zinc-500 transition-colors">
              Etymology // Modivi Group (mo-di-fy)
            </span>
            <p className="text-zinc-500 text-[11px] md:text-xs leading-relaxed italic group-hover:text-zinc-400 transition-colors px-4">
              &quot;<span className="text-zinc-300 font-semibold not-italic">Modus vivendi</span>&quot; (Latin for &quot;way of living&quot;) is a practical agreement allowing conflicting parties to coexist peacefully.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
