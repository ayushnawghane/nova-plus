# Nova Plus ESG Platform Modernization — Changelog & Billing Log

This log lists all new components, layouts, and system refactorings implemented for the Nova Plus ESG Landing Page modernization project.

---

## 📁 1. New Components Created (Untracked Files)

### 1. `src/components/ClimateReportingTimeline.jsx` (New Page Component)
*   **Purpose**: Singapore Climate Reporting Roadmap (Section 7).
*   **Features**:
    *   Responsive horizontal timeline scroll for desktop with custom navigation sliders.
    *   Vertical chronological list for mobile screen sizes.
    *   Dynamic nodes tracking ACRA & SGX compliance mandates (FY2025 ISSB alignment, FY2026 Scope 3 phase-in, FY2027-2030 SME scope-in).
    *   Singapore skyline watermark backdrop and active external resource links.

### 2. `src/components/FAQ.jsx` (New Page Component)
*   **Purpose**: Interactive accordion Q&A section answering client compliance queries.
*   **Features**:
    *   Grid-based layout with a sticky left sidebar card routing users to the contact page.
    *   4 professional sustainability consultancy FAQ questions.
    *   Smooth CSS accordion max-height transitions, custom chevron rotations, and selective highlighted active borders (`#73aa3c`).

### 3. `src/components/ESGPriorities.jsx` (New Page Component)
*   **Purpose**: Highlight critical 2026 ESG priorities (based on the user-provided design mockup).
*   **Features**:
    *   Clean-cut standalone section with a faint engineering background dot grid.
    *   Visual cards containing 6 compliance priority checklist pills.
    *   Interactive pill hover states (micro-translation lifts and green border transitions).

### 4. `src/components/IndustrialEcosystems.jsx` (New Section Component)
*   **Purpose**: Industrial Sector Matrix Section.
*   **Features**: Beautiful grid displaying relevant industrial sectors serviced.

### 5. `src/components/PartnerWithUs.jsx` (New Section Component)
*   **Purpose**: Collaboration and client partnership benefits panel.

### 6. `src/components/ESGConsultingServices.jsx` (New Section Component)
*   **Purpose**: Core ESG service catalog.

### 7. `src/components/ESGCapabilityBuilding.jsx` (New Section Component)
*   **Purpose**: ESG Training & LMS capability building packages.

### 8. `src/components/PartnerWithUs.jsx` (New Section Component)
*   **Purpose**: Partner value proposition pillars.

---

## 🛠️ 2. Core Components Modified (Staged / Modified Files)

### 1. `src/App.jsx`
*   **Changes**:
    *   Registered all newly developed sections (`ClimateReportingTimeline`, `ESGPriorities`, `FAQ`, `IndustrialEcosystems`, `PartnerWithUs`, `ESGConsultingServices`, `ESGCapabilityBuilding`).
    *   Organized the custom homepage order:
        ```jsx
        <Hero />
        <IndustrialEcosystems />
        <PartnerWithUs />
        <ESGConsultingServices />
        <HowWeWork />
        <ESGCapabilityBuilding />
        <ClimateReportingTimeline />
        <GlobalRegulations />
        <ESGPriorities />
        <FAQ />
        <GetInTouch />
        <CTABanner />
        ```

### 2. `src/components/CTABanner.jsx`
*   **Changes**:
    *   Updated header copy to **"Let’s Discuss Your ESG Priorities"**.
    *   Replaced text copy with the customized description: *"Every organisation has unique ESG challenges. Let's explore your priorities and identify the right approach..."*
    *   Updated primary action button to **"Book an ESG Consultation"**.
    *   Integrated direct contact options (Phone: `+65 9088 2853` & Email: `sales@novaplus.sg`) with green SVG icon badges inside a new layout row.
    *   Added a cinematic clean-energy wind turbine background image overlay set to `opacity-25` with `mix-blend-overlay` for enhanced visual styling.

