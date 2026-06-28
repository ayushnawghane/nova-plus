const steps = [
    {
        num: "01",
        title: "Assess",
        desc: "Identify ESG gaps, risks, opportunities, and stakeholder expectations.",
        icon: "fa-solid fa-magnifying-glass"
    },
    {
        num: "02",
        title: "Prioritise",
        desc: "Focus on the ESG topics and requirements most relevant to your business.",
        icon: "fa-solid fa-filter"
    },
    {
        num: "03",
        title: "Plan",
        desc: "Develop practical ESG strategies, policies, targets, and action plans.",
        icon: "fa-solid fa-compass"
    },
    {
        num: "04",
        title: "Implement",
        desc: "Embed ESG into operations, governance, and business processes.",
        icon: "fa-solid fa-gears"
    },
    {
        num: "05",
        title: "Report",
        desc: "Measure performance and prepare ESG, climate, and sustainability disclosures.",
        icon: "fa-solid fa-file-invoice"
    },
    {
        num: "06",
        title: "Improve",
        desc: "Strengthen ESG performance through continuous monitoring and improvement.",
        icon: "fa-solid fa-arrow-trend-up"
    }
];

export default function HowWeWork() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Subtle engineering/architectural dot grid pattern */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{ 
                    backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px'
                }}
            ></div>

            {/* Radial background glow */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(115,170,60,0.03) 0%, transparent 70%)' }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-20 animate-reveal">
                    <div>
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">Our Process</span>
                        <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-[#003567] leading-tight tracking-tight">
                            Practical ESG Journey <br className="hidden sm:inline" /> for Businesses
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                            A structured and practical approach to help organisations assess, prioritise, implement, and continuously improve their ESG performance.
                        </p>
                    </div>
                </div>

                {/* Interactive Journey Flow Grid */}
                <div className="relative animate-reveal delay-100">
                    {/* Responsive Timeline Connector Line */}
                    {/* Desktop Horizontal Connectors */}
                    <div className="absolute top-[43px] left-12 right-12 h-[2px] bg-slate-100 hidden lg:block z-0"></div>
                    
                    {/* Mobile Vertical Connector */}
                    <div className="absolute top-8 bottom-8 left-[43px] w-[2px] bg-slate-100 lg:hidden block z-0"></div>

                    {/* Step Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                        {steps.map((step, index) => (
                            <div 
                                key={index} 
                                className="group relative pt-8 flex flex-col items-start z-10"
                            >
                                {/* Timeline Node */}
                                <div className="absolute top-0 left-[32px] w-6 h-6 rounded-full border-4 border-white bg-slate-200 outline outline-2 outline-slate-200 group-hover:bg-[#73aa3c] group-hover:outline-[#73aa3c] transition-all duration-350 z-20"></div>

                                {/* Step Card Container */}
                                <div className="w-full bg-white border border-slate-100 rounded-[2rem] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#73aa3c]/30 hover:shadow-xl hover:shadow-[#003567]/5 flex flex-col justify-between h-full min-h-[220px]">
                                    {/* Card Header (Icon and Step Number Badge) */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-[#e8f3dc] text-[#73aa3c] flex items-center justify-center group-hover:bg-[#73aa3c] group-hover:text-white transition-all duration-500">
                                            <i className={`${step.icon} text-lg`}></i>
                                        </div>
                                        <span className="font-serif text-3xl font-extrabold text-slate-100 group-hover:text-[#73aa3c]/15 transition-colors duration-500 select-none">
                                            {step.num}
                                        </span>
                                    </div>

                                    {/* Card Content */}
                                    <div>
                                        <h3 className="font-serif text-lg md:text-xl font-bold text-[#003567] mb-3 group-hover:text-[#73aa3c] transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Banner */}
                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 animate-reveal delay-200">
                    <p className="text-gray-400 text-sm font-light">Ready to begin your ESG journey with a proven partner?</p>
                    <a 
                        href="#/contact-us"
                        className="inline-flex items-center gap-3 bg-[#73aa3c] text-white px-7 py-3.5 rounded-full text-xs md:text-sm font-bold hover:bg-[#003567] hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-[#73aa3c]/10"
                    >
                        Start with an Assessment
                        <span className="w-5 h-5 rounded-full bg-white text-[#73aa3c] flex items-center justify-center">
                            <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
