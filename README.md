# CREDTREE FINANCIAL SERVICES - Official Website

> **"Where Credit Meets Growth & Security"**  
> *Simplifying Loans, Insurance & Investments*

A production-quality, premium financial-services web application crafted for **Credtree Financial Services**, based in Kannur, Kerala.

---

## 🏛️ Brand & Visual Identity

The visual language reproduces the core business card and branding identity:
- **Primary Forest Green:** `#003F2D`
- **Secondary Green:** `#075B42`
- **Dark Green:** `#002D22`
- **Metallic Gold Palette:** `#C88A00`, `#B87900`, `#D9A62A`, `#F2C14E`
- **Warm Ivory / Off-White:** `#FBF7F0`, `#FFFDF9`
- **Dark Text:** `#17201C`
- **Typography:** *Playfair Display* (Editorial Serif for Headings) & *Manrope* (Contemporary Sans for Body)
- **Symbolism:** Circular gold border, tree of growth, two-tone emerald & gold canopy, rising financial bar chart, upward dynamic gold growth arrow, and gold diamond separators.

---

## 📞 Official Contact Information

- **Contact Person:** Brijesh Gangadharan
- **Designation:** Business Associate
- **Official Phone:** 9778484739 (`+91 97784 84739`)
- **Official WhatsApp:** 9778484739 (`https://wa.me/919778484739`)
- **Official Email:** info@credtree.in
- **Official Website:** www.credtree.in (`https://www.credtree.in`)
- **Office Address:** Ground Floor, Kamath Building, SN Park, Kannur - 1, Kerala

*(Note: Old contact details 9778288100 and brijesh@credtree.in have been strictly excluded across the entire codebase).*

---

## 💼 Core Business & Services

Founded on the official business objective:
> *"To facilitate secured and unsecured loans including home loans, personal loans, car loans, loans against property and business loans, and to distribute financial products such as credit cards, all class of insurance products, investment and wealth management services."*

### Primary Highlighted Services
1. **HOME LOAN:** Financial assistance for your home ownership journey.
2. **BUSINESS LOAN:** Financial solutions designed to support business needs and growth.
3. **INSURANCE:** Insurance solutions designed to help protect what matters.
4. **WEALTH MANAGEMENT:** Investment and wealth management services focused on long-term financial planning.

### Broader Solutions Portfolio
- Home Loans
- Personal Loans
- Car Loans
- Loans Against Property
- Business Loans
- Credit Cards
- Insurance Products
- Investment Services
- Wealth Management

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Color Tokens, Gradients, and Elevation Shadows)
- **Icons:** Lucide React
- **Typography:** Next.js Font Optimization (`next/font/google`)
- **SEO & Schema:** Semantic HTML5, Metadata API, Open Graph, and JSON-LD LocalBusiness/FinancialService schema
- **Interactive Preview:** `preview.html` included for zero-dependency instant browser viewing.

---

## 📂 Project Structure

```text
creditry/
├── app/
│   ├── globals.css          # Tailwind base, keyframe animations, prefers-reduced-motion
│   ├── icon.svg             # Vector favicon with brand emblem
│   ├── layout.tsx           # RootLayout with fonts, OpenGraph, JSON-LD schema
│   ├── page.tsx             # Assembly of all 10 sections in order
│   └── sitemap.ts           # Dynamic XML sitemap generator
├── components/
│   ├── About.tsx            # Factual business objective narrative & Kannur office card
│   ├── BrandStatement.tsx   # Premium dark green brand statement section
│   ├── Contact.tsx          # Direct associate details & office location
│   ├── ContactForm.tsx      # Interactive validated enquiry form with WhatsApp forward
│   ├── FloatingContact.tsx  # Floating quick-action WhatsApp & Phone widget
│   ├── Footer.tsx           # Deep forest green footer with mandatory disclaimer
│   ├── GoldDivider.tsx      # Gold line & diamond separator component
│   ├── Hero.tsx             # Hero section with dual CTAs and associate badge
│   ├── HeroVisual.tsx       # Animated vector composition (tree + bars + gold arrow)
│   ├── HowWeHelp.tsx        # 4-stage process (Understand, Explore, Facilitate, Grow)
│   ├── Logo.tsx             # Pixel-perfect SVG logo with typography & variants
│   ├── Navbar.tsx           # Sticky responsive header with mobile drawer
│   ├── SectionHeading.tsx   # Reusable serif heading with gold diamond eyebrow
│   ├── Services.tsx         # 4 primary service cards with hover gold line reveals
│   ├── FinancialSolutions.tsx # 9 broader financial solutions grid
│   └── WhyCredtree.tsx      # 4 factual positioning blocks with zero unsupported claims
├── lib/
│   └── constants.ts         # Centralized verified company data & contact constants
├── public/
│   └── robots.txt           # Search crawler directive
├── preview.html             # Standalone instant browser preview
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## 🚀 Running Locally

### Option A: Next.js Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option B: Production Build
```bash
npm run build
npm run start
```

### Option C: Instant In-Browser Preview
Double click `preview.html` in the root folder or open it directly in Google Chrome / Microsoft Edge.
