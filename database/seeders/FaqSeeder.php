<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (Faq::count() > 0) {
            return;
        }

        $items = [
            [
                'question' => 'What exactly is ESG consulting, and why does my company need it?',
                'answer' => 'ESG consulting helps businesses understand, manage, and improve their environmental, social, and governance practices. Today, ESG is increasingly influencing customer requirements, supply chain partnerships, financing opportunities, and regulatory expectations. A practical ESG approach helps organizations identify priorities, manage risks, strengthen stakeholder trust, and build long-term business resilience.',
            ],
            [
                'question' => 'Is ESG only for large listed companies?',
                'answer' => 'No. While ESG reporting requirements often start with larger organizations, ESG expectations increasingly extend across supply chains. Many SMEs, contractors, manufacturers, engineering firms, and suppliers are now being asked by customers, procurement teams, investors, and business partners to provide ESG-related information. Starting early helps businesses stay competitive and prepared for evolving expectations.',
            ],
            [
                'question' => 'How can ESG create business value?',
                'answer' => 'ESG is no longer just about reporting. Effective ESG practices can strengthen customer trust, improve procurement competitiveness, support financing opportunities, enhance operational efficiency, reduce business risks, and help organizations build long-term resilience. Increasingly, ESG is becoming a business requirement that influences supplier selection, customer relationships, and market opportunities.',
            ],
            [
                'question' => 'Is ESG a one-time project or an ongoing business process?',
                'answer' => 'ESG is an ongoing business process rather than a one-time exercise. As regulations, reporting standards, customer expectations, and supply chain requirements continue to evolve, organizations are expected to continuously monitor, improve, and communicate their ESG performance. Businesses that embed ESG into their operations are better positioned to adapt to change and create long-term value.',
            ],
        ];

        foreach ($items as $index => $item) {
            Faq::create([
                ...$item,
                'sort_order' => $index,
                'is_active' => true,
            ]);
        }
    }
}
