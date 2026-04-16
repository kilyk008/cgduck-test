
# Blueprint: 철거덕 (Cheolgeo-duck) - Demolition Brokerage Platform

## Overview

"철거덕" is a web-based platform designed to connect clients who need commercial/office space demolition and restoration services with professional demolition companies. The platform aims to simplify the process of finding reliable contractors and getting competitive quotes, reducing the hassle for business owners.

## Implemented Design, Styles, and Features

### V1 (Initial Implementation)

#### **1. Branding & Identity:**
- **Logo:** A simple yet professional text-based logo "철거덕" is placed in the top-left corner.
- **Color Palette:**
    - Primary Text: White (`#FFFFFF`) for high contrast on the main image.
    - Brand Color: A distinct Blue (`#007BFF`) used for the brand name "철거덕" to make it stand out.
    - Background: A dark, professional, and modern aesthetic.
- **Typography:**
    - A clean, sans-serif font (like 'Noto Sans KR') is used for readability.
    - Hero Text: Large, bold font size to immediately grab the user's attention.
    - Body Text: Standard size for easy reading.

#### **2. Layout & Structure:**
- **Single-Page Application (SPA):** The entire user experience is contained within a single scrolling page for simplicity and speed.
- **Header:** A fixed header containing the logo and primary navigation links.
    - **Navigation:** "폐업지원금 계산기", "진행절차", "고객후기", "희망리턴패키지", "견적문의".
- **Hero Section:** The first view the user sees.
    - **Background:** A high-quality, professional image showing a team in a commercial space, discussing plans over a table with blueprints. This evokes a sense of expertise and seriousness.
    - **Overlay Text:**
        - Catchy tagline: "한 번 맡기면 걱정 끝. 철거덕에서 절거 비교 견적을 받아 보세요."
        - Main Title: "가장 쉽고 빠른 철거, **철거덕**" (The word "철거덕" is highlighted in blue).
    - **Call-to-Action (CTA) Buttons:**
        - "간편문의" (Simple Inquiry)
        - "지금 바로 무료 견적 받기" (Get a Free Quote Now)
- **Content Sections:**
    - Dedicated sections for "진행절차" (Procedure), "고객후기" (Customer Reviews), and "희망리턴패키지" (Hope Return Package). These are initially placeholders.
- **Footer:** (To be designed)

#### **3. Interactivity & Features (Implemented with Web Components):**
- **Smooth Scrolling:** Clicking navigation links ("진행절차", "고객후기", "희망리턴패키지") smoothly scrolls the page to the corresponding section.
- **Modal Windows (Pop-ups):**
    - **Simple Inquiry Modal (`<simple-inquiry-modal>`):**
        - Triggered by the "간편문의" button.
        - A lightweight pop-up for quick questions.
        - Fields: 이름 (Name), 전화번호 (Phone Number), 문의 내용 (Inquiry), 지역 (Region).
        - Encapsulated using a Web Component for modularity.
    - **Full Quote Request Modal (`<quote-request-modal>`):**
        - Triggered by both the "견적문의" navigation button and the "지금 바로 무료 견적 받기" hero button.
        - A more detailed form for formal quotations.
        - Fields: 이름 (Name), 연락처 (Contact), 건물 유형 (Building Type), 상세주소 (Address), 평수 (Area), 층수 (Floor), 엘리베이터 (Elevator Y/N), 현장사진/견적 업로드 (Photo/Quote Upload), 공사 예정일 (Date), 요청사항 (Requests).
        - Also implemented as a self-contained Web Component.

## Current Plan: Initial Build

1.  **`index.html`:**
    -   Set up the main HTML structure with the header, hero section, and placeholder content sections.
    -   Include `<script>` and `<link>` tags for `main.js` and `style.css`.
    -   Place the custom element tags (`<simple-inquiry-modal>`, `<quote-request-modal>`) in the body.
2.  **`style.css`:**
    -   Implement the full design as described above.
    -   Style the header, hero, text, buttons, and content sections.
    -   Design the modals to be visually appealing and user-friendly, with a backdrop overlay.
    -   Ensure the layout is responsive and mobile-friendly using modern CSS like Flexbox or Grid.
3.  **`main.js`:**
    -   Define the `SimpleInquiryModal` and `QuoteRequestModal` custom element classes.
    -   Each class will manage its own shadow DOM for encapsulated styles and HTML.
    -   Implement the logic to show/hide the modals.
    -   Add event listeners for the navigation links to implement smooth scrolling.
    -   Add event listeners for the CTA buttons to open the respective modals.

