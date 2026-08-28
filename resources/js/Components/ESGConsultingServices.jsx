import { Link } from '@inertiajs/react';

const services = [
    {
        title: "ESG Gap Assessment & Benchmarking",
        span: "lg:col-span-1",
        icon: "fa-solid fa-chart-line",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=700&auto=format&fit=crop"
    },
    {
        title: "ESG & Sustainability Reporting",
        span: "lg:col-span-2",
        icon: "fa-solid fa-file-lines",
        image: "https://images.unsplash.com/photo-1762427354251-f008b64dbc32?q=80&w=900&auto=format&fit=crop"
    },
    {
        title: "GHG Accounting",
        span: "lg:col-span-1",
        icon: "fa-solid fa-leaf",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=700&auto=format&fit=crop"
    },
    {
        title: "ESG Data Management & Dashboard",
        span: "lg:col-span-1",
        icon: "fa-solid fa-gauge",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700&auto=format&fit=crop"
    },
    {
        title: "Supplier ESG Assessment",
        span: "lg:col-span-1",
        icon: "fa-solid fa-truck",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=700&auto=format&fit=crop"
    },
    {
        title: "ESG Policy Development",
        span: "lg:col-span-1",
        icon: "fa-solid fa-scale-balanced",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=700&auto=format&fit=crop"
    },
    {
        title: "EcoVadis & ESG Ratings Support",
        span: "lg:col-span-2",
        icon: "fa-solid fa-award",
        image: "/images/ecovadis.png",
        imageHasBranding: true
    }
];

const SERVICES_ROUTE = route('services');

export default function ESGConsultingServices() {
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
                        <Link
                            key={index}
                            href={SERVICES_ROUTE}
                            className={`group relative flex flex-col justify-end rounded-3xl border border-blue-900/30 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#73aa3c]/40 hover:shadow-xl hover:shadow-[#73aa3c]/5 overflow-hidden ${item.span}`}
                            style={{ minHeight: '260px' }}
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient overlay for legibility (skipped when the image already carries its own branding) */}
                            {!item.imageHasBranding && (
                                <div className="absolute inset-0 bg-gradient-to-t from-[#03102199] via-[#031021]/70 to-[#031021]/20 group-hover:from-[#03102199] group-hover:via-[#031021]/60 transition-colors duration-500"></div>
                            )}

                            {/* Icon Badge */}
                            <div className="absolute top-6 left-6 w-11 h-11 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-[#b6cf7c] group-hover:bg-[#73aa3c] group-hover:text-white group-hover:border-[#73aa3c] transition-colors duration-500 z-10">
                                <i className={`${item.icon} text-base`}></i>
                            </div>

                            {/* Card Body (Heading text) */}
                            {!item.imageHasBranding && (
                                <div className="relative z-10 p-8 pt-0">
                                    <h3 className="font-serif text-lg md:text-xl font-bold leading-snug text-white group-hover:text-[#b6cf7c] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                </div>
                            )}

                            {/* Corner Hover Arrow Indicator */}
                            <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 group-hover:border-[#73aa3c] group-hover:bg-[#73aa3c] group-hover:text-white transition-all duration-300 z-10">
                                <i className="fa-solid fa-arrow-up-right text-[10px]"></i>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center animate-reveal delay-200">
                    <Link
                        href={SERVICES_ROUTE}
                        className="inline-flex items-center gap-3 bg-[#73aa3c] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-white hover:text-[#003567] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#73aa3c]/20"
                    >
                        Explore Services Tab
                        <span className="w-5 h-5 rounded-full bg-white text-[#73aa3c] flex items-center justify-center">
                            <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
