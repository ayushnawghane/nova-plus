import { useState } from 'react';
import CTABanner from './CTABanner';
import PageHeader from './PageHeader';

const team = [
    { 
        name: 'Nerella Pratap', 
        role: 'Founder & Director', 
        initials: 'NP', 
        desc: 'Leading strategic vision and governance frameworks to integrate ESG principles into core business models.' 
    },
    { 
        name: 'Pratiksha More', 
        role: 'Chief ESG Consultant', 
        initials: 'PM', 
        desc: 'Expert in ESG disclosure, regulatory compliance, and climate reporting frameworks.' 
    },
    { 
        name: 'Tanvi Jula', 
        role: 'ESG Research Analyst', 
        initials: 'TJ', 
        desc: 'Specialized in ESG data analysis, materiality assessments, and market trend research.' 
    },
    { 
        name: 'Aayush Anand', 
        role: 'ESG Advisor', 
        initials: 'AA', 
        desc: 'Providing advisory support for corporate decarbonization strategies and emissions accounting.' 
    }
];

const nodesData = {
    SG: {
        title: 'Singapore (HQ)',
        description: 'Our primary headquarters leading global compliance, ISSB readiness audits, and SGX-aligned carbon advisory services for multinational corporations and SMEs.',
        focus: ['SGX & ACRA Mandates', 'ISSB (S1 & S2) Alignment', 'Corporate ESG Governance']
    },
    UAE: {
        title: 'UAE Hub',
        description: 'Providing energy transition strategies, net-zero alignment roadmap development, and climate reporting consultancy for major infrastructure and energy enterprises.',
        focus: ['Net-Zero Strategy', 'Climate Disclosures', 'Energy Transition Planning']
    },
    SEA: {
        title: 'Southeast Asia Operations',
        description: 'Supporting regional Supply Chain Audits, BRSR reporting, capability-building workshops, and local regulatory disclosures across Malaysia, Indonesia, and Vietnam.',
        focus: ['BRSR & OJK Mandates', 'Supply Chain Audits', 'Local Training Programs']
    }
};

