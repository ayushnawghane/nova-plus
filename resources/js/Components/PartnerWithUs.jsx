const partners = [
    {
        title: "Practical ESG & Compliance Solutions",
        desc: "Actionable ESG support aligned with operational realities, compliance expectations, and business performance goals.",
        icon: "fa-solid fa-list-check"
    },
    {
        title: "Industry-Focused ESG Expertise",
        desc: "Built specifically for contractors, suppliers, system integrators, engineering firms, and infrastructure businesses.",
        icon: "fa-solid fa-gears"
    },
    {
        title: "End-to-End ESG Support",
        desc: "From ESG strategy and sustainability reporting to implementation support, workforce awareness, and capability building.",
        icon: "fa-solid fa-arrows-spin"
    },
    {
        title: "Governance & Reporting Readiness",
        desc: "Supporting ESG disclosures, ISSB readiness, compliance alignment, and stakeholder reporting expectations.",
        icon: "fa-solid fa-clipboard-check"
    },
    {
        title: "Supply Chain & Procurement Confidence",
        desc: "Helping organizations strengthen supplier transparency, procurement readiness, and responsible business practices.",
        icon: "fa-solid fa-link"
    },
    {
        title: "Long-Term Business Resilience",
        desc: "Supporting business continuity, workforce sustainability, operational improvement, and long-term value creation.",
        icon: "fa-solid fa-shield-heart"
    }
];

export default function PartnerWithUs() {
    return (
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
            {/* Subtle background glow mapping the brand's mesh */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{ 
                    background: 'radial-gradient(circle at 80% 20%, hsla(81, 39%, 80%, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, hsla(201, 63%, 72%, 0.15) 0%, transparent 50%)'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header with grid split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 animate-reveal">
                    <div className="lg:col-span-7">
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">Our Advantage</span>
                        <h2 className="font-serif text-3xl md:text-5xl text-[#003567] font-bold leading-tight tracking-tight">
                            Why Industrial Businesses Partner With Nova Plus?
                        </h2>
                    </div>
                    <div className="lg:col-span-5">
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            Industrial and infrastructure businesses are facing increasing expectations from customers, regulators, investors, procurement teams, and supply chain partners. Today's challenge is no longer understanding ESG, it's implementing it effectively across operations, projects, suppliers, and reporting systems. Nova Plus helps bridge the gap between ESG requirements and real-world execution.
                        </p>
                    </div>
                </div>

                {/* Horizontal Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-reveal delay-100">
                    {partners.map((partner, index) => (
                        <div 
                            key={index} 
                            className="flex items-start gap-5 p-6 md:p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#73aa3c]/30 hover:shadow-xl hover:shadow-[#003567]/5 transition-all duration-300 group"
                        >
                            {/* Icon Wrapper */}
                            <div className="w-14 h-14 rounded-2xl bg-[#e8f3dc] text-[#73aa3c] flex items-center justify-center shrink-0 group-hover:bg-[#73aa3c] group-hover:text-white transition-colors duration-300">
                                <i className={`${partner.icon} text-xl`}></i>
                            </div>
                            
                            {/* Content */}
                            <div>
                                <h3 className="text-[#003567] text-lg font-bold font-serif mb-2 group-hover:text-[#73aa3c] transition-colors duration-300">
                                    {partner.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {partner.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
