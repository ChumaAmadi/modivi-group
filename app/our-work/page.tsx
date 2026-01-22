"use client";

import StarBackground from "../components/StarBackground";
import ImageCarousel from "../components/ImageCarousel";
import BusinessNav from "../components/BusinessNav";

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      <StarBackground starCount={80} opacityMultiplier={0.45} showLogo={false} />
      
      {/* Navigation */}
      <BusinessNav />

      <div className="relative z-10">
        {/* Our Work Section */}
        <section id="work" className="pt-32 pb-24 px-6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent)]">
          <div className="max-w-5xl mx-auto text-center mb-20 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                What we do
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-zinc-600">
              Modernize Your Business
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              From <span className="text-zinc-200">local trades</span> and <span className="text-zinc-200">restaurants</span> to high-growth <span className="text-zinc-200">e-commerce</span> brands. We build the digital systems that turn local attention into global authority. 
              We help you look modern, stay consistent, and convert traffic into revenue.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">The Digital Blind Spot</h2>
              <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                You&apos;ve mastered your craft, but the digital landscape moves faster than most businesses can keep up with. 
                While you focus on operations, your competitors are winning the battle for local attention. 
                We close the gap between your real-world excellence and your online reputation.
              </p>
              <ul className="space-y-5">
                {[
                  { title: 'Brand Authority', desc: 'Transform from a local option into the industry leader.' },
                  { title: 'Consistent Presence', desc: 'Stay top-of-mind without lifting a finger.' },
                  { title: 'Lead Optimization', desc: 'Convert casual browsers into loyal, high-value clients.' }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col gap-1 group/item">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full group-hover/item:scale-125 transition-transform" />
                      <span className="text-zinc-200 font-bold uppercase tracking-wider text-sm">{item.title}</span>
                    </div>
                    <p className="text-zinc-500 text-sm pl-4.5">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-zinc-800 to-zinc-900 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative h-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
                <ImageCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies / Portfolio Section */}
        <section className="py-24 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Case Studies
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                Our Work
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                See how we&apos;ve helped businesses transform their digital presence and dominate their markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="group cursor-pointer">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
                  <div className="relative aspect-video bg-zinc-900 border-b border-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                    {/* Placeholder for case study thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <path d="M7 3v18"/>
                        <path d="M3 7.5h4"/>
                        <path d="M3 12h18"/>
                        <path d="M3 16.5h4"/>
                        <path d="M17 3v18"/>
                        <path d="M17 7.5h4"/>
                        <path d="M17 16.5h4"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-zinc-300 transition-colors">
                      Business Name
                    </h3>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-3">Industry • Service Type</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Brief description of the project, results achieved, and services provided for this client.
                    </p>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="group cursor-pointer">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
                  <div className="relative aspect-video bg-zinc-900 border-b border-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                    {/* Placeholder for case study thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <path d="M7 3v18"/>
                        <path d="M3 7.5h4"/>
                        <path d="M3 12h18"/>
                        <path d="M3 16.5h4"/>
                        <path d="M17 3v18"/>
                        <path d="M17 7.5h4"/>
                        <path d="M17 16.5h4"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-zinc-300 transition-colors">
                      Business Name
                    </h3>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-3">Industry • Service Type</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Brief description of the project, results achieved, and services provided for this client.
                    </p>
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="group cursor-pointer">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
                  <div className="relative aspect-video bg-zinc-900 border-b border-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                    {/* Placeholder for case study thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <path d="M7 3v18"/>
                        <path d="M3 7.5h4"/>
                        <path d="M3 12h18"/>
                        <path d="M3 16.5h4"/>
                        <path d="M17 3v18"/>
                        <path d="M17 7.5h4"/>
                        <path d="M17 16.5h4"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-zinc-300 transition-colors">
                      Business Name
                    </h3>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-3">Industry • Service Type</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Brief description of the project, results achieved, and services provided for this client.
                    </p>
                  </div>
                </div>
              </div>

              {/* Case Study 4 */}
              <div className="group cursor-pointer">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
                  <div className="relative aspect-video bg-zinc-900 border-b border-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                    {/* Placeholder for case study thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <path d="M7 3v18"/>
                        <path d="M3 7.5h4"/>
                        <path d="M3 12h18"/>
                        <path d="M3 16.5h4"/>
                        <path d="M17 3v18"/>
                        <path d="M17 7.5h4"/>
                        <path d="M17 16.5h4"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-zinc-300 transition-colors">
                      Business Name
                    </h3>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-3">Industry • Service Type</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Brief description of the project, results achieved, and services provided for this client.
                    </p>
                  </div>
                </div>
              </div>

              {/* Case Study 5 */}
              <div className="group cursor-pointer">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
                  <div className="relative aspect-video bg-zinc-900 border-b border-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                    {/* Placeholder for case study thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <path d="M7 3v18"/>
                        <path d="M3 7.5h4"/>
                        <path d="M3 12h18"/>
                        <path d="M3 16.5h4"/>
                        <path d="M17 3v18"/>
                        <path d="M17 7.5h4"/>
                        <path d="M17 16.5h4"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-zinc-300 transition-colors">
                      Business Name
                    </h3>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-3">Industry • Service Type</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Brief description of the project, results achieved, and services provided for this client.
                    </p>
                  </div>
                </div>
              </div>

              {/* Case Study 6 */}
              <div className="group cursor-pointer">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
                  <div className="relative aspect-video bg-zinc-900 border-b border-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                    {/* Placeholder for case study thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <path d="M7 3v18"/>
                        <path d="M3 7.5h4"/>
                        <path d="M3 12h18"/>
                        <path d="M3 16.5h4"/>
                        <path d="M17 3v18"/>
                        <path d="M17 7.5h4"/>
                        <path d="M17 16.5h4"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-zinc-300 transition-colors">
                      Business Name
                    </h3>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-3">Industry • Service Type</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Brief description of the project, results achieved, and services provided for this client.
                    </p>
                  </div>
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
