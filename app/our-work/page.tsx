"use client";

import { useState } from "react";
import StarBackground from "../components/StarBackground";
import ImageCarousel from "../components/ImageCarousel";
import BusinessNav from "../components/BusinessNav";
import Footer from "../components/Footer";

export default function OurWorkPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: "Adonai Alliance",
      industry: "Healthcare",
      serviceType: "Full-Service",
      image: "/assets/Adonai.PNG",
      website: "https://www.adonaialliance.com/",
      shortDescription: "Transformed a brick-and-mortar healthcare agency with an outdated 2012 website into a modern digital operation by redesigning their entire web presence, driving a 45% increase in class attendance, and building a custom application to manage thousands of clients across Massachusetts.",
      sections: [
        {
          title: "Overview",
          content: "Before working with us, Adonai Alliance was running their healthcare business the old-school way: purely brick and mortar with everything happening through word of mouth. Their last website was from 2012 and hadn't been touched since. They were struggling to manage thousands of clients across Massachusetts using outdated systems. We completely transformed how they operate digitally."
        },
        {
          title: "Complete Website Redesign",
          content: "We threw out the 2012 website and built them a modern one from scratch. The new site made it easy for families to find their services, understand what they offer, and get in touch. It became their main tool for getting new clients instead of relying only on referrals."
        },
        {
          title: "Marketing CNA Certification Classes",
          content: "We took over all the marketing for their CNA (Certified Nursing Assistant) certification courses and training classes. We ran targeted campaigns to reach people looking to start careers in healthcare. The results were clear: we increased class attendance by 45% compared to what they were getting through word of mouth alone."
        },
        {
          title: "Custom Client Management System",
          content: "Their biggest struggle was managing thousands of clients spread across Massachusetts. Scheduling nurses, tracking client information, managing nurse assignments... it was chaos doing this manually. We built them a complete web application that handles all of this. The system lets their staff schedule nurses for clients, keep all client information organized, manage nurse assignments and availability, and track everything in one place. This saved them countless hours every week."
        },
        {
          title: "Ongoing Support",
          content: "We didn't just build it and leave; we maintained everything, made updates as needed, and kept their digital presence running smoothly."
        }
      ],
    },
    {
      id: 2,
      name: "Treasure Coast Fence",
      industry: "Construction",
      serviceType: "Full-Service",
      image: "/assets/TCF.PNG",
      website: "https://www.treasurecoastfence.com/",
      shortDescription: "Took a 1-month-old fencing business and scaled it to become the #1 fence provider in Port St. Lucie, Florida, growing from $2,500 to $50,000 per month through complete digital marketing, website development, and strategic advertising across 6 platforms.",
      sections: [
        {
          title: "Overview",
          content: "When the owner of Treasure Coast Fence contacted us, his business was only one month old and bringing in about $2,500 a month. He needed help fast. We built his entire digital presence from scratch and helped him hyper-scale into the #1 fence provider in Port St. Lucie, Florida, reaching $50,000 per month in revenue. That's a 2000% increase in a short time frame."
        },
        {
          title: "From Startup to Market Leader",
          content: "Starting with a brand-new business is tough: you have no reputation, no online presence, and limited customers. We helped him jump straight to market leader status by creating a professional digital presence that made his one-month-old business look established and trustworthy. Combined with aggressive marketing, this positioned him as the go-to fence company in Port St. Lucie."
        },
        {
          title: "Website Development",
          content: "We built them a professional website that showcases their work and makes it easy for customers to request quotes. The site is mobile-friendly and optimized for local searches, so people in their area can easily find them."
        },
        {
          title: "Social Media Setup & Management",
          content: "We created and set up their presence on all major platforms: Facebook, Instagram, TikTok, YouTube, Reddit, and Yelp. Each platform was optimized with their branding, contact information, and regular content to reach different types of customers."
        },
        {
          title: "Targeted Advertising Campaigns",
          content: "We ran focused ad campaigns on Google and Facebook targeting homeowners and businesses in their service area. Using detailed keyword research, we made sure their ads showed up when people searched for fence installation and repair services."
        },
        {
          title: "Competitive Research & Pricing Strategy",
          content: "We analyzed what other fencing companies in the area were doing and charging. This helped us position Treasure Coast Fence competitively while highlighting what made them different and better."
        },
        {
          title: "Marketing Materials",
          content: "We designed professional business cards and brochures they could hand out to customers and leave at local businesses. These materials matched their website and social media, creating a consistent brand image."
        },
        {
          title: "SEO & Keyword Research",
          content: "We researched the exact terms people in their area were searching for when looking for fence services. Then we optimized their website and ads to rank for those searches, bringing in more qualified leads."
        },
        {
          title: "Ongoing Support",
          content: "We continue to maintain their website, run their advertising campaigns, and manage their social media presence to keep the growth going and attract new customers."
        }
      ],
    },
    {
      id: 3,
      name: "Mondy Cleaners",
      industry: "Laundry",
      serviceType: "Web Services",
      image: "/assets/Mondy.PNG",
      website: "https://mondy-cleaners.com/",
      shortDescription: "Created an innovative DoorDash-style platform for a laundry business, featuring an AI chatbot for 24/7 customer support, automated payment processing, and online pickup/drop-off scheduling, allowing the solo owner to run everything digitally without manual booking or payments.",
      sections: [
        {
          title: "Overview",
          content: "Mondy Cleaners is a laundry and dry cleaning business run by a single owner. We built him a complete digital solution that works like DoorDash or Uber Eats, but for laundry. Customers can order online, pay upfront, and schedule their pickup or drop-off, all without the owner having to manage any of it manually."
        },
        {
          title: "The Digital Solution",
          content: "We created a website that acts as his entire digital storefront. Customers can browse services, get instant pricing information, pay online, and schedule their laundry pickup or drop-off. All payments go directly to the owner, and the system handles everything automatically."
        },
        {
          title: "AI Chatbot Integration",
          content: "We built in an AI chatbot that answers customer questions 24/7. If someone is confused about pricing, services, or how the pickup process works, the chatbot helps them out instantly. This means the owner doesn't have to be on call to answer questions; the AI handles it."
        },
        {
          title: "Online Payment & Scheduling",
          content: "Just like ordering food delivery, customers fill out a form, pay for their laundry service upfront, and choose their pickup and drop-off times. This pre-payment system means the owner knows exactly what's coming and gets paid automatically, with no chasing payments or manual booking."
        },
        {
          title: "Why This Works For A Solo Owner",
          content: "Running a laundry business alone is tough. This website takes away all the digital work. The owner doesn't have to answer phones, process payments manually, or manage schedules. Everything comes through the website, payments are automatic, and customers get instant answers from the AI. He can focus entirely on the actual laundry work."
        },
        {
          title: "Ongoing Support",
          content: "We continue to maintain the website and AI chatbot, making sure everything runs smoothly and stays up to date. The system just works in the background, bringing in customers and handling payments while he runs his business."
        }
      ],
    },
    {
      id: 4,
      name: "JB Mechanical",
      industry: "HVAC & Plumbing",
      serviceType: "Web Services",
      image: "/assets/JB-Mechanical.PNG",
      website: "https://jb-mechanical.vercel.app/",
      shortDescription: "Developed a comprehensive website for a solo HVAC and plumbing contractor to expand beyond word-of-mouth marketing, with ongoing seasonal advertising campaigns to attract customers during peak heating season.",
      sections: [
        {
          title: "Overview",
          content: "JB Mechanical is run by a single HVAC and plumbing contractor who was getting all his work through word of mouth. While his family helped run social media pages, he had no website because he didn't have the technical knowledge to build one. We stepped in to create his complete online presence and help him reach customers beyond just referrals."
        },
        {
          title: "Website as Information Hub",
          content: "We built a website that acts as a central source of information about his business. Potential customers can see all his services (heating, cooling, plumbing), service areas across Massachusetts, New Hampshire, and Maine, pricing information, and customer reviews—everything they need to make a decision to call him."
        },
        {
          title: "The Challenge: Beyond Word of Mouth",
          content: "As a solo operator, he was limited to the customers he could reach through referrals and his family's social media efforts. He needed a way to market his business professionally without having to learn web development or digital marketing himself. The website gives him a professional online presence that works 24/7 to bring in new leads."
        },
        {
          title: "Seasonal Advertising Strategy",
          content: "This is an ongoing project. We started with the website, and now we're working on targeted advertising campaigns that will run during the winter and cold season, when people need heating repairs and installations the most. These ads will drive people to his website where they can learn about his services and contact him directly."
        },
        {
          title: "Filling The Technical Gap",
          content: "He's great at HVAC and plumbing work, but didn't have the knowledge to build a website or run digital ads. That's exactly what we do. We handle all the technical and marketing work so he can focus on what he does best: serving his customers."
        },
        {
          title: "What's Next",
          content: "We're currently launching his winter advertising campaigns to capitalize on the heating season. As we continue working together, we'll expand his marketing efforts and keep the website updated with new customer reviews and seasonal promotions."
        }
      ],
    },
    {
      id: 5,
      name: "Restoration Healthcare",
      industry: "Healthcare",
      serviceType: "Full-Service",
      image: "/assets/Restoration.PNG",
      website: "#", // Add website URL when available
      shortDescription: "Built a complete content marketing ecosystem for a growing healthcare provider, creating a modern website with a staff-managed blog, email newsletter system, and digital infrastructure that enabled geographic expansion from Peabody into Western Massachusetts.",
      sections: [
        {
          title: "Overview",
          content: "Restoration Healthcare had ambitions to grow beyond their local Peabody operation, but they lacked the digital tools to make it happen. They needed more than just a website; they wanted a complete content marketing system their staff could actually use without constant tech support. We built them a full digital ecosystem focused on scalable communication and geographic expansion."
        },
        {
          title: "Content-First Website",
          content: "We designed their website to be a content hub, not just a digital brochure. The site features their services, patient resources, and most importantly, a blog section that their team controls. This gave them a platform to publish health tips, community updates, and educational content that would help them rank in search results and build trust with potential clients in new markets."
        },
        {
          title: "Worker-Managed Blog System",
          content: "We created a custom blog platform that their team can edit and update themselves, with no technical knowledge required. This lets them share health tips, company updates, and important information with their community. Giving their staff direct control means the content stays fresh and relevant without needing to go through us for every change."
        },
        {
          title: "Email Newsletter System",
          content: "We set up an email newsletter system that helps them stay connected with current and potential clients. They can send out updates about services, health information, and company news directly to people who want to hear from them. This keeps Restoration Healthcare top-of-mind and builds long-term relationships with their community."
        },
        {
          title: "Geographic Expansion",
          content: "With their new digital presence, we helped them expand beyond their home base in Peabody into the Western Massachusetts area. The website gave them credibility in new markets, and the newsletter system let them stay connected with clients across a much larger geographic footprint. They went from a purely local operation to serving patients throughout Massachusetts."
        },
        {
          title: "The Self-Service Advantage",
          content: "What makes this project unique is how much control we gave their team. They don't need to call us every time they want to publish a blog post or send a newsletter. The systems we built are intuitive enough that anyone on their staff can use them. This means they can move fast, respond to community needs in real-time, and keep their content fresh without waiting on developers or paying for constant updates."
        }
      ],
    },
  ];
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
              Modivi Your Business
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
              {projects.map((project) => (
                <div key={project.id} className="group">
                  <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
                    {/* Image - Links to website if available, otherwise opens modal */}
                    {project.website && project.website !== "#" ? (
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative block aspect-video bg-zinc-900 border-b border-zinc-800 overflow-hidden group/img"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all flex items-center justify-center">
                          <div className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-white text-black px-4 py-2 rounded-full font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                            Visit Site
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M7 7h10v10M7 17 17 7"/>
                            </svg>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div 
                        className="relative aspect-video bg-zinc-900 border-b border-zinc-800 overflow-hidden cursor-pointer"
                        onClick={() => setSelectedProject(project.id)}
                      >
                        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Card Content - Opens modal */}
                    <div className="p-6 cursor-pointer" onClick={() => setSelectedProject(project.id)}>
                      <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-zinc-300 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-3">{project.industry} • {project.serviceType}</p>
                      <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                          <path d="M5 12h14m-7-7 7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* Modal */}
            {selectedProject !== null && (
              <div 
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                <div 
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {projects.filter(p => p.id === selectedProject).map((project) => (
                    <div key={project.id}>
                      {/* Modal Header */}
                      <div className="sticky top-0 bg-zinc-950 border-b border-zinc-800 p-6 flex items-center justify-between z-10">
                        <div>
                          <h2 className="text-3xl font-black uppercase tracking-tight mb-2">{project.name}</h2>
                          <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">{project.industry} • {project.serviceType}</p>
                        </div>
                        <button 
                          onClick={() => setSelectedProject(null)}
                          className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
                          aria-label="Close modal"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18M6 6l12 12"/>
                          </svg>
                        </button>
                      </div>

                      {/* Modal Content */}
                      <div className="p-8">
                        <div className="mb-10">
                          <a 
                            href={project.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block group relative"
                          >
                            <img 
                              src={project.image} 
                              alt={project.name} 
                              className="w-full rounded-xl border border-zinc-800 group-hover:border-zinc-700 transition-all"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all rounded-xl flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                Visit Website
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M7 7h10v10M7 17 17 7"/>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="space-y-8">
                          {project.sections.map((section, i) => (
                            <div key={i} className="space-y-4">
                              <div className="flex items-start gap-4">
                                <div className="w-1 h-8 bg-white rounded-full shrink-0" />
                                <h3 className="text-2xl font-bold tracking-tight pt-1">
                                  {section.title}
                                </h3>
                              </div>
                              <p className="text-zinc-300 text-lg leading-relaxed pl-5">
                                {section.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
