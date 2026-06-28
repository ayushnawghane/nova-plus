import { useRef } from 'react';

const services = [
    {
        num: "01",
        title: "ESG Gap Assessment & Benchmarking",
        span: "lg:col-span-1",
        icon: "fa-solid fa-chart-line"
    },
    {
        num: "02",
        title: "ESG & Sustainability Reporting",
        span: "lg:col-span-2",
        icon: "fa-solid fa-file-lines"
    },
    {
        num: "03",
        title: "GHG Accounting",
        span: "lg:col-span-1",
        icon: "fa-solid fa-leaf"
    },
    {
        num: "04",
        title: "ESG Data Management & Dashboard",
        span: "lg:col-span-1",
        icon: "fa-solid fa-gauge"
    },
    {
        num: "05",
        title: "Supplier ESG Assessment",
        span: "lg:col-span-1",
        icon: "fa-solid fa-truck"
    },
    {
        num: "06",
        title: "ESG Policy Development",
        span: "lg:col-span-1",
        icon: "fa-solid fa-scale-balanced"
    },
    {
        num: "07",
        title: "EcoVadis & ESG Ratings Support",
        span: "lg:col-span-2",
        icon: "fa-solid fa-award"
    }
];

const SERVICES_ROUTE = "#/services/esg-carbon-market";

export default function ESGConsultingServices() {
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section className="relative py-24 bg-gradient-to-b from-[#081e35] to-[#031122] text-white overflow-hidden">
            {/* Hanging Leaf Watermark (Top Left) */}
            <img 
                src="/frameworks/8.png" 
                alt="Leaf Watermark Top Left" 
                className="absolute -top-12 -left-12 w-52 h-52 md:w-72 md:h-72 pointer-events-none opacity-15 rotate-[135deg] object-contain" 
            />

            {/* Bottom-Right Leaf Watermark */}
            <img 
                src="/frameworks/8.png" 
                alt="Leaf Watermark Bottom Right" 
                className="absolute -bottom-6 -right-6 w-48 h-48 md:w-64 md:h-64 pointer-events-none opacity-10 object-contain" 
            />

            {/* Glowing spot background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#73aa3c]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
                    <span className="text-[#73aa3c] font-bold text-xs uppercase tracking-widest mb-3 block">Expert Advisory</span>
                    <h2 className="font-serif text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5 text-white">
                        ESG Consulting & <br className="hidden sm:inline" /> Implementation Services
                    </h2>
                    <p className="text-sm md:text-base text-blue-100/70 leading-relaxed font-light">
                        Practical, compliance-ready advisory services helping Singapore and regional organizations implement credible ESG and carbon practices.
                    </p>
                </div>

                {/* Asymmetrical Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 animate-reveal delay-100">
                    {services.map((item, index) => (
                        <a
                            key={index}
                            href={SERVICES_ROUTE}
                            onMouseMove={handleMouseMove}
                            className={`group relative flex flex-col justify-between p-8 rounded-3xl bg-[#0c233c]/60 border border-blue-900/30 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#73aa3c]/30 hover:shadow-xl hover:shadow-[#73aa3c]/5 overflow-hidden ${item.span}`}
                            style={{ 
                                minHeight: '190px',
                                backgroundImage: 'radial-gradient(circle 120px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(115, 170, 60, 0.12) 0%, transparent 100%)'
                            }}
                        >
                            {/* Card Header (Number & Subtle Icon Watermark) */}
                            <div className="flex justify-between items-start">
                                <span className="font-serif text-xs md:text-sm font-bold tracking-wider text-[#73aa3c]">
                                    {item.num} // SERVICE
                                </span>
                                <i className={`${item.icon} text-lg text-blue-100/10 group-hover:text-[#73aa3c]/20 transition-colors duration-500`}></i>
                            </div>

                            {/* Card Body (Heading text) */}
                            <div className="mt-8">
                                <h3 className="font-serif text-lg md:text-xl font-bold leading-snug text-white group-hover:text-[#73aa3c] transition-colors duration-300">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Corner Hover Arrow Indicator */}
                            <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full border border-blue-900/60 flex items-center justify-center text-blue-300 group-hover:border-[#73aa3c] group-hover:bg-[#73aa3c] group-hover:text-white transition-all duration-300 opacity-60 group-hover:opacity-100">
                                <i className="fa-solid fa-arrow-up-right text-[10px]"></i>
                            </div>
                        </a>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center animate-reveal delay-200">
                    <a 
                        href={SERVICES_ROUTE}
                        className="inline-flex items-center gap-3 bg-[#73aa3c] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-white hover:text-[#003567] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#73aa3c]/20"
                    >
                        Explore Services Tab
                        <span className="w-5 h-5 rounded-full bg-white text-[#73aa3c] flex items-center justify-center">
                            <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
