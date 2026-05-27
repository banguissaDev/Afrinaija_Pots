import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL('https://afrinaijapots.com'),
  title: "Afrinaija Pots — Best Nigerian Restaurant in Kigali | Jollof, Egusi, Pepper Soup",
  description:
    "Discover Kigali's #1 Nigerian restaurant. Authentic Jollof Rice, Egusi Soup, Pepper Soup & 25+ West African dishes by native Nigerian chefs. Dine-in at Kacyiru, order via WhatsApp. ☎ +250 782 647 630",
  keywords:
    "Nigerian restaurant Kigali, West African food Kigali, Nigerian food Rwanda, Best African restaurant Kigali, Jollof rice Kigali, Pepper soup Kigali, Authentic Nigerian cuisine Kigali, African restaurant near Kacyiru",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Afrinaija Pots Restaurant | Authentic Nigerian Cuisine in Kigali",
    description:
      "Experience authentic Nigerian and West African cuisine in Kigali, Rwanda. Premium hospitality, generous portions, and unforgettable flavors.",
    type: "website",
    locale: "en_US",
    siteName: "Afrinaija Pots Restaurant",
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Afrinaija Pots Restaurant | Authentic Nigerian Cuisine in Kigali",
    description:
      "Experience authentic Nigerian and West African cuisine in Kigali, Rwanda. Premium hospitality, generous portions, and unforgettable flavors.",
    images: ['/images/hero-bg.jpg'],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Afrinaija Pots Restaurant",
    description:
      "Authentic Nigerian and West African cuisine in Kacyiru, Kigali. Premium hospitality, traditional recipes by native Nigerian chefs.",
    telephone: "+250782647630",
    url: "https://afrinaijapots.com",
    image: "https://afrinaijapots.com/images/hero-bg.jpg",
    hasMenu: "https://afrinaijapots.com/#menu",
    acceptsReservations: true,
    paymentAccepted: "Cash, Card, Mobile Money",
    currenciesAccepted: "RWF",
    areaServed: {
      "@type": "City",
      name: "Kigali",
    },
    sameAs: [
      "https://www.instagram.com/afrinaijapots",
      "https://www.facebook.com/afrinaijapots"
    ],
    servesCuisine: ["Nigerian", "West African", "African"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "40 KG 674 St",
      addressLocality: "Kacyiru, Kigali",
      addressCountry: "RW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-1.9392",
      longitude: "30.0835",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "900",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "23:00",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Afrinaija Pots located in Kigali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are located at 40 KG 674 St, Kacyiru, Kigali, Rwanda. Our restaurant features secure parking and a warm, elegant dining atmosphere."
        }
      },
      {
        "@type": "Question",
        "name": "What type of food does Afrinaija Pots serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve authentic Nigerian and West African cuisine. Our menu includes classics like signature smoky Jollof Rice, traditional Egusi soup, fiery Pepper Soup, and a variety of carefully prepared protein options."
        }
      },
      {
        "@type": "Question",
        "name": "Does Afrinaija Pots deliver food in Kigali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer fast and reliable delivery anywhere in Kigali. You can easily place your order by messaging us directly on WhatsApp at +250 782 647 630."
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
