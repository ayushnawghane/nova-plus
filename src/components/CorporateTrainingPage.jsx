import { useEffect } from 'react';
import CTABanner from './CTABanner';
import PageHeader from './PageHeader';

const approachData = [
    {
        icon: 'fa-solid fa-screwdriver-wrench',
        title: 'Practical',
        desc: 'Real-world case studies, hands-on tools, and actionable insights that can be applied immediately.'
    },
    {
        icon: 'fa-solid fa-sliders',
        title: 'Tailored & Flexible',
        desc: 'Programs customised to your industry, business context, and ESG maturity level.'
    },
    {
        icon: 'fa-solid fa-user-tie',
        title: 'Expert-Led',
        desc: 'Learn from experienced ESG professionals and industry practitioners.'
    },
    {
        icon: 'fa-solid fa-chart-line',
        title: 'Outcome-Focused',
        desc: 'Build capabilities that drive measurable improvements and long-term value.'
    }
];

const programsData = [
    {
        level: 'BEGINNER LEVEL',
        title: 'ESG Foundation Training',
        description: 'Build a strong understanding of ESG concepts, frameworks, and sustainability basics to kickstart your ESG journey.',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop',
        audience: ['SMEs beginning their ESG journey', 'System integrators & engineering firms', 'Suppliers, contractors & services companies'],
        topics: [
            'Introduction to ESG and sustainability',
            'ESG frameworks and reporting awareness (GRI, ISSB, etc.)',
            'Materiality and stakeholder expectations',
            'Introduction to carbon accounting and climate risks',
            'ESG governance and responsible business practices',
            'Sustainability roadmap and action planning',
            'ESG trends, regulations, and market expectations'
        ]
    },
    {
        level: 'INTERMEDIATE LEVEL',
        title: 'Decarbonisation & ESG Reporting Training',
        description: 'Build practical capabilities in ESG reporting, carbon management, and sustainability implementation.',
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop',
        audience: ['Companies implementing ESG practices', 'Procurement & operations teams', 'Engineering & infrastructure businesses'],
        topics: [
            'Scope 1, 2 & 3 carbon accounting',
            'ESG reporting and disclosure practices',
            'Climate risk and decarbonization strategies',
            'Science-Based Targets (SBTi) awareness',
            'ESG data collection and governance',
            'Sustainable procurement and supply chain ESG',
            'ESG KPI tracking and implementation',
            'Introduction to assurance and data quality'
        ]
    },
    {
        level: 'ADVANCED LEVEL',
        title: 'ESG Leadership Training',
        description: 'Build stronger ESG capabilities to support business growth and long-term resilience.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
        audience: ['Mature organisations advancing ESG goals', 'Businesses entering global supply chains', 'Companies strengthening ESG resilience & growth'],
        topics: [
            'Sustainable finance and responsible business practices',
            'ESG communication and stakeholder engagement strategies',
            'Climate resilience and transition planning',
            'Supply chain sustainability and responsible sourcing',
            'ESG governance and assurance preparedness',
            'Integrating ESG into business strategy and decision-making',
            'Creating long-term value through sustainability'
        ]
    }
];

