"use client";

import Link from "next/link";
import StarBackground from "../../components/StarBackground";
import BusinessNav from "../../components/BusinessNav";

export default function BrandIdentityPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      <StarBackground starCount={80} opacityMultiplier={0.45} showLogo={false} />
      
      {/* Navigation */}
      <BusinessNav />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 border-b border-zinc-900">
          <div className="max-w-5xl mx-auto">
            <Link 
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Solutions
            </Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                Service
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-[1.1]">
              Brand Identity
            </h1>
            
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-8">
              Create a cohesive visual identity that resonates with your target audience and stands out in your industry.
            </p>
            
            <Link 
              href="/contact"
              className="bg-white text-black px-10 py-4 text-sm font-bold hover:bg-zinc-200 transition-all uppercase tracking-wide inline-flex items-center justify-center gap-2"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter">
              What&apos;s Included
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Logo Design</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Custom logo creation that captures your brand essence and works across all platforms and materials.
                </p>
              </div>
              
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Brand Guidelines</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Comprehensive brand book detailing colors, typography, usage rules, and brand voice.
                </p>
              </div>
              
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Visual Assets</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Business cards, letterheads, email signatures, and other essential brand materials.
                </p>
              </div>
              
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Brand Strategy</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Positioning, messaging, and differentiation strategy to stand out in your market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter">
              Our Process
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Discovery</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We dive deep into your business, industry, competitors, and target audience to understand what makes you unique.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Concept Development</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We create multiple brand concepts and directions for you to review and provide feedback on.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Refinement</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We refine your chosen direction based on your feedback until it perfectly represents your brand.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Delivery</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    You receive all final files, brand guidelines, and assets ready to use across all your marketing materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
              Ready to Build Your Brand?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Let&apos;s create a brand identity that sets you apart and resonates with your ideal customers.
            </p>
            <Link 
              href="/contact"
              className="bg-white text-black px-10 py-4 text-sm font-bold hover:bg-zinc-200 transition-all uppercase tracking-wide inline-flex items-center justify-center gap-2"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </Link>
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
