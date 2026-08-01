import Layout from '../Layout';
import PageHeader from '../Components/PageHeader';
import GetInTouch from '../Components/GetInTouch';

export default function ContactUs() {
    return (
        <Layout>
            <PageHeader
                eyebrow="Contact"
                title="Contact Us"
                description="Tell us your ESG priorities and our team will help you plan the right next steps."
                image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop"
            />
            <GetInTouch />
        </Layout>
    );
}
