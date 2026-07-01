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
import ServicesPage from './components/ServicesPage'
import CorporateTrainingPage from './components/CorporateTrainingPage'
import InsightsPage from './components/InsightsPage'
import PageHeader from './components/PageHeader'

const HOME_ROUTE = '#/'
const ESG_CARBON_MARKET_ROUTE = '#/services/esg-carbon-market'
const ESG_CONSULTING_ROUTE = '#/services'
const CORPORATE_TRAINING_ROUTE = '#/services/corporate-training'
const LMS_ROUTE = '#/services/learning-management-system'
const CONTACT_US_ROUTE = '#/contact-us'
const ABOUT_US_ROUTE = '#/about-us'
const INSIGHTS_ROUTE = '#/insights'

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
      <PageHeader
        eyebrow="Services"
        title="ESG Carbon Market"
        description="End-to-end support for carbon accounting, decarbonization strategy, and credible carbon market participation."
        image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop"
      />
      <ESGConsultancy />
      <CarbonAccounting />
      <CTABanner />
    </>
  )
}

function LearningManagementSystemPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Learning Management System"
        description="Build ESG capability across your organization with a scalable learning platform and practical, role-based training."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
      />
      <LearningPlatform />
      <CTABanner />
    </>
  )
}

function ContactUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact Us"
        description="Tell us your ESG priorities and our team will help you plan the right next steps."
        image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop"
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

    if (route === ESG_CONSULTING_ROUTE) {
      return <ServicesPage />
    }

    if (route === CORPORATE_TRAINING_ROUTE) {
      return <CorporateTrainingPage />
    }

    if (route === LMS_ROUTE) {
      return <LearningManagementSystemPage />
    }

    if (route === CONTACT_US_ROUTE) {
      return <ContactUsPage />
    }

    if (route === ABOUT_US_ROUTE) {
      return <AboutUs />
    }

    if (route === INSIGHTS_ROUTE) {
      return <InsightsPage />
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
