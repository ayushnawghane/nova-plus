export default function CarbonAccounting() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle radial tint */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(115,170,60,0.04) 0%, transparent 70%)' }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-8 animate-reveal">
                    <div className="max-w-2xl">
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-3 block">Climate Action</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#003567] font-bold mb-5 leading-tight">
                            Carbon Accounting & Net Zero
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Measure, manage, and reduce your carbon footprint with our comprehensive carbon accounting
                            services and net zero strategy development.
                        </p>
                    </div>
                </div>

                {/* Feature Grid: 1 large dark card + 2 mini cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 animate-reveal delay-100">
                    {/* Featured Card: Carbon Accounting (spans 2 cols) */}
                    <div className="lg:col-span-2 bg-[#003567] rounded-[2rem] p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                        {/* Glow blob */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-[#73aa3c] rounded-full blur-[90px] opacity-15 translate-x-1/3 -translate-y-1/3 group-hover:opacity-30 transition-opacity duration-600 pointer-events-none"></div>
                        {/* Faint grid overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
                                backgroundSize: '32px 32px',
                            }}
                        ></div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-7">
                                    <i className="fa-solid fa-cloud text-[#73aa3c] text-xl"></i>
                                </div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">Carbon Accounting</h3>
                                <p className="text-blue-100/80 text-sm mb-8 max-w-md leading-relaxed">
                                    GHG Protocol-aligned methodology for full emission transparency across all scopes.
                                </p>
                                {/* Service pills */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="carbon-svc-pill"><span className="carbon-svc-pill-dot"></span>Scope 1, 2 & 3 emissions measurement</span>
                                    <span className="carbon-svc-pill"><span className="carbon-svc-pill-dot"></span>GHG Protocol aligned methodology</span>
                                    <span className="carbon-svc-pill"><span className="carbon-svc-pill-dot"></span>Carbon footprint reporting</span>
                                </div>
                            </div>
                            <div className="mt-10 pt-8 border-t border-white/10">
                                <a href="#" className="inline-flex items-center gap-2 text-[#73aa3c] font-bold text-sm hover:text-white transition-colors group/link">
                                    Start tracking
                                    <span className="w-7 h-7 rounded-full bg-[#73aa3c]/20 flex items-center justify-center group-hover/link:bg-[#73aa3c] group-hover/link:text-[#003567] transition-all">
                                        <i className="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mini cards column */}
                    <div className="flex flex-col gap-6">
                        {/* Net Zero Strategy */}
                        <div className="carbon-mini-card flex-1">
                            <div className="carbon-mini-icon" style={{ background: '#e8f3dc', color: '#3a7a1a' }}>
                                <i className="fa-solid fa-bullseye"></i>
                            </div>
                            <p className="carbon-mini-title">Net Zero Strategy</p>
                            <ul className="carbon-mini-list">
                                <li><span className="carbon-mini-list-dot"></span>Science-Based Targets (SBTi)</li>
                                <li><span className="carbon-mini-list-dot"></span>Decarbonization roadmaps</li>
                                <li><span className="carbon-mini-list-dot"></span>Emissions reduction planning</li>
                            </ul>
                        </div>

                        {/* Carbon Credit Consultancy mini */}
                        <div className="carbon-mini-card flex-1">
                            <div className="carbon-mini-icon" style={{ background: '#dce8f3', color: '#003567' }}>
                                <i className="fa-solid fa-leaf"></i>
                            </div>
                            <p className="carbon-mini-title">Carbon Credit Consultancy</p>
                            <ul className="carbon-mini-list">
                                <li><span className="carbon-mini-list-dot"></span>Carbon offset strategies</li>
                                <li><span className="carbon-mini-list-dot"></span>Credit sourcing & verification</li>
                                <li><span className="carbon-mini-list-dot"></span>Portfolio optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Banner: Carbon Credit Consultancy */}
                <div className="bg-[#003567] rounded-[2rem] p-10 md:p-12 relative overflow-hidden animate-reveal delay-300 group">
                    {/* Forest photo overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-45 transition-opacity duration-700 mix-blend-overlay"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#003567] via-[#003567]/85 to-[#003567]/30"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">Featured Service</span>
                            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">Carbon Credit Consultancy</h3>
                            <p className="text-blue-100/85 leading-relaxed text-base">
                                Nova Plus provides comprehensive Carbon Credit consultancy services to help organizations
                                navigate the voluntary and compliance carbon markets. We assist in identifying high-quality
                                carbon credits, developing offset strategies aligned with your sustainability goals, and
                                ensuring credible claims for your stakeholders.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <button className="inline-flex items-center gap-2 bg-[#73aa3c] text-[#003567] px-7 py-3.5 rounded-xl font-bold hover:bg-white transition-colors duration-300 shadow-xl text-sm">
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
