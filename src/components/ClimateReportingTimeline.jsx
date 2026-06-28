import { useRef } from 'react';

const milestones = [
    {
        year: "FY2022",
        title: "TCFD Climate Reporting Begins",
        icon: "fa-solid fa-file-invoice",
        points: [
            "SGX starts phased climate reporting requirements",
            "Selected sectors required to provide climate-related disclosures aligned with TCFD"
        ]
    },
    {
        year: "FY2025",
        title: "Major Climate Reporting Milestone",
        icon: "fa-solid fa-bullseye",
        points: [
            "All SGX-listed companies must report Scope 1 & Scope 2 GHG emissions",
            "STI constituents begin ISSB-aligned climate-related disclosures (IFRS S1 & S2)"
        ]
    },
    {
        year: "FY2026",
        title: "Scope 3 Reporting for STI Constituents",
        icon: "fa-solid fa-cloud",
        points: [
            "STI companies required to disclose Scope 3 emissions",
            "Greater focus on value-chain emissions transparency"
        ]
    },
    {
        year: "FY2028",
        title: "Large Listed Companies",
        icon: "fa-solid fa-building",
        points: [
            "Non-STI listed companies with market capitalisation >= S$1 billion begin ISSB-aligned climate disclosures"
        ]
    },
    {
        year: "FY2029",
        title: "External Assurance Begins",
        icon: "fa-solid fa-shield-halved",
        points: [
            "All listed companies require external limited assurance for Scope 1 & Scope 2 emissions"
        ]
    },
    {
        year: "FY2030",
        title: "Large Non-Listed Companies Enter Scope",
        icon: "fa-solid fa-users",
        points: [
            "Large Non-Listed Companies (Revenue >= S$1B and Assets >= S$500M) required to report ISSB-based climate disclosures including Scope 1 & 2 emissions",
            "Smaller listed companies (< S$1B market cap) begin ISSB-based climate disclosures"
        ]
    },
    {
        year: "FY2032",
        title: "Large Non-Listed Company Assurance",
        icon: "fa-solid fa-file-shield",
        points: [
            "External limited assurance required for Scope 1 & Scope 2 emissions for Large Non-Listed Companies"
        ]
    }
];

