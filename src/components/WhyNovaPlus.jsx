export default function WhyNovaPlus() {
    const pillars = [
        {
            num: '01',
            title: 'Regulatory Expertise',
            desc: 'Understand current and upcoming ESG regulations. Prepare CSRD / ESRS-ready disclosures aligned with GRI, ISSB, TCFD, BRSR.',
        },
        {
            num: '02',
            title: 'Double Materiality',
            desc: 'Conduct Double Materiality Assessments to identify your most significant sustainability impacts, risks, and opportunities.',
        },
        {
            num: '03',
            title: 'Governance & Controls',
            desc: 'Strengthen internal ESG governance and controls. Ensure audit-ready ESG data and documentation.',
        },
        {
            num: '04',
            title: 'Global Experience',
            desc: 'Our consultants bring extensive experience delivering ESG consultancy, reports, and training to clients across industries globally.',
        },
    ];

    const benefits = [
        'Reduced regulatory and compliance risk',
        'Better identification of sustainability risks and opportunities',
        'Stronger ESG ratings and disclosures',
        'Practical roadmaps aligned with business strategy',
        'Improved investor and stakeholder confidence',
        'Future-ready ESG systems and governance',
    ];

    const stats = [
        { num: '7+', label: 'Key jurisdictions covered – Singapore, UAE, Saudi Arabia, Qatar, EU, India & UK' },
        { num: '50K+', label: 'Companies globally impacted by mandatory ESG regulations including CSRD, BRSR & SGX rules' },
        { num: '2025', label: 'Year ISSB-aligned climate reporting becomes mandatory for SGX large-cap issuers' },
        { num: '100%', label: 'Of GCC stock exchanges now require or recommend ESG disclosure from listed companies' },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background texture */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,53,103,0.03) 0%, transparent 70%)' }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* ① Intro: split heading + description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20 animate-reveal">
                    <div>
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">Why Nova Plus</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#003567] font-bold leading-tight">Why Nova Plus</h2>
                    </div>
                    <div>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Climate-related risks, resource constraints, evolving regulations, and rising stakeholder
                            expectations are fundamentally reshaping how businesses operate, manage risk, and report their impact.
                        </p>
                    </div>
                </div>

                {/* ② Key Pillars: 4 dark navy cards in 2×2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20 animate-reveal delay-100">
                    {pillars.map((p) => (
                        <div key={p.num} className="wnp-pillar-card">
                            <span className="wnp-pillar-num">{p.num}</span>
                            <p className="wnp-pillar-title">{p.title}</p>
                            <p className="wnp-pillar-desc">{p.desc}</p>
                        </div>
                    ))}
                </div>

                {/* ③ Business Benefits: heading + 6 pill items + photo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-reveal delay-200">
                    {/* Left: Benefits list */}
                    <div>
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">Business Benefits</span>
                        <h3 className="font-serif text-3xl text-[#003567] font-bold mb-8 leading-snug">What you gain with Nova Plus</h3>
                        <div className="flex flex-col gap-3">
                            {benefits.map((b, i) => (
                                <div key={i} className="wnp-benefit-item">
                                    <span className="wnp-benefit-dot"></span>{b}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Contextual image */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[420px] group">
                        <img
                            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=900&auto=format&fit=crop"
                            alt="Global ESG teamwork"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003567]/60 via-transparent to-transparent"></div>
                        {/* Floating badge */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#73aa3c] flex items-center justify-center flex-shrink-0">
                                <i className="fa-solid fa-globe text-[#003567] text-sm"></i>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">7+ Jurisdictions Covered</p>
                                <p className="text-white/60 text-xs">Singapore, UAE, Saudi Arabia, Qatar, EU, India & UK</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ④ ESG Landscape: dark banner with photo + 4 stats */}
                <div className="bg-[#003567] rounded-[2rem] overflow-hidden relative group animate-reveal delay-300">
                    {/* Background nature photo */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition-opacity duration-700 mix-blend-luminosity"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#003567] via-[#003567]/95 to-[#003567]/80"></div>

                    <div className="relative z-10 p-10 md:p-14">
                        {/* Banner header */}
                        <div className="max-w-2xl mb-12">
                            <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">ESG Landscape – Globally</span>
                            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                                Mandatory sustainability reporting is expanding rapidly
                            </h3>
                            <p className="text-blue-100/70 text-base leading-relaxed">
                                Across regions, making ESG reporting a mainstream business practice rather than a voluntary exercise.
                            </p>
                        </div>

                        {/* Stats row */}
                        <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
                            {stats.map((s, i) => (
                                <div key={i} className="wnp-stat-block">
                                    <p className="wnp-stat-num">{s.num}</p>
                                    <p className="wnp-stat-label">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