export default function CorporateTrainingPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-[#f8fafc] overflow-hidden">
            {/* ① Page Header (Hero) */}
            <PageHeader 
                eyebrow="Capability Building"
                title="ESG Corporate Training & Capability Building Programs"
                description="Practical ESG training programs designed to help operational teams, suppliers, and business leaders strengthen ESG awareness, reporting readiness, governance understanding, and long-term business resilience."
                image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop"
            />

            {/* ② Our Training Approach (Why Choose Us - Page 11) */}
            <section className="py-20 px-6 bg-white relative border-b border-slate-100">
                <div className="max-w-7xl mx-auto text-left">
                    <div className="max-w-3xl mb-16 animate-reveal">
                        <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-3 block">Why Choose Us</span>
                        <h2 className="font-serif text-3xl md:text-4.5xl text-[#003567] font-extrabold leading-tight mb-5">
                            Our Training Approach
                        </h2>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                            Our training approach is designed to build practical ESG understanding, strengthen internal capabilities, and empower organisations to implement sustainability with confidence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-reveal delay-100">
                        {approachData.map((item, idx) => (
                            <div key={idx} className="bg-[#f4f7f5] border border-[#e0ebe5] rounded-[2rem] p-8 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#003567]/10 flex items-center justify-center text-[#003567] mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <i className={`${item.icon} text-lg`}></i>
                                    </div>
                                    <h3 className="font-serif text-lg text-[#003567] font-bold mb-3">{item.title}</h3>
                                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ③ Training Programs List (Left Image, Right Content) */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto flex flex-col gap-24">
                    {programsData.map((prog, index) => (
                        <div 
                            key={index} 
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100 pb-20 last:border-0 last:pb-0"
                        >
                            {/* Left Side: Styled Image Frame */}
                            <div className="lg:col-span-5 relative group">
                                {/* Backplates */}
                                <div className="absolute inset-0 bg-[#003567] rounded-[2.5rem] transform translate-x-3 translate-y-3 opacity-5 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500"></div>
                                <div className="absolute inset-0 border border-[#73aa3c]/20 rounded-[2.5rem] transform -translate-x-2 -translate-y-2 opacity-60"></div>
                                
                                <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
                                    <img 
                                        src={prog.image} 
                                        alt={prog.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#003567]/20 to-transparent mix-blend-multiply"></div>
                                </div>
                            </div>

                            {/* Right Side: Detailed Content */}
                            <div className="lg:col-span-7 flex flex-col justify-center text-left">
                                {/* Level Badge */}
                                <span className={`w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border ${
                                    index === 0 ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' :
                                    index === 1 ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' :
                                    'bg-amber-500/10 text-amber-600 border-amber-500/20'
                                }`}>
                                    {prog.level}
                                </span>

                                <h2 className="font-serif text-2xl md:text-3.5xl text-[#003567] font-extrabold leading-tight mb-4 tracking-tight">
                                    {prog.title}
                                </h2>
                                <p className="text-slate-500 text-sm md:text-base mb-6 leading-relaxed font-light">
                                    {prog.description}
                                </p>

                                {/* Target Audience Box */}
                                <div className="bg-[#003567] text-white/90 rounded-2xl p-4.5 mb-6 border border-white/5 shadow-inner">
                                    <h4 className="text-[10px] font-bold tracking-widest text-[#73aa3c] uppercase mb-2">Who is this for?</h4>
                                    <ul className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-white/80 font-light">
                                        {prog.audience.map((a, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#73aa3c]"></span>
                                                {a}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Topics Covered List */}
                                <div className="bg-[#f4f7f5] border border-[#e0ebe5] rounded-3xl p-6 md:p-8">
                                    <h3 className="font-bold text-[#003567] text-xs uppercase tracking-wider mb-5 flex items-center gap-2 border-b border-slate-200/50 pb-3">
                                        <i className="fa-solid fa-graduation-cap text-[#73aa3c]"></i>
                                        Topics Covered
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {prog.topics.map((topic, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-700 text-xs md:text-sm leading-relaxed">
                                                <span className="w-5 h-5 rounded-full bg-[#73aa3c]/15 text-[#73aa3c] flex items-center justify-center shrink-0 mt-0.5">
                                                    <i className="fa-solid fa-circle-check text-[9px]"></i>
                                                </span>
                                                <span className="font-light">{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ④ Bottom Request Training (CTA Banner) */}
            <CTABanner 
                title="Build ESG Capability with Confidence"
                description="Equip your teams with the knowledge, skills, and practical tools needed to navigate evolving sustainability expectations, strengthen reporting readiness, and support long-term business resilience. Whether you're starting your ESG journey or advancing organisational capability, Nova Plus can design a training programme tailored to your business needs."
                theme="training"
                primaryText="Discuss Your Training Requirements"
                primaryHref="#/contact-us"
                showContact={true}
                image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop"
            />
        </div>
    );
}
