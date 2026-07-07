"use client";
import { useState } from "react";
import Link from "next/link";
import TranslateWidget from "../TranslateWidget";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { servicePages } from "./servicePages";

const serviceLandingLinks = {
  "house-cleaning": "/services/house-cleaning-kuwait",
  "apartment-cleaning": "/services/apartment-cleaning-kuwait",
  "floor-cleaning": "/services/floor-cleaning-kuwait",
  "sofa-cleaning": "/services/sofa-cleaning-kuwait",
  "office-cleaning": "/services/office-cleaning-kuwait",
  "carpet-cleaning": "/services/carpet-cleaning-kuwait",
  "window-cleaning": "/services/window-cleaning-kuwait",
  "kitchen-cleaning": "/services/kitchen-cleaning-kuwait",
  "bathroom-cleaning": "/services/bathroom-cleaning-kuwait",
  "deep-cleaning": "/services/deep-cleaning-kuwait",
  "move-in-move-out-cleaning": "/services/move-in-move-out-cleaning-kuwait",
  "janitorial-service": "/services/janitorial-services-kuwait",
  "chandelier-cleaning": "/services/chandelier-cleaning-kuwait",
  "mattress-cleaning": "/services/mattress-cleaning-kuwait",
};

const services = [
  {
    id: "house-cleaning",
    title: "House Cleaning",
    description:
      "Get a clean and refreshed home with our professional house cleaning in Kuwait. We serve family homes and villas in Farwaniya, Hawalli, Al Asimah, Ahmadi, Jahra, and Mubarak Al-Kabeer with detailed dusting, mopping, and sanitizing.",
    priceNote:
      "Prices depend on the size of the house, the number of rooms, and the condition of the furniture.",
    offers: [
      "Dusting all surfaces and furniture",
      "Sweeping and mopping floors",
      "Cleaning bedrooms, living rooms, and common areas",
      "Basic cleaning of kitchens and bathrooms",
      "Waste collection and disposal",
      "Sanitizing high-traffic areas",
    ],
    howWeWork:
      "Book the service via the website or WhatsApp. Our team will arrive on time with all the necessary equipment for a thorough cleaning and final quality check.",
    specialOffer: "Same day service available within Kuwait",
    priceName: "House Cleaning",
    priceRange: "150KD–500KD",
    packageNote: "Packages available for weekly and monthly cleaning",
  },
  {
    id: "apartment-cleaning",
    title: "Apartment Cleaning",
    description:
      "Professional apartment cleaning tailored to your layout and needs. From studio flats to family apartments in Farwaniya, Hawalli, Salmiya, Kuwait City, and Mubarak Al-Kabeer, we make every room spotless and fresh.",
    priceNote:
      "Prices depend on the size of the apartment and the number of rooms.",
    offers: [
      "Full dusting and surface wiping",
      "Floor sweeping, mopping, and vacuuming",
      "Kitchen and bathroom sanitation",
      "Bedroom and living area cleaning",
      "Waste removal and disposal",
      "Window sill and door frame cleaning",
    ],
    howWeWork:
      "Book online or via WhatsApp. Our team arrives equipped with all tools and eco-friendly products for a thorough clean.",
    specialOffer: "Same day service available within Kuwait",
    priceName: "Apartment Cleaning",
    priceRange: "80KD–250KD",
    packageNote: "Packages available for weekly and monthly cleaning",
  },
  {
    id: "floor-cleaning",
    title: "Floor Cleaning",
    description:
      "Ideal after construction, renovation, or moving. We provide floor cleaning and floor-wide deep cleaning in Kuwait for villas, apartments, offices, and buildings that need a clean handover.",
    priceNote:
      "Prices depend on the total floor area and the level of dirt or post-construction residue.",
    offers: [
      "Removal of dust and construction debris",
      "Deep cleaning of all rooms and corridors",
      "Tile and floor polishing",
      "Sanitation of all bathrooms",
      "Window and glass cleaning",
      "Final quality inspection",
    ],
    howWeWork:
      "Contact us with the floor area details. Our specialized post-construction team will schedule and complete the job efficiently.",
    specialOffer: "Priority scheduling for large floor areas",
    priceName: "Floor Cleaning",
    priceRange: "200KD–700KD",
    packageNote: "Discounts available for multi-floor bookings",
  },
  {
    id: "sofa-cleaning",
    title: "Sofa Cleaning",
    description:
      "Restore your sofa to its original freshness with sofa cleaning Kuwait customers can book at home. We remove stains, allergens, and odors from sofas, couches, and majlis seating across Kuwait governorates.",
    priceNote:
      "Prices depend on the sofa size, fabric type, and level of staining.",
    offers: [
      "Deep steam or dry cleaning based on fabric",
      "Stain and spot treatment",
      "Odor elimination",
      "Dust and allergen removal",
      "Fabric conditioning and protection",
      "Same-day drying available",
    ],
    howWeWork:
      "Book via website or WhatsApp. Our upholstery specialist visits and completes the cleaning on-site with no damage to fabric.",
    specialOffer: "Free odor treatment with every sofa cleaning",
    priceName: "Sofa Cleaning",
    priceRange: "30KD–120KD",
    packageNote: "Bundle deals available for multiple furniture pieces",
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    description:
      "Keep your workplace clean, organized, and healthy with professional office cleaning in Kuwait City, Farwaniya, Hawalli, Ahmadi, and Jahra for desks, meeting rooms, reception areas, and shared spaces.",
    priceNote:
      "Prices depend on the office size, cleaning frequency, and number of work areas.",
    offers: [
      "Desk, table, and surface sanitizing",
      "Floor sweeping, vacuuming, and mopping",
      "Reception and meeting room cleaning",
      "Pantry and washroom cleaning",
      "Trash collection and liner replacement",
      "High-touch point disinfection",
    ],
    howWeWork:
      "Share your office size and preferred schedule. Our team can clean before, during, or after business hours with minimal disruption.",
    specialOffer: "Flexible daily, weekly, and monthly office plans",
    priceName: "Office Cleaning",
    priceRange: "100KD-450KD",
    packageNote: "Custom contracts available for companies and facilities",
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    description:
      "Deep carpet cleaning in Kuwait that removes embedded dirt, bacteria, allergens, stains, and odors from rugs and carpets in homes, apartments, offices, and villas.",
    priceNote:
      "Prices depend on the carpet size, material, and level of soiling.",
    offers: [
      "Hot water extraction deep clean",
      "Stain and spot removal",
      "Anti-bacterial treatment",
      "Deodorizing and freshening",
      "Edge and border cleaning",
      "Quick-dry process",
    ],
    howWeWork:
      "Tell us the carpet dimensions and we'll dispatch a specialist with the right equipment. Same-day slots available.",
    specialOffer: "Free anti-bacterial spray with every carpet clean",
    priceName: "Carpet Cleaning",
    priceRange: "25KD–100KD",
    packageNote: "Discounts for multiple carpets in one visit",
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    description:
      "Brighten your property with crystal-clear window cleaning for homes, apartments, offices, storefronts, and buildings across Al Asimah, Hawalli, Farwaniya, and Ahmadi.",
    priceNote:
      "Prices depend on the number of windows, height, and access requirements.",
    offers: [
      "Interior and exterior glass cleaning",
      "Window frame and sill wiping",
      "Spot and water mark removal",
      "Balcony and sliding door glass cleaning",
      "Safe tools for high or difficult windows",
      "Final streak-free polish",
    ],
    howWeWork:
      "Send us the window count or photos. We prepare the right tools and complete the cleaning safely with a final shine check.",
    specialOffer: "Balcony glass cleaning available on request",
    priceName: "Window Cleaning",
    priceRange: "25KD-150KD",
    packageNote: "Discounts available for full-home or office window cleaning",
  },
  {
    id: "kitchen-cleaning",
    title: "Kitchen Cleaning",
    description:
      "A thorough kitchen cleaning service in Kuwait for home kitchens, office pantries, restaurants, and cafes, with degreasing, sanitizing, and careful surface restoration.",
    priceNote:
      "Prices depend on the kitchen size and the amount of grease or buildup.",
    offers: [
      "Degreasing of stovetop, hood, and oven",
      "Cabinet exterior and interior cleaning",
      "Countertop and sink sanitation",
      "Tile and backsplash scrubbing",
      "Appliance exterior cleaning",
      "Floor mopping and sanitizing",
    ],
    howWeWork:
      "Book online or via WhatsApp. Our kitchen specialists use professional degreasers safe for all surfaces.",
    specialOffer: "Oven deep clean included at no extra charge",
    priceName: "Kitchen Cleaning",
    priceRange: "40KD–130KD",
    packageNote: "Monthly maintenance packages available",
  },
  {
    id: "bathroom-cleaning",
    title: "Bathroom Cleaning",
    description:
      "Complete bathroom cleaning in Kuwait for homes, apartments, offices, clinics, and facilities. Tiles, fixtures, grout, mirrors, and high-touch surfaces are cleaned and disinfected.",
    priceNote:
      "Prices depend on the number of bathrooms and the level of limescale or soap buildup.",
    offers: [
      "Toilet deep cleaning and disinfection",
      "Shower and bathtub scrubbing",
      "Tile and grout cleaning",
      "Mirror and glass polishing",
      "Sink and faucet descaling",
      "Floor sanitizing and mopping",
    ],
    howWeWork:
      "Our bathroom hygiene team arrives fully equipped with descaling and disinfection products for a thorough result.",
    specialOffer: "Grout whitening included with deep-clean bookings",
    priceName: "Bathroom Cleaning",
    priceRange: "20KD–70KD",
    packageNote: "Bundle with kitchen cleaning for a discounted rate",
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "A complete deep cleaning Kuwait service for homes, apartments, villas, offices, and buildings that need detailed attention beyond regular cleaning in every room and corner.",
    priceNote:
      "Prices depend on the property size, number of rooms, and condition of the space.",
    offers: [
      "Detailed dusting and surface cleaning",
      "Kitchen and bathroom deep sanitation",
      "Floor scrubbing and stain removal",
      "Furniture, doors, and fixture wiping",
      "Hard-to-reach corner cleaning",
      "Final inspection before completion",
    ],
    howWeWork:
      "Book your deep cleaning slot and share property details. Our team arrives with all supplies and completes each area step by step.",
    specialOffer: "Same day deep cleaning available within Kuwait",
    priceName: "Deep Cleaning",
    priceRange: "120KD-600KD",
    packageNote: "Ideal for seasonal cleaning and full property refreshes",
  },
  {
    id: "move-in-move-out-cleaning",
    title: "Move In / Move Out Cleaning",
    description:
      "Prepare your property before moving in or hand it over spotless when moving out with detailed move in and move out cleaning in Kuwait for tenants, landlords, and property managers.",
    priceNote:
      "Prices depend on the property size, furniture status, and level of cleaning required.",
    offers: [
      "Empty property deep cleaning",
      "Cabinet and closet interior cleaning",
      "Kitchen and bathroom sanitation",
      "Floor, wall, and door wiping",
      "Window and balcony cleaning",
      "Trash and leftover dust removal",
    ],
    howWeWork:
      "Tell us your moving date and property details. We schedule the team to finish the clean before your handover or move-in time.",
    specialOffer: "Fast scheduling for urgent move-in and move-out jobs",
    priceName: "Move In / Move Out Cleaning",
    priceRange: "150KD-650KD",
    packageNote: "Best for tenants, landlords, and property managers",
  },
  {
    id: "janitorial-service",
    title: "Janitorial Service",
    description:
      "Reliable janitorial services in Kuwait for offices, buildings, showrooms, clinics, schools, and facilities that need daily, weekly, or monthly cleaning support.",
    priceNote:
      "Prices depend on the facility size, service frequency, and required staff hours.",
    offers: [
      "Daily or scheduled facility cleaning",
      "Washroom cleaning and restocking",
      "Trash collection and disposal",
      "Lobby, hallway, and common area cleaning",
      "Desk and surface sanitizing",
      "Custom cleaning checklist management",
    ],
    howWeWork:
      "We review your facility needs, prepare a cleaning schedule, and assign trained staff for consistent service quality.",
    specialOffer: "Monthly janitorial contracts available",
    priceName: "Janitorial Service",
    priceRange: "250KD-1200KD",
    packageNote: "Custom plans available for commercial properties",
  },
  {
    id: "chandelier-cleaning",
    title: "Chandelier Cleaning",
    description:
      "We carefully clean chandeliers of all sizes in Kuwait villas, halls, homes, and commercial spaces, restoring sparkle without risk to delicate crystals or fixtures.",
    priceNote:
      "Prices depend on the chandelier size, height, and number of elements.",
    offers: [
      "Safe on-site or dismounted cleaning",
      "Crystal and glass element polishing",
      "Frame and arm wiping",
      "Dust and grime removal",
      "Bulb and fitting cleaning",
      "Re-assembly and quality check",
    ],
    howWeWork:
      "Our specialists assess the chandelier type before choosing the safest cleaning method — all work is done with care and precision.",
    specialOffer: "Free assessment visit included",
    priceName: "Chandelier Cleaning",
    priceRange: "30KD–150KD",
    packageNote: "Seasonal cleaning packages available",
  },
  {
    id: "mattress-cleaning",
    title: "Mattress Cleaning",
    description:
      "Sanitize and refresh your mattress with mattress cleaning in Kuwait. We remove dust mites, allergens, stains, and odors for a healthier sleep environment in homes and apartments.",
    priceNote:
      "Prices depend on the mattress size and the level of staining or odor.",
    offers: [
      "UV sanitization to kill bacteria and dust mites",
      "Steam or dry cleaning based on material",
      "Stain and spot treatment",
      "Deodorizing and freshening",
      "Both sides cleaned",
      "Allergen reduction treatment",
    ],
    howWeWork:
      "Book via website or WhatsApp. Our hygiene specialist visits and completes the cleaning on-site with quick drying.",
    specialOffer: "Free allergen-reduction spray with every booking",
    priceName: "Mattress Cleaning",
    priceRange: "25KD–80KD",
    packageNote: "Bundle with bedroom cleaning for a discounted rate",
  },
];

