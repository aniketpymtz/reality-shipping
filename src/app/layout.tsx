import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://www.realityshipping.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Reality Shipping & Logistics | Port Agency & Ship Agency Services",
  description:
    "Port agency, vessel husbandry, liner agency and integrated logistics across India, the Middle East and Southeast Asia. 24/7 operations with a single point of contact at every port call.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Reality Shipping & Logistics",
    title: "Reality Shipping & Logistics | Port Agency & Ship Agency Services",
    description:
      "Port agency, vessel husbandry, liner agency and integrated logistics across India, the Middle East and Southeast Asia — 24/7 operations.",
    images: [{ url: "/assets/ship-1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reality Shipping & Logistics | Port Agency & Ship Agency Services",
    description:
      "Port agency, vessel husbandry, liner agency and integrated logistics — 24/7 operations across India, the Middle East and Southeast Asia.",
    images: ["/assets/ship-1.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reality Shipping & Logistics",
  url: SITE_URL,
  logo: `${SITE_URL}/rslsLogo.png`,
  email: "info@realityshipping.com",
  telephone: "+65 9772 7802",
  address: {
    "@type": "PostalAddress",
    streetAddress: "246 Macpherson Road #03-01 Betime Building",
    addressLocality: "Singapore",
    postalCode: "348578",
    addressCountry: "SG",
  },
  areaServed: ["IN", "SG", "AE", "ID", "SA", "US"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
