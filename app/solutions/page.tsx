"use client";

import Link from "next/link";
import StarBackground from "../components/StarBackground";
import BusinessNav from "../components/BusinessNav";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      <StarBackground starCount={80} opacityMultiplier={0.45} showLogo={false} />
      
      {/* Navigation */}
      <BusinessNav />

      <div className="relative z-10">
        {/* Solutions Section */}
        <section id="solutions" className="pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  What we offer
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                Our Solutions
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions tailored to your business needs. 
                We provide everything you need to establish, grow, and dominate your market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Brand Identity',
                  slug: 'brand-identity',
                  description: 'Create a cohesive visual identity that resonates with your target audience and stands out in your industry.',
                  features: ['Logo Design', 'Brand Guidelines', 'Visual Assets']
                },
                {
                  title: 'Web Development',
                  slug: 'web-development',
                  description: 'Modern, responsive websites that convert visitors into customers with seamless user experiences.',
                  features: ['Custom Design', 'SEO Optimized', 'Mobile First']
                },
                {
                  title: 'Digital Marketing',
                  slug: 'digital-marketing',
                  description: 'Data-driven marketing strategies that increase visibility and drive qualified leads to your business.',
                  features: ['Social Media', 'Content Strategy', 'Ad Campaigns']
                },
                {
                  title: 'Lead Generation',
                  slug: 'lead-generation',
                  description: 'Automated systems that capture, nurture, and convert leads while you focus on your craft.',
                  features: ['Lead Funnels', 'Email Marketing', 'CRM Setup']
                },
                {
                  title: 'Local SEO',
                  slug: 'local-seo',
                  description: 'Dominate local search results and become the go-to choice in your area.',
                  features: ['Google Business', 'Local Citations', 'Review Management']
                },
                {
                  title: 'Content Creation',
                  slug: 'content-creation',
                  description: 'Consistent, high-quality content that keeps your brand top-of-mind and builds authority.',
                  features: ['Photography', 'Videography', 'Copywriting']
                }
              ].map((solution, i) => (
                <Link 
                  key={i} 
                  href={`/solutions/${solution.slug}`}
                  className="group relative bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight group-hover:text-zinc-300 transition-colors">{solution.title}</h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed">{solution.description}</p>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-zinc-500">
                          <div className="w-1 h-1 bg-white rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14m-7-7 7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div className="max-w-3xl mx-auto bg-zinc-950/50 border border-zinc-800 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">
                  Ready to Get Started?
                </h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  Let&apos;s discuss which solutions are right for your business and create a custom strategy.
                </p>
                <a 
                  href="/contact"
                  className="bg-white text-black px-10 py-4 text-sm font-bold hover:bg-zinc-200 transition-all uppercase tracking-wide inline-flex items-center justify-center gap-2"
                >
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </a>
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
