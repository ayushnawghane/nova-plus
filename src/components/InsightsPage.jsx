import { useEffect } from 'react';
import PageHeader from './PageHeader';

const insightsData = [
    {
        tag: 'REGULATORY UPDATE',
        date: 'June 20, 2026',
        readTime: '6 min read',
        title: 'Singapore Mandatory Climate Disclosures (FY2025/2026)',
        desc: 'An in-depth breakdown of the new ACRA & SGX requirements aligned with ISSB / IFRS S1 & S2 standards. Learn what is expected from listed companies and large non-listed enterprises, and how to prepare your reporting timelines.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
    },
    {
        tag: 'DECARBONISATION',
        date: 'May 14, 2026',
        readTime: '8 min read',
        title: 'Navigating Scope 3 Emissions in Supply Chains',
        desc: 'Scope 3 emissions often account for over 70% of an industrial company’s footprint. This guide provides a practical approach to mapping activity data, applying emission factors, and engaging suppliers without disrupting operational workflows.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop'
    },
    {
        tag: 'ESG RATINGS',
        date: 'April 28, 2026',
        readTime: '5 min read',
        title: 'EcoVadis Ratings Readiness & Gap Analysis',
        desc: 'EcoVadis assessments are increasingly required by global MNCs in procurement cycles. Discover the key themes across Environment, Labour & Human Rights, Ethics, and Sustainable Procurement, and the evidence needed to score higher.',
        image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop'
    },
    {
        tag: 'GOVERNANCE',
        date: 'March 11, 2026',
        readTime: '7 min read',
        title: 'Integrating Sustainability into Corporate Governance',
        desc: 'Effective ESG practices start in the boardroom. We discuss how to establish clear KPI frameworks, define roles, and build internal capability to translate compliance mandates into long-term commercial value.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop'
    }
];

export default function InsightsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-[#f8fafc] overflow-hidden">
            {/* ① Page Header (Hero) */}
            <PageHeader 
                eyebrow="Resources & News"
                title="ESG Insights, Regulatory Updates & Practical Guidance"
                description="Stay informed with expert perspectives, sustainability reporting guidance, climate disclosure updates, and practical ESG insights for businesses across Singapore and the region."
                image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop"
            />

            {/* ② Grid of Insights */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {insightsData.map((item, idx) => (
                            <article 
                                key={idx} 
                                className="flex flex-col bg-[#f4f7f5] border border-[#e0ebe5] rounded-[2.5rem] overflow-hidden group hover:shadow-xl hover:border-[#73aa3c]/20 hover:-translate-y-1.5 transition-all duration-500"
                            >
                                {/* Visual cover */}
                                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-[#003567]/10 mix-blend-multiply"></div>
                                    <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-[#003567] text-white font-bold text-[9px] uppercase tracking-widest">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* Content block */}
                                <div className="p-8 md:p-10 flex flex-col justify-between flex-grow text-left">
                                    <div>
                                        <div className="flex items-center gap-3 text-slate-400 text-xs mb-4">
                                            <span>{item.date}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                            <span>{item.readTime}</span>
                                        </div>
                                        <h3 className="font-serif text-xl md:text-2xl text-[#003567] font-bold leading-snug mb-4 group-hover:text-[#73aa3c] transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light mb-8">
                                            {item.desc}
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-[#003567] font-bold text-xs uppercase tracking-wider group-hover:text-[#73aa3c] transition-colors duration-300 mt-auto">
                                        Read Article <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ③ Newsletter CTA */}
            <section className="py-20 px-6 bg-slate-50 relative overflow-hidden border-t border-slate-100">
                <div className="max-w-4xl mx-auto text-center relative z-10 animate-reveal">
                    <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-3 block">Stay Informed</span>
                    <h2 className="font-serif text-3xl md:text-4.5xl text-[#003567] font-extrabold leading-tight mb-6">
                        Get Practical ESG Updates
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-light">
                        Subscribe to receive our latest insights on SGX compliance, Scope 3 reporting, and global ESG regulations direct to your inbox.
                    </p>
                    
                    <form 
                        onSubmit={(e) => { e.preventDefault(); alert("Subscribed! Thank you for joining Nova Plus Insights."); }}
                        className="flex flex-col sm:flex-row justify-center items-stretch gap-3 max-w-md mx-auto"
                    >
                        <input 
                            type="email" 
                            placeholder="Enter your corporate email address" 
                            required 
                            className="px-5 py-3.5 rounded-full border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:border-[#73aa3c] transition-colors flex-grow shadow-inner"
                        />
                        <button 
                            type="submit" 
                            className="bg-[#003567] hover:bg-[#73aa3c] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md shadow-[#003567]/10 shrink-0"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
