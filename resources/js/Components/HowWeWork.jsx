import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';

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

function useInView(threshold = 0.2) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
}

function StepCard({ step, index }) {
    const [ref, inView] = useInView(0.25);

    return (
        <div
            ref={ref}
            className="relative pt-9 flex flex-col items-start"
            style={{
                transitionProperty: 'opacity, transform, filter',
                transitionDuration: '800ms',
                transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
                transitionDelay: `${index * 90}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                filter: inView ? 'blur(0)' : 'blur(6px)'
            }}
        >
            {/* Timeline Node */}
            <div className="absolute top-0 left-[34px] w-7 h-7 rounded-full bg-white ring-1 ring-slate-200 flex items-center justify-center z-20 transition-all duration-500">
                <span
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                        inView ? 'bg-[#73aa3c] shadow-[0_0_0_5px_rgba(115,170,60,0.15)]' : 'bg-slate-200'
                    }`}
                ></span>
            </div>

            {/* Double-Bezel Card: outer shell */}
            <div className="group w-full rounded-[2rem] bg-slate-900/[0.03] p-1.5 ring-1 ring-slate-900/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:ring-[#73aa3c]/25 hover:bg-[#73aa3c]/5">
                {/* Inner core */}
                <div className="w-full h-full min-h-[210px] rounded-[calc(2rem-0.375rem)] bg-white p-8 flex flex-col justify-between shadow-[0_1px_2px_rgba(15,23,42,0.04),0_18px_40px_-24px_rgba(15,23,42,0.18)]">
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-7">
                        <div className="w-12 h-12 rounded-2xl bg-[#eef6e5] text-[#5c8f2c] flex items-center justify-center transition-all duration-500 group-hover:bg-[#73aa3c] group-hover:text-white">
                            <i className={`${step.icon} text-lg`}></i>
                        </div>
                        <span className="font-serif text-4xl font-extrabold text-slate-100 group-hover:text-[#73aa3c]/15 transition-colors duration-500 select-none leading-none">
                            {step.num}
                        </span>
                    </div>

                    {/* Card Content */}
                    <div>
                        <h3 className="font-serif text-xl font-bold text-[#00234a] mb-2.5 group-hover:text-[#5c8f2c] transition-colors duration-300">
                            {step.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function HowWeWork() {
    const [headerRef, headerInView] = useInView(0.2);

    return (
        <section className="relative py-24 md:py-32 bg-[#fbfbfa] overflow-hidden">
            {/* Subtle engineering/architectural dot grid pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px'
                }}
            ></div>

            {/* Radial background glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 20%, rgba(115,170,60,0.06) 0%, transparent 60%)' }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div
                    ref={headerRef}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-20"
                    style={{
                        transitionProperty: 'opacity, transform',
                        transitionDuration: '800ms',
                        transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
                        opacity: headerInView ? 1 : 0,
                        transform: headerInView ? 'translateY(0)' : 'translateY(20px)'
                    }}
                >
                    <div>
                        <span className="inline-flex items-center rounded-full border border-[#73aa3c]/30 bg-[#73aa3c]/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5c8f2c] mb-5">
                            Our Process
                        </span>
                        <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-[#00234a] leading-[1.05] tracking-tight">
                            Practical ESG Journey <br className="hidden sm:inline" /> for Businesses
                        </h2>
                    </div>
                    <div>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                            A structured and practical approach to help organisations assess, prioritise, implement, and continuously improve their ESG performance.
                        </p>
                    </div>
                </div>

                {/* Interactive Journey Flow Grid */}
                <div className="relative">
                    {/* Desktop Horizontal Connector */}
                    <div
                        className="absolute top-[47px] left-12 right-12 h-px hidden lg:block z-0"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(15,23,42,0.12) 8%, rgba(15,23,42,0.12) 92%, transparent)' }}
                    ></div>

                    {/* Mobile Vertical Connector */}
                    <div
                        className="absolute top-9 bottom-9 left-[47px] w-px lg:hidden block z-0"
                        style={{ background: 'linear-gradient(180deg, transparent, rgba(15,23,42,0.12) 8%, rgba(15,23,42,0.12) 92%, transparent)' }}
                    ></div>

                    {/* Step Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                        {steps.map((step, index) => (
                            <StepCard key={step.num} step={step} index={index} />
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Banner */}
                <div className="mt-20 pt-10 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-sm">Ready to begin your ESG journey with a proven partner?</p>
                    <Link
                        href={route('contact-us')}
                        className="group inline-flex items-center gap-3 bg-[#003567] text-white pl-7 pr-2 py-2 rounded-full text-sm font-bold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#00234a] active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(0,53,103,0.5)]"
                    >
                        Start with an Assessment
                        <span className="w-9 h-9 rounded-full bg-[#73aa3c] text-white flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                            <i className="fa-solid fa-arrow-right text-xs"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
