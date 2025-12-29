import Image from "next/image";
import Link from "next/link";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/assets/MG-White.png" 
              alt="Modivi Group" 
              width={48} 
              height={48} 
              className="object-contain"
            />
            <span className="font-bold tracking-widest text-lg hidden sm:block">MODIVI GROUP</span>
          </Link>
          <button className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-zinc-200 transition-colors uppercase tracking-wide">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase leading-tight">
            Modernize Your <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500">Local Business</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We help hard businesses—plumbers, landscapers, shops, and trades—look modern, 
            stay consistent on social, and convert local traffic into revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 font-bold text-lg hover:bg-zinc-200 transition-colors uppercase tracking-wider">
              Book a Strategy Call
            </button>
            <button className="w-full sm:w-auto border border-zinc-700 text-zinc-300 px-8 py-4 font-bold text-lg hover:border-white hover:text-white transition-all uppercase tracking-wider">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">The &quot;Invisible&quot; Business Problem</h2>
            <p className="text-zinc-400 mb-6 text-lg">
              You do great work, but your online presence doesn&apos;t reflect it. Your competitors look better, post more often, and capture the leads that should be yours.
            </p>
            <ul className="space-y-4">
              {['Inconsistent Social Media', 'Outdated Website', 'Low Lead Conversion'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-96 bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
            {/* Placeholder for visual proof/image */}
            <div className="absolute inset-0 bg-[url('/assets/MG-Trans.png')] bg-center bg-no-repeat bg-contain opacity-5 grayscale" />
            <p className="text-zinc-500 font-mono">VISUAL PROOF PLACEHOLDER</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Modivi Group. All rights reserved.</p>
      </footer>
    </div>
  );
}