const seoServices = [
  {
    title: "House Cleaning Kuwait",
    body:
      "Our house cleaning in Kuwait is designed for families who want a clean, healthy, and comfortable home without stress. Al Nawras Plus provides home cleaning services in Farwaniya, Hawalli, Al Asimah, Ahmadi, Jahra, and Mubarak Al-Kabeer, with residential cleaning packages, professional house cleaners, and deep house cleaning for kitchens, bedrooms, living rooms, floors, bathrooms, and hard-to-reach areas.",
    keywords: [
      "House Cleaning",
      "House Cleaning Kuwait",
      "Home Cleaning Services Kuwait",
      "Residential Cleaning Kuwait",
      "Professional House Cleaners Kuwait",
      "Best House Cleaning Company Kuwait",
      "Deep House Cleaning Kuwait",
      "House Cleaning Farwaniya",
      "House Cleaning Hawalli",
    ],
  },
  {
    title: "Sofa Cleaning Kuwait",
    body:
      "We provide sofa cleaning Kuwait customers can book for fabric sofas, couches, majlis seating, and upholstered furniture in Hawalli, Salmiya, Farwaniya, Al Asimah, and nearby areas. Our couch cleaning process includes dust removal, sofa shampoo cleaning, stain treatment, deodorizing, and upholstery cleaning methods suitable for delicate materials.",
    keywords: [
      "Sofa Cleaning",
      "Sofa Cleaning Kuwait",
      "Couch Cleaning Services Kuwait",
      "Upholstery Cleaning Kuwait",
      "Sofa Shampoo Cleaning Kuwait",
      "Fabric Sofa Cleaning Kuwait",
      "Professional Sofa Cleaners Kuwait",
      "Sofa Cleaning Hawalli",
      "Sofa Cleaning Farwaniya",
    ],
  },
  {
    title: "Office Cleaning Kuwait",
    body:
      "For companies, shops, and workspaces, our office cleaning Kuwait service keeps business areas neat, hygienic, and ready for staff and clients in Kuwait City, Farwaniya, Hawalli, Ahmadi, and Jahra. We support commercial cleaning services, office deep cleaning, corporate cleaning, business cleaning, and office maintenance schedules with trained teams and clear checklists.",
    keywords: [
      "Office Cleaning",
      "Office Cleaning Kuwait",
      "Commercial Cleaning Services Kuwait",
      "Office Deep Cleaning Kuwait",
      "Corporate Cleaning Company Kuwait",
      "Business Cleaning Services Kuwait",
      "Office Maintenance Kuwait",
      "Office Cleaning Kuwait City",
      "Office Cleaning Ahmadi",
    ],
  },
  {
    title: "Apartment Cleaning Kuwait",
    body:
      "Our apartment cleaning Kuwait service is ideal for studios, flats, and family apartments in Farwaniya, Hawalli, Salmiya, Kuwait City, and Mubarak Al-Kabeer. We offer flat cleaning services, apartment deep cleaning, move out apartment cleaning, and professional apartment cleaners for tenants, owners, landlords, and property managers.",
    keywords: [
      "Apartment Cleaning",
      "Apartment Cleaning Kuwait",
      "Flat Cleaning Services Kuwait",
      "Apartment Deep Cleaning Kuwait",
      "Move Out Apartment Cleaning Kuwait",
      "Professional Apartment Cleaners Kuwait",
      "Apartment Cleaning Farwaniya",
      "Apartment Cleaning Mubarak Al-Kabeer",
    ],
  },
  {
    title: "Carpet Cleaning Kuwait",
    body:
      "Al Nawras Plus handles carpet cleaning Kuwait jobs for homes, apartments, villas, offices, and commercial spaces across Al Asimah, Hawalli, Farwaniya, Ahmadi, and Jahra. Our rug cleaning and carpet shampoo cleaning options help remove dust, odor, stains, and allergens through professional deep cleaning techniques.",
    keywords: [
      "Carpet Cleaning",
      "Carpet Cleaning Kuwait",
      "Rug Cleaning Services Kuwait",
      "Carpet Shampoo Cleaning Kuwait",
      "Carpet Deep Cleaning Kuwait",
      "Professional Carpet Cleaners Kuwait",
      "Carpet Cleaning Jahra",
      "Carpet Cleaning Ahmadi",
    ],
  },
  {
    title: "Window Cleaning Kuwait",
    body:
      "Our window cleaning Kuwait service improves the look of homes, offices, shops, and buildings in Al Asimah, Hawalli, Farwaniya, and Ahmadi with streak-free glass and frame cleaning. We provide glass cleaning, building window cleaning, residential window cleaning, and professional glass cleaners for polished windows inside and outside.",
    keywords: [
      "Window Cleaning",
      "Window Cleaning Kuwait",
      "Glass Cleaning Services Kuwait",
      "Building Window Cleaning Kuwait",
      "Residential Window Cleaning Kuwait",
      "Professional Glass Cleaners Kuwait",
      "Window Cleaning Kuwait City",
      "Window Cleaning Hawalli",
    ],
  },
  {
    title: "Floor Cleaning Kuwait",
    body:
      "Our floor cleaning Kuwait service covers tiles, marble, common areas, corridors, homes, apartments, and offices in Farwaniya, Al Asimah, Hawalli, Ahmadi, and Jahra. We offer floor polishing, tile floor cleaning, marble floor polishing, and professional floor cleaning services that remove dirt buildup and restore a cleaner finish.",
    keywords: [
      "Floor Cleaning",
      "Floor Cleaning Kuwait",
      "Floor Polishing Kuwait",
      "Tile Floor Cleaning Kuwait",
      "Marble Floor Polishing Kuwait",
      "Professional Floor Cleaning Services",
      "Floor Cleaning Farwaniya",
      "Floor Cleaning Ahmadi",
    ],
  },
  {
    title: "Kitchen Cleaning Kuwait",
    body:
      "Kitchen cleaning Kuwait requires detailed grease removal, surface sanitizing, appliance care, and careful floor cleaning. Our kitchen deep cleaning and grease removal services are suitable for family kitchens, restaurants, cafes, and commercial kitchens in Kuwait City, Hawalli, Farwaniya, Ahmadi, and Mubarak Al-Kabeer.",
    keywords: [
      "Kitchen Cleaning",
      "Kitchen Cleaning Kuwait",
      "Kitchen Deep Cleaning Kuwait",
      "Grease Removal Cleaning Kuwait",
      "Commercial Kitchen Cleaning Kuwait",
      "Professional Kitchen Cleaning Services",
      "Kitchen Cleaning Kuwait City",
      "Kitchen Cleaning Farwaniya",
    ],
  },
  {
    title: "Bathroom Cleaning Kuwait",
    body:
      "We provide bathroom cleaning Kuwait for homes, apartments, villas, offices, clinics, and facilities across all Kuwait governorates. Our toilet cleaning, bathroom deep cleaning, bathroom sanitization, and washroom cleaning services focus on hygiene, limescale removal, grout cleaning, mirrors, fixtures, and fresh-smelling results.",
    keywords: [
      "Bathroom Cleaning",
      "Bathroom Cleaning Kuwait",
      "Toilet Cleaning Services Kuwait",
      "Bathroom Deep Cleaning Kuwait",
      "Bathroom Sanitization Kuwait",
      "Washroom Cleaning Services Kuwait",
      "Bathroom Cleaning Hawalli",
      "Bathroom Cleaning Farwaniya",
    ],
  },
  {
    title: "Deep Cleaning Kuwait",
    body:
      "Our deep cleaning Kuwait service is built for properties that need more than routine cleaning in Al Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer. We provide home deep cleaning, villa deep cleaning, and apartment deep cleaning with detailed attention to kitchens, bathrooms, floors, furniture, doors, corners, and high-touch areas.",
    keywords: [
      "Deep Cleaning",
      "Deep Cleaning Kuwait",
      "Professional Deep Cleaning Services",
      "Home Deep Cleaning Kuwait",
      "Villa Deep Cleaning Kuwait",
      "Apartment Deep Cleaning Kuwait",
      "Deep Cleaning Jahra",
      "Deep Cleaning Ahmadi",
    ],
  },
  {
    title: "Move In Cleaning Kuwait and Move Out Cleaning Kuwait",
    body:
      "Moving is easier with our move in / move out cleaning service. We handle move in cleaning, move out cleaning, end of tenancy cleaning, vacant property cleaning, and relocation cleaning services in Farwaniya, Hawalli, Al Asimah, Ahmadi, Jahra, and Mubarak Al-Kabeer for tenants, landlords, and property managers.",
    keywords: [
      "Move In / Move Out Cleaning",
      "Move In Cleaning Kuwait",
      "Move Out Cleaning Kuwait",
      "End of Tenancy Cleaning Kuwait",
      "Vacant Property Cleaning Kuwait",
      "Relocation Cleaning Services Kuwait",
      "Move Out Cleaning Farwaniya",
      "Move In Cleaning Hawalli",
    ],
  },
  {
    title: "Janitorial Services Kuwait",
    body:
      "Our janitorial services Kuwait are suitable for offices, buildings, showrooms, clinics, schools, and facilities in Kuwait City, Farwaniya, Hawalli, Ahmadi, and Jahra. We support building maintenance cleaning, commercial janitorial services, facility cleaning, and cleaning staff services with flexible daily, weekly, and monthly schedules.",
    keywords: [
      "Janitorial Service",
      "Janitorial Services Kuwait",
      "Building Maintenance Cleaning Kuwait",
      "Commercial Janitorial Services",
      "Facility Cleaning Services Kuwait",
      "Cleaning Staff Services Kuwait",
      "Janitorial Services Kuwait City",
      "Facility Cleaning Ahmadi",
    ],
  },
];

