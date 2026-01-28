"use client";

import StarBackground from "../components/StarBackground";
import BusinessNav from "../components/BusinessNav";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      <StarBackground starCount={80} opacityMultiplier={0.45} showLogo={false} />
      
      {/* Navigation */}
      <BusinessNav />

      <div className="relative z-10">
        {/* Privacy Section */}
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
                Privacy Policy
              </h1>
              <p className="text-zinc-500 text-sm">
                Last Updated: January 2026
              </p>
            </div>

            <div className="prose prose-invert prose-zinc max-w-none">
              <div className="space-y-8 text-zinc-300 leading-relaxed">
                
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                  <p>
                    Modivi Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p>
                    This policy complies with applicable data protection laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other relevant privacy regulations as of 2026.
                  </p>
                  <p>
                    By using our services, you consent to the data practices described in this policy. If you do not agree with this policy, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-bold text-white mb-3 mt-6">2.1 Information You Provide Directly</h3>
                  <p>We collect information that you voluntarily provide to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                    <li><strong>Business Information:</strong> Company name, industry, website URL, social media handles, number of customers/clients</li>
                    <li><strong>Project Information:</strong> Service requirements, project goals, budget, timeline preferences</li>
                    <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors)</li>
                    <li><strong>Communications:</strong> Information in emails, messages, inquiry forms, or other communications with us</li>
                    <li><strong>Account Information:</strong> Username, password, and account preferences if you create an account</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">2.2 Information Collected Automatically</h3>
                  <p>When you visit our website, we automatically collect certain information, including:</p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device type</li>
                    <li><strong>Usage Information:</strong> Pages visited, time spent on pages, links clicked, referring website</li>
                    <li><strong>Location Information:</strong> General geographic location based on IP address</li>
                    <li><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies, pixels, and similar technologies (see Section 6)</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">2.3 Information from Third Parties</h3>
                  <p>We may receive information about you from:</p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Social media platforms (if you interact with us on social media)</li>
                    <li>Business partners and referral sources</li>
                    <li>Publicly available sources and databases</li>
                    <li>Analytics and marketing service providers</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                  <p>We use the information we collect for the following purposes:</p>
                  
                  <h3 className="text-xl font-bold text-white mb-3 mt-6">3.1 Service Delivery</h3>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information (invoices, confirmations, updates)</li>
                    <li>Develop and create deliverables as per service agreements</li>
                    <li>Manage client projects and communicate about services</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">3.2 Communication</h3>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Respond to inquiries, requests, and questions</li>
                    <li>Send administrative information, updates, and security alerts</li>
                    <li>Provide customer support and technical assistance</li>
                    <li>Send newsletters, marketing materials, and promotional communications (with your consent)</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">3.3 Business Operations</h3>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Analyze usage patterns and improve our website and services</li>
                    <li>Conduct research and analytics</li>
                    <li>Prevent fraud, enhance security, and troubleshoot technical issues</li>
                    <li>Comply with legal obligations and enforce our terms</li>
                    <li>Maintain records and facilitate business transactions</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">3.4 Marketing and Advertising</h3>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Personalize your experience and deliver targeted content</li>
                    <li>Run promotions, contests, and surveys</li>
                    <li>Display relevant advertisements (with your consent where required)</li>
                    <li>Measure the effectiveness of our marketing campaigns</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. How We Share Your Information</h2>
                  <p>We may share your information in the following circumstances:</p>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">4.1 Service Providers</h3>
                  <p>
                    We share information with third-party vendors, consultants, and service providers who perform services on our behalf, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Website hosting and maintenance providers</li>
                    <li>Payment processors and financial institutions</li>
                    <li>Email and communication service providers</li>
                    <li>Analytics and advertising platforms</li>
                    <li>CRM and project management tools</li>
                    <li>Cloud storage providers</li>
                  </ul>
                  <p>
                    These service providers are contractually obligated to use your information only for the purposes we specify and to protect your information.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">4.2 Business Transfers</h3>
                  <p>
                    If we are involved in a merger, acquisition, asset sale, or bankruptcy, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">4.3 Legal Requirements</h3>
                  <p>We may disclose your information if required to do so by law or in response to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Valid legal requests (subpoenas, court orders, government investigations)</li>
                    <li>Protection of our rights, property, or safety, or that of others</li>
                    <li>Detection, prevention, or addressing of fraud or security issues</li>
                    <li>Enforcement of our Terms of Service or other agreements</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">4.4 With Your Consent</h3>
                  <p>
                    We may share your information for any other purpose with your explicit consent.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">4.5 Aggregated or De-Identified Information</h3>
                  <p>
                    We may share aggregated or de-identified information that cannot reasonably be used to identify you for research, marketing, or other business purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                  <p>
                    Factors we consider in determining retention periods include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>The duration of our relationship with you</li>
                    <li>Legal obligations to retain data (tax, accounting, legal requirements)</li>
                    <li>Statute of limitations for potential legal claims</li>
                    <li>Business operational needs</li>
                    <li>Records of consent and privacy preferences</li>
                  </ul>
                  <p>
                    When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies and applicable law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies, web beacons, pixels, and similar tracking technologies to collect and store information about your interactions with our website.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">6.1 Types of Cookies We Use</h3>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly (session management, security)</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics, similar services)</li>
                    <li><strong>Marketing Cookies:</strong> Track your browsing to deliver personalized advertisements</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">6.2 Managing Cookies</h3>
                  <p>
                    Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Please note that disabling cookies may affect the functionality of our website.
                  </p>
                  <p>
                    You can also opt out of targeted advertising through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Digital Advertising Alliance: <a href="http://www.aboutads.info/choices/" className="text-white hover:text-zinc-300 transition-colors" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices</a></li>
                    <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/choices/" className="text-white hover:text-zinc-300 transition-colors" target="_blank" rel="noopener noreferrer">www.networkadvertising.org/choices</a></li>
                    <li>Google Ad Settings: <a href="https://adssettings.google.com" className="text-white hover:text-zinc-300 transition-colors" target="_blank" rel="noopener noreferrer">adssettings.google.com</a></li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">7.1 General Rights</h3>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                    <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                    <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw previously given consent at any time</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">7.2 GDPR Rights (EU/EEA Residents)</h3>
                  <p>
                    If you are located in the European Union or European Economic Area, you have additional rights under GDPR, including the right to lodge a complaint with a supervisory authority.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">7.3 CCPA Rights (California Residents)</h3>
                  <p>
                    If you are a California resident, you have specific rights under the California Consumer Privacy Act:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Right to know what personal information we collect, use, disclose, and sell</li>
                    <li>Right to request deletion of your personal information</li>
                    <li>Right to opt-out of the sale of your personal information (we do not sell personal information)</li>
                    <li>Right to non-discrimination for exercising your privacy rights</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3 mt-6">7.4 Exercising Your Rights</h3>
                  <p>
                    To exercise any of these rights, please contact us at <a href="mailto:admin@modivi.group?subject=Privacy%20Rights%20Request" className="text-white hover:text-zinc-300 transition-colors">admin@modivi.group</a> with "Privacy Rights Request" in the subject line.
                  </p>
                  <p>
                    We will respond to your request within the timeframe required by applicable law (typically 30-45 days). We may need to verify your identity before processing your request.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Encryption of data in transit and at rest (SSL/TLS protocols)</li>
                    <li>Secure server infrastructure and firewalls</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication requirements</li>
                    <li>Employee training on data protection and security</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                  <p>
                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country.
                  </p>
                  <p>
                    When we transfer personal information internationally, we ensure appropriate safeguards are in place, such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Standard Contractual Clauses approved by the European Commission</li>
                    <li>Adequacy decisions recognizing equivalent data protection</li>
                    <li>Binding corporate rules for intra-group transfers</li>
                    <li>Your explicit consent for the transfer</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18.
                  </p>
                  <p>
                    If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Third-Party Links and Services</h2>
                  <p>
                    Our website may contain links to third-party websites, services, or applications that are not operated by us. We are not responsible for the privacy practices of these third parties.
                  </p>
                  <p>
                    We encourage you to review the privacy policies of any third-party sites or services before providing any personal information. This Privacy Policy applies only to information collected by Modivi Group.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Do Not Track Signals</h2>
                  <p>
                    Some browsers have a "Do Not Track" feature that signals to websites that you visit that you do not want to have your online activity tracked. Our website does not currently respond to Do Not Track signals or similar mechanisms.
                  </p>
                  <p>
                    You can manage tracking preferences through your browser settings and the opt-out mechanisms described in Section 6.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">13. Marketing Communications</h2>
                  <p>
                    If you receive marketing emails from us, you can opt out at any time by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Clicking the "unsubscribe" link at the bottom of any marketing email</li>
                    <li>Contacting us at <a href="mailto:admin@modivi.group" className="text-white hover:text-zinc-300 transition-colors">admin@modivi.group</a></li>
                    <li>Updating your communication preferences in your account settings</li>
                  </ul>
                  <p>
                    Please note that even if you opt out of marketing communications, we may still send you non-promotional messages related to your account or our ongoing business relationship.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">14. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
                  </p>
                  <p>
                    We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                    <li>Posting the updated policy on this page with a new "Last Updated" date</li>
                    <li>Sending an email notification to the address associated with your account</li>
                    <li>Displaying a prominent notice on our website</li>
                  </ul>
                  <p>
                    Your continued use of our services after the effective date of the updated policy constitutes your acceptance of the changes. We encourage you to review this policy periodically.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">15. Contact Us</h2>
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6 mt-4">
                    <p className="font-bold text-white mb-2">Modivi Group</p>
                    <p className="mb-2">Data Protection Officer</p>
                    <p>Email: <a href="mailto:admin@modivi.group?subject=Privacy%20Inquiry" className="text-white hover:text-zinc-300 transition-colors">admin@modivi.group</a></p>
                    <p className="mt-4 text-sm text-zinc-500">
                      We will respond to your inquiry within 48 business hours.
                    </p>
                  </div>
                </section>

                <section className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-bold text-white mb-3">Your Privacy Matters</h3>
                  <p className="text-sm">
                    We are committed to transparency and protecting your privacy rights. This policy is designed to help you understand how we handle your information and the choices available to you. If you have any questions or concerns, we're here to help.
                  </p>
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
