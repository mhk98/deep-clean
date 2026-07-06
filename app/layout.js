import "./globals.css";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Al Nawras Plus",
  description:
    "Professional cleaning company in Kuwait providing house cleaning, office cleaning, sofa cleaning, apartment cleaning, carpet cleaning, deep cleaning, villa cleaning, building cleaning, and janitorial services.",
  telephone: "+96595511354",
  email: "alnawraspluskuwait@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Farwaniya block 1 street 74 building 15",
    addressLocality: "Farwaniya",
    addressCountry: "KW",
  },
  areaServed: [
    "Al Asimah / Capital Governorate",
    "Hawalli Governorate",
    "Farwaniya Governorate",
    "Ahmadi Governorate",
    "Jahra Governorate",
    "Mubarak Al-Kabeer Governorate",
  ].map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),
  sameAs: [
    "https://www.facebook.com/alnawrasplus",
    "https://www.instagram.com/alnawraspluskuwait",
    "https://wa.me/96595511354",
  ],
  makesOffer: [
    "House Cleaning Kuwait",
    "Office Cleaning Kuwait",
    "Sofa Cleaning Kuwait",
    "Apartment Cleaning Kuwait",
    "Carpet Cleaning Kuwait",
    "Deep Cleaning Kuwait",
    "Janitorial Services Kuwait",
  ].map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service,
    },
  })),
};

export const metadata = {
  title:
    "Cleaning Services Kuwait | Cleaning Company Across Kuwait Governorates",
  description:
    "Al Nawras Plus is a trusted cleaning company in Kuwait offering house cleaning, deep cleaning, office cleaning, sofa cleaning, apartment cleaning, carpet cleaning, villa cleaning, and building cleaning across Al Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer Governorates.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Cleaning Services Kuwait",
    "Cleaning Company Kuwait",
    "Best Cleaning Company Kuwait",
    "Professional Cleaning Services Kuwait",
    "House Cleaning Kuwait",
    "Deep Cleaning Kuwait",
    "Office Cleaning Kuwait",
    "Sofa Cleaning Kuwait",
    "Apartment Cleaning Kuwait",
    "Carpet Cleaning Kuwait",
    "Villa Cleaning Kuwait",
    "Building Cleaning Kuwait",
    "Cleaning Services Near Me",
    "Affordable Cleaning Services Kuwait",
    "Top Rated Cleaning Company Kuwait",
    "Cleaning Services Kuwait City",
    "Cleaning Company Farwaniya",
    "House Cleaning Hawalli",
    "Deep Cleaning Salmiya",
    "Office Cleaning Kuwait City",
    "Sofa Cleaning Jabriya",
    "Apartment Cleaning Mahboula",
    "Carpet Cleaning Fahaheel",
    "Villa Cleaning Mangaf",
    "Building Cleaning Ahmadi",
    "Cleaning Services Jahra",
    "Cleaning Company Near Me Kuwait",
    "Same Day Cleaning Service Kuwait",
    "Cleaning Services Farwaniya",
    "Cleaning Services Hawalli",
    "Cleaning Services Salmiya",
    "Cleaning Services Al Asimah Governorate",
    "Cleaning Company Capital Governorate",
    "Cleaning Services Hawalli Governorate",
    "House Cleaning Farwaniya Governorate",
    "Office Cleaning Ahmadi Governorate",
    "Deep Cleaning Jahra Governorate",
    "Cleaning Services Mubarak Al-Kabeer Governorate",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
