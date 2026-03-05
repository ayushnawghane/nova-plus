import { useState } from 'react';

const regions = [
    {
        id: 'sg',
        label: 'SG Singapore',
        panelTitle: 'SGX & MAS Mandates',
        subtitle: 'Singapore Regulatory Framework',
        badge: 'Mandatory from FY2025',
        flag: null,
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'Singapore skyline',
        imageLabel: 'Singapore',
        imageSub: 'SGX · MAS · Green Plan 2030',
        imageTag: '🇸🇬 SG',
        points: [
            {
                num: '01', title: 'SGX Sustainability Reporting',
                desc: 'All SGX-listed companies must publish sustainability reports aligned with TCFD recommendations. Climate-related disclosures on IFRS S2 (ISSB) now mandatory for large-cap issuers from FY2025.',
            },
            {
                num: '02', title: 'IFRS S1 & S2 Incorporation',
                desc: 'SGX RegCo is incorporating IFRS Sustainability Disclosure Standards (ISSB) into its listing rules – phased approach for large-cap, mid-cap, and small-cap issuers through 2027.',
            },
            {
                num: '03', title: 'MAS Environmental Risk Guidelines',
                desc: 'Financial institutions must implement environmental risk management frameworks covering governance, strategy, risk management, and disclosure of climate-related risks.',
            },
            {
                num: '04', title: 'Singapore Green Plan 2030',
                desc: 'National sustainability blueprint targeting net-zero emissions, green economy, and circular economy principles across public and private sectors.',
            },
        ],
    },
    {
        id: 'ae',
        label: 'AE UAE',
        panelTitle: 'UAE ESG Framework',
        subtitle: 'United Arab Emirates Regulatory Framework',
        badge: 'Evolving Mandates',
        flag: '🇦🇪',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'Dubai skyline',
        imageLabel: 'United Arab Emirates',
        imageSub: 'ADX · DFM · UAE Net Zero 2050',
        imageTag: '🇦🇪 AE',
        points: [
            {
                num: '01', title: 'ADX & DFM Reporting',
                desc: 'Abu Dhabi Securities Exchange (ADX) and Dubai Financial Market (DFM) require ESG disclosures from listed companies, aligned with GRI and MSCI standards.',
            },
            {
                num: '02', title: 'UAE Net Zero 2050',
                desc: "The UAE's Net Zero by 2050 Strategic Initiative drives mandatory climate action reporting and clean energy transition requirements across industries.",
            },
            {
                num: '03', title: 'CBUAE Sustainable Finance',
                desc: 'Central Bank of UAE guidelines require financial institutions to embed climate risk in credit assessments and disclose environmental exposures.',
            },
        ],
    },
    {
        id: 'sa',
        label: 'SA Saudi Arabia',
        panelTitle: 'Saudi Arabia ESG & Vision 2030',
        subtitle: 'Kingdom of Saudi Arabia Regulatory Framework',
        badge: 'Mandatory Disclosure',
        flag: '🇸🇦',
        image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'Riyadh skyline',
        imageLabel: 'Saudi Arabia',
        imageSub: 'Tadawul · Vision 2030 · Net Zero 2060',
        imageTag: '🇸🇦 SA',
        points: [
            {
                num: '01', title: 'Tadawul ESG Reporting',
                desc: 'Saudi Exchange (Tadawul) requires listed companies to publish annual ESG reports. The CMA ESG Disclosure Guidelines set the disclosure framework.',
            },
            {
                num: '02', title: 'Saudi Vision 2030 Sustainability',
                desc: 'Vision 2030 embeds sustainability across all national pillars. Companies operating in KSA must align with national sustainability and economic diversification targets.',
            },
            {
                num: '03', title: 'Net Zero by 2060',
                desc: "Saudi Arabia's commitment to net zero by 2060 with 50% renewable energy by 2030 drives corporate climate accountability and green economy transition.",
            },
        ],
    },
    {
        id: 'eu',
        label: 'EU European Union',
        panelTitle: 'CSRD & ESRS Framework',
        subtitle: 'European Union Regulatory Framework',
        badge: 'Phased from FY2024',
        flag: '🇪🇺',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'Brussels EU',
        imageLabel: 'European Union',
        imageSub: 'CSRD · ESRS · EU Taxonomy',
        imageTag: '🇪🇺 EU',
        points: [
            {
                num: '01', title: 'CSRD – Corporate Sustainability Reporting Directive',
                desc: 'Mandatory for ~50,000 companies including non-EU companies with significant EU operations. Requires double materiality assessments and ESRS-aligned reporting.',
            },
            {
                num: '02', title: 'ESRS – European Sustainability Reporting Standards',
                desc: '12 cross-cutting and topic-specific standards covering Environment (E), Social (S), and Governance (G) disclosures under the CSRD regime.',
            },
            {
                num: '03', title: 'EU Taxonomy Regulation',
                desc: 'Requires companies to classify and disclose the proportion of their activities that are environmentally sustainable under six EU environmental objectives.',
            },
        ],
    },
    {
        id: 'in',
        label: 'IN India',
        panelTitle: 'BRSR & SEBI Framework',
        subtitle: 'India Regulatory Framework',
        badge: 'Mandatory from FY2023',
        flag: '🇮🇳',
        image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'India sustainability',
        imageLabel: 'India',
        imageSub: 'BRSR · SEBI · Net Zero 2070',
        imageTag: '🇮🇳 IN',
        points: [
            {
                num: '01', title: 'BRSR – Business Responsibility & Sustainability Report',
                desc: 'SEBI mandates BRSR for top 1,000 listed companies by market cap from FY2023. BRSR Core with assurance required for top 150 companies from FY2024.',
            },
            {
                num: '02', title: 'BRSR Core & Limited Assurance',
                desc: 'SEBI introduced BRSR Core comprising 9 key performance indicators (KPIs) requiring mandatory third-party limited assurance – phased across top companies.',
            },
            {
                num: '03', title: 'India Net Zero 2070',
                desc: "India's net zero target by 2070 and its Panchamrit commitments (500 GW renewables, 50% clean energy by 2030) drive sectoral transition requirements.",
            },
        ],
    },
    {
        id: 'gb',
        label: 'GB United Kingdom',
        panelTitle: 'UK TCFD & Green Finance',
        subtitle: 'United Kingdom Regulatory Framework',
        badge: 'Mandatory since 2022',
        flag: '🇬🇧',
        image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'London UK',
        imageLabel: 'United Kingdom',
        imageSub: 'TCFD · UK SDS · Net Zero 2050',
        imageTag: '🇬🇧 GB',
        points: [
            {
                num: '01', title: 'Mandatory TCFD Reporting',
                desc: 'UK became the first G20 country to mandate TCFD-aligned climate disclosures. Applies to listed companies, large private firms, LLPs, and pension funds since 2022.',
            },
            {
                num: '02', title: 'UK Sustainability Disclosure Standards (UK SDS)',
                desc: 'The FCA is developing UK SDS based on IFRS S1 & S2 as the primary UK framework, with adoption expected to become mandatory for listed issuers from 2025+.',
            },
            {
                num: '03', title: 'UK Green Finance Strategy',
                desc: 'Comprehensive roadmap to align the UK financial system with net zero by 2050, including mandatory nature-related disclosures and the UK Transition Plan Taskforce framework.',
            },
        ],
    },
    {
        id: 'qa',
        label: 'QA Qatar',
        panelTitle: 'Qatar ESG & QSE Framework',
        subtitle: 'Qatar Regulatory Framework',
        badge: 'Recommended Disclosure',
        flag: '🇶🇦',
        image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=800&auto=format&fit=crop',
        imageAlt: 'Doha Qatar',
        imageLabel: 'Qatar',
        imageSub: 'QSE · QNV 2030 · GCC Alignment',
        imageTag: '🇶🇦',
        points: [
            {
                num: '01', title: 'Qatar Stock Exchange ESG Reporting',
                desc: 'QSE-listed companies are encouraged to disclose ESG data aligned with GRI Standards. The QSE ESG Reporting Guide sets the voluntary framework structure.',
            },
            {
                num: '02', title: 'Qatar National Vision 2030',
                desc: 'QNV 2030 sets the sustainability framework across four pillars – human, social, economic, and environmental development – guiding corporate ESG expectations.',
            },
            {
                num: '03', title: 'GCC ESG Alignment',
                desc: 'Qatar aligns with GCC-wide sustainability frameworks and the COP28 commitments, increasingly integrating ESG into public procurement and investment decisions.',
            },
        ],
    },
];

