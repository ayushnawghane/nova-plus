import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function FAQ({ faqs = [] }) {
    const faqItems = faqs;
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (faqItems.length === 0) return null;

    return (
        <section className="relative py-24 bg-gradient-to-b from-[#f8fafc] to-[#ffffff] overflow-hidden">
            {/* Subtle mesh background */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{ 
                    backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Sticky Column: Intro & CTA */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 animate-reveal">
                        <div>
                            <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-3 block">Got Questions?</span>
                            <h2 className="font-serif text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-[#003567]">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                            Find clear, actionable answers to common questions about ESG consultancy, compliance reporting, carbon accounting, and capability building.
                        </p>
                        
                        <div className="bg-[#003567] rounded-2xl p-6 text-white shadow-lg shadow-[#003567]/10 space-y-4">
                            <p className="font-bold text-base font-serif">Have a custom query?</p>
                            <p className="text-white/70 text-xs font-light leading-relaxed">
                                Our sustainability consultants are here to help your organization design a practical roadmap.
                            </p>
                            <Link
                                href={route('contact-us')}
                                className="inline-flex items-center gap-2 bg-[#73aa3c] hover:bg-white hover:text-[#003567] text-white text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-xl transition-all duration-300 w-full justify-center"
                            >
                                Contact Our Experts <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-8 space-y-4 animate-reveal delay-100">
                        {faqItems.map((item, index) => {
                            const isOpen = activeIndex === index;
                            return (
                                <div 
                                    key={index} 
                                    className={`bg-white border rounded-2xl transition-all duration-300 ${
                                        isOpen ? 'border-[#73aa3c] shadow-[0_4px_20px_rgba(115,170,60,0.05)]' : 'border-slate-100 hover:border-slate-200'
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                                    >
                                        <span className={`font-serif font-bold text-sm md:text-base transition-colors duration-300 ${
                                            isOpen ? 'text-[#003567]' : 'text-[#003567]'
                                        }`}>
                                            {item.question}
                                        </span>
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                                            isOpen ? 'bg-[#73aa3c] text-white rotate-180' : 'bg-slate-50 text-[#003567]'
                                        }`}>
                                            <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                        </span>
                                    </button>

                                    {/* Slide Content wrapper */}
                                    <div 
                                        className="overflow-hidden transition-all duration-300"
                                        style={{ 
                                            maxHeight: isOpen ? '250px' : '0px',
                                            opacity: isOpen ? 1 : 0
                                        }}
                                    >
                                        <div className="px-6 pb-6 pt-0 border-t border-slate-50">
                                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light mt-4">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
