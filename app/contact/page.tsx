"use client";

import StarBackground from "../components/StarBackground";
import BusinessNav from "../components/BusinessNav";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      <StarBackground starCount={80} opacityMultiplier={0.45} showLogo={false} />
      
      {/* Navigation */}
      <BusinessNav />

      <div className="relative z-10">
        {/* Contact Section */}
        <section id="contact" className="pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Get in touch
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
                Let&apos;s Work Together
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                Ready to modernize your business and dominate your market? 
                Let&apos;s discuss how we can help you achieve your goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 text-left hover:border-zinc-700 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-2">Email Us</h3>
                    <a href="mailto:contact@modivigroup.com" className="text-lg font-bold hover:text-zinc-300 transition-colors">
                      contact@modivigroup.com
                    </a>
                    <p className="text-sm text-zinc-500 mt-2">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 text-left hover:border-zinc-700 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-2">Call Us</h3>
                    <a href="tel:+1234567890" className="text-lg font-bold hover:text-zinc-300 transition-colors">
                      +1 (234) 567-890
                    </a>
                    <p className="text-sm text-zinc-500 mt-2">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="mailto:contact@modivigroup.com"
                className="bg-white text-black px-10 py-4 text-sm font-bold hover:bg-zinc-200 transition-all uppercase tracking-wide inline-flex items-center justify-center gap-2"
              >
                Send us a message
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </a>
              <a 
                href="tel:+1234567890"
                className="border border-zinc-800 text-white px-10 py-4 text-sm font-bold hover:border-zinc-700 hover:bg-zinc-900 transition-all uppercase tracking-wide inline-flex items-center justify-center gap-2"
              >
                Schedule a call
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
              </a>
            </div>

            {/* Additional Info */}
            <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight text-center">What to Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-2">Initial Consultation</h3>
                  <p className="text-zinc-500 text-sm">We&apos;ll discuss your goals, challenges, and vision</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-2">Custom Strategy</h3>
                  <p className="text-zinc-500 text-sm">We&apos;ll create a tailored plan for your business</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-2">Execute & Grow</h3>
                  <p className="text-zinc-500 text-sm">We&apos;ll implement and optimize for results</p>
                </div>
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
