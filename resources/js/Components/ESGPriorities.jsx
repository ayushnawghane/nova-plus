export default function ESGPriorities() {
    const priorities = [
        "ISSB Readiness",
        "Climate Governance",
        "Carbon Accounting",
        "Supply Chain Transparency",
        "Assurance-Ready ESG Data",
        "Responsible Workforce Practices"
    ];

    return (
        <section className="relative py-20 bg-slate-50 overflow-hidden">
            {/* Subtle engineering line/dot overlay background */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{ 
                    backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px'
                }}
            ></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 animate-reveal">
                {/* Visual Card Container representing the Mockup */}
                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_35px_rgba(0,53,103,0.03)] flex flex-col items-center">
                    
                    {/* Glowing indicator light */}
                    <div className="flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 font-bold text-xs uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        Key Reminder
                    </div>

                    {/* Mockup Title */}
                    <h3 className="font-serif text-3xl md:text-4xl text-[#003567] font-extrabold text-center mb-8 tracking-tight">
                        2026 ESG Priorities
                    </h3>

                    {/* Interactive Checklist Pills */}
                    <div className="flex flex-wrap justify-center gap-3.5 max-w-2xl">
                        {priorities.map((priority, index) => (
                            <div 
                                key={index}
                                className="inline-flex items-center gap-3 bg-[#f8fafc] border border-slate-200/60 rounded-full px-5 py-3 text-xs md:text-sm font-semibold text-[#003567] shadow-sm hover:border-[#73aa3c]/35 hover:bg-white hover:-translate-y-1 transition-all duration-300 hover:shadow-md cursor-default"
                            >
                                <span className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center">
                                    <i className="fa-solid fa-check text-amber-500 text-[10px]"></i>
                                </span>
                                {priority}
                            </div>
                        ))}
                    </div>

                    {/* Bottom visual accent line */}
                    <div className="w-24 h-[3px] bg-[#73aa3c]/20 rounded-full mt-10"></div>
                </div>
            </div>
        </section>
    );
}
