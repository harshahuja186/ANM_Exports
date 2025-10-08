import React from "react";
import AppWrapper from "./AppWrapper";
import logo from "../../public/logo.png";

export const metadata = {
  title: "ANM Exports | Handcrafted Lighting | Luxury Lampshades & Chandeliers",
  description:
    "ANM Exports - Founded in 2017, creating luxurious handcrafted lampshades, exquisite chandeliers, and innovative Beith foldable chandeliers. Illuminating Elegance, Globally with sustainable jute, linen & cotton lighting.",
  keywords:
    "handcrafted lighting, luxury lampshades, chandeliers, Beith chandeliers, jute lighting, linen lampshades, cotton lighting, Indian artisan lighting, custom lighting solutions, sustainable lighting, ANM Exports",
  authors: [{ name: "ANM Exports" }],
  creator: "ANM Exports",
  publisher: "ANM Exports",

  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.anmexports.com",
    title: "ANM Exports | Handcrafted Lighting Solutions",
    description:
      "Discover luxurious handcrafted lampshades, exquisite chandeliers, and innovative Beith foldable chandeliers. Artisan-made lighting from India for global elegance.",
    siteName: "ANM Exports",
    images: [
      {
        url: "/logo.png", // Add your image to public folder
        width: 1200,
        height: 630,
        alt: "ANM Exports - Handcrafted Luxury Lighting",
      },
    ],
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "ANM Exports | Handcrafted Lighting Solutions",
    description:
      "Luxurious handcrafted lampshades, chandeliers, and innovative Beith foldable lighting. Illuminating Elegance, Globally.",
    images: ["/logo.png"], // Add your image to public folder
    creator: "@anmexports", // Add your Twitter handle
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your verification codes)
  verification: {
    google: "your-google-verification-code",
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  alternates: {
    canonical: "https://www.anmexports.com",
  },

  // Category
  category: "Home Decor & Lighting",
};

// JSON-LD Schema for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.anmexports.com/#organization",
      name: "ANM Exports",
      url: "https://www.anmexports.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.anmexports.com/logo.png",
      },
      description:
        "Handcrafted lighting manufacturer specializing in luxury lampshades, chandeliers, and innovative Beith foldable chandeliers since 2017.",
      foundingDate: "2017",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8130065487",
        contactType: "Sales",
        email: "info@anmexports.com",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: ["https://www.instagram.com/anm_exports"],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "India",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.anmexports.com/#website",
      url: "https://www.anmexports.com",
      name: "ANM Exports",
      description: "Handcrafted Lighting Solutions",
      publisher: {
        "@id": "https://www.anmexports.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.anmexports.com/#webpage",
      url: "https://www.anmexports.com",
      name: "ANM Exports | Handcrafted Lighting",
      isPartOf: {
        "@id": "https://www.anmexports.com/#website",
      },
      about: {
        "@id": "https://www.anmexports.com/#organization",
      },
      description:
        "Discover luxurious handcrafted lampshades, exquisite chandeliers, and innovative Beith foldable chandeliers from ANM Exports.",
    },
    {
      "@type": "Product",
      name: "Handcrafted Lampshades",
      description:
        "Luxurious handcrafted lampshades made from natural materials like jute, linen, and cotton.",
      brand: {
        "@type": "Brand",
        name: "ANM Exports",
      },
      manufacturer: {
        "@id": "https://www.anmexports.com/#organization",
      },
      material: ["Jute", "Linen", "Cotton"],
      category: "Lighting & Home Decor",
    },
    {
      "@type": "Product",
      name: "Beith Foldable Chandeliers",
      description:
        "Innovative foldable chandeliers combining modern design with traditional craftsmanship.",
      brand: {
        "@type": "Brand",
        name: "ANM Exports",
      },
      manufacturer: {
        "@id": "https://www.anmexports.com/#organization",
      },
      material: ["Jute", "Linen", "Cotton"],
      category: "Lighting & Home Decor",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.anmexports.com/#localbusiness",
      name: "ANM Exports",
      image: "https://www.anmexports.com/og-image.jpg",
      priceRange: "$$",
      telephone: "+91-8130065487",
      email: "info@anmexports.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.4595,
        longitude: 77.0266,
      },
      url: "https://www.anmexports.com",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    },
  ],
};

const page = () => {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <AppWrapper />
      </div>
    </>
  );
};

export default page;
