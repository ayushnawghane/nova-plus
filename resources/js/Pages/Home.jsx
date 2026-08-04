import Layout from '../Layout';
import Hero from '../Components/Hero';
import IndustrialEcosystems from '../Components/IndustrialEcosystems';
import PartnerWithUs from '../Components/PartnerWithUs';
import ESGConsultingServices from '../Components/ESGConsultingServices';
import HowWeWork from '../Components/HowWeWork';
import ESGCapabilityBuilding from '../Components/ESGCapabilityBuilding';
import ClimateReportingTimeline from '../Components/ClimateReportingTimeline';
import GlobalRegulations from '../Components/GlobalRegulations';
import ESGPriorities from '../Components/ESGPriorities';
import FAQ from '../Components/FAQ';
import GetInTouch from '../Components/GetInTouch';
import CTABanner from '../Components/CTABanner';

export default function Home({ faqs = [] }) {
    return (
        <Layout>
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
            <FAQ faqs={faqs} />
            {/* <AboutUs /> */}
            <GetInTouch />
            <CTABanner />
        </Layout>
    );
}
