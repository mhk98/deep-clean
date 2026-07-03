import "./globals.css";

export const metadata = {
  title:
    "Cleaning Services Kuwait | Best Cleaning Company Kuwait | Al Nawras Plus",
  description:
    "Al Nawras Plus is a top rated cleaning company in Kuwait offering professional cleaning services, house cleaning, deep cleaning, office cleaning, sofa cleaning, apartment cleaning, carpet cleaning, villa cleaning, and building cleaning in Kuwait City, Farwaniya, Hawalli, Salmiya, Jabriya, Mahboula, Fahaheel, Ahmadi, and Jahra.",
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
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