export default function ClimateReportingTimeline() {
    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const cardWidth = 352; // Card width (320px) + gap (32px)
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Custom styles for hidden scrollbar */}
            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />

            {/* Faint Singapore Skyline Watermark Backdrop */}
            <div 
                className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.03] mix-blend-luminosity filter grayscale brightness-[1.1]"
                style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1600&auto=format&fit=crop')" 
                }}
            ></div>

            {/* Subtle engineering dot pattern overlay */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{ 
                    backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-[#73aa3c] font-bold text-xs uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#73aa3c] animate-pulse"></span>
                        Regulatory Roadmap
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-[#003567]">
                        Singapore Climate Reporting
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
                        Singapore's climate reporting requirements are evolving in line with ISSB standards, strengthening transparency, accountability and long-term business resilience.
                    </p>
                </div>

                {/* Timeline Layout */}
                <div className="relative animate-reveal delay-100">
                    {/* Desktop View: Horizontal Scrolling Timeline */}
                    <div className="hidden lg:block relative">
                        {/* Horizontal Timeline Connector Line */}
                        <div className="absolute top-[28px] left-12 right-12 h-[2px] bg-[#003567]/10 z-0"></div>

                        <div 
                            ref={scrollContainerRef}
                            className="flex gap-8 overflow-x-auto no-scrollbar pb-8 pt-4 snap-x snap-mandatory z-10"
                        >
                            {milestones.map((milestone, index) => (
                                <div 
                                    key={index}
                                    className="shrink-0 w-[320px] snap-start flex flex-col items-center relative group"
                                >
                                    {/* Icon Badge */}
                                    <div className="w-14 h-14 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-[#003567] group-hover:border-[#73aa3c] group-hover:bg-[#73aa3c] group-hover:text-white transition-all duration-500 shadow-md z-20 relative">
                                        <i className={`${milestone.icon} text-lg`}></i>
                                    </div>

                                    {/* Vertical Connector Line from Node to Card */}
                                    <div className="w-[2px] h-8 bg-slate-100 group-hover:bg-[#73aa3c]/35 transition-colors duration-500 z-0"></div>

                                    {/* Milestone Card */}
                                    <div className="w-full bg-white border border-slate-100 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.02)] group-hover:shadow-xl group-hover:border-[#73aa3c]/30 group-hover:-translate-y-1 transition-all duration-500 min-h-[300px] flex flex-col">
                                        <div className="bg-[#003567] text-white text-center font-bold font-mono text-xs py-2 px-4 rounded-t-2xl">
                                            {milestone.year}
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-[#73aa3c] font-bold text-sm mb-4 leading-snug">
                                                    {milestone.title}
                                                </h3>
                                                <ul className="text-gray-500 text-xs md:text-sm leading-relaxed space-y-3 font-light list-disc pl-4">
                                                    {milestone.points.map((pt, i) => (
                                                        <li key={i}>{pt}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Slider Controls */}
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button 
                                onClick={() => handleScroll('left')}
                                className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#73aa3c] hover:bg-[#73aa3c] hover:text-white flex items-center justify-center transition-all duration-300 text-gray-400 active:scale-95 cursor-pointer"
                                aria-label="Previous milestone"
                            >
                                <i className="fa-solid fa-chevron-left text-xs"></i>
                            </button>
                            <button 
                                onClick={() => handleScroll('right')}
                                className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#73aa3c] hover:bg-[#73aa3c] hover:text-white flex items-center justify-center transition-all duration-300 text-gray-400 active:scale-95 cursor-pointer"
                                aria-label="Next milestone"
                            >
                                <i className="fa-solid fa-chevron-right text-xs"></i>
                            </button>
                        </div>
                    </div>

                    {/* Mobile/Tablet View: Vertical Timeline Layout */}
                    <div className="lg:hidden relative pl-12 pr-4 space-y-12">
                        {/* Vertical Timeline Connector Line */}
                        <div className="absolute top-4 bottom-4 left-[31px] w-[2px] bg-[#003567]/10 z-0"></div>

                        {milestones.map((milestone, index) => (
                            <div 
                                key={index}
                                className="relative flex flex-col items-start group"
                            >
                                {/* Vertical Icon Node */}
                                <div className="absolute -left-[37px] top-0 w-12 h-12 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-[#003567] group-hover:border-[#73aa3c] group-hover:bg-[#73aa3c] group-hover:text-white transition-all duration-500 shadow-md z-20">
                                    <i className={`${milestone.icon} text-sm`}></i>
                                </div>

                                {/* Milestone Card */}
                                <div className="w-full bg-white border border-slate-100 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.02)] group-hover:shadow-xl group-hover:border-[#73aa3c]/30 transition-all duration-500 flex flex-col">
                                    <div className="bg-[#003567] text-white font-bold font-mono text-xs py-2 px-4 rounded-t-2xl">
                                        {milestone.year}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-[#73aa3c] font-bold text-sm mb-3 leading-snug">
                                            {milestone.title}
                                        </h3>
                                        <ul className="text-gray-500 text-xs md:text-sm leading-relaxed space-y-2.5 font-light list-disc pl-4">
                                            {milestone.points.map((pt, i) => (
                                                <li key={i}>{pt}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sources & Disclaimers block */}
                <div className="mt-16 text-center max-w-4xl mx-auto border-t border-slate-100 pt-8 animate-reveal delay-200">
                    <p className="text-xs text-gray-400 font-light flex flex-wrap justify-center items-center gap-2">
                        <span>Source:</span>
                        <a 
                            href="https://www.acra.gov.sg/regulations/sustainability-reporting/requirements-timeline/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#73aa3c] hover:underline"
                        >
                            ACRA Sustainability Reporting Requirements & Timeline
                        </a>
                        <span className="text-gray-300">|</span>
                        <a 
                            href="https://www.sgx.com/sustainable-finance/sustainability-knowledge-hub" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#73aa3c] hover:underline"
                        >
                            SGX Sustainability Knowledge Hub
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