export default function AboutUs() {
    const [activeNode, setActiveNode] = useState('SG');

    return (
        <div className="w-full bg-white overflow-hidden">
            {/* ① Premium Hero Header */}
            <PageHeader 
                eyebrow="Company Narrative"
                title="Bridging Sustainability Ambitions with Practical Business Outcomes"
                description="Nova Plus was founded to help organisations navigate the growing complexity of sustainability, climate reporting, and ESG expectations."
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
            />

            {/* ② The Story & Narrative */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
                        <div className="lg:col-span-5 animate-reveal">
                            <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-3 block">Our Story</span>
                            <h2 className="font-serif text-3xl md:text-4xl text-[#003567] font-bold leading-tight">
                                Practical Solutions for Operational Realities
                            </h2>
                            <div className="mt-8 flex items-center gap-4 text-slate-500">
                                <div className="flex -space-x-2">
                                    <span className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center font-bold text-xs text-[#003567] shadow-sm">SG</span>
                                    <span className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center font-bold text-xs text-[#003567] shadow-sm">UAE</span>
                                    <span className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center font-bold text-xs text-[#003567] shadow-sm">SEA</span>
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-wider">Active Regional Network</span>
                            </div>
                        </div>
                        <div className="lg:col-span-7 text-slate-600 text-base md:text-lg leading-relaxed flex flex-col gap-6 animate-reveal delay-100">
                            <p>
                                As regulatory requirements evolve and stakeholder scrutiny increases, businesses need practical solutions that align sustainability goals with operational realities. We support organisations in strengthening ESG governance, improving disclosures, managing sustainability data, and building credible frameworks that support long-term business resilience and value creation.
                            </p>
                            <p className="font-semibold text-[#003567] bg-[#f4f7f5] border-l-4 border-[#73aa3c] p-5 rounded-r-2xl">
                                By combining technical expertise, regulatory insight, and commercial understanding, we help businesses move beyond compliance and translate sustainability ambitions into measurable outcomes.
                            </p>
                        </div>
                    </div>

                    {/* ③ Core Pillars (Purpose, Aspiration, Perspective) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
                        {/* Purpose */}
                        <div className="bg-[#f4f7f5] border border-[#e0ebe5] rounded-[2rem] p-8 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden animate-reveal">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#73aa3c]/5 to-transparent rounded-bl-full"></div>
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-[#003567]/10 flex items-center justify-center text-[#003567] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-bullseye text-lg"></i>
                                </div>
                                <h3 className="font-serif text-2xl text-[#003567] font-bold mb-4">Our Purpose</h3>
                                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                    To help organizations build credible, future-ready ESG practices that strengthen transparency, stakeholder confidence, and long-term business value.
                                </p>
                            </div>
                            <div className="w-12 h-1 bg-[#73aa3c] mt-8 rounded-full group-hover:w-20 transition-all duration-300"></div>
                        </div>

                        {/* Aspiration */}
                        <div className="bg-[#003567] text-white rounded-[2rem] p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#003567]/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden animate-reveal delay-100">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#73aa3c]/10 to-transparent rounded-bl-full"></div>
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-[#73aa3c]/20 flex items-center justify-center text-[#73aa3c] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-compass text-lg"></i>
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4 text-[#73aa3c]">Our Aspiration</h3>
                                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                                    To help businesses across Singapore, the UAE, and Southeast Asia navigate evolving sustainability expectations with confidence, credibility, and measurable impact.
                                </p>
                            </div>
                            <div className="w-12 h-1 bg-[#73aa3c] mt-8 rounded-full group-hover:w-20 transition-all duration-300"></div>
                        </div>

                        {/* Perspective */}
                        <div className="bg-white border border-slate-100 rounded-[2rem] p-8 hover:-translate-y-2 hover:shadow-xl shadow-[0_4px_30px_rgba(0,53,103,0.02)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden animate-reveal delay-200">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-full"></div>
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-lightbulb text-lg"></i>
                                </div>
                                <h3 className="font-serif text-2xl text-[#003567] font-bold mb-4">Our Perspective</h3>
                                <p className="text-slate-600 leading-relaxed text-xs md:text-sm">
                                    We believe effective ESG programmes are built on practicality, transparency, and measurable outcomes. Instead of treating ESG as a standalone compliance exercise, successful organisations focus on integrating sustainability into business decision-making. At Nova Plus, we combine regulatory understanding, technical expertise, and implementation-focused support to help organisations navigate sustainability challenges with confidence and clarity.
                                </p>
                            </div>
                            <div className="w-12 h-1 bg-[#003567] mt-8 rounded-full group-hover:w-20 transition-all duration-300"></div>
                        </div>
                    </div>

                    {/* ④ Regional Presence with Interactive CSS Network */}
                    <div className="bg-[#003567] text-white rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative mb-28 animate-reveal">
                        {/* Background elements */}
                        <div className="absolute inset-0 pointer-events-none opacity-20">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10 animate-pulse-slow"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                            <div className="lg:col-span-6">
                                <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-3 block">Geographical Reach</span>
                                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Regional Presence</h2>
                                <p className="text-white/80 leading-relaxed mb-8 text-base md:text-lg">
                                    Supporting organisations across diverse industries with ESG reporting, climate disclosures, sustainability strategy, emissions management, and capability-building initiatives.
                                </p>
                                
                                {/* Location Selectors (Interactive Tabs) */}
                                <div className="flex flex-col gap-3 mb-6">
                                    {Object.keys(nodesData).map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => setActiveNode(key)}
                                            className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                                                activeNode === key
                                                    ? 'bg-white text-[#003567] border-white shadow-lg'
                                                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                                            }`}
                                        >
                                            <span className="font-bold text-sm flex items-center gap-3">
                                                <span className={`w-2.5 h-2.5 rounded-full ${
                                                    key === 'SG' ? 'bg-[#73aa3c]' :
                                                    key === 'UAE' ? 'bg-[#89c8e7]' : 'bg-amber-400'
                                                }`}></span>
                                                {nodesData[key].title}
                                            </span>
                                            <i className="fa-solid fa-chevron-right text-xs opacity-50 group-hover:translate-x-1 transition-transform"></i>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Active Node Info Panel & Interactive Network Visual */}
                            <div className="lg:col-span-6 flex flex-col gap-6 items-center">
                                {/* Interactive Map Visual */}
                                <div className="w-full max-w-[420px] aspect-[4/3] bg-white/[0.03] border border-white/10 rounded-3xl relative p-6 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-sm">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {/* Singapore Node */}
                                        <button 
                                            onClick={() => setActiveNode('SG')}
                                            className="absolute bottom-[20%] right-[32%] flex flex-col items-center focus:outline-none z-20 group"
                                        >
                                            <span className={`w-4 h-4 rounded-full relative flex items-center justify-center transition-transform duration-300 ${activeNode === 'SG' ? 'scale-125' : 'hover:scale-110'}`}>
                                                <span className="w-4 h-4 rounded-full bg-[#73aa3c] absolute"></span>
                                                <span className="absolute w-8 h-8 rounded-full bg-[#73aa3c]/50 animate-ping"></span>
                                            </span>
                                            <span className={`text-[9px] font-extrabold tracking-wider uppercase mt-1 px-2 py-0.5 rounded-md border transition-colors ${
                                                activeNode === 'SG' 
                                                    ? 'bg-[#73aa3c] text-white border-[#73aa3c]' 
                                                    : 'bg-[#003567] text-white/70 border-white/10 group-hover:text-white'
                                            }`}>SG</span>
                                        </button>

                                        {/* UAE Node */}
                                        <button 
                                            onClick={() => setActiveNode('UAE')}
                                            className="absolute top-[25%] left-[20%] flex flex-col items-center focus:outline-none z-20 group"
                                        >
                                            <span className={`w-4 h-4 rounded-full relative flex items-center justify-center transition-transform duration-300 ${activeNode === 'UAE' ? 'scale-125' : 'hover:scale-110'}`}>
                                                <span className="w-4 h-4 rounded-full bg-[#89c8e7] absolute"></span>
                                                <span className="absolute w-8 h-8 rounded-full bg-[#89c8e7]/50 animate-ping"></span>
                                            </span>
                                            <span className={`text-[9px] font-extrabold tracking-wider uppercase mt-1 px-2 py-0.5 rounded-md border transition-colors ${
                                                activeNode === 'UAE' 
                                                    ? 'bg-[#89c8e7] text-[#003567] border-[#89c8e7]' 
                                                    : 'bg-[#003567] text-white/70 border-white/10 group-hover:text-white'
                                            }`}>UAE</span>
                                        </button>

                                        {/* Southeast Asia Node */}
                                        <button 
                                            onClick={() => setActiveNode('SEA')}
                                            className="absolute bottom-[35%] right-[15%] flex flex-col items-center focus:outline-none z-20 group"
                                        >
                                            <span className={`w-4 h-4 rounded-full relative flex items-center justify-center transition-transform duration-300 ${activeNode === 'SEA' ? 'scale-125' : 'hover:scale-110'}`}>
                                                <span className="w-4 h-4 rounded-full bg-amber-400 absolute"></span>
                                                <span className="absolute w-8 h-8 rounded-full bg-amber-400/50 animate-ping"></span>
                                            </span>
                                            <span className={`text-[9px] font-extrabold tracking-wider uppercase mt-1 px-2 py-0.5 rounded-md border transition-colors ${
                                                activeNode === 'SEA' 
                                                    ? 'bg-amber-400 text-[#003567] border-amber-400' 
                                                    : 'bg-[#003567] text-white/70 border-white/10 group-hover:text-white'
                                            }`}>SEA</span>
                                        </button>

                                        {/* SVG Connecting lines */}
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                                            <path
                                                d="M 105,95 Q 180,120 280,225"
                                                fill="none"
                                                stroke="rgba(255,255,255,0.15)"
                                                strokeWidth="1.5"
                                                strokeDasharray="4,4"
                                            />
                                            <path
                                                d="M 280,225 Q 310,210 345,190"
                                                fill="none"
                                                stroke="rgba(255,255,255,0.15)"
                                                strokeWidth="1.5"
                                                strokeDasharray="4,4"
                                            />
                                        </svg>
                                    </div>

                                    {/* Title overlay */}
                                    <div className="flex items-center justify-between border-b border-white/10 pb-3 z-10">
                                        <span className="text-[10px] font-semibold text-white/50 tracking-widest uppercase">Cross-Border Hubs</span>
                                        <span className="text-[9px] bg-white/10 text-white font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10">Interactive Network Map</span>
                                    </div>

                                    <div className="mt-auto pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-white/60 z-10">
                                        <span>Click nodes to inspect operations</span>
                                        <i className="fa-solid fa-network-wired text-[#73aa3c] animate-pulse"></i>
                                    </div>
                                </div>

                                {/* Active Node Details Overlay Card */}
                                <div className="w-full max-w-[420px] bg-white text-slate-800 p-6 rounded-3xl shadow-xl animate-reveal border border-slate-100 flex flex-col justify-between min-h-[160px]">
                                    <div>
                                        <h4 className="font-serif text-lg text-[#003567] font-bold mb-2 flex items-center gap-2">
                                            <i className="fa-solid fa-location-crosshairs text-[#73aa3c]"></i>
                                            {nodesData[activeNode].title}
                                        </h4>
                                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4">
                                            {nodesData[activeNode].description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                                        {nodesData[activeNode].focus.map((f, i) => (
                                            <span key={i} className="text-[10px] font-bold bg-[#f4f7f5] text-[#003567] border border-[#e0ebe5] rounded-full px-2.5 py-1">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ⑤ Meet Our Team Section */}
                    <div className="mb-28">
                        <div className="text-center max-w-2xl mx-auto mb-16 animate-reveal">
                            <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-3 block">Expertise & Governance</span>
                            <h2 className="font-serif text-3xl md:text-4xl text-[#003567] font-bold">Meet Our Team</h2>
                            <p className="text-slate-500 mt-4 text-sm md:text-base">
                                Our leadership and advisory team combines ESG advisory depth with commercial insight to build lasting value.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {team.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white border border-slate-100 rounded-[2rem] p-6 hover:-translate-y-2 hover:shadow-xl shadow-[0_4px_30px_rgba(0,53,103,0.02)] transition-all duration-300 flex flex-col items-center text-center group animate-reveal"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Avatar initials with dual tone gradient */}
                                    <div className={`w-20 h-20 rounded-full bg-gradient-to-tr ${
                                        index === 0 ? 'from-[#003567] to-[#73aa3c]' :
                                        index === 1 ? 'from-[#73aa3c] to-emerald-300' :
                                        index === 2 ? 'from-[#003567] to-[#89c8e7]' :
                                        'from-amber-400 to-[#73aa3c]'
                                    } flex items-center justify-center text-white text-2xl font-extrabold mb-6 shadow-md group-hover:scale-105 transition-transform duration-300 relative`}>
                                        {member.initials}
                                        <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-white border-4 border-white flex items-center justify-center">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#73aa3c]"></span>
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-lg text-[#003567] font-bold group-hover:text-[#73aa3c] transition-colors duration-300">{member.name}</h3>
                                    <p className="text-xs font-bold uppercase tracking-wider text-[#73aa3c] mt-1 mb-4">{member.role}</p>
                                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 flex-grow">{member.desc}</p>
                                    
                                    <div className="flex gap-3 mt-auto">
                                        <a href="#" className="w-8 h-8 rounded-full border border-slate-100 bg-slate-50 hover:bg-[#003567] hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 text-xs">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                        <a href="mailto:sales@novaplus.sg" className="w-8 h-8 rounded-full border border-slate-100 bg-slate-50 hover:bg-[#73aa3c] hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 text-xs">
                                            <i className="fa-regular fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ⑥ Interactive Let's Discuss CTA Banner */}
            <CTABanner 
                title="Let’s Discuss Your ESG Priorities"
                description="Whether you are preparing for sustainability reporting, climate disclosures, ESG ratings, or emissions accounting, Nova Plus can help you build a practical and future-ready ESG roadmap."
                theme="default"
                primaryText="Book an ESG Consultation"
                primaryHref="#/contact-us"
                showContact={true}
            />
        </div>
    );
}
