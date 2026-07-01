import { useEffect } from 'react';
import CTABanner from './CTABanner';
import PageHeader from './PageHeader';

const servicesData = [
    {
        num: '01',
        title: 'ESG & Sustainability Reporting',
        description: 'Prepare annual sustainability reports and disclosures that meet global standards and regional compliance mandates.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
        items: [
            'Prepare annual sustainability reports aligned with SGX requirements, GRI, TCFD, and ISSB / IFRS S1 & S2.',
            'Conduct materiality assessments to identify priority ESG topics and business impacts.',
            'Draft ESG disclosures, performance highlights, case studies, and management narratives.',
            'Develop ESG data collection templates and reporting workflows across departments.',
            'Support board-level and management-level ESG reporting requirements.',
            'Prepare sustainability reporting roadmaps and disclosure improvement plans.'
        ]
    },
    {
        num: '02',
        title: 'GHG Accounting',
        description: 'Complete Scope 1, 2, and 3 emissions calculations backed by transparent methodologies and industry standards.',
        image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop',
        items: [
            'Calculate Scope 1, Scope 2, and Scope 3 greenhouse gas emissions.',
            'Prepare emissions inventories for offices, plants, warehouses, and logistics operations.',
            'Map activity data including fuel, electricity, refrigerants, business travel, waste, and purchased goods.',
            'Select and apply appropriate emission factors and methodologies.',
            'Develop GHG calculation files, emissions registers, and methodology documentation.',
            'Support Scope 3 supplier engagement and data collection initiatives.'
        ]
    },
    {
        num: '03',
        title: 'ESG Data Management & Dashboard',
        description: 'Establish internal metrics, reporting workflows, and visual data dashboards for robust performance monitoring.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
        items: [
            'Develop ESG KPI frameworks aligned with reporting requirements.',
            'Create department-wise ESG data collection templates.',
            'Establish monthly, quarterly, and annual ESG reporting processes.',
            'Build dashboards for energy, emissions, water, waste, workforce, and safety performance.',
            'Develop audit trails, supporting documentation, and evidence repositories.',
            'Train internal teams on ESG data ownership, governance, and reporting responsibilities.'
        ]
    },
    {
        num: '04',
        title: 'Supplier ESG Assessment',
        description: 'Evaluate supply chain environmental and ethical risks while implementing supplier capability-building initiatives.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop',
        items: [
            'Design supplier ESG assessment questionnaires and evaluation criteria.',
            'Assess suppliers across environmental, labour, ethics, health & safety, and climate-related practices.',
            'Support Scope 3 emissions data collection from suppliers.',
            'Develop supplier ESG scorecards and benchmarking frameworks.',
            'Identify ESG-related risks and opportunities within the supply chain.',
            'Design supplier engagement, awareness, and capability-building programmes.'
        ]
    },
    {
        num: '05',
        title: 'ESG Policy Development',
        description: 'Draft policies that align governance, resource usage, human rights, and procurement with stakeholder expectations.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
        items: [
            'Draft or enhance ESG-related policies and governance documents.',
            'Develop Sustainability Policies and ESG Frameworks.',
            'Prepare Climate Change and Decarbonisation Policies.',
            'Develop Human Rights and Diversity, Equity & Inclusion (DEI) Policies.',
            'Create Supplier Codes of Conduct and Sustainable Procurement Policies.',
            'Develop Waste Management, Environmental, and Resource Efficiency Policies.',
            'Prepare Workplace Health, Safety, and Well-being Policies.',
            'Align policies with stakeholder expectations and recognised ESG frameworks.'
        ]
    },
    {
        num: '06',
        title: 'EcoVadis & Sustainability Ratings Support',
        description: 'Strengthen rating preparedness and document submissions across environments, labor, ethics, and procurement.',
        image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop',
        items: [
            'Support EcoVadis assessment completion and submission.',
            'Review existing documentation against EcoVadis requirements.',
            'Identify gaps across Environment, Labour & Human Rights, Ethics, and Sustainable Procurement themes.',
            'Develop and strengthen ESG policies, procedures, and supporting evidence.',
            'Create document repositories and evidence management systems.',
            'Conduct supplier sustainability assessments and benchmarking.',
            'Support customer sustainability questionnaires and ESG information requests.',
            'Develop ESG rating improvement roadmaps and action plans.',
            'Provide guidance on sustainability ratings readiness and continuous improvement.'
        ]
    }
];