export default function GlobalRegulations() {
    const [activeRegion, setActiveRegion] = useState('sg');
    const panel = regions.find((r) => r.id === activeRegion);

    return (
        <section className="reg-section py-24 relative overflow-hidden">
            {/* Faint grid bg */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0,53,103,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,53,103,0.04) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14 animate-reveal">
                    <div>
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-4 block">Compliance Ready</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#003567] font-bold leading-tight">Global ESG Regulations</h2>
                    </div>
                    <div>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            We help organisations navigate the rapidly evolving ESG regulatory landscape across key
                            jurisdictions – from Singapore & GCC to the EU, India, and the UK.
                        </p>
                    </div>
                </div>

                {/* Regional Jurisdiction Selector */}
                <div className="flex flex-wrap gap-2 mb-10 animate-reveal delay-100">
                    {regions.map((r) => (
                        <button
                            key={r.id}
                            className={`reg-jurisdiction-btn${activeRegion === r.id ? ' active' : ''}`}
                            onClick={() => setActiveRegion(r.id)}
                        >
                            {r.label}
                        </button>
                    ))}
                </div>

                {/* Active Panel */}
                {panel && (
                    <div key={panel.id} className="reg-panel active grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
                        {/* Left: Regulatory content (3/5) */}
                        <div className="lg:col-span-3 flex flex-col gap-6">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        {panel.flag && <span className="text-2xl">{panel.flag}</span>}
                                        <h3 className="font-serif text-2xl font-bold text-[#003567]">{panel.panelTitle}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm font-medium">{panel.subtitle}</p>
                                </div>
                                <span className="reg-status-badge shrink-0">{panel.badge}</span>
                            </div>

                            <div className="flex flex-col gap-3">
                                {panel.points.map((pt) => (
                                    <div key={pt.num} className="reg-point">
                                        <span className="reg-point-num">{pt.num}</span>
                                        <div>
                                            <p className="reg-point-title">{pt.title}</p>
                                            <p className="reg-point-desc">{pt.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Region photo (2/5) */}
                        <div className="lg:col-span-2 relative rounded-[1.75rem] overflow-hidden shadow-2xl min-h-[380px] group">
                            <img
                                src={panel.image}
                                alt={panel.imageAlt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#003567]/80 via-[#003567]/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Jurisdiction</p>
                                <p className="text-white font-serif text-xl font-bold">{panel.imageLabel}</p>
                                <p className="text-white/60 text-xs mt-1">{panel.imageSub}</p>
                            </div>
                            <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 text-white text-xs font-bold">
                                {panel.imageTag}
                            </div>
                        </div>
                    </div>
                )}

                {/* Final CTA Banner */}
                <div className="bg-[#003567] rounded-[1.75rem] px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 animate-reveal delay-400">
                    <div>
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Get Expert Guidance</p>
                        <p className="text-white font-serif text-xl md:text-2xl font-bold">
                            Not sure which regulations apply to your organisation?
                        </p>
                    </div>
                    <button className="shrink-0 inline-flex items-center gap-2 bg-[#73aa3c] text-[#003567] px-7 py-3.5 rounded-xl font-bold hover:bg-white transition-colors duration-300 shadow-xl text-sm whitespace-nowrap">
                        Book a Regulatory Assessment <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}
