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
