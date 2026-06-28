import { useRef } from 'react';

const BLOG_LINK = "https://www.linkedin.com/posts/esg-manufacturing-esgreporting-ugcPost-7474798332939382784-CRtA/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMYLSUBsvIdaCfk5SE7ndO9MEDjPb8yPsg";

const ecosystems = [
    {
        title: "Manufacturing",
        desc: "Scope 1 & 2 pressure, energy/waste, EcoVadis & buyer questionnaires",
        icon: "fa-solid fa-industry",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "EPC Contractors",
        desc: "Embodied carbon, worker safety, supplier due diligence, tender qualification",
        icon: "fa-solid fa-helmet-safety",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "MEP Contractors",
        desc: "Operational energy/water performance, refrigerants, Green Mark/LEED",
        icon: "fa-solid fa-bolt",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "SCADA & PLC Integrators",
        desc: "ESG data acquisition, real-time monitoring, digital MRV for ISSB",
        icon: "fa-solid fa-microchip",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Industrial Suppliers",
        desc: "Scope 3 boundary exposure, product-level carbon, OEM questionnaires",
        icon: "fa-solid fa-truck-ramp-box",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Telecom Infrastructure",
        desc: "Site renewables, network efficiency, e-waste, biodiversity",
        icon: "fa-solid fa-tower-broadcast",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Engineering Services",
        desc: "Low-carbon design, climate resilience, lifecycle thinking",
        icon: "fa-solid fa-drafting-compass",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Industrial Technology",
        desc: "ESG-enabled products, avoided emissions, responsible tech governance",
        icon: "fa-solid fa-laptop-code",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Construction & Infrastructure",
        desc: "Embodied carbon, social impact, green project finance alignment",
        icon: "fa-solid fa-building-user",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
    }
];

export default function IndustrialEcosystems() {
    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const cardWidth = 380; // Card width + gap
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-24 bg-gradient-to-b from-[#031122] to-[#081e35] text-white overflow-hidden">
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

            {/* Glowing Accent Orbs matching Hero */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#73aa3c]/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#89c8e7]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-900/30 text-[#73aa3c] font-bold text-xs uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#73aa3c] animate-pulse"></span>
                        EcoSphere
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-white">
                        ESG Challenges Across <br className="hidden sm:inline" /> Industrial Ecosystems
                    </h2>
                    <p className="text-sm md:text-base text-blue-100/70 leading-relaxed font-light">
                        Industrial businesses today face growing pressure from regulators, customers, investors, and procurement partners to strengthen ESG reporting, climate accountability, workforce practices, and supply chain transparency.
                    </p>
                </div>

                {/* Horizontal Scrollable Slider */}
                <div className="relative animate-reveal delay-100">
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto no-scrollbar pb-8 px-4 -mx-4 snap-x snap-mandatory"
                    >
                        {ecosystems.map((item, index) => (
                            <a 
                                key={index}
                                href={BLOG_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block shrink-0 w-[300px] sm:w-[350px] bg-[#0b223c]/90 border border-blue-950/60 rounded-t-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-950/30 hover:border-blue-800/40 relative group snap-start cursor-pointer"
                                style={{ minHeight: '380px' }}
                            >
                                {/* Background Notch cut-out helper (placed in bottom-right corner) */}
                                <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#081e35] border-t border-l border-blue-950/60 rounded-tl-lg pointer-events-none z-20"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#081e35] transition-colors duration-300 pointer-events-none z-10"></div>

                                {/* Top Image */}
                                <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient overlay on image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b223c] via-transparent to-transparent"></div>
                                </div>

                                {/* Icon Badge overlapping bottom left */}
                                <div className="absolute top-[154px] left-6 w-11 h-11 rounded-full bg-[#73aa3c] text-white flex items-center justify-center shadow-lg border-2 border-[#0b223c] z-20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                                    <i className={`${item.icon} text-sm`}></i>
                                </div>

                                {/* Card Body */}
                                <div className="p-6 pt-8 pb-10 pr-10 flex flex-col justify-between h-[calc(100%-11rem)]">
                                    <div>
                                        <h3 className="text-white text-lg font-bold font-serif mb-2.5 group-hover:text-[#73aa3c] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-blue-100/70 text-xs md:text-sm leading-relaxed font-light">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-center gap-1.5 text-[#73aa3c] text-xs font-semibold uppercase tracking-wider group-hover:text-white transition-colors">
                                        Read Blog <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Navigation Slider Controls */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button 
                            onClick={() => handleScroll('left')}
                            className="w-10 h-10 rounded-full border border-blue-800/40 hover:border-[#73aa3c] hover:bg-[#73aa3c] hover:text-white flex items-center justify-center transition-all duration-300 text-blue-100/70 active:scale-95 cursor-pointer"
                            aria-label="Previous challenge"
                        >
                            <i className="fa-solid fa-chevron-left text-xs"></i>
                        </button>
                        <button 
                            onClick={() => handleScroll('right')}
                            className="w-10 h-10 rounded-full border border-blue-800/40 hover:border-[#73aa3c] hover:bg-[#73aa3c] hover:text-white flex items-center justify-center transition-all duration-300 text-blue-100/70 active:scale-95 cursor-pointer"
                            aria-label="Next challenge"
                        >
                            <i className="fa-solid fa-chevron-right text-xs"></i>
                        </button>
                    </div>
                </div>

                {/* Section Footer Call to Action */}
                <div className="mt-16 text-center max-w-3xl mx-auto border-t border-blue-950/50 pt-10 animate-reveal delay-200">
                    <p className="text-blue-100/80 text-sm md:text-base leading-relaxed mb-8 font-light">
                        Nova Plus supports contractors, manufacturers, suppliers, engineering firms, and system integrators with practical ESG consulting services focused on compliance readiness, operational improvement, governance support, and long-term business resilience.
                    </p>
                    <a 
                        href="#/contact-us" 
                        className="inline-flex items-center gap-3 bg-[#73aa3c] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-white hover:text-[#003567] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#73aa3c]/20"
                    >
                        Schedule ESG Consultation
                        <span className="w-5 h-5 rounded-full bg-white text-[#73aa3c] flex items-center justify-center">
                            <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
