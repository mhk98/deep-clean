"use client";
import { useState } from "react";
import Link from "next/link";
import TranslateWidget from "../TranslateWidget";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const services = [
  {
    id: "house-cleaning",
    title: "House cleaning",
    description:
      "Get a clean and refreshed home with our professional cleaning services. We take care of every detail, from dusting to deep sanitizing, to provide a healthy and comfortable environment for you and your family.",
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
    title: "Apartment cleaning",
    description:
      "Professional apartment cleaning tailored to your layout and needs. From studio to multi-bedroom units, we ensure every room is spotless and fresh.",
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
    id: "full-floor-cleaning",
    title: "Cleaning an entire floor",
    description:
      "Ideal after construction, renovation, or moving. We provide a comprehensive floor-wide deep clean to leave the space ready for use.",
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
    priceName: "Full Floor Cleaning",
    priceRange: "200KD–700KD",
    packageNote: "Discounts available for multi-floor bookings",
  },
  {
    id: "sofa-cleaning",
    title: "Sofa cleaning",
    description:
      "Restore your sofa to its original freshness. We remove deep-set stains, allergens, and odors using professional equipment and safe cleaning agents.",
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
    id: "carpet-cleaning",
    title: "Carpet cleaning",
    description:
      "Deep carpet cleaning that removes embedded dirt, bacteria, and allergens. Your carpets will look and smell brand new after our service.",
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
    id: "kitchen-cleaning",
    title: "Kitchen cleaning",
    description:
      "A thorough deep-clean of your entire kitchen — degreasing, sanitizing, and restoring every surface to a hygienic and sparkling condition.",
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
    title: "Bathroom cleaning",
    description:
      "Complete bathroom sanitation — tiles, fixtures, grout, and all surfaces are cleaned and disinfected for a hygienic and fresh result.",
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
    id: "chandelier-cleaning",
    title: "Cleaning the chandelier",
    description:
      "We carefully clean chandeliers of all sizes, restoring their original sparkle and elegance without risk of damage to the delicate crystals or fixtures.",
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
    title: "Mattress cleaning",
    description:
      "Sanitize and refresh your mattress with our deep-cleaning service. We eliminate dust mites, allergens, stains, and odors for a healthier sleep environment.",
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
          <div className="mt-10 flex gap-8 text-4xl font-black text-[#0d274d]">
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
          <p className="text-sm font-black text-[#ffd366]">Let's talk</p>
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
              High-quality services
              <span className="text-[#ffd366]">Quality</span>
            </h1>
            <p className="mt-2 text-sm font-black text-[#c72424]">
              Professional cleaning services tailored to your needs
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

      <Footer />
    </main>
  );
}
