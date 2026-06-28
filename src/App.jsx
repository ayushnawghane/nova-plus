import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IndustrialEcosystems from './components/IndustrialEcosystems'
import PartnerWithUs from './components/PartnerWithUs'
import ESGConsultingServices from './components/ESGConsultingServices'
import ESGConsultancy from './components/ESGConsultancy'
import CarbonAccounting from './components/CarbonAccounting'
import LearningPlatform from './components/LearningPlatform'
import WhyNovaPlus from './components/WhyNovaPlus'
import GlobalRegulations from './components/GlobalRegulations'
import ESGPriorities from './components/ESGPriorities'
import FAQ from './components/FAQ'
import HowWeWork from './components/HowWeWork'
import ESGCapabilityBuilding from './components/ESGCapabilityBuilding'
import ClimateReportingTimeline from './components/ClimateReportingTimeline'
import AboutUs from './components/AboutUs'
import GetInTouch from './components/GetInTouch'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

const HOME_ROUTE = '#/'
const ESG_CARBON_MARKET_ROUTE = '#/services/esg-carbon-market'
const LMS_ROUTE = '#/services/learning-management-system'
const CONTACT_US_ROUTE = '#/contact-us'

function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="pt-34 pb-12 md:pb-16 px-6 gradient-mesh relative overflow-hidden">
      <div className="page-intro-glow page-intro-glow-left"></div>
      <div className="page-intro-glow page-intro-glow-right"></div>
      <div className="max-w-7xl mx-auto">
        <div className="page-intro-card animate-reveal">
          <div className="page-intro-badge-row">
            <span className="page-intro-badge">{eyebrow}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#003567] font-bold leading-tight mb-6">{title}</h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">{description}</p>
          <div className="page-intro-actions">
            <a href="#/contact-us" className="page-intro-primary-link">
              Talk to our team <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
            <a href="#/" className="page-intro-secondary-link">Back to Home</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <IndustrialEcosystems />
      <PartnerWithUs />
      <ESGConsultingServices />
      <HowWeWork />
      <ESGCapabilityBuilding />
      <ClimateReportingTimeline />
      {/* <CarbonAccounting />
      <LearningPlatform />
      <WhyNovaPlus /> */}
      <GlobalRegulations />
      <ESGPriorities />
      <FAQ />
      {/* <AboutUs /> */}
      <GetInTouch />
      <CTABanner />
    </>
  )
}

function ESGCarbonMarketPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="ESG Carbon Market"
        description="End-to-end support for carbon accounting, decarbonization strategy, and credible carbon market participation."
      />
      <ESGConsultancy />
      <CarbonAccounting />
    </>
  )
}

function LearningManagementSystemPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Learning Management System"
        description="Build ESG capability across your organization with a scalable learning platform and practical, role-based training."
      />
      <LearningPlatform />
    </>
  )
}

function ContactUsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Contact Us"
        description="Tell us your ESG priorities and our team will help you plan the right next steps."
      />
      <GetInTouch />
    </>
  )
}

function getCurrentRoute() {
  return window.location.hash || HOME_ROUTE
}

function App() {
  const [route, setRoute] = useState(getCurrentRoute())

  useEffect(() => {
    const handleHashChange = () => setRoute(getCurrentRoute())
    window.addEventListener('hashchange', handleHashChange)

    if (!window.location.hash) {
      window.location.hash = HOME_ROUTE
    }

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    if (route === ESG_CARBON_MARKET_ROUTE) {
      return <ESGCarbonMarketPage />
    }

    if (route === LMS_ROUTE) {
      return <LearningManagementSystemPage />
    }

    if (route === CONTACT_US_ROUTE) {
      return <ContactUsPage />
    }

    return <HomePage />
  }

  return (
    <div className="font-sans text-gray-800 bg-white antialiased overflow-x-hidden">
      <div className="noise-bg"></div>
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App