### 3. `src/components/GetInTouch.jsx`
*   **Changes**:
    *   Updated Singapore Office Address globally to the exact card format: `25 International Business Park, German Centre, Singapore 609916` (removing obsolete unit numbers).
    *   Updated contact form Inquiry Type dropdown options to include specialized service listings:
        *   `ESG & Sustainability Reporting`
        *   `GHG Accounting & Carbon Footprinting`
        *   `ESG Data Management & Dashboard Development`
        *   `Supplier ESG Assessment`
        *   `ESG Policy Development`
        *   `EcoVadis & Sustainability Ratings Support`
        *   `ESG Consulting & Implementation`
        *   `ESG Strategy & Roadmap Development`
        *   `ESG Training & Capacity Building`
        *   `Other / General Inquiry`

### 4. `src/components/Footer.jsx`
*   **Changes**:
    *   Updated the corporate details section and address layouts to match the new German Centre location values without legacy unit numbers.

### 5. `src/components/GlobalRegulations.jsx`
*   **Changes**:
    *   Updated header to: *"Why ESG Matter for Businesses in 2026?"*
    *   Updated copy outlining the regulatory shift in Singapore, the UAE, and Southeast Asia.
    *   Cleaned up and isolated local panels from temporary widgets to maintain design focus.

### 6. `src/components/Hero.jsx`
*   **Changes**:
    *   Aligned core taglines and hero parameters with the revised landing design.

### 7. `src/components/HowWeWork.jsx`
*   **Changes**:
    *   Refined step-by-step industrial project journey timeline layouts.

### 8. `src/index.css` & `src/App.css`
*   **Changes**:
    *   Added global typography variables, animation keyframes (`reveal-in`), gradient mesh background settings, and interactive button variables.

### 9. `src/components/AboutUs.jsx` (Modified & Completed)
*   **Changes**:
    *   Re-implemented the About Us page component as a full-fledged standalone page rather than a collapsed home section.
    *   Created a premium dark-blue hero header introducing the core narrative: *Bridging Sustainability Ambitions with Practical Business Outcomes*.
    *   Constructed a 3-pillar card grid for *Our Purpose*, *Our Aspiration*, and *Our Perspective* using contrasting brand color cards, hover lift translation effects, and custom FontAwesome badges.
    *   Designed a regional network map dashboard block illustrating corporate presence across Singapore, UAE, and Southeast Asia with blinking SVG ping circles and connection lines.
    *   Made the regional dashboard fully interactive with state-driven selectors allowing visitors to click geographical hubs to inspect location focus details.
    *   Arranged a 4-member profile card grid displaying individual governance details and email/LinkedIn contacts for the leadership team (Nerella Pratap, Pratiksha More, Tanvi Jula, Aayush Anand) using customized initial-gradient avatars.
    *   Built an interactive "Let's Discuss Your ESG Priorities" footer CTA banner with direct action triggers.

### 10. `src/components/Navbar.jsx`
*   **Changes**:
    *   Updated header navigation link 'Company' to 'About Us' pointing to the routing hash `#/about-us`.

### 11. `src/components/Footer.jsx`
*   **Changes**:
    *   Mapped Company links ('Why Nova Plus', 'About Us', 'Contact Us') and Services links to their respective hash routes instead of empty placeholder links.

### 12. `src/App.jsx`
*   **Changes**:
    *   Declared route constants: `ABOUT_US_ROUTE = '#/about-us'`, `ESG_CONSULTING_ROUTE = '#/services'`, `CORPORATE_TRAINING_ROUTE = '#/services/corporate-training'`, and `INSIGHTS_ROUTE = '#/insights'`.
    *   Added hash matches in `renderPage()` to display `<AboutUs />`, `<ServicesPage />`, `<CorporateTrainingPage />`, and `<InsightsPage />` under their respective routes.
    *   Mounted `<CTABanner />` at the bottom of the legacy pages (`ESGCarbonMarketPage` and `LearningManagementSystemPage`) for design consistency.

### 13. `src/components/ServicesPage.jsx` (New Page Component)
*   **Purpose**: Standardized, visual list of the six core ESG consulting services.
*   **Features**:
    *   Dark-blue hero intro banner outlining the core value proposition.
    *   Detailed section containing 6 service listing panels with a visual left-side image and right-side copy layout.
    *   Left side showcases curated imagery (Unsplash references) inside dynamic rounded frames with shadow lifts and color accents.
    *   Right side lists the name, summary, and a detailed checkmark box outlining *What We Can Do* under that service.
    *   Integrates the reusable `CTABanner` component at the bottom to schedule consultations and download the solutions brochure.