function LogoBadge() {
  return (
    <Link href="/" className="block">
      <div className="grid h-32 w-32 place-items-center rounded-full border-[6px] border-white bg-[#050505] p-2 text-center shadow-[0_0_22px_rgba(255,255,255,.8)]">
        <div className="grid h-full w-full place-items-center rounded-full border border-[#f8be43]/60 bg-[radial-gradient(circle_at_50%_25%,#263d5e_0,#050505_58%)]">
          <div className="text-[12px] font-black leading-none text-[#f8be43]">
            <div className="text-3xl">⌂</div>
            Al Nawras Plus
            <div className="mt-1 text-[8px] tracking-wide text-white">
              CLEANING SERVICES
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Header() {
  return (
    <header className="relative z-30">
      <div className="bg-[#0d274d] text-white shadow-[0_3px_8px_rgba(13,39,77,.35)]">
        <div
          className="ltr mx-auto grid min-h-[76px] max-w-6xl grid-cols-1 items-center gap-4 px-5 py-3 md:grid-cols-[150px_1fr_150px_180px]"
          dir="ltr"
        >
          <div className="hidden md:block" />
          <div className="space-y-1 text-center text-xs text-slate-100">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 ltr">
              <span>☎ +965 9551 1354</span>
              <span>✉ alnawraspluskuwait@gmail.com</span>
            </div>
            <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 leading-5">
              <span>📍</span>
              <span>Farwaniya block 1 street 74 building 15</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 text-lg font-black md:justify-end">
            <a
              href="https://www.facebook.com/alnawrasplus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/alnawraspluskuwait"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/96595511354"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <TranslateWidget />
          </div>
        </div>
      </div>

      <nav className="relative bg-white shadow-[0_6px_22px_rgba(9,29,58,.14)]">
        <div
          className="ltr mx-auto flex min-h-[100px] max-w-6xl items-center justify-between gap-5 px-5"
          dir="ltr"
        >
          <div className="relative hidden w-36 self-stretch md:block">
            <div className="absolute -top-12 left-0">
              <LogoBadge />
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center gap-8">
            <Link
              className="hidden text-base font-black text-[#0d274d] md:inline-flex"
              href="/"
            >
              Home
            </Link>
            <Link
              className="inline-flex h-12 min-w-32 items-center justify-center border-2 border-[#0d274d] px-7 text-base font-black text-[#0d274d]"
              href="/services"
            >
              Services ▾
            </Link>
            <Link
              className="hidden text-base font-black text-[#0d274d] md:inline-flex"
              href="/contact"
            >
              Contact us
            </Link>
            <Link
              className="hidden text-base font-black text-[#0d274d] md:inline-flex"
              href="/about"
            >
              About the company
            </Link>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <a
              className="inline-flex h-11 min-w-32 items-center justify-center gap-3 bg-[#0d274d] px-6 text-sm font-black text-[#ffd366]"
              href="https://wa.me/9659551 1354"
              target="_blank"
              rel="noopener noreferrer"
            >
              Call now <span>→</span>
            </a>
            <Link
              className="inline-flex h-11 min-w-32 items-center justify-center gap-3 rounded-br-3xl bg-[#ffd366] px-6 text-sm font-black text-[#092346]"
              href="/contact"
            >
              Book now <span>→</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d274d] px-5 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-black text-[#ffd366]">Let&apos;s talk</p>
          <h2 className="mt-6 text-2xl font-black">
            Clean, fresh, and flawless
          </h2>
          <p className="mt-6 text-3xl font-black leading-tight text-[#ffd366]">
            Your space is about to shine like never before.
          </p>
          <div className="mt-8 inline-flex overflow-hidden rounded-br-[28px] rounded-tl-[28px] shadow-[0_0_18px_rgba(255,211,102,.5)]">
            <a
              className="inline-flex h-12 min-w-32 items-center justify-center gap-3 bg-white px-7 text-sm font-black text-[#0d274d]"
              href="https://wa.me/9659551 1354"
              target="_blank"
              rel="noopener noreferrer"
            >
              Call now <span>→</span>
            </a>
            <Link
              className="inline-flex h-12 min-w-32 items-center justify-center gap-3 bg-[#ffd366] px-7 text-sm font-black text-[#092346]"
              href="/contact"
            >
              Book now <span>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-28 grid gap-12 md:grid-cols-[1.1fr_.9fr_1fr_1.2fr]">
          <div>
            <LogoBadge />
            <p className="mt-7 max-w-sm text-sm leading-7 text-slate-200">
              We offer reliable, high-quality cleaning services for homes and
              businesses. We bring a touch of pure cleanliness, care, and
              perfection to every space we serve.
            </p>

            <div className="mt-7 flex gap-4 text-2xl font-black text-[#ffd366]">
              <a
                href="https://www.facebook.com/alnawrasplus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/alnawraspluskuwait"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/96595511354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-black text-[#ffd366]">Quick links</h3>

            <ul className="mt-8 space-y-0 text-base font-bold">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
                { name: "About", href: "/about" },
              ].map((link, index) => (
                <li
                  key={link.name}
                  className={`px-9 py-4 ${
                    index === 0
                      ? "border border-white text-[#ffd366]"
                      : "text-white"
                  }`}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black text-[#ffd366]">
              Contact information
            </h3>
            <p className="mt-6 text-sm leading-7 text-slate-200">
              Farwaniya block 1 street 74 building 15
            </p>
          </div>

          <div>
            <h3 className="text-xl font-black leading-tight text-[#ffd366]">
              Subscribe to receive special offers
            </h3>
            <p className="mt-6 text-sm leading-7 text-slate-200">
              Subscribe to receive exclusive cleaning tips, special offers, and
              the latest updates on our professional services.
            </p>
            <form className="mt-8 flex items-end">
              <input
                className="h-12 min-w-0 flex-1 border-b-2 border-[#ffd366] bg-transparent px-3 text-sm text-white outline-none placeholder:text-[#ffd366]"
                placeholder="Email Address"
                type="email"
              />
              <button
                className="h-12 rounded-full bg-[#ffd366] px-7 text-xs font-black leading-4 text-[#0d274d]"
                type="button"
              >
                Get A
                <br />
                Price Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ServiceDetail({ service }) {
  return (
    <div className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-[0_4px_20px_rgba(13,39,77,.10)]">
      <div className="border-l-4 border-[#0d274d] p-8">
        <h2 className="text-2xl font-black text-[#0d274d]">{service.title}</h2>
        <p className="mt-4 text-sm leading-7 text-slate-500">
          {service.description}
        </p>
        <p className="mt-4 text-sm font-bold leading-7 text-[#1d6a29]">
          Available across Al Asimah / Capital Governorate, Hawalli,
          Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer Governorate.
        </p>
      </div>

      <div className="p-8 pt-0">
        <p className="text-sm font-black leading-6 text-[#c72424]">
          {service.priceNote}
        </p>

        <h3 className="mt-8 text-lg font-black text-[#0d274d]">
          What do we offer?
        </h3>
        <ul className="mt-3 space-y-2">
          {service.offers.map((offer) => (
            <li className="text-sm text-[#0d274d]" key={offer}>
              ✓ {offer}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-lg font-black text-[#0d274d]">How we work</h3>
        <p className="mt-3 text-sm leading-7 text-center text-[#444]">
          {service.howWeWork}
        </p>

        <h3 className="mt-8 text-lg font-black text-right text-[#0d274d]">
          Special offer
        </h3>
        <div className="mt-8">
          <Link
            className="inline-flex h-11 items-center justify-center bg-[#ffd366] px-6 text-sm font-black text-[#092346]"
            href={serviceLandingLinks[service.id]}
          >
            View {service.title} SEO page
          </Link>
        </div>
        <p className="mt-2 text-sm text-center text-[#444]">
          {service.specialOffer}
        </p>

        <h3 className="mt-8 text-right text-xl font-black text-[#c72424]">
          Prices
        </h3>
        <div className="mt-3 text-right">
          <p className="text-sm font-black text-[#0d274d]">
            {service.priceName}
          </p>
          <p className="mt-1 text-base font-black text-[#c72424]">
            🔥 {service.priceRange}
          </p>
        </div>
        <p className="mt-3 text-sm text-[#444]">🟠 {service.packageNote}</p>
      </div>
    </div>
  );
}

function SeoContent() {
  return (
    <section className="bg-[#f7fafc] px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c72424]">
            Cleaning Services Kuwait
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#0d274d]">
            Professional Cleaning Company Across Kuwait Governorates
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Al Nawras Plus offers professional cleaning services in Kuwait for
            homes, apartments, villas, offices, buildings, and commercial
            facilities. From regular house cleaning to deep cleaning, sofa
            shampoo, carpet cleaning, floor polishing, window glass cleaning,
            kitchen grease removal, bathroom sanitization, move in cleaning,
            move out cleaning, and janitorial service, our team delivers clean,
            organized, and hygienic spaces with reliable scheduling in Al
            Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak
            Al-Kabeer Governorates.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {servicePages.map((service) => (
            <Link
              className="border border-[#ffd366] bg-white px-4 py-3 text-xs font-black text-[#0d274d]"
              href={`/services/${service.slug}`}
              key={service.slug}
            >
              {service.title}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {seoServices.map((service) => (
            <article
              className="rounded-sm border border-slate-200 bg-white p-6 shadow-[0_4px_18px_rgba(13,39,77,.06)]"
              key={service.title}
            >
              <h3 className="text-xl font-black text-[#0d274d]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.keywords.map((keyword) => (
                  <span
                    className="border border-[#ffd366] bg-[#fff9e8] px-3 py-2 text-xs font-bold text-[#0d274d]"
                    key={keyword}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeId);

  return (
    <main
      className="min-h-screen overflow-hidden bg-white text-[#0d274d]"
      dir="ltr"
    >
      <Header />

      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-3xl font-black text-[#0d274d]">
              Professional Cleaning Services Across Kuwait Governorates
            </h1>
            <p className="mt-2 text-sm font-black text-[#c72424]">
              House cleaning, sofa cleaning, office cleaning, apartment
              cleaning, carpet cleaning, window cleaning, floor cleaning, deep
              cleaning, and janitorial service in Al Asimah, Hawalli,
              Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-[1fr_220px]">
            <ServiceDetail service={activeService} />

            <aside className="flex flex-col gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`rounded-sm px-5 py-4 text-sm font-black transition-colors ${
                    service.id === activeId
                      ? "bg-[#ffd366] text-[#0d274d]"
                      : "bg-[#0d274d] text-white hover:bg-[#163a6e]"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <SeoContent />

      <Footer />
    </main>
  );
}