export default function ServicesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDownloadBrochure = (e) => {
        e.preventDefault();
        alert("Thank you for your interest! The Nova Plus ESG Solutions Brochure download has been initiated.");
    };

    return (
        <div className="w-full bg-[#f8fafc] overflow-hidden">
            {/* ① Page Header (Hero) */}
            <PageHeader 
                eyebrow="Our Capabilities"
                title="ESG Consulting & Implementation Services"
                description="Nova Plus helps industrial and infrastructure businesses build practical ESG systems that support reporting, operational improvement, risk management and long-term business goals—from ESG reporting and carbon management to supply chain sustainability and governance."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
            />

            {/* ② Services List Section (Alternating/Split Left Image, Right Content) */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto flex flex-col gap-24">
                    {servicesData.map((svc, index) => (
                        <div 
                            key={index} 
                            id={`service-${svc.num}`}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100 pb-20 last:border-0 last:pb-0"
                        >
                            {/* Left Side: Styled Image Frame */}
                            <div className="lg:col-span-5 order-1 lg:order-1 relative group">
                                {/* Decorative colored backplate */}
                                <div className="absolute inset-0 bg-[#003567] rounded-[2.5rem] transform translate-x-3 translate-y-3 opacity-5 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500"></div>
                                <div className="absolute inset-0 border border-[#73aa3c]/20 rounded-[2.5rem] transform -translate-x-2 -translate-y-2 opacity-60"></div>
                                
                                {/* Core Image container */}
                                <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
                                    <img 
                                        src={svc.image} 
                                        alt={svc.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Brand color overlay tint */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#003567]/20 to-transparent mix-blend-multiply"></div>
                                    
                                    {/* Big floating number badge */}
                                    <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-md border border-[#003567]/5 flex items-center justify-center font-serif text-xl font-black text-[#003567] shadow-sm">
                                        {svc.num}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Detailed Content */}
                            <div className="lg:col-span-7 order-2 lg:order-2 flex flex-col justify-center text-left">
                                <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-3 block">Service Detail</span>
                                <h2 className="font-serif text-2xl md:text-3.5xl text-[#003567] font-extrabold leading-tight mb-4 tracking-tight">
                                    {svc.title}
                                </h2>
                                <p className="text-slate-500 text-sm md:text-base mb-8 leading-relaxed font-light">
                                    {svc.description}
                                </p>

                                {/* What We Can Do List */}
                                <div className="bg-[#f4f7f5] border border-[#e0ebe5] rounded-3xl p-6 md:p-8">
                                    <h3 className="font-bold text-[#003567] text-xs uppercase tracking-wider mb-5 flex items-center gap-2 border-b border-slate-200/50 pb-3">
                                        <i className="fa-solid fa-list-check text-[#73aa3c]"></i>
                                        What We Can Do
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {svc.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-700 text-xs md:text-sm leading-relaxed">
                                                <span className="w-5 h-5 rounded-full bg-[#73aa3c]/15 text-[#73aa3c] flex items-center justify-center shrink-0 mt-0.5">
                                                    <i className="fa-solid fa-check text-[9px]"></i>
                                                </span>
                                                <span className="font-light">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ③ Let's Build Your ESG Roadmap (CTA Banner) */}
            <CTABanner 
                title="Let’s Build Your ESG Roadmap"
                description="Nova Plus supports industrial and infrastructure businesses with practical ESG consulting solutions across reporting, carbon accounting, ESG data systems, supplier sustainability, and governance readiness. Whether your organization is starting its ESG journey or strengthening existing frameworks, we help transform ESG requirements into structured, measurable, and business-focused actions."
                theme="consulting"
                primaryText="Schedule ESG Consultation"
                primaryHref="#/contact-us"
                secondaryText="Download ESG Solutions Brochure"
                secondaryHref="#"
                onSecondaryClick={handleDownloadBrochure}
                showContact={true}
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
            />
        </div>
    );
}
