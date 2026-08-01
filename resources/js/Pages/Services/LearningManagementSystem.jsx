import Layout from '../../Layout';
import PageHeader from '../../Components/PageHeader';
import LearningPlatform from '../../Components/LearningPlatform';
import CTABanner from '../../Components/CTABanner';

export default function LearningManagementSystem() {
    return (
        <Layout>
            <PageHeader
                eyebrow="Services"
                title="Learning Management System"
                description="Build ESG capability across your organization with a scalable learning platform and practical, role-based training."
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
            />
            <LearningPlatform />
            <CTABanner />
        </Layout>
    );
}
