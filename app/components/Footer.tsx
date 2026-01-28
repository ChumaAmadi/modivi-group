import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <video 
                src="/assets/logo.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-12 h-12 object-contain"
              />
              <span className="font-bold tracking-widest text-lg">
                MODIVI GROUP
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Modernizing businesses through innovative digital solutions. From brand identity to market dominance.
            </p>
            <Link
              href="https://form.jotform.com/260270918663057"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-bold hover:bg-zinc-200 transition-colors uppercase tracking-wide"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/business" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Local SEO
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  Content Creation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Connect</h3>
            <div className="mb-6">
              <a 
                href="mailto:admin@modivi.group?subject=Inquiry" 
                className="text-zinc-500 hover:text-white transition-colors text-sm block mb-2"
              >
                admin@modivi.group
              </a>
            </div>
            
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-zinc-500">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/modivi.group/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a
                href="https://www.tiktok.com/@modivi.group?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@ModiviGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href="https://x.com/modivigroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">
              © {new Date().getFullYear()} Modivi Group. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-zinc-600 hover:text-zinc-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-zinc-600 hover:text-zinc-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
