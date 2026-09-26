import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { COMPANY_NAME, TAGLINE, CONTACT_INFO, CONTACT_PERSON } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Credtree Financial Services | Loans, Insurance & Wealth Management",
  description:
    "Credtree Financial Services facilitates loans, insurance, investment and wealth management services in Kannur.",
  keywords: [
    "Credtree Financial Services",
    "Loans Kannur",
    "Home Loans Kannur",
    "Business Loans Kerala",
    "Insurance Facilitation",
    "Wealth Management Kannur",
    "Brijesh Gangadharan",
    "Kamath Building SN Park",
  ],
  authors: [{ name: "Credtree Financial Services" }],
  creator: "Credtree Financial Services",
  metadataBase: new URL("https://www.credtree.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Credtree Financial Services | Loans, Insurance & Wealth Management",
    description:
      "Credtree Financial Services facilitates loans, insurance, investment and wealth management services in Kannur.",
    url: "https://www.credtree.in",
    siteName: COMPANY_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credtree Financial Services | Loans, Insurance & Wealth Management",
    description:
      "Credtree Financial Services facilitates loans, insurance, investment and wealth management services in Kannur.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Local Financial Service in Kannur
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: COMPANY_NAME,
    description:
      "Credtree Financial Services facilitates secured and unsecured loans, insurance products, and wealth management services.",
    url: "https://www.credtree.in",
    telephone: `+91${CONTACT_INFO.phone}`,
    email: CONTACT_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address.line1,
      addressLocality: "SN Park, Kannur",
      addressRegion: "Kerala",
      postalCode: "670001",
      addressCountry: "IN",
    },
    employee: {
      "@type": "Person",
      name: CONTACT_PERSON.name,
      jobTitle: CONTACT_PERSON.designation,
    },
    slogan: TAGLINE,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-ivory text-charcoal-900 font-sans antialiased selection:bg-gold-500 selection:text-white">
        {/* Fixed Header on all pages */}
        <Navbar />
        <div className="pt-[72px] sm:pt-[80px]">
          {children}
        </div>
      </body>
    </html>
  );
}
