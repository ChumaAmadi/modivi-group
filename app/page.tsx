"use client";

import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import StarBackground from "./components/StarBackground";
import BusinessNav from "./components/BusinessNav";
import Footer from "./components/Footer";
import WebsiteAuditCTA from "./components/WebsiteAuditCTA";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      <StarBackground starCount={80} opacityMultiplier={0.45} showLogo={false} />
      
      {/* Navigation */}
      <BusinessNav />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm shadow-[0_0_8px_rgba(255,255,255,0.04)]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  For Businesses
                </span>
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Turn Your Craft Into <br/>
                <span className="italic font-serif text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-white to-zinc-500 animate-gradient-x">
                  Digital Dominance
                </span>
              </motion.h1>
              <motion.p 
                className="text-zinc-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                We help local businesses, trades, and brands build modern digital systems that turn attention into authority and traffic into revenue.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link 
                  href="/contact"
                  className="bg-white text-black px-10 py-4 text-sm font-bold hover:bg-zinc-200 transition-all uppercase tracking-wide inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </Link>
                <Link 
                  href="/our-work"
                  className="border border-zinc-800 text-white px-10 py-4 text-sm font-bold hover:border-zinc-700 hover:bg-zinc-900 transition-all uppercase tracking-wide"
                >
                  See Our Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Link 
                  href="/about"
                  className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 block"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 shadow-[0_0_10px_rgba(255,255,255,0.08)] group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">About Us</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Learn about our story and the team behind Modivi Group
                  </p>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Link 
                  href="/solutions"
                  className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 block"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 shadow-[0_0_10px_rgba(255,255,255,0.08)] group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
                      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
                      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
                      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
                      <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
                      <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
                      <path d="M6 18a4 4 0 0 1-1.967-.516"/>
                      <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Solutions</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Explore our comprehensive digital solutions for your business
                  </p>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Link 
                  href="/contact"
                  className="group bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 block"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 shadow-[0_0_10px_rgba(255,255,255,0.08)] group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Contact</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Ready to get started? Let&apos;s discuss your project
                  </p>
                </Link>
              </motion.div>
            </div>

            {/* Definition Card - Modus Vivendi */}
            <motion.div 
              className="w-full max-w-lg mx-auto mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="group border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-4 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.03)] transition-all duration-500 hover:border-zinc-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                <div className="flex flex-col gap-1 text-center">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600 group-hover:text-zinc-500 transition-colors">
                    Etymology // Modivi Group (mo-di-fy)
                  </span>
                  <p className="text-zinc-500 text-[11px] md:text-xs leading-relaxed italic group-hover:text-zinc-400 transition-colors px-4">
                    &quot;<span className="text-zinc-300 font-semibold not-italic">Modus vivendi</span>&quot; (Latin for &quot;way of living&quot;) is a practical agreement allowing conflicting parties to coexist peacefully.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Website Audit CTA Section */}
        <section className="py-32 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm shadow-[0_0_8px_rgba(255,255,255,0.04)]">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Free Resource
                </span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Is Your Website Holding You Back?
            </motion.h2>

            <motion.p 
              className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Get a free, comprehensive audit of your website. We'll analyze your SEO, speed, UX, and more, then send you a detailed report with actionable improvements.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <WebsiteAuditCTA />
              <Link 
                href="/our-work"
                className="border border-zinc-800 text-white px-8 py-4 text-sm font-bold hover:border-zinc-700 hover:bg-zinc-900 transition-all uppercase tracking-wide inline-flex items-center justify-center gap-2"
              >
                See Our Results
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>

            <motion.p 
              className="text-zinc-600 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              No strings attached. Just value. Report delivered in 48 hours or less.
            </motion.p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
