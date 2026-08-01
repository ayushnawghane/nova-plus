import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export default function Layout({ children }) {
    return (
        <div className="font-sans text-gray-800 bg-white antialiased overflow-x-hidden">
            <div className="noise-bg"></div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
