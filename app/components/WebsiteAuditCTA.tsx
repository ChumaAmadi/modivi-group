"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WebsiteAuditCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* CTA Button */}
      <motion.button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm font-bold hover:bg-zinc-200 transition-all uppercase tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
          <path d="M12 18v-6"/>
          <path d="m9 15 3 3 3-3"/>
        </svg>
        Get Free Website Audit
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(255,255,255,0.1)] pointer-events-auto"
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-zinc-950 border-b border-zinc-800 p-6 flex items-center justify-between z-10">
                  <div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight mb-1">Free Website Audit</h2>
                    <p className="text-zinc-500 text-sm">Get a comprehensive analysis of your website</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-zinc-900 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4 text-zinc-200">What You'll Get:</h3>
                    <ul className="space-y-3">
                      {[
                        "Complete SEO analysis and recommendations",
                        "Mobile responsiveness check",
                        "Page speed performance report",
                        "User experience (UX) evaluation",
                        "Conversion optimization suggestions",
                        "Competitor comparison insights"
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 text-zinc-400"
                        >
                          <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Embedded Form */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                    <iframe
                      src="https://form.jotform.com/260270918663057"
                      frameBorder="0"
                      style={{ width: '100%', height: '500px', border: 'none' }}
                      scrolling="yes"
                      title="Free Website Audit Request Form"
                    />
                  </div>

                  <div className="mt-6 p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg">
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      <strong className="text-zinc-400">100% Free. No Credit Card Required.</strong> We'll analyze your website and send you a detailed report within 48 hours. No strings attached.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
