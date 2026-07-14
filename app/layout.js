// import "./globals.css";

// const localBusinessSchema = {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   name: "Al Nawras Plus",
//   description:
//     "Professional cleaning company in Kuwait providing house cleaning, office cleaning, sofa cleaning, apartment cleaning, carpet cleaning, deep cleaning, villa cleaning, building cleaning, and janitorial services.",
//   telephone: "+96595511354",
//   email: "alnawraspluskuwait@gmail.com",
//   address: {
//     "@type": "PostalAddress",
//     streetAddress: "Farwaniya block 1 street 74 building 15",
//     addressLocality: "Farwaniya",
//     addressCountry: "KW",
//   },
//   areaServed: [
//     "Al Asimah / Capital Governorate",
//     "Hawalli Governorate",
//     "Farwaniya Governorate",
//     "Ahmadi Governorate",
//     "Jahra Governorate",
//     "Mubarak Al-Kabeer Governorate",
//   ].map((area) => ({
//     "@type": "AdministrativeArea",
//     name: area,
//   })),
//   sameAs: [
//     "https://www.facebook.com/alnawrasplus",
//     "https://www.instagram.com/alnawraspluskuwait",
//     "https://wa.me/96595511354",
//   ],
//   makesOffer: [
//     "House Cleaning Kuwait",
//     "Office Cleaning Kuwait",
//     "Sofa Cleaning Kuwait",
//     "Apartment Cleaning Kuwait",
//     "Carpet Cleaning Kuwait",
//     "Deep Cleaning Kuwait",
//     "Janitorial Services Kuwait",
//   ].map((service) => ({
//     "@type": "Offer",
//     itemOffered: {
//       "@type": "Service",
//       name: service,
//     },
//   })),
// };

// export const metadata = {
//   metadataBase: new URL("https://alnawraspluskuwait.com"),
//   title:
//     "Cleaning Services Kuwait | Cleaning Company Across Kuwait Governorates",
//   description:
//     "Al Nawras Plus is a trusted cleaning company in Kuwait offering house cleaning, deep cleaning, office cleaning, sofa cleaning, apartment cleaning, carpet cleaning, villa cleaning, and building cleaning across Al Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer Governorates.",
//   icons: {
//     icon: "/favicon.svg",
//     shortcut: "/favicon.svg",
//     apple: "/favicon.svg",
//   },
//   alternates: {
//     canonical: "/",
//   },
//   openGraph: {
//     title:
//       "Cleaning Services Kuwait | Al Nawras Plus Cleaning Company",
//     description:
//       "Book professional house, office, sofa, apartment, carpet, deep, villa, and building cleaning services across Kuwait governorates.",
//     url: "/",
//     siteName: "Al Nawras Plus",
//     locale: "en_KW",
//     type: "website",
//   },
//   twitter: {
//     card: "summary",
//     title:
//       "Cleaning Services Kuwait | Al Nawras Plus Cleaning Company",
//     description:
//       "Professional cleaning services across Al Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer.",
//   },
//   keywords: [
//     "Cleaning Services Kuwait",
//     "Cleaning Company Kuwait",
//     "Best Cleaning Company Kuwait",
//     "Professional Cleaning Services Kuwait",
//     "House Cleaning Kuwait",
//     "Deep Cleaning Kuwait",
//     "Office Cleaning Kuwait",
//     "Sofa Cleaning Kuwait",
//     "Apartment Cleaning Kuwait",
//     "Carpet Cleaning Kuwait",
//     "Villa Cleaning Kuwait",
//     "Building Cleaning Kuwait",
//     "Cleaning Services Near Me",
//     "Affordable Cleaning Services Kuwait",
//     "Top Rated Cleaning Company Kuwait",
//     "Cleaning Services Kuwait City",
//     "Cleaning Company Farwaniya",
//     "House Cleaning Hawalli",
//     "Deep Cleaning Salmiya",
//     "Office Cleaning Kuwait City",
//     "Sofa Cleaning Jabriya",
//     "Apartment Cleaning Mahboula",
//     "Carpet Cleaning Fahaheel",
//     "Villa Cleaning Mangaf",
//     "Building Cleaning Ahmadi",
//     "Cleaning Services Jahra",
//     "Cleaning Company Near Me Kuwait",
//     "Same Day Cleaning Service Kuwait",
//     "Cleaning Services Farwaniya",
//     "Cleaning Services Hawalli",
//     "Cleaning Services Salmiya",
//     "Cleaning Services Al Asimah Governorate",
//     "Cleaning Company Capital Governorate",
//     "Cleaning Services Hawalli Governorate",
//     "House Cleaning Farwaniya Governorate",
//     "Office Cleaning Ahmadi Governorate",
//     "Deep Cleaning Jahra Governorate",
//     "Cleaning Services Mubarak Al-Kabeer Governorate",
//   ],
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" dir="ltr">
//       <body>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(localBusinessSchema),
//           }}
//         />
//         {children}
//       </body>
//     </html>
//   );
// }



import "./globals.css";
import Script from "next/script";

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
  metadataBase: new URL("https://alnawrasplus.com"),

  title:
    "Cleaning Services Kuwait | Cleaning Company Across Kuwait Governorates",

  description:
    "Al Nawras Plus is a trusted cleaning company in Kuwait offering house cleaning, deep cleaning, office cleaning, sofa cleaning, apartment cleaning, carpet cleaning, villa cleaning, and building cleaning across Al Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer Governorates.",

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Cleaning Services Kuwait | Al Nawras Plus Cleaning Company",
    description:
      "Book professional house, office, sofa, apartment, carpet, deep, villa, and building cleaning services across Kuwait governorates.",
    url: "https://alnawrasplus.com",
    siteName: "Al Nawras Plus",
    locale: "en_KW",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Cleaning Services Kuwait | Al Nawras Plus Cleaning Company",
    description:
      "Professional cleaning services across Al Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer.",
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D7PV8RK3TK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D7PV8RK3TK');
          `}
        </Script>
      </body>
    </html>
  );
}