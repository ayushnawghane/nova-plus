const row1 = [
    { icon: 'fa-solid fa-magnifying-glass', label: 'Step 01', title: 'Assess', desc: 'Comprehensive evaluation of your current ESG position and material risks.' },
    { icon: 'fa-solid fa-bullseye', label: 'Step 02', title: 'Strategise', desc: 'Develop tailored roadmaps aligned with your business objectives.' },
    { icon: 'fa-solid fa-gear', label: 'Step 03', title: 'Implement', desc: 'Execute initiatives with practical, measurable approaches.' },
];

const row2 = [
    { icon: 'fa-solid fa-arrow-trend-up', label: 'Step 06', title: 'Improve', desc: 'Continuous refinement based on performance and evolving standards.' },
    { icon: 'fa-solid fa-file-lines', label: 'Step 05', title: 'Report', desc: 'Ensure transparent, compliant disclosure to stakeholders.' },
    { icon: 'fa-solid fa-graduation-cap', label: 'Step 04', title: 'Train', desc: 'Build internal capacity and embed sustainability expertise.' },
];

export default function HowWeWork() {
    return (
        <section className="hww-section py-24">
            <div className="hww-grid-bg"></div>
            {/* Subtle glow accents */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#73aa3c] rounded-full blur-[160px] opacity-[0.04] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#89c8e7] rounded-full blur-[160px] opacity-[0.05] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-20 animate-reveal">
                    <div>
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">Our Process</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">How We Work</h2>
                    </div>
                    <div>
                        <p className="text-white/50 text-lg leading-relaxed">
                            A structured, proven methodology that guides you from assessment to continuous improvement.
                        </p>
                    </div>
                </div>

                {/* Row 1: Steps 01, 02, 03 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-0 animate-reveal delay-100 relative">
                    {row1.map((step) => (
                        <div key={step.label} className="hww-step px-2 pb-12 sm:pb-16 md:px-4">
                            <div className="hww-icon"><i className={step.icon}></i></div>
                            <p className="hww-step-label">{step.label}</p>
                            <p className="hww-step-title">{step.title}</p>
                            <p className="hww-step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Row 2: Steps 06 ← 05 ← 04 (reversed so flow reads right-to-left) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 animate-reveal delay-200 relative" style={{ direction: 'rtl' }}>
                    {row2.map((step) => (
                        <div key={step.label} className="hww-step px-2 pt-0 md:px-4" style={{ direction: 'ltr' }}>
                            <div className="hww-icon"><i className={step.icon}></i></div>
                            <p className="hww-step-label">{step.label}</p>
                            <p className="hww-step-title">{step.title}</p>
                            <p className="hww-step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <div className="mt-20 pt-10 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-6 animate-reveal delay-300">
                    <p className="text-white/40 text-sm">Ready to begin your ESG journey with a proven partner?</p>
                    <button className="inline-flex items-center gap-2 bg-[#73aa3c] text-[#003567] px-7 py-3.5 rounded-xl font-bold hover:bg-white transition-colors duration-300 text-sm shadow-xl">
                        Start with an Assessment <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}
