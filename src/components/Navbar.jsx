import { useState } from 'react'

export default function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-6 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#/">
                        <img src="/Nova PLus Logo.png" alt="Nova Plus" className="h-10 w-auto object-contain" />
                    </a>
                </div>

                <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#003567]">
                    <a href="#/" className="hover:text-[#73aa3c] transition-colors">Home</a>
                    <div
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button
                            type="button"
                            className="hover:text-[#73aa3c] transition-colors inline-flex items-center gap-2"
                            onClick={() => setIsServicesOpen((prev) => !prev)}
                        >
                            Services
                            <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}></i>
                        </button>

                        <div className={`services-dropdown ${isServicesOpen ? 'open' : ''}`}>
                            <a href="#/services/esg-carbon-market" className="services-dropdown-link">ESG Carbon Market</a>
                            <a href="#/services/learning-management-system" className="services-dropdown-link">Learning Management System</a>
                        </div>
                    </div>
                    <a href="#/" className="hover:text-[#73aa3c] transition-colors">Resources</a>
                    <a href="#/" className="hover:text-[#73aa3c] transition-colors">Company</a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <a href="#/contact-us" className="bg-[#003567] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#73aa3c] transition-colors shadow-lg shadow-[#003567]/20 inline-block">
                        Contact Us
                    </a>
                </div>

                <button className="md:hidden text-[#003567] text-2xl">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    );
}
