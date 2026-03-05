const standards = [
    { code: 'SGX', label: 'Singapore Aligned' },
    { code: 'ISSB', label: 'IFRS S1 & S2' },
    { code: 'CSRD', label: 'EU ESRS Ready' },
    { code: 'BRSR', label: 'India SEBI' },
];

const team = [
    { name: 'Pratap', role: 'Director' },
    { name: 'Nivethana', role: 'Head of Operations' },
    { name: 'Pratiksha', role: 'Chief ESG Consultant' },
];

export default function AboutUs() {
    return (
        <section className="about-section py-24 overflow-hidden relative">
            {/* Faint background tint */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 40% at 100% 0%, rgba(0,53,103,0.03) 0%, transparent 60%)' }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* ① Split intro header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20 animate-reveal">
                    <div>
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">About Us</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#003567] font-bold leading-tight">
                            Bridging Standards<br />&amp; Reality
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Nova Plus was founded to bridge the gap between global ESG standards and real-world business
                            realities. We combine technical rigor, regulatory insight, and commercial understanding to help
                            organizations deliver sustainability outcomes that stand up to scrutiny – and create lasting value.
                        </p>
                    </div>
                </div>

                {/* ② Mission & Vision cards side by side */}
                <div className="flex flex-col md:flex-row gap-6 mb-20 animate-reveal delay-100">
                    {/* Mission: dark card */}
                    <div className="about-mission-card">
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">Our Mission</span>
                        <p className="text-white/90 text-base leading-relaxed">
                            As sustainability expectations intensify, organisations face increasing pressure to balance
                            economic growth with environmental responsibility, social accountability, and robust governance.
                            Nova Plus enables credible, defensible, and future-ready growth that strengthens resilience and
                            long-term value.
                        </p>
                        <div className="about-tagline text-[#73aa3c]">
                            <span className="about-tag-arrow bg-[#73aa3c] text-[#003567]">
                                <i className="fa-solid fa-arrow-right text-[0.55rem]"></i>
                            </span>
                            Clarity in complexity
                        </div>
                    </div>

                    {/* Vision: light card */}
                    <div className="about-vision-card">
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">Our Vision</span>
                        <p className="text-gray-600 text-base leading-relaxed">
                            By aligning sustainability priorities with globally recognised frameworks and measurable
                            outcomes, we support the development of responsible, resilient organizations advancing
                            transparent, high-quality ESG practices.
                        </p>
                        <div className="about-tagline text-[#003567]">
                            <span className="about-tag-arrow bg-[#003567] text-white">
                                <i className="fa-solid fa-arrow-right text-[0.55rem]"></i>
                            </span>
                            Leadership through responsibility
                        </div>
                    </div>
                </div>

                {/* ③ Team row */}
                <div className="mb-14 animate-reveal delay-200">
                    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                        <div>
                            <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-3 block">Our Team</span>
                            <h3 className="font-serif text-3xl text-[#003567] font-bold">The People Behind Nova Plus</h3>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5">
                        {team.map((member) => (
                            <div key={member.name} className="about-team-card">
                                <div className="about-team-info">
                                    <p className="about-team-name">{member.name}</p>
                                    <p className="about-team-role">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ④ Standards & Frameworks strip */}
                <div className="bg-[#f7f9f7] rounded-[1.5rem] p-8 animate-reveal delay-300">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div className="shrink-0">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Standards & Frameworks</p>
                            <p className="text-[#003567] font-bold text-sm">Recognised globally</p>
                        </div>
                        <div className="flex flex-wrap gap-3 flex-1 justify-end">
                            {standards.map((s) => (
                                <div key={s.code} className="about-std-badge">
                                    <span className="about-std-code">{s.code}</span>
                                    <span className="about-std-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
