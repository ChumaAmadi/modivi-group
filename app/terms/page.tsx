"use client";

import StarBackground from "../components/StarBackground";
import BusinessNav from "../components/BusinessNav";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      <StarBackground starCount={80} opacityMultiplier={0.45} showLogo={false} />
      
      {/* Navigation */}
      <BusinessNav />

      <div className="relative z-10">
        {/* Terms Section */}
        <section className="pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full mb-8 bg-zinc-950/50 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Legal
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-wide">
                Terms of Service
              </h1>
              <p className="text-zinc-500 text-sm">
                Last Updated: January 2026
              </p>
            </div>

            <div className="prose prose-invert prose-zinc max-w-none">
              <div className="space-y-8 text-zinc-300 leading-relaxed">
                
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p>
                    Welcome to Modivi Group ("Company," "we," "our," or "us"). By accessing or using our website, services, or products (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you and Modivi Group. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting. Your continued use of our Services after any changes indicates your acceptance of the new Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
                  <p>
                    Modivi Group provides digital marketing, branding, web development, and related business services to clients. Our Services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Brand identity design and development</li>
                    <li>Website design, development, and maintenance</li>
                    <li>Digital marketing campaigns and strategy</li>
                    <li>Lead generation systems and automation</li>
                    <li>Local and national SEO services</li>
                    <li>Content creation (photography, videography, copywriting)</li>
                    <li>Social media management and marketing</li>
                  </ul>
                  <p>
                    The specific scope, deliverables, timeline, and pricing for Services will be outlined in individual service agreements or statements of work executed between you and Modivi Group.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                  <p>When using our Services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Provide accurate, current, and complete information as required</li>
                    <li>Maintain the confidentiality of any account credentials</li>
                    <li>Notify us immediately of any unauthorized access to your account</li>
                    <li>Use the Services only for lawful purposes and in accordance with these Terms</li>
                    <li>Not attempt to interfere with, compromise, or disrupt our Services or servers</li>
                    <li>Not use our Services to transmit harmful code, malware, or viruses</li>
                    <li>Not engage in any activity that could harm our reputation or business</li>
                    <li>Comply with all applicable local, state, national, and international laws</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
                  <p>
                    <strong>Our Content:</strong> All content, materials, designs, code, graphics, logos, text, and other materials provided by Modivi Group (including but not limited to website designs, marketing materials, and proprietary methodologies) are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any of our content without express written permission.
                  </p>
                  <p>
                    <strong>Client Content:</strong> You retain all ownership rights to content, materials, and information you provide to us ("Client Content"). By providing Client Content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such content solely for the purpose of providing Services to you.
                  </p>
                  <p>
                    <strong>Deliverables:</strong> Upon full payment for Services, you will own the final deliverables created specifically for you, subject to any third-party licenses or restrictions. We retain the right to display completed work in our portfolio and marketing materials unless otherwise agreed in writing.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                  <p>
                    Payment terms will be specified in individual service agreements. Generally:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Invoices are due within the timeframe specified in your agreement (typically 7-30 days)</li>
                    <li>Late payments may incur interest charges and/or suspension of Services</li>
                    <li>All fees are non-refundable unless otherwise stated in writing</li>
                    <li>You are responsible for all taxes associated with the Services</li>
                    <li>We reserve the right to modify pricing with 30 days' notice for ongoing services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
                  <p>
                    Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of providing or receiving Services. This obligation survives termination of the service relationship.
                  </p>
                  <p>
                    Confidential information does not include information that: (a) is or becomes publicly available through no breach of this agreement; (b) is rightfully received from a third party; (c) is independently developed; or (d) is required to be disclosed by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, MODIVI GROUP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Your use or inability to use the Services</li>
                    <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                    <li>Any interruption or cessation of transmission to or from our Services</li>
                    <li>Any bugs, viruses, or similar harmful code that may be transmitted through our Services by any third party</li>
                    <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the Services</li>
                  </ul>
                  <p>
                    IN NO EVENT SHALL MODIVI GROUP'S AGGREGATE LIABILITY EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR ONE THOUSAND DOLLARS ($1,000), WHICHEVER IS GREATER.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimer of Warranties</h2>
                  <p>
                    THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                  </p>
                  <p>
                    While we strive to provide high-quality Services, we do not warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>The Services will be uninterrupted, timely, secure, or error-free</li>
                    <li>The results obtained from using the Services will be accurate or reliable</li>
                    <li>The quality of any products, services, information, or other material obtained through the Services will meet your expectations</li>
                    <li>Any errors in the Services will be corrected</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
                  <p>
                    You agree to indemnify, defend, and hold harmless Modivi Group, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including attorney's fees) arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Your use of and access to the Services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any third-party rights, including intellectual property rights</li>
                    <li>Any claim that your Client Content caused damage to a third party</li>
                    <li>Any intentional misconduct by you</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
                  <p>
                    Either party may terminate the service relationship at any time with written notice. Specific termination terms and conditions will be outlined in individual service agreements.
                  </p>
                  <p>
                    We reserve the right to suspend or terminate your access to our Services immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
                  </p>
                  <p>
                    Upon termination: (a) your right to use the Services will immediately cease; (b) you remain liable for all charges incurred prior to termination; (c) provisions that by their nature should survive termination shall survive, including confidentiality, intellectual property, limitation of liability, and indemnification provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Dispute Resolution</h2>
                  <p>
                    <strong>Informal Resolution:</strong> If a dispute arises, the parties agree to first attempt to resolve it through good-faith negotiations for at least 30 days before pursuing formal proceedings.
                  </p>
                  <p>
                    <strong>Arbitration:</strong> Any dispute that cannot be resolved informally shall be resolved by binding arbitration in accordance with the American Arbitration Association's Commercial Arbitration Rules. The arbitration shall be conducted in [Your State/Location], and judgment on the award may be entered in any court having jurisdiction.
                  </p>
                  <p>
                    <strong>Class Action Waiver:</strong> You agree that any proceedings to resolve disputes will be conducted on an individual basis and not in a class, consolidated, or representative action.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the United States and the State of [Your State], without regard to its conflict of law provisions.
                  </p>
                  <p>
                    You agree to submit to the personal jurisdiction of the courts located within [Your State] for the purpose of litigating all such claims or disputes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">13. Force Majeure</h2>
                  <p>
                    Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">14. Severability</h2>
                  <p>
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect and enforceable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">15. Entire Agreement</h2>
                  <p>
                    These Terms, together with any service agreements or statements of work, constitute the entire agreement between you and Modivi Group regarding the use of our Services and supersede all prior and contemporaneous written or oral agreements between you and Modivi Group.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">16. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p>
                    By continuing to access or use our Services after revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, you must stop using the Services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">17. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6 mt-4">
                    <p className="font-bold text-white mb-2">Modivi Group</p>
                    <p>Email: <a href="mailto:admin@modivi.group" className="text-white hover:text-zinc-300 transition-colors">admin@modivi.group</a></p>
                    <p className="mt-4 text-sm text-zinc-500">
                      We will respond to your inquiry within 48 business hours.
                    </p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
