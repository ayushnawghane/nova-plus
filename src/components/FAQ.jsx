import { useState } from 'react';

const faqItems = [
    {
        question: "What exactly is ESG consulting, and why does my company need it?",
        answer: "ESG consulting helps businesses understand, manage, and improve their environmental, social, and governance practices. Today, ESG is increasingly influencing customer requirements, supply chain partnerships, financing opportunities, and regulatory expectations. A practical ESG approach helps organizations identify priorities, manage risks, strengthen stakeholder trust, and build long-term business resilience."
    },
    {
        question: "Is ESG only for large listed companies?",
        answer: "No. While ESG reporting requirements often start with larger organizations, ESG expectations increasingly extend across supply chains. Many SMEs, contractors, manufacturers, engineering firms, and suppliers are now being asked by customers, procurement teams, investors, and business partners to provide ESG-related information. Starting early helps businesses stay competitive and prepared for evolving expectations."
    },
    {
        question: "How can ESG create business value?",
        answer: "ESG is no longer just about reporting. Effective ESG practices can strengthen customer trust, improve procurement competitiveness, support financing opportunities, enhance operational efficiency, reduce business risks, and help organizations build long-term resilience. Increasingly, ESG is becoming a business requirement that influences supplier selection, customer relationships, and market opportunities."
    },
    {
        question: "Is ESG a one-time project or an ongoing business process?",
        answer: "ESG is an ongoing business process rather than a one-time exercise. As regulations, reporting standards, customer expectations, and supply chain requirements continue to evolve, organizations are expected to continuously monitor, improve, and communicate their ESG performance. Businesses that embed ESG into their operations are better positioned to adapt to change and create long-term value."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

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
                            <a 
                                href="#/contact-us"
                                className="inline-flex items-center gap-2 bg-[#73aa3c] hover:bg-white hover:text-[#003567] text-white text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-xl transition-all duration-300 w-full justify-center"
                            >
                                Contact Our Experts <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </a>
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
