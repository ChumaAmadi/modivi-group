"use client";

import { useState } from "react";
import Link from "next/link";
import StarBackground from "../components/StarBackground";
import BusinessNav from "../components/BusinessNav";
import Footer from "../components/Footer";

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null);

  const solutions = [
    {
      id: 1,
      title: 'Brand Identity',
      description: 'Create a cohesive visual identity that resonates with your target audience and stands out in your industry.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Assets'],
      sections: [
        {
          title: "Overview",
          content: "Your brand is more than just a logo; it's the complete visual and emotional experience your customers have with your business. We create comprehensive brand identities that make you instantly recognizable and memorable in your market."
        },
        {
          title: "Logo & Visual Design",
          content: "We design logos that are simple, memorable, and scalable across all platforms. Your logo will work just as well on a business card as it does on a billboard. We create multiple variations for different use cases: full color, monochrome, and icon-only versions, so you're covered for every situation."
        },
        {
          title: "Brand Guidelines",
          content: "We don't just hand you a logo and leave. You'll get a complete brand style guide that covers your color palette, typography, logo usage, visual style, and tone of voice. This ensures your brand looks consistent whether you're designing a website, printing business cards, or posting on social media."
        },
        {
          title: "Visual Assets",
          content: "Get a full library of branded materials ready to use: business cards, letterheads, social media templates, email signatures, and presentation templates. Everything is designed to work together cohesively and reinforce your brand identity."
        },
        {
          title: "Why This Matters",
          content: "Consistent branding builds trust and recognition. When your business looks professional and polished everywhere, customers take you seriously. A strong brand identity makes you look established, credible, and worth choosing over competitors who haven't invested in their image."
        }
      ]
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers with seamless user experiences.',
      features: ['Custom Design', 'SEO Optimized', 'Ongoing Support'],
      sections: [
        {
          title: "Overview",
          content: "Your website is your digital storefront and often the first impression potential customers have of your business. We build fast, modern, mobile-friendly websites designed to convert visitors into customers, not just look pretty."
        },
        {
          title: "Custom Design Tailored to You",
          content: "No cookie-cutter templates here. We design every website from scratch based on your business, your industry, and what your customers actually need. The result is a unique site that reflects your brand and guides visitors exactly where you want them to go."
        },
        {
          title: "Built for Search Engines",
          content: "What good is a beautiful website if no one can find it? We build sites with SEO in mind from day one: clean code, fast loading speeds, proper meta tags, mobile optimization, and structured data. This gives you the best shot at ranking in Google searches for your services."
        },
        {
          title: "Mobile-First Approach",
          content: "Most of your visitors are on phones. We design for mobile screens first, then scale up to tablets and desktops. This ensures your site looks great and works perfectly no matter what device someone is using."
        },
        {
          title: "Conversion-Focused Features",
          content: "Every website we build includes clear calls-to-action, contact forms that actually work, click-to-call buttons for mobile users, and strategic placement of trust signals like testimonials and credentials. The goal is to make it as easy as possible for visitors to become customers."
        },
        {
          title: "What You Get",
          content: "A fully functional website, hosting setup, domain connection, and SSL certificate for security. We handle domain purchasing and transfers if needed. You also get basic training on how to update simple content yourself, but we're always available to make changes for you."
        },
        {
          title: "Ongoing Updates & Support",
          content: "Need to update your website? We handle it. Want to add new features, remove old ones, or swap out images and content? Just ask. Website acting slow or having issues? We fix it. You get what you pay for and more—no surprise charges for basic updates and maintenance."
        },
        {
          title: "No Tech Headaches",
          content: "We focus on making sure you face zero technical stress. You shouldn't have to deal with technical problems or figure out how to make changes yourself. That's our job. You run your business, we handle your website."
        }
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that increase visibility and drive qualified leads to your business.',
      features: ['Social Media Setup', 'Content Strategy', 'Ad Campaigns'],
      sections: [
        {
          title: "Overview",
          content: "Having a website isn't enough; you need people to actually find it. We create and execute complete digital marketing strategies that get your business in front of the right people at the right time, turning online attention into real customers."
        },
        {
          title: "Social Media Setup & Handle Capture",
          content: "We create and secure your social media presence across all major platforms, capturing consistent handles (usernames) that match your brand name. We set up Facebook, Instagram, LinkedIn, TikTok, YouTube, and any other platforms relevant to your business."
        },
        {
          title: "Building Your Digital Network",
          content: "These profiles are all linked to your website, creating a connected web of brand touchpoints across the internet. This network makes it easier for customers to find you through multiple channels, whether they're on social media, Google, or browsing the web."
        },
        {
          title: "SEO Benefits",
          content: "This connected presence significantly boosts your search engine rankings. When people search for your business or similar services in your area, search engines see this consistent brand presence across platforms and rank you higher in results. More visibility means more customers."
        },
        {
          title: "Social Media Management",
          content: "We set up and manage your presence on the platforms where your customers actually are: Facebook, Instagram, TikTok, LinkedIn, YouTube, wherever makes sense for your business. Regular posts, engagement with followers, and content that keeps you top-of-mind without you having to think about it."
        },
        {
          title: "Content Strategy",
          content: "We plan and create content that serves a purpose: educating your audience, showcasing your work, building trust, and driving traffic to your website. Every piece of content is intentional, not just random posts to fill a calendar."
        },
        {
          title: "Paid Advertising Campaigns",
          content: "We run targeted ad campaigns on Google, Facebook, and Instagram that reach people actively searching for your services. We handle keyword research, ad creation, audience targeting, budget management, and ongoing optimization to get you the best return on your ad spend."
        },
        {
          title: "Email Marketing",
          content: "Build and nurture an email list of potential and past customers. We set up automated email sequences, newsletters, and promotional campaigns that keep you in touch with your audience without manual work every week."
        },
        {
          title: "Analytics & Reporting",
          content: "You'll get regular reports showing what's working: website traffic, leads generated, conversion rates, and ROI. We track everything so you can see exactly where your marketing dollars are going and what results you're getting."
        }
      ]
    },
    {
      id: 4,
      title: 'Lead Generation',
      description: 'Automated systems that capture, nurture, and convert leads while you focus on your craft.',
      features: ['Lead Funnels', 'Email Marketing', 'CRM Setup'],
      sections: [
        {
          title: "Overview",
          content: "Stop chasing leads manually. We build automated systems that attract potential customers, capture their information, nurture them with targeted follow-ups, and deliver them to you ready to buy. It's like having a sales team working 24/7."
        },
        {
          title: "Lead Capture Systems",
          content: "We set up forms, landing pages, and lead magnets (free guides, quotes, consultations) that give people a reason to share their contact information with you. These are strategically placed on your website and promoted through ads to maximize conversions."
        },
        {
          title: "Automated Follow-Up",
          content: "The moment someone fills out a form, they're entered into an automated email sequence that educates them about your services, answers common questions, and builds trust. This keeps you top-of-mind until they're ready to buy, without you manually sending emails."
        },
        {
          title: "CRM Setup & Management",
          content: "We set up a customer relationship management (CRM) system that tracks every lead: where they came from, what they're interested in, and what stage of the buying process they're in. You'll always know who to follow up with and what to say."
        },
        {
          title: "Lead Scoring & Qualification",
          content: "Not all leads are equal. We set up systems that score leads based on their behavior: what pages they visited, what emails they opened, and what forms they filled out. This helps you prioritize the hottest leads who are most likely to become customers."
        },
        {
          title: "The Result",
          content: "A constant flow of qualified leads coming in, automatically sorted and nurtured, delivered to you with all the information you need to close the deal. You spend less time prospecting and more time serving customers."
        }
      ]
    },
    {
      id: 5,
      title: 'Local SEO',
      description: 'Dominate local search results and become the go-to choice in your area.',
      features: ['Google Business', 'Social Integration', 'Scalable Growth'],
      sections: [
        {
          title: "Overview",
          content: "When someone in your area searches for what you offer, you need to show up first. We optimize your business for local search so you dominate Google Maps and local search results, becoming the obvious choice in your market."
        },
        {
          title: "Google Business Profile Optimization",
          content: "We fully optimize your Google Business Profile with accurate information, professional photos, service descriptions, and regular updates. This is the #1 factor in showing up in local searches and the map pack (the top 3 businesses Google shows for local queries)."
        },
        {
          title: "Local Citations",
          content: "We get your business listed on all the major directories: Yelp, Yellow Pages, industry-specific sites, and local business directories. Consistent information across these platforms signals to Google that you're a legitimate, established business, boosting your local rankings."
        },
        {
          title: "Review Generation & Management",
          content: "Reviews are social proof and a major ranking factor. We set up systems that make it easy for happy customers to leave reviews, and we help you respond to all reviews (positive and negative) professionally to build trust and improve your reputation."
        },
        {
          title: "Location Pages & Content",
          content: "We create location-specific pages on your website optimized for searches in your area. These pages target location-based keywords and provide valuable information that helps you rank for \"[service] near me\" and \"[service] in [city]\" searches."
        },
        {
          title: "Social Media Integration for SEO",
          content: "We integrate your social media platforms into your SEO strategy using platform-specific features like hashtags, location tags, and keywords. Strategic use of local hashtags on Instagram and TikTok, combined with location-tagged posts across all platforms, creates additional pathways for people to find your business. Search engines see this active social presence and factor it into your rankings. Each social platform becomes another channel driving visibility and traffic."
        },
        {
          title: "Expanding Beyond Local",
          content: "While we focus on dominating your local market first, we can expand your reach based on your business needs. If you're ready to serve customers in neighboring cities, regions, or even nationally, we adjust your SEO strategy accordingly. We create additional location pages, expand your keyword targeting, and optimize for broader geographic areas. Local dominance is the foundation, but we scale with your growth."
        },
        {
          title: "Why Local SEO Matters",
          content: "Most local searches lead to purchases within 24 hours. If you're not showing up when someone nearby searches for your services, you're losing money to competitors who are. Local SEO gets you in front of people ready to buy, right in your service area."
        }
      ]
    },
    {
      id: 6,
      title: 'Content Creation',
      description: 'Consistent, high-quality content that keeps your brand top-of-mind and builds authority.',
      features: ['Photography', 'Videography', 'Copywriting'],
      sections: [
        {
          title: "Overview",
          content: "Content is how you stay visible, build trust, and establish yourself as the expert in your field. We create professional photos, videos, and written content that showcases your work and keeps your business in front of potential customers."
        },
        {
          title: "Professional Photography",
          content: "High-quality photos of your work, your team, and your location. We capture images that make your business look professional and credible, perfect for your website, social media, ads, and marketing materials. No more blurry phone photos."
        },
        {
          title: "Video Production",
          content: "Video is the most engaging content format. We create service explainer videos, customer testimonials, behind-the-scenes content, and social media reels that show what you do and why people should choose you. Video builds connection and trust faster than any other medium."
        },
        {
          title: "Copywriting & Messaging",
          content: "We write website copy, blog posts, social media captions, email newsletters, and ad copy that speaks directly to your target customers. Clear, persuasive messaging that explains what you do, why it matters, and how to get started."
        },
        {
          title: "Content Calendar & Consistency",
          content: "We plan and schedule content in advance so you have a consistent presence online. Regular posting keeps you top-of-mind, improves your search rankings, and gives people reasons to follow and engage with your brand."
        },
        {
          title: "Repurposing Content",
          content: "We maximize the value of every piece of content by repurposing it across multiple platforms. A single video can become a blog post, social media clips, email content, and ad creative. You get more reach without creating more content from scratch."
        }
      ]
    },
  ];

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
              <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-wide">
                Our Solutions
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions tailored to your business needs. 
                We provide everything you need to establish, grow, and dominate your market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div 
                  key={solution.id} 
                  onClick={() => setSelectedSolution(solution.id)}
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
                </div>
              ))}
            </div>

            {/* Modal */}
            {selectedSolution !== null && (
              <div 
                className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedSolution(null)}
              >
                <div 
                  className="bg-black border border-zinc-800 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {solutions.filter(s => s.id === selectedSolution).map((solution) => (
                    <div key={solution.id}>
                      {/* Modal Header */}
                      <div className="sticky top-0 bg-black border-b border-zinc-800 p-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold uppercase tracking-tight">{solution.title}</h2>
                        <button 
                          onClick={() => setSelectedSolution(null)}
                          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-900 transition-colors"
                          aria-label="Close modal"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18M6 6l12 12"/>
                          </svg>
                        </button>
                      </div>

                      {/* Modal Content */}
                      <div className="overflow-y-auto max-h-[calc(80vh-180px)] p-8">
                        <div className="space-y-6">
                          {solution.sections.map((section, i) => (
                            <div key={i}>
                              <h3 className="text-lg font-bold mb-3 text-zinc-200">
                                {section.title}
                              </h3>
                              <p className="text-zinc-400 leading-relaxed">
                                {section.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Modal Footer */}
                      <div className="sticky bottom-0 bg-black border-t border-zinc-800 p-6">
                        <Link 
                          href="/contact"
                          className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-sm font-bold hover:bg-zinc-200 transition-colors uppercase tracking-wide rounded-lg"
                        >
                          Get Started
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14m-7-7 7 7-7 7"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
        <Footer />
      </div>
    </div>
  );
}
