export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-6 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="#">
                        <img src="/Nova PLus Logo.png" alt="Nova Plus" className="h-10 w-auto object-contain" />
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#003567]">
                    <a href="#" className="hover:text-[#73aa3c] transition-colors">Platform</a>
                    <a href="#" className="hover:text-[#73aa3c] transition-colors">Solutions</a>
                    <a href="#" className="hover:text-[#73aa3c] transition-colors">Resources</a>
                    <a href="#" className="hover:text-[#73aa3c] transition-colors">Company</a>
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-[#003567] font-semibold text-sm hover:text-[#73aa3c] transition-colors">Login</a>
                    <button className="bg-[#003567] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#73aa3c] transition-colors shadow-lg shadow-[#003567]/20">
                        Book a Demo
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-[#003567] text-2xl">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    );
}
