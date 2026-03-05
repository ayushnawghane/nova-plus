import { useState } from 'react';

const tierContexts = {
    tier1: 'For organizations starting their sustainability journey',
    tier2: 'For companies building operational ESG maturity',
    tier3: 'For leaders driving value through ESG differentiation',
};

const tier1Cards = [
    {
        num: '01',
        icon: 'fa-solid fa-compass',
        iconBg: '#e8f3dc',
        iconColor: '#3a7a1a',
        title: 'Sustainability Strategy & Vision',
        items: [
            'Materiality assessments',
            'ESG vision, targets & net-zero roadmaps',
            'ESG integration into governance & risk',
            'ESG benchmarking against peers',
        ],
    },
    {
        num: '02',
        icon: 'fa-solid fa-file-contract',
        iconBg: '#dce8f3',
        iconColor: '#003567',
        title: 'ESG Reporting & Disclosure',
        items: [
            'ISSB / IFRS S1 & S2 readiness (SGX, ADX, DFM)',
            'GRI, SASB, TCFD, BRSR & CSRD/ESRS-aligned reporting',
            'Sustainability report drafting for multi-jurisdiction compliance',
            'Assurance preparation (BRSR Core, CSRD limited assurance)',
        ],
    },
    {
        num: '03',
        icon: 'fa-solid fa-scale-balanced',
        iconBg: '#f0e8f5',
        iconColor: '#5a3580',
        title: 'Policy & Governance',
        items: [
            'ESG & sustainability policies',
            'Supplier codes & human rights policies',
            'Board and management ESG training',
        ],
    },
];

export default function ESGConsultancy() {
    const [activeTier, setActiveTier] = useState('tier1');
    const [contextText, setContextText] = useState(tierContexts.tier1);
    const [contextOpacity, setContextOpacity] = useState(1);

    const handleTierSelect = (tier) => {
        setContextOpacity(0);
        setTimeout(() => {
            setActiveTier(tier);
            setContextText(tierContexts[tier]);
            setContextOpacity(1);
        }, 180);
    };

    return (
        <section className="esg-section py-24">
            <div className="esg-section-inner-bg"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14 animate-reveal">
                    {/* Left: Title block */}
                    <div>
                        <span className="esg-eyebrow">Our Services</span>
                        <h2 className="esg-main-title">ESG Consultancy</h2>
                        <p className="esg-sub-desc">
                            Comprehensive strategy, reporting & implementation services<br className="hidden md:block" />
                            tailored to your ESG maturity level.
                        </p>
                    </div>

                    {/* Right: Tier Navigation */}
                    <div className="shrink-0 w-full lg:w-auto lg:max-w-md">
                        <div className="tier-nav">
                            {['tier1', 'tier2', 'tier3'].map((tier, i) => (
                                <button
                                    key={tier}
                                    className={`tier-btn${activeTier === tier ? ' active' : ''}`}
                                    onClick={() => handleTierSelect(tier)}
                                >
                                    <span className="block text-[0.68rem] opacity-60 font-semibold mb-0.5">Tier {i + 1}</span>
                                    {['Foundational & Strategy', 'Operational & Technical', 'Advanced & Value-Driven'][i]}
                                </button>
                            ))}
                        </div>
                        <p
                            className="tier-context-label"
                            style={{ opacity: contextOpacity, transform: contextOpacity === 1 ? 'translateY(0)' : 'translateY(4px)' }}
                        >
                            {contextText}
                        </p>
                    </div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tier1Cards.map((card, idx) => (
                        <div key={idx} className={`svc-card animate-reveal delay-${(idx + 1) * 100}`}>
                            <span className="svc-card-num">{card.num}</span>
                            <div className="svc-icon-wrap" style={{ background: card.iconBg, color: card.iconColor }}>
                                <i className={card.icon}></i>
                            </div>
                            <h3 className="svc-card-title">{card.title}</h3>
                            <div className="svc-divider"></div>
                            <ul className="svc-list">
                                {card.items.map((item, j) => (
                                    <li key={j}><span className="svc-list-dot"></span>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