### 14. `src/components/CorporateTrainingPage.jsx` (New Page Component)
*   **Purpose**: Standalone corporate training curriculum mapping Canva slides 11 to 14.
*   **Features**:
    *   "Capability Building" hero header with green accent indicator.
    *   "Our Training Approach" block detailing Practical, Tailored & Flexible, Expert-Led, and Outcome-Focused values with custom icon badges.
    *   3-tier program curriculum detail: ESG Foundation (Beginner), Decarbonisation & ESG Reporting (Intermediate), and ESG Leadership (Advanced).
    *   Split-screen layouts where left columns house curated program photographs and right columns present details (level indicator pills, summaries, targeted participant groups, and detailed checklist topic blocks).
    *   Integrates the reusable `CTABanner` component at the bottom to let visitors discuss training requirements.

### 15. `src/components/InsightsPage.jsx` (New Page Component)
*   **Purpose**: Standalone dashboard rendering articles, updates, and research briefings.
*   **Features**:
    *   "ESG Insights, Regulatory Updates & Practical Guidance" hero header summarizing regional updates.
    *   Grid displaying four premium cards with tags, publication dates, read times, cover images, summaries, and hover-triggered details.
    *   Newsletter subscription footer form with input validation.

### 16. `src/components/Navbar.jsx` (Additional Updates)
*   **Changes**:
    *   Removed the services dropdown and unused React hooks state.
    *   Reordered the header links as flat top-level tabs in the requested sequence:
        1. Home (`#/`)
        2. About Us (`#/about-us`)
        3. Services (`#/services`)
        4. ESG Corporate Training (`#/services/corporate-training`)
        5. ESG Insights (`#/insights`)

### 17. `src/components/Footer.jsx` (Additional Updates)
*   **Changes**:
    *   Removed the Learning Management System / LMS links from the services array.
    *   Replaced the placeholder Products link with a direct link to the new ESG Insights page (`#/insights`).

### 18. `src/components/CTABanner.jsx` (New Reusable Component)
*   **Purpose**: Highly premium, modern, minimalist action banner replacing page-level custom CTAs.
*   **Features**:
    *   Accepts customizable props for `title`, `description`, `theme`, `primaryText`, `primaryHref`, `secondaryText`, `secondaryHref`, `onSecondaryClick`, and `showContact`.
    *   Minimalist grid layout: Configured content area to `lg:col-span-7` and action buttons area to `lg:col-span-5` (widening button boundaries on large displays).
    *   Responsive alignment: Replaced strict overflow containers with `flex-wrap` and horizontal alignment to ensure buttons stack cleanly and wrap gracefully on medium-to-large displays, preventing any potential text overlap.
    *   Minimalist styling: Renders a soft neutral background (`#f8fafc`) with subtle blur glow gradients on left/right corners, thin light borders, and crisp alignments that flow editorial-style.

### 19. `src/components/PageHeader.jsx` (New Reusable Component)
*   **Purpose**: Highly premium, responsive hero banner replacing page-level local hero sections.
*   **Features**:
    *   Accepts customizable props for `eyebrow`, `title`, `description`, and `image`.
    *   Background utilizes dark-blue color tokens, animated mesh spotlights (`#73aa3c` green blur), and a tech-styled radial grid pattern overlay.
    *   Visual anchoring with an interactive offset border image frame that scales and shifts on container hover.
    *   Integrated into `AboutUs.jsx`, `ServicesPage.jsx`, `CorporateTrainingPage.jsx`, `InsightsPage.jsx`, and global layout files (Contact Us, Carbon Market, LMS) inside `App.jsx`, removing legacy `PageIntro` logic.

### 20. `src/components/Navbar.jsx` (Mobile Responsiveness Overhaul)
*   **Changes**:
    *   Replaced the static mobile hamburger button with a state-driven dynamic toggle.
    *   Designed and integrated a premium, full-screen glassmorphic mobile navigation drawer with absolute background glows and slide-in transition animations.
    *   Embedded navigation routes (`Home`, `About Us`, `Services`, `ESG Corporate Training`, `ESG Insights`, and `Contact Us`) with auto-closing handlers to provide smooth UX.
    *   Added custom `overflow-y-auto` behavior to support constrained height mobile displays, ensuring no action coordinates or links get clipped.

