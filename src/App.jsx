import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ESGConsultancy from './components/ESGConsultancy'
import CarbonAccounting from './components/CarbonAccounting'
import LearningPlatform from './components/LearningPlatform'
import WhyNovaPlus from './components/WhyNovaPlus'
import GlobalRegulations from './components/GlobalRegulations'
import HowWeWork from './components/HowWeWork'
import AboutUs from './components/AboutUs'
import GetInTouch from './components/GetInTouch'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white antialiased overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="noise-bg"></div>

      <Navbar />
      <Hero />
      <ESGConsultancy />
      <CarbonAccounting />
      <LearningPlatform />
      <WhyNovaPlus />
      <GlobalRegulations />
      <HowWeWork />
      <AboutUs />
      <GetInTouch />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default App
