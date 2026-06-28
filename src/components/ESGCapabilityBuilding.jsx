const programs = [
    {
        level: "(BEGINNER LEVEL)",
        title: "ESG Foundation Training",
        desc: "Understand ESG basics, frameworks, materiality, governance and start your ESG journey.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop", // Hands holding seedling
        alt: "ESG Foundation Training"
    },
    {
        level: "(INTERMEDIATE LEVEL)",
        title: "Decarbonisation & ESG Reporting Training",
        desc: "Develop practical skills in carbon accounting, reporting and ESG implementation.",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop", // Wind turbines & solar
        alt: "Decarbonisation & ESG Reporting Training"
    },
    {
        level: "(ADVANCE LEVEL)",
        title: "ESG Leadership Training",
        desc: "Strengthen leadership to integrate ESG into strategy, governance and long-term value creation.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop", // Business meeting
        alt: "ESG Leadership Training"
    }
];

export default function ESGCapabilityBuilding() {
    const LMS_ROUTE = "#/services/learning-management-system";

    return (
        <section className="relative py-24 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9]/50 overflow-hidden">
            {/* Subtle background mesh glow */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{ 
                    background: 'radial-gradient(circle at 20% 30%, rgba(115,170,60,0.02) 0%, transparent 65%), radial-gradient(circle at 80% 70%, rgba(0,53,103,0.015) 0%, transparent 65%)'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-200/60 text-[#73aa3c] font-bold text-xs uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#73aa3c] animate-pulse"></span>
                        Capability Building
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-[#003567]">
                        ESG Corporate Training & <br className="hidden sm:inline" /> Capability Building Programs
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
                        Equip your workforce with the skills and insights needed to drive sustainability performance, operational resilience, and compliance readiness.
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-reveal delay-100">
                    {programs.map((prog, index) => (
                        <a 
                            key={index}
                            href={LMS_ROUTE}
                            className="flex flex-col sm:flex-row bg-white border border-slate-100 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-[#73aa3c]/30 hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer overflow-hidden min-h-[240px] sm:min-h-[220px]"
                        >
                            {/* Left: Text Content */}
                            <div className="w-full sm:w-[58%] p-6 md:p-8 flex flex-col justify-between z-20 bg-white">
                                <div>
                                    <h3 className="text-[#003567] text-lg font-bold font-serif leading-snug mb-1 group-hover:text-[#73aa3c] transition-colors duration-300">
                                        {prog.title}
                                    </h3>
                                    <span className="text-[#73aa3c] font-bold text-[10px] uppercase tracking-wider mb-4 block">
                                        {prog.level}
                                    </span>
                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light mb-6">
                                        {prog.desc}
                                    </p>
                                </div>
                                <div className="mt-auto flex items-center gap-1.5 text-[#73aa3c] text-xs font-semibold uppercase tracking-wider group-hover:text-[#003567] transition-colors duration-300">
                                    Explore Program <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
                                </div>
                            </div>

                            {/* Right: Image with Wavy Cutout Divider */}
                            <div className="w-full sm:w-[42%] relative overflow-hidden h-48 sm:h-auto min-h-[180px] sm:min-h-full">
                                {/* HTML5 responsive SVG wave divider (Desktop only) */}
                                <svg 
                                    className="absolute top-0 left-0 h-full w-12 text-white fill-current pointer-events-none -translate-x-[0.5px] z-10 hidden sm:block"
                                    viewBox="0 0 100 100" 
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0,0 L100,0 C30,30 30,70 100,100 L0,100 Z" />
                                </svg>

                                {/* Responsive HTML5 SVG wave divider (Mobile vertical view) */}
                                <svg 
                                    className="absolute top-0 left-0 w-full h-8 text-white fill-current pointer-events-none -translate-y-[0.5px] z-10 sm:hidden block"
                                    viewBox="0 0 100 100" 
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0,0 L0,100 C30,30 70,30 100,100 L100,0 Z" />
                                </svg>

                                <img 
                                    src={prog.image} 
                                    alt={prog.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Soft overlay gradient for visual warmth */}
                                <div className="absolute inset-0 bg-[#003567]/5 mix-blend-multiply"></div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom CTA Banner */}
                <div className="mt-20 pt-10 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-6 animate-reveal delay-200">
                    <p className="text-gray-400 text-sm font-light">Need a customized sustainability training program for your organization?</p>
                    <a 
                        href="#/contact-us"
                        className="inline-flex items-center gap-3 bg-[#73aa3c] text-white px-7 py-3.5 rounded-full text-xs md:text-sm font-bold hover:bg-[#003567] hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-[#73aa3c]/10"
                    >
                        Request Custom Training
                        <span className="w-5 h-5 rounded-full bg-white text-[#73aa3c] flex items-center justify-center">
                            <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
