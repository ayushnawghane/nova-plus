import Layout from '../../Layout';
import PageHeader from '../../Components/PageHeader';
import ESGConsultancy from '../../Components/ESGConsultancy';
import CarbonAccounting from '../../Components/CarbonAccounting';
import CTABanner from '../../Components/CTABanner';

export default function EsgCarbonMarket() {
    return (
        <Layout>
            <PageHeader
                eyebrow="Services"
                title="ESG Carbon Market"
                description="End-to-end support for carbon accounting, decarbonization strategy, and credible carbon market participation."
                image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop"
            />
            <ESGConsultancy />
            <CarbonAccounting />
            <CTABanner />
        </Layout>
    );
}
