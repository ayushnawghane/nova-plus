const partners = [
    {
        title: "Practical ESG & Compliance Solutions",
        desc: "Actionable ESG support aligned with operational realities, compliance expectations, and business performance goals.",
        icon: "fa-solid fa-list-check",
        side: "left"
    },
    {
        title: "End-to-End ESG Support",
        desc: "From ESG strategy and sustainability reporting to implementation support, workforce awareness, and capability building.",
        icon: "fa-solid fa-arrows-spin",
        side: "left"
    },
    {
        title: "Supply Chain & Procurement Confidence",
        desc: "Helping organizations strengthen supplier transparency, procurement readiness, and responsible business practices.",
        icon: "fa-solid fa-link",
        side: "left"
    },
    {
        title: "Industry-Focused ESG Expertise",
        desc: "Built specifically for contractors, suppliers, system integrators, engineering firms, and infrastructure businesses.",
        icon: "fa-solid fa-gears",
        side: "right"
    },
    {
        title: "Governance & Reporting Readiness",
        desc: "Supporting ESG disclosures, ISSB readiness, compliance alignment, and stakeholder reporting expectations.",
        icon: "fa-solid fa-clipboard-check",
        side: "right"
    },
    {
        title: "Long-Term Business Resilience",
        desc: "Supporting business continuity, workforce sustainability, operational improvement, and long-term value creation.",
        icon: "fa-solid fa-shield-heart",
        side: "right"
    }
];

const leftItems = partners.filter((p) => p.side === "left");
const rightItems = partners.filter((p) => p.side === "right");
const rowY = [13, 50, 87];
const leftX = 29;
const rightX = 71;
const centerX = 50;
const centerY = 50;

function PartnerCard({ item, align }) {
    const accent = align === "left" ? "#73aa3c" : "#89c8e7";
    const accentBg = align === "left" ? "bg-[#e8f3dc]" : "bg-[#e7f2f9]";

    return (
        <div
            className={`relative bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group ${
                align === "left" ? "text-left" : "text-left lg:text-right"
            }`}
        >
            {/* Connector dot at the card's inner edge */}
            <span
                className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 z-10 ${
                    align === "left" ? "-right-[7px]" : "-left-[7px]"
                }`}
                style={{ borderColor: accent }}
            ></span>

            <div className={`flex items-start gap-4 ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
                <div
                    className={`w-11 h-11 rounded-xl ${accentBg} flex items-center justify-center shrink-0 transition-colors duration-300`}
                    style={{ color: accent }}
                >
                    <i className={`${item.icon} text-base`}></i>
                </div>
                <div>
                    <h3 className="text-[#003567] text-sm font-bold font-serif mb-1.5 group-hover:text-[#73aa3c] transition-colors duration-300">
                        {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default function PartnerWithUs() {
    const lines = [
        ...leftItems.map((item, i) => ({ x1: leftX, y1: rowY[i], accent: "#73aa3c" })),
        ...rightItems.map((item, i) => ({ x1: rightX, y1: rowY[i], accent: "#89c8e7" })),
    ];

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
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Industrial and infrastructure businesses are facing increasing expectations from customers, regulators, investors, procurement teams, and supply chain partners. Today's challenge is no longer understanding ESG, it's implementing it effectively across operations, projects, suppliers, and reporting systems. Nova Plus helps bridge the gap between ESG requirements and real-world execution.
                        </p>
                    </div>
                </div>

                {/* Hub & Spoke Diagram — large screens */}
                <div className="hidden lg:block relative animate-reveal delay-100" style={{ height: '560px' }}>
                    {/* Connector lines */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        {lines.map((line, i) => {
                            const midX = line.x1 + (centerX - line.x1) * 0.42;
                            const midY = line.y1 + (centerY - line.y1) * 0.42;
                            const farX = line.x1 + (centerX - line.x1) * 0.75;
                            const farY = line.y1 + (centerY - line.y1) * 0.75;
                            return (
                                <g key={i}>
                                    <line
                                        x1={line.x1}
                                        y1={line.y1}
                                        x2={centerX}
                                        y2={centerY}
                                        stroke={line.accent}
                                        strokeWidth="0.3"
                                        strokeDasharray="1.2 1.6"
                                        strokeOpacity="0.55"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                    <circle cx={midX} cy={midY} r="0.6" fill={line.accent} opacity="0.7" />
                                    <circle cx={farX} cy={farY} r="0.6" fill={line.accent} opacity="0.4" />
                                </g>
                            );
                        })}
                    </svg>

                    {/* Left column cards */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between" style={{ width: '29%' }}>
                        {leftItems.map((item, i) => (
                            <PartnerCard key={item.title} item={item} align="left" />
                        ))}
                    </div>

                    {/* Right column cards */}
                    <div className="absolute right-0 top-0 h-full flex flex-col justify-between" style={{ width: '29%' }}>
                        {rightItems.map((item, i) => (
                            <PartnerCard key={item.title} item={item} align="right" />
                        ))}
                    </div>

                    {/* Center hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        {/* Slow rotating dashed ring */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#003567]/25 animate-[spin_24s_linear_infinite]"
                            style={{ width: '280px', height: '280px' }}
                        ></div>
                        {/* Soft glow ring */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#73aa3c]/10 blur-2xl"
                            style={{ width: '260px', height: '260px' }}
                        ></div>
                        {/* Solid hub circle with Nova logo */}
                        <div
                            className="relative rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center px-6"
                            style={{ width: '200px', height: '200px' }}
                        >
                            <img src="/Nova PLus Logo.png" alt="Nova Plus" className="w-36 h-auto object-contain" />
                        </div>
                    </div>
                </div>

                {/* Simple stacked grid — mobile & tablet */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden animate-reveal delay-100">
                    {partners.map((partner) => (
                        <div
                            key={partner.title}
                            className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#73aa3c]/30 hover:shadow-xl hover:shadow-[#003567]/5 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#e8f3dc] text-[#73aa3c] flex items-center justify-center shrink-0 group-hover:bg-[#73aa3c] group-hover:text-white transition-colors duration-300">
                                <i className={`${partner.icon} text-xl`}></i>
                            </div>
                            <div>
                                <h3 className="text-[#003567] text-lg font-bold font-serif mb-2 group-hover:text-[#73aa3c] transition-colors duration-300">
                                    {partner.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{partner.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
