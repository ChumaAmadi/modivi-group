"use client";

import Link from "next/link";
import StarBackground from "../../components/StarBackground";
import BusinessNav from "../../components/BusinessNav";

export default function DigitalMarketingPage() {
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
              Digital Marketing
            </h1>
            
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-8">
              Data-driven marketing strategies that increase visibility and drive qualified leads to your business.
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
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Social Media Management</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Strategic content planning, creation, and management across all major social platforms.
                </p>
              </div>
              
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Content Strategy</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Comprehensive content plan that aligns with your business goals and resonates with your audience.
                </p>
              </div>
              
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Ad Campaigns</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Targeted paid advertising campaigns on Google, Facebook, Instagram, and other platforms.
                </p>
              </div>
              
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Analytics & Reporting</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Regular performance reports with actionable insights to optimize your marketing efforts.
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
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Audit & Analysis</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We analyze your current marketing efforts, competitors, and market opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Strategy Development</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We create a comprehensive marketing strategy tailored to your goals and target audience.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Implementation</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We execute your marketing campaigns across all chosen channels with precision.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Optimize & Scale</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    We continuously monitor performance and optimize campaigns for better results and ROI.
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Let&apos;s create a marketing strategy that drives real, measurable results.
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
