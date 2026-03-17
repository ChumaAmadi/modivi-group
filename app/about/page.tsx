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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm group/badge hover:border-zinc-700 transition-colors cursor-default shadow-[0_0_8px_rgba(255,255,255,0.04)] hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]">
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
                Founded in Boston, Modivi is a tech driven media agency at the intersection of culture and commerce. 
                We specialize in scaling brands through a multi disciplinary approach, drawing from our deep roots 
                in trade industries, music, and digital distribution.
              </p>
            </div>
            <div className="relative w-full max-w-lg min-h-[400px] aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group mx-auto lg:ml-auto shadow-[0_0_20px_rgba(255,255,255,0.04),inset_0_0_30px_rgba(255,255,255,0.02)]">
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

        {/* Our Approach Section */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm shadow-[0_0_8px_rgba(255,255,255,0.04)]">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Our Approach
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                Where Culture Meets Commerce
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                We don't just build brands. We orchestrate ecosystems where creativity and business strategy thrive together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-[0_0_10px_rgba(255,255,255,0.08)] group-hover:border-zinc-700 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 2v20M2 12h20"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Multi-Disciplinary Thinking</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We draw from diverse industries like trade services, music, entertainment, and digital distribution to create strategies that traditional agencies miss. Our cross industry perspective unlocks opportunities others can't see.
                </p>
              </div>

              <div className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-[0_0_10px_rgba(255,255,255,0.08)] group-hover:border-zinc-700 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21h8M12 17v4"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Technology-First</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every solution we build is rooted in modern technology. From AI powered automation to advanced analytics, we leverage cutting edge tools to give you a competitive edge in an increasingly digital world.
                </p>
              </div>

              <div className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-[0_0_10px_rgba(255,255,255,0.08)] group-hover:border-zinc-700 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Results-Driven</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We're not interested in vanity metrics. Every campaign, website, and strategy we create is designed to drive real business outcomes. More leads, higher revenue, stronger brand loyalty, and measurable growth.
                </p>
              </div>

              <div className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-[0_0_10px_rgba(255,255,255,0.08)] group-hover:border-zinc-700 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Partnership Mindset</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We don't believe in one and done projects. We build long term partnerships, becoming an extension of your team. Your success is our success, and we're invested in your growth every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm shadow-[0_0_8px_rgba(255,255,255,0.04)]">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Core Values
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                What We Stand For
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                The principles that guide every decision we make and every solution we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-zinc-950/30 border border-zinc-800 rounded-2xl p-10 shadow-[0_0_12px_rgba(255,255,255,0.04)] hover:bg-zinc-950/50 hover:border-zinc-700 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 mx-auto shadow-[0_0_12px_rgba(255,255,255,0.1)] group-hover:border-zinc-700 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Authenticity</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We believe in honest work that reflects who you truly are. No fluff, no false promises. Just real strategies that align with your brand's authentic voice and values.
                </p>
              </div>

              <div className="group bg-zinc-950/30 border border-zinc-800 rounded-2xl p-10 shadow-[0_0_12px_rgba(255,255,255,0.04)] hover:bg-zinc-950/50 hover:border-zinc-700 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 mx-auto shadow-[0_0_12px_rgba(255,255,255,0.1)] group-hover:border-zinc-700 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Innovation</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  The digital landscape never stops evolving, and neither do we. We stay ahead of trends, adopt emerging technologies, and push creative boundaries to keep you competitive.
                </p>
              </div>

              <div className="group bg-zinc-950/30 border border-zinc-800 rounded-2xl p-10 shadow-[0_0_12px_rgba(255,255,255,0.04)] hover:bg-zinc-950/50 hover:border-zinc-700 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 mx-auto shadow-[0_0_12px_rgba(255,255,255,0.1)] group-hover:border-zinc-700 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Impact</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Every project we take on is an opportunity to create meaningful change. We measure our success by the tangible impact we have on your business growth and brand presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm shadow-[0_0_8px_rgba(255,255,255,0.04)]">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                Built Different
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                We're not your typical agency. Here's what sets us apart from everyone else.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:border-zinc-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-300">
                <div className="text-4xl font-black text-white mb-3">01</div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">Cross-Industry Expertise</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We've worked with everyone from trade contractors to touring musicians to gaming streamers. This diverse experience means we bring fresh perspectives to every project.
                </p>
              </div>

              <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:border-zinc-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-300">
                <div className="text-4xl font-black text-white mb-3">02</div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">Full-Stack Solutions</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  From branding and web development to digital marketing and lead generation, we handle it all. No need to coordinate between multiple agencies.
                </p>
              </div>

              <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:border-zinc-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-300">
                <div className="text-4xl font-black text-white mb-3">03</div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">Tech-Forward Approach</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We build with modern frameworks, integrate AI where it makes sense, and use automation to create systems that work while you sleep.
                </p>
              </div>

              <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:border-zinc-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-300">
                <div className="text-4xl font-black text-white mb-3">04</div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">Boston Roots, Global Reach</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Based in one of America's most innovative cities, but serving clients everywhere. We combine local hustle with scalable digital solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
              Ready to Grow?
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Whether you're a business owner looking to modernize your brand, a musician ready to scale your presence, or a content creator aiming to expand your reach, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:admin@modivi.group" 
                className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-zinc-200 transition-all overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
              </a>
              <a 
                href="/our-work" 
                className="group relative px-8 py-4 bg-zinc-950 text-white font-bold uppercase tracking-wider text-sm rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <span className="relative z-10">View Our Work</span>
              </a>
            </div>
            <p className="text-zinc-600 text-sm mt-8">
              Questions? Email us at <a href="mailto:admin@modivi.group" className="text-zinc-400 hover:text-white transition-colors">admin@modivi.group</a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
