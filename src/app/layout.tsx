import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NorthScale Group | B2B Growth Agency & Business Growth Consulting Canada",
  description: "Leading Canadian B2B growth agency specializing in revenue optimization, growth marketing, and business scaling strategies. Drive measurable growth with our expert consulting services.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
  },
  keywords: "B2B growth agency, business growth consulting, revenue optimization, growth marketing firm, Canadian B2B consulting, enterprise growth strategies, business scaling, marketing automation, sales enablement",
  authors: [{ name: "NorthScale Group" }],
  creator: "NorthScale Group",
  publisher: "NorthScale Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://northscalegroup.com',
    siteName: 'NorthScale Group',
    title: 'NorthScale Group | B2B Growth Agency & Business Growth Consulting Canada',
    description: 'Leading Canadian B2B growth agency specializing in revenue optimization, growth marketing, and business scaling strategies. Drive measurable growth with our expert consulting services.',
    images: [
      {
        url: '/images/nsg-logo.png',
        width: 1200,
        height: 630,
        alt: 'NorthScale Group - B2B Growth Agency Canada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NorthScale Group | B2B Growth Agency & Business Growth Consulting Canada',
    description: 'Leading Canadian B2B growth agency specializing in revenue optimization, growth marketing, and business scaling strategies.',
    images: ['/images/nsg-logo.png'],
    creator: '@northscalegroup',
  },
  alternates: {
    canonical: 'https://northscalegroup.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NorthScale Group",
              "url": "https://northscalegroup.com",
              "logo": "https://northscalegroup.com/images/nsg-logo.png",
              "description": "Leading Canadian B2B growth agency specializing in revenue optimization, growth marketing, and business scaling strategies.",
              "foundingDate": "2021",
              "foundingLocation": {
                "@type": "Place",
                "addressCountry": "CA"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA",
                "addressRegion": "Canada"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["English", "French"]
              },
              "sameAs": [
                "https://twitter.com/northscalegroup",
                "https://linkedin.com/company/northscalegroup",
                "https://instagram.com/northscalegroup"
              ],
              "serviceArea": {
                "@type": "Place",
                "name": "North America"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "B2B Growth Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Strategic Growth Consulting",
                      "description": "Enabling sustainable revenue growth through end-to-end solutions and comprehensive infrastructure-driven insights."
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Performance Marketing",
                      "description": "Structuring coordinated campaigns across digital and social to maximize engagement and conversion efficiency."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Operational Excellence Optimization",
                      "description": "Accelerating back-end operations, service delivery and efficiency by refining processes and scaling organisational capabilities."
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
