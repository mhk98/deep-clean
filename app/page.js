import Link from "next/link";
import Image from "next/image";
import TranslateWidget from "./TranslateWidget";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import MobileNav from "./components/MobileNav";
import ServiceMenu from "./components/ServiceMenu";

const services = [
  {
    title: "House Cleaning",
    image: "/services/house-cleaning-kuwait.jpg",
    href: "/services/house-cleaning-kuwait",
    alt: "House cleaning services in Kuwait for homes villas and residential properties",
    text: "House cleaning services in Kuwait for spotless homes, apartments, and villas in Farwaniya, Hawalli, and nearby areas.",
  },
  {
    title: "Sofa Cleaning",
    image: "/services/sofa-cleaning-kuwait.jpg",
    href: "/services/sofa-cleaning-kuwait",
    alt: "Sofa cleaning service in Kuwait for fabric sofas and majlis seating",
    text: "Sofa Cleaning Kuwait with shampoo care for homes in Al Asimah, Hawalli, and Salmiya.",
  },
  {
    title: "Office Cleaning",
    image: "/services/office-cleaning-kuwait.jpg",
    href: "/services/office-cleaning-kuwait",
    alt: "Office cleaning services in Kuwait for companies workplaces and commercial spaces",
    text: "Office cleaning services Kuwait businesses can book for offices, clinics, shops, and workplaces.",
  },
  {
    title: "Apartment Cleaning",
    image: "/services/apartment-cleaning-kuwait.jpg",
    href: "/services/apartment-cleaning-kuwait",
    alt: "Apartment cleaning in Kuwait for flats studios and rental homes",
    text: "Apartment cleaning Kuwait residents choose for studios, flats, rentals, and family apartments.",
  },
  {
    title: "Carpet Cleaning",
    image: "/services/carpet-cleaning-kuwait.jpg",
    href: "/services/carpet-cleaning-kuwait",
    alt: "Carpet cleaning service in Kuwait for rugs and carpets",
    text: "Carpet Cleaning Kuwait for fresh rugs and cleaner floors across Kuwait governorates.",
  },
  {
    title: "Window Cleaning",
    image: "/services/window-cleaning-kuwait.jpg",
    href: "/services/window-cleaning-kuwait",
    alt: "Window cleaning service in Kuwait for homes and offices",
    text: "Crystal-clear window cleaning services for homes, offices, and buildings in Kuwait.",
  },
  {
    title: "Floor Cleaning",
    image: "/services/floor-cleaning-kuwait.jpg",
    href: "/services/floor-cleaning-kuwait",
    alt: "Floor cleaning and polishing service in Kuwait",
    text: "Expert floor cleaning and polishing services in Al Asimah, Farwaniya, Hawalli, and Ahmadi.",
  },
  {
    title: "Kitchen Cleaning",
    image: "/services/kitchen-cleaning-kuwait.jpg",
    href: "/services/kitchen-cleaning-kuwait",
    alt: "Kitchen cleaning service in Kuwait with grease removal",
    text: "Detailed kitchen cleaning in Kuwait with grease removal for homes and commercial kitchens.",
  },
  {
    title: "Bathroom Cleaning",
    image: "/services/bathroom-cleaning-kuwait.jpg",
    href: "/services/bathroom-cleaning-kuwait",
    alt: "Bathroom cleaning service in Kuwait for homes and offices",
    text: "Sanitized bathroom cleaning service for hygienic homes, apartments, and offices in Kuwait.",
  },
  {
    title: "Deep Cleaning",
    image: "/services/deep-cleaning-kuwait.jpg",
    href: "/services/deep-cleaning-kuwait",
    alt: "Deep cleaning services Kuwait for homes offices apartments and villas",
    text: "Deep cleaning services Kuwait for homes, villas, apartments, offices, and buildings in every governorate.",
  },
  {
    title: "Move In / Move Out Cleaning",
    image: "/services/move-in-move-out-cleaning-kuwait.jpg",
    href: "/services/move-in-move-out-cleaning-kuwait",
    alt: "Move in and move out cleaning service in Kuwait",
    text: "Move in move out cleaning for tenants, landlords, owners, and property managers in Kuwait.",
  },
  {
    title: "Janitorial Service",
    image: "/services/janitorial-services-kuwait.jpg",
    href: "/services/janitorial-services-kuwait",
    alt: "Janitorial cleaning service in Kuwait for offices and facilities",
    text: "Reliable janitorial services for offices, buildings, clinics, and facilities across Kuwait.",
  },
  {
    title: "Chandelier Cleaning",
    image: "/services/chandelier-cleaning-kuwait.jpg",
    href: "/services/chandelier-cleaning-kuwait",
    alt: "Chandelier cleaning service in Kuwait for villas and halls",
    text: "Careful chandelier and decorative light fixture cleaning for villas, homes, and halls in Kuwait.",
  },
];

const reasons = [
  [
    "Skilled Experts",
    "A trained team for home cleaning services, office cleaning, villa cleaning, and deep cleaning with careful attention.",
  ],
  [
    "Fast & Reliable Service",
    "We arrive on time, prepare the right tools, and work with clear quality standards from start to finish.",
  ],
  [
    "Eco-Friendly Products",
    "Safe cleaning supplies for daily use inside homes, apartments, offices, and family spaces.",
  ],
  [
    "Available Across Kuwait",
    "We serve Al Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer Governorates.",
  ],
];

const testimonials = [
  {
    name: "Ahmed Al-Harbi",
    service: "Villa deep cleaning in Farwaniya",
    text:
      "The team arrived on time, cleaned every room carefully, and left the villa fresh and ready for guests.",
  },
  {
    name: "Fatima Al-Nashat",
    service: "Sofa and carpet cleaning in Hawalli",
    text:
      "Our sofa and carpets looked much cleaner after the visit. Booking on WhatsApp was quick and easy.",
  },
  {
    name: "Mohammed Al-Salem",
    service: "Office cleaning in Kuwait City",
    text:
      "Reliable office cleaning with good attention to desks, floors, pantry, and washrooms.",
  },
  {
    name: "Noura Al-Khaled",
    service: "Apartment cleaning in Salmiya",
    text:
      "Professional cleaners, clear communication, and a spotless apartment at the end of the service.",
  },
  {
    name: "Sara Al-Mutairi",
    service: "House cleaning in Salmiya",
    text:
      "The cleaners paid attention to the kitchen, bathrooms, and living room corners. The home felt much fresher after the visit.",
  },
  {
    name: "Khaled Al-Ajmi",
    service: "Office cleaning in Hawally",
    text:
      "Good service for our small office. Desks, pantry, floors, and washrooms were handled neatly before the next workday.",
  },
  {
    name: "Mariam Al-Otaibi",
    service: "Move out cleaning in Mahboula",
    text:
      "They prepared the apartment for handover and focused on dusty shelves, floors, kitchen marks, and bathroom buildup.",
  },
  {
    name: "Yousef Al-Rashed",
    service: "Sofa cleaning in Jabriya",
    text:
      "Our majlis seating looked brighter and smelled cleaner. The team explained the fabric care before starting.",
  },
  {
    name: "Huda Al-Sabah",
    service: "Deep cleaning in Fahaheel",
    text:
      "The team worked carefully through the rooms and cleaned areas we usually miss during regular cleaning.",
  },
  {
    name: "Omar Al-Kandari",
    service: "Apartment cleaning in Farwaniya",
    text:
      "Fast WhatsApp booking, fair price, and a clean apartment at the end. I would book again for monthly cleaning.",
  },
];

const faqs = [
  {
    question: "How can I book cleaning services in Kuwait?",
    answer:
      "You can book Al Nawras Plus cleaning services by calling, sending a WhatsApp message, or using the contact page. Share your service type, location, property size, and preferred cleaning time.",
  },
  {
    question: "Do you offer cleaning services near me in Kuwait?",
    answer:
      "Yes. We provide cleaning services near customers across Kuwait, including Al Asimah / Capital Governorate, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer.",
  },
  {
    question: "Which areas do you cover for cleaning services in Kuwait?",
    answer:
      "Our team covers Kuwait City, Farwaniya, Hawalli, Salmiya, Ahmadi, Jahra, Mubarak Al-Kabeer, and nearby residential and commercial areas.",
  },
  {
    question: "Do you provide professional house cleaning staff?",
    answer:
      "Yes. We provide trained cleaning staff for house cleaning, villa cleaning, apartment cleaning, office cleaning, deep cleaning, sofa cleaning, and carpet cleaning.",
  },
  {
    question: "How long does office cleaning take in Kuwait?",
    answer:
      "Office cleaning time depends on the office size, number of rooms, washrooms, pantry areas, and cleaning frequency. After receiving the details, we suggest the right team and schedule.",
  },
  {
    question: "Do you offer same day cleaning service?",
    answer:
      "Same day cleaning service is available when our schedule allows. It is best to contact us early with your area and service request for faster booking.",
  },
  {
    question: "What cleaning services do you provide?",
    answer:
      "We provide house cleaning, apartment cleaning, office cleaning, sofa cleaning, carpet cleaning, window cleaning, floor cleaning, kitchen cleaning, bathroom cleaning, deep cleaning, move in cleaning, move out cleaning, janitorial service, chandelier cleaning, and mattress cleaning.",
  },
  {
    question: "Can I book affordable cleaning company services in Kuwait?",
    answer:
      "Yes. Al Nawras Plus offers affordable cleaning company services in Kuwait with prices based on the service type, property size, cleaning condition, and schedule.",
  },
  {
    question: "Are your cleaning products safe for homes and offices?",
    answer:
      "Before each job, our team chooses supplies based on the room, surface, and cleaning need. For family homes, apartments, villas, and offices, we focus on removing dust, grease, stains, and buildup while treating floors, fabrics, glass, and fixtures with care.",
  },
];

const localSeoKeywords = [
  ["Cleaning Service in Al Asimah", "/services"],
  ["Cleaning Company Farwaniya", "/services"],
  ["Cleaning Service in Hawalli", "/services"],
  ["Cleaning Service in Farwaniya", "/services"],
  ["Cleaning Service in Ahmadi", "/services"],
  ["Cleaning Service in Jahra", "/services"],
  ["Cleaning Service in Mubarak Al-Kabeer", "/services"],
  ["House Cleaning Hawalli", "/services/house-cleaning-kuwait"],
  ["Deep Cleaning Salmiya", "/services/deep-cleaning-kuwait"],
  ["Office Cleaning Kuwait City", "/services/office-cleaning-kuwait"],
  ["Sofa Cleaning Jabriya", "/services/sofa-cleaning-kuwait"],
  ["Apartment Cleaning Mahboula", "/services/apartment-cleaning-kuwait"],
  ["Carpet Cleaning Fahaheel", "/services/carpet-cleaning-kuwait"],
  ["Villa Cleaning Mangaf", "/services/house-cleaning-kuwait"],
  ["Building Cleaning Ahmadi", "/services/deep-cleaning-kuwait"],
  ["Cleaning Services Jahra", "/services"],
  ["Cleaning Company Near Me Kuwait", "/contact"],
  ["Same Day Cleaning Service Kuwait", "/contact"],
  ["Cleaning Services Farwaniya", "/services"],
  ["Cleaning Services Hawalli", "/services"],
  ["Cleaning Services Salmiya", "/services"],
];

const heroHighlights = [
  "Same Day Service",
  "Trained & Verified Staff",
  "Eco-Friendly Cleaning",
  "24/7 Booking",
  "Serving All Kuwait",
];

const experienceStats = [
  ["5000+", "Homes, villas, and apartments cleaned"],
  ["500+", "Office and commercial cleaning jobs"],
  ["Since 2019", "Serving families and businesses in Kuwait"],
];

const trustSignals = [
  ["Municipality License", "Business details are shared clearly for customers who need an accountable cleaning company in Kuwait."],
  ["Trained Staff", "Cleaners follow room-by-room checklists for homes, apartments, villas, offices, and buildings."],
  ["Background Verified", "Team members are selected carefully before they enter customer properties."],
  ["Insured Staff", "Work is organized with responsible supervision for customer peace of mind."],
  ["Eco Friendly Chemicals", "We choose products based on surface type, hygiene need, and indoor comfort."],
  ["24/7 Customer Support", "Customers can call or send a WhatsApp message for urgent cleaning questions and bookings."],
  ["Google Reviews", "Feedback from local customers helps us improve punctuality, cleaning detail, and service quality."],
  ["Before After Images", "Customers can request job photos for move out cleaning, sofa cleaning, floor cleaning, and deep cleaning work."],
];

const cleaningProcess = [
  ["Book", "Send your location, property type, preferred time, and the service you need through WhatsApp, phone, or the contact page."],
  ["Confirm", "We review the room count, surface condition, furniture, access details, and cleaning priority before confirming the visit."],
  ["Cleaning", "The team arrives with suitable tools and works through the agreed areas, including floors, bathrooms, kitchen, fabrics, glass, or office spaces."],
  ["Quality Check", "A supervisor or senior cleaner checks visible details, missed corners, high-touch areas, and customer priorities before closing the job."],
  ["Feedback", "After the service, we listen to your comments so the next booking can be faster, cleaner, and more convenient."],
];

const equipmentList = [
  ["Vacuum Equipment", "High-suction vacuum machines for dust, carpet fibers, sofas, mattresses, and daily floor buildup."],
  ["Steam Machine", "Steam cleaning support for selected deep cleaning, sofa cleaning, kitchen, bathroom, and sanitization tasks."],
  ["Fabric Shampoo Tools", "Upholstery-friendly tools for sofa cleaning Kuwait customers book for majlis seating, couches, chairs, and cushions."],
  ["Floor Care Supplies", "Mops, scrubbers, brushes, microfiber cloths, and surface-safe products for tile, marble, and hard floors."],
  ["Glass & Window Tools", "Squeegees, detail cloths, and glass cleaners for windows, partitions, balcony panels, and office glass."],
  ["Eco Friendly Chemicals", "Carefully selected cleaning liquids for kitchens, bathrooms, offices, homes, apartments, and villas."],
];

const teamMembers = [
  [
    "Cleaning Supervisor",
    "Coordinates arrival time, service checklist, cleaning priorities, and quality check for larger jobs.",
    "/services/cleaning-staff-kuwait-stock.jpg",
    "Free stock image of cleaning staff for Kuwait cleaning supervisor section",
  ],
  [
    "Home Cleaner",
    "Handles bedrooms, living rooms, kitchens, bathrooms, floors, furniture dusting, and regular home cleaning services.",
    "/services/house-cleaning-kuwait.jpg",
    "Home cleaner providing house cleaning service in Kuwait",
  ],
  [
    "Fabric Care Cleaner",
    "Works on sofa cleaning, carpet cleaning, mattress cleaning, stain care, and fabric freshness.",
    "/services/sofa-cleaning-kuwait.jpg",
    "Fabric care cleaner providing sofa cleaning service in Kuwait",
  ],
];

const beforeAfterItems = [
  ["Before", "Dusty floors, fingerprints on glass, kitchen grease, bathroom buildup, sofa stains, and rooms that feel heavy after daily use."],
  ["After", "Clearer surfaces, fresher seating, cleaner washrooms, brighter floors, organized rooms, and a property ready for family, staff, guests, or tenants."],
];

const trustProofItems = [
  [
    "Company License",
    "Business details are available for customers who want to confirm the company before booking a home, office, villa, or apartment cleaning service.",
    "Business details",
    "",
    "",
  ],
  [
    "Staff Uniform & Team",
    "Our cleaning visits are arranged with identifiable team members, clear communication, and supervision for larger residential and commercial jobs.",
    "Team photo",
    "/services/cleaning-staff-kuwait-stock.jpg",
    "Free stock image of uniformed cleaning staff for Kuwait cleaning service team",
  ],
  [
    "Customer Reviews",
    "Customer feedback helps us improve response time, cleaning detail, punctuality, and service quality across Kuwait governorates.",
    "5.0 customer feedback",
    "",
    "",
  ],
  [
    "Before After Gallery",
    "Recent cleaning results can be shared for sofa cleaning, deep cleaning, floor cleaning, bathroom cleaning, and move out cleaning requests.",
    "Gallery image",
    "/services/cleaning-team-illustration-kuwait.jpg",
    "Free stock illustration of cleaning team for before and after gallery section",
  ],
];

const beforeAfterGallery = [
  [
    "Kitchen Deep Cleaning",
    "Before: grease and marks around active cooking areas. After: cleaner counters, sink, tiles, appliance exteriors, and floor edges.",
    "/services/kitchen-cleaning-kuwait.jpg",
    "Kitchen deep cleaning before and after example in Kuwait",
  ],
  [
    "Sofa Cleaning",
    "Before: dust, daily use marks, and odor in fabric seating. After: fresher upholstery, brighter cushions, and cleaner majlis seating.",
    "/services/sofa-cleaning-kuwait.jpg",
    "Sofa cleaning before and after example in Kuwait",
  ],
  [
    "Bathroom Cleaning",
    "Before: soap buildup, floor marks, and dull fixtures. After: cleaner tiles, mirror, basin, toilet area, and washroom surfaces.",
    "/services/bathroom-cleaning-kuwait.jpg",
    "Bathroom cleaning before and after example in Kuwait",
  ],
];

const videoStoryboard = [
  "Team arrives and confirms rooms",
  "Equipment setup and surface check",
  "Cleaning in progress",
  "Before and after details",
  "Customer feedback and handover",
];

const areaDetails = [
  ["Al Asimah", "Cleaning service in Al Asimah is ideal for busy apartments, offices, shops, and family homes around Kuwait City. We help customers book office cleaning Kuwait City, apartment cleaning, sofa cleaning, window cleaning, and deep cleaning with clear timing and flexible visit plans."],
  ["Hawalli", "Cleaning service in Hawalli covers family apartments, villas, clinics, shops, and rental properties that need regular care or one-time deep cleaning. Customers in Salmiya, Jabriya, Rumaithiya, and nearby areas often book sofa cleaning Kuwait, house cleaning Kuwait, and carpet cleaning for high-use rooms."],
  ["Farwaniya", "Cleaning service in Farwaniya is close to our listed address, which helps many customers arrange fast bookings for apartments, homes, villas, offices, and move in move out cleaning. Our team can support tenants, owners, landlords, and small businesses that need reliable local cleaning help."],
  ["Ahmadi", "Cleaning service in Ahmadi is useful for villas, company offices, staff accommodation, apartments, and larger properties. We handle villa cleaning Kuwait, office cleaning services Kuwait, floor cleaning, bathroom cleaning, kitchen cleaning, and full deep cleaning for residential and commercial spaces."],
  ["Jahra", "Cleaning service in Jahra supports homes, apartments, buildings, and businesses that need practical cleaning without complicated booking. Customers can request house cleaning, deep cleaning services Kuwait, carpet care, mattress cleaning, and building cleaning with a team sized to the property."],
  ["Mubarak Al-Kabeer", "Cleaning service in Mubarak Al-Kabeer is available for family homes, apartments, villas, and small offices. We focus on careful room cleaning, kitchen and bathroom hygiene, sofa care, move-related cleaning, and affordable cleaning company Kuwait pricing."],
];

const houseCleaningAreas = [
  [
    "House Cleaning in Salmiya",
    "Salmiya homes and apartments often need regular cleaning because of daily family use, balcony dust, high-traffic living rooms, and busy rental schedules. Al Nawras Plus provides house cleaning in Salmiya for kitchens, bathrooms, bedrooms, floors, sofa areas, and move-ready apartments. Customers can book one-time cleaning, weekly home care, or deep cleaning before guests arrive.",
  ],
  [
    "House Cleaning in Hawally",
    "House cleaning in Hawally is useful for apartments, family homes, clinics, offices, and small commercial spaces that need dependable cleaning without long booking steps. Our team can clean rooms, floors, bathrooms, kitchen surfaces, glass, and high-touch areas. Hawally customers also book sofa cleaning, carpet cleaning, and deep cleaning when regular cleaning is not enough.",
  ],
  [
    "House Cleaning in Farwaniya",
    "Farwaniya is one of the main areas we serve, and many customers contact us for quick house cleaning, apartment cleaning, and villa cleaning. We help with dusty floors, kitchen grease, bathroom hygiene, bedroom cleaning, and living room organization. This service is suitable for families, tenants, landlords, and people preparing a property for handover.",
  ],
  [
    "House Cleaning in Mahboula",
    "Mahboula customers often need apartment cleaning, move in cleaning, move out cleaning, and deep cleaning for rented flats and family homes. Al Nawras Plus can prepare the right team based on the number of rooms, property condition, and required cleaning time. We focus on practical details such as floors, washrooms, kitchen marks, windows, and surfaces.",
  ],
  [
    "House Cleaning in Fahaheel",
    "House cleaning in Fahaheel is available for homes, villas, apartments, and staff accommodation that need careful cleaning after daily use or seasonal dust. Customers can request regular cleaning, deep cleaning, sofa cleaning, carpet cleaning, kitchen cleaning, and bathroom cleaning. We plan the visit around property size, service priority, and preferred schedule.",
  ],
];

const internalServiceLinks = [
  ["House Cleaning Kuwait", "/services/house-cleaning-kuwait"],
  ["Office Cleaning Kuwait", "/services/office-cleaning-kuwait"],
  ["Deep Cleaning Kuwait", "/services/deep-cleaning-kuwait"],
  ["Sofa Cleaning Kuwait", "/services/sofa-cleaning-kuwait"],
  ["Window Cleaning Kuwait", "/services/window-cleaning-kuwait"],
  ["Kitchen Cleaning Kuwait", "/services/kitchen-cleaning-kuwait"],
  ["Bathroom Cleaning Kuwait", "/services/bathroom-cleaning-kuwait"],
  ["Mattress Cleaning Kuwait", "/services/mattress-cleaning-kuwait"],
  ["Curtain Cleaning Kuwait", "/services"],
];

export const metadata = {
  title:
    "Trusted Cleaning Services in Kuwait | Same Day Home & Office Cleaning",
  description:
    "Book trusted cleaning services in Kuwait within minutes. Al Nawras Plus offers house cleaning, office cleaning, deep cleaning, sofa cleaning, apartment cleaning, villa cleaning, and move in move out cleaning with trained staff and affordable pricing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Trusted Cleaning Services in Kuwait | Al Nawras Plus",
    description:
      "Professional home, house, apartment, villa, office, sofa, and deep cleaning services across Kuwait governorates.",
    url: "/",
    siteName: "Al Nawras Plus",
    locale: "en_KW",
    type: "website",
  },
};

function Button({
  children,
  variant = "gold",
  href = "/contact",
  target,
  rel,
}) {
  const className = `inline-flex h-12 min-w-36 items-center justify-center gap-3 rounded-none px-7 text-sm font-bold shadow-[0_4px_14px_rgba(13,39,77,.18)] transition ${
    variant === "gold"
      ? "rounded-br-3xl bg-[#ffd366] text-[#092346] hover:bg-[#f8be43]"
      : "bg-[#0d274d] text-[#ffd366] hover:bg-[#082142]"
  }`;

  const isInternal = typeof href === "string" && href.startsWith("/");

  if (isInternal) {
    return (
      <Link className={className} href={href}>
        <span>←</span>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} href={href} target={target} rel={rel}>
      <span>←</span>
      {children}
    </a>
  );
}

function LogoBadge() {
  return (
    <Link href="/" className="block">
      <div className="grid h-36 w-36 place-items-center rounded-full border-[6px] border-white bg-[#050505] p-2 text-center shadow-[0_0_22px_rgba(255,255,255,.8)]">
        <div className="grid h-full w-full place-items-center rounded-full border border-[#f8be43]/60 bg-[radial-gradient(circle_at_50%_25%,#263d5e_0,#050505_58%)]">
          <div className="text-[13px] font-black leading-none text-[#f8be43]">
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

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Al Nawras Plus",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: testimonials.length.toString(),
      bestRating: "5",
    },
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: testimonial.text,
    })),
  };
  const cleaningServiceSchema = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: "Al Nawras Plus Cleaning Services Kuwait",
    url: "https://alnawraspluskuwait.com/",
    telephone: "+96595511354",
    email: "alnawraspluskuwait@gmail.com",
    description:
      "Cleaning services in Kuwait for house cleaning, office cleaning, deep cleaning, sofa cleaning, apartment cleaning, villa cleaning, carpet cleaning, kitchen cleaning, bathroom cleaning, window cleaning, mattress cleaning, and move in move out cleaning.",
    areaServed: [
      "Al Asimah",
      "Hawalli",
      "Farwaniya",
      "Ahmadi",
      "Jahra",
      "Mubarak Al-Kabeer",
      "Salmiya",
      "Mahboula",
      "Fahaheel",
    ].map((area) => ({
      "@type": "Place",
      name: area,
    })),
    serviceType: [
      "House Cleaning Kuwait",
      "Office Cleaning Kuwait",
      "Deep Cleaning Kuwait",
      "Sofa Cleaning Kuwait",
      "Apartment Cleaning Kuwait",
      "Villa Cleaning Kuwait",
      "Carpet Cleaning Kuwait",
      "Mattress Cleaning Kuwait",
      "Window Cleaning Kuwait",
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Al Nawras Plus",
      telephone: "+96595511354",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Farwaniya block 1 street 74 building 15",
        addressLocality: "Farwaniya",
        addressCountry: "KW",
      },
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://alnawraspluskuwait.com/",
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cleaningServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <header className="relative z-30">
        <div className="bg-[#0d274d] text-white shadow-[0_3px_8px_rgba(13,39,77,.35)]">
          <div
            className="ltr mx-auto grid min-h-[86px] max-w-6xl grid-cols-1 items-center gap-4 px-5 py-3 md:grid-cols-[150px_1fr_150px_180px]"
            dir="ltr"
          >
            <div className="hidden md:block" />
            <div className="space-y-2 text-center text-sm text-slate-100">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 ltr">
                <span>☎ +96595511354</span>
                <span>✉ alnawraspluskuwait@gmail.com</span>
              </div>
              <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 leading-6">
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
            className="ltr mx-auto flex min-h-[104px] max-w-6xl items-center justify-between gap-5 px-5"
            dir="ltr"
          >
            <div className="relative h-16 w-16 shrink-0 self-center md:hidden">
              <div className="absolute left-0 top-0 origin-top-left scale-50">
                <LogoBadge />
              </div>
            </div>
            <div className="relative hidden w-40 self-stretch md:block">
              <div className="absolute -top-14 left-0">
                <LogoBadge />
              </div>
            </div>

            <div
              className="flex flex-1 items-center justify-center gap-8"
              dir="ltr"
            >
              <Link
                className="inline-flex h-14 min-w-36 items-center justify-center border-2 border-[#0d274d] px-8 text-lg font-black text-[#0d274d] transition"
                href="/"
              >
                Home
              </Link>
              <ServiceMenu />
              <Link
                className="hidden text-lg font-bold text-[#0d274d] md:inline-flex"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="hidden text-lg font-bold text-[#0d274d] md:inline-flex"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="hidden text-lg font-bold text-[#0d274d] md:inline-flex"
                href="/about"
              >
                About
              </Link>
            </div>
            <MobileNav active="home" />

            <div className="hidden items-center gap-4 lg:flex" dir="ltr">
              <Button
                variant="outline"
                href="https://wa.me/96595511354"
                target="_blank"
                rel="noopener noreferrer"
              >
                Call Now
              </Button>
              <Button>Book Now</Button>
            </div>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative min-h-[690px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(231,235,238,.82), rgba(231,235,238,.82)), url('https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1900&q=80')",
        }}
      >
        <div className="bg-white py-4 text-center text-xl font-black text-[#86b77c] shadow-[0_5px_20px_rgba(13,39,77,.12)]">
          Flat 20% Discount on first order
        </div>
        <div className="mx-auto flex min-h-[620px] max-w-6xl items-center justify-center px-5 pb-24 pt-16">
          <div className="max-w-3xl text-center">
            <p className="mb-7 text-lg font-black text-[#1d6a29]">
              Cleaning Services in Kuwait
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#102b55] md:text-6xl">
              Trusted Home & Office Cleaning Services in Kuwait
            </h1>
            <h2 className="mt-10 text-2xl font-black text-[#102b55] md:text-3xl">
              Same Day Cleaning | Trained Staff | Affordable Pricing
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#213d63]">
              Book professional cleaning services anywhere in Kuwait within
              minutes. Al Nawras Plus helps families, tenants, landlords, offices,
              shops, clinics, and property managers arrange house cleaning Kuwait,
              office cleaning Kuwait, deep cleaning Kuwait, apartment cleaning
              Kuwait, villa cleaning Kuwait, sofa cleaning Kuwait, and move in
              move out cleaning with clear timing and friendly support.
            </p>
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
              {heroHighlights.map((highlight) => (
                <span
                  className="border border-[#ffd366] bg-white/80 px-4 py-2 text-sm font-black text-[#0d274d] shadow-sm"
                  key={highlight}
                >
                  {highlight}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button>Book Now</Button>
              <Button
                variant="outline"
                href="https://wa.me/96595511354"
                target="_blank"
                rel="noopener noreferrer"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 overflow-hidden">
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 75 C140 35 255 120 400 78 C555 32 680 25 840 75 C1000 125 1125 42 1270 65 C1350 78 1400 90 1440 82 L1440 120 L0 120 Z"
              fill="#ffffff"
            />
            <path
              d="M70 68 C170 58 225 95 335 85 M650 54 C705 42 760 43 815 58 M1130 64 C1200 45 1260 73 1330 62"
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeWidth="4"
            />
            <path
              d="M285 92 C410 112 485 52 610 78 M930 92 C1040 116 1110 64 1228 82"
              fill="none"
              stroke="#cfd3d8"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>

      <section className="bg-white px-5 py-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[1fr_1.2fr]">
          <div className="bg-[#0d274d] p-7 text-white shadow-sm">
            <p className="text-sm font-black text-[#ffd366]">
              First Order Cleaning Offer
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Save 20% on Your First Booking
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-100">
              Use the offer for home cleaning, deep cleaning, sofa cleaning,
              apartment cleaning, villa cleaning, or office cleaning when a slot is
              available in your area.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {experienceStats.map(([value, label]) => (
              <div
                className="border border-[#e8edf3] bg-[#fff9e8] p-6 text-center shadow-sm"
                key={value}
              >
                <strong className="block text-3xl font-black text-[#0d274d]">
                  {value}
                </strong>
                <span className="mt-3 block text-sm font-bold leading-6 text-[#5e7189]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1fr_1.05fr]">
          <div className="order-2 text-center md:order-1">
            <Image
              alt="Al Nawras Plus professional cleaning services in Kuwait for homes apartments villas and offices"
              className="mx-auto h-[350px] w-full max-w-[540px] rounded-2xl object-cover shadow-sm"
              height={350}
              priority
              src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&fit=crop&w=1100&q=80"
              width={540}
            />
            <div className="mt-12 inline-flex overflow-hidden rounded-br-[32px] rounded-tl-[32px] shadow-[0_0_20px_rgba(118,97,255,.28)]">
              <Link
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-[#ffd366] px-8 text-lg font-black text-[#092346]"
                href="/contact"
              >
                <span>←</span>
                Book Now
              </Link>
              <a
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-[#0d274d] px-8 text-lg font-black text-[#ffd366]"
                href="https://wa.me/96595511354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>←</span>
                Call Now
              </a>
            </div>
          </div>

          <div className="order-1 text-center md:order-2 md:text-right">
            <p className="text-2xl font-black text-[#24882e]">Committed!</p>
            <h2 className="mt-7 text-4xl font-black leading-tight text-[#102b55] md:text-6xl">
              Trusted Cleaning Experts in Kuwait
            </h2>
            <p className="mt-10 text-lg leading-9 text-[#18365e]">
              When people search for professional cleaning services or an affordable
              cleaning company Kuwait can trust, they want more than a quick surface
              clean. They want a team that understands dust, humidity, daily family
              use, office traffic, fabric stains, kitchen grease, bathroom hygiene,
              and the small details that make a place feel fresh. Al Nawras Plus
              provides residential cleaning Kuwait, commercial cleaning, villa
              cleaning Kuwait, apartment cleaning, and building cleaning Kuwait with
              practical methods, careful staff, and clear communication.
            </p>
            <div className="mt-9 grid overflow-hidden rounded-bl-[28px] rounded-tr-[28px] border border-[#f1dc97] bg-white text-center shadow-sm md:max-w-xl md:grid-cols-3">
              {experienceStats.map(([value, label], index) => (
                <div
                  className="border-b border-[#c7cbd1] px-7 py-5 last:border-b-0 md:border-b-0 md:border-l-4 md:last:border-l-0"
                  key={value + label + index}
                >
                  <strong className="block text-4xl font-black text-[#18365e]">
                    {value}
                  </strong>
                  <span className="mt-2 block text-base leading-6 text-[#8b8f96]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#fff4d8] px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="section-title-line text-sm font-bold text-[#f0a600]">
            Professional Cleaning Services Kuwait
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#0d274d]">
            Practical Cleaning Help for Kuwait Homes, Villas & Workplaces
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#4c5d76]">
            Share your area, property size, and the parts of the space that feel
            hardest to keep clean. Al Nawras Plus prepares the visit around your
            exact request, from family rooms and rental flats to majlis seating,
            office pantries, washrooms, kitchens, dusty floors, glass, carpets,
            and pre-handover cleaning.
          </p>

          <div className="services-slider ltr mx-auto mt-16 max-w-5xl overflow-hidden">
            <div className="services-track flex w-max gap-10">
              {[...services, ...services].map((service, index) => (
                <Link
                  aria-label={`View ${service.title} service details`}
                  className="block w-[320px] shrink-0 bg-white text-left shadow-[0_10px_22px_rgba(13,39,77,.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(13,39,77,.14)] md:w-[470px]"
                  href={service.href}
                  key={service.title + index}
                >
                  <Image
                    alt={service.alt}
                    className="h-48 w-full object-cover md:h-56"
                    height={224}
                    src={service.image}
                    width={470}
                  />
                  <div className="p-8" dir="ltr">
                    <h3 className="border-l-2 border-[#0d274d] pl-5 text-2xl font-black text-[#0d274d]">
                      {service.title}
                    </h3>
                    <p className="mt-7 text-lg leading-8 text-[#828b98]">
                      {service.text}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16">
<Link
              className="inline-flex h-12 min-w-36 items-center justify-center gap-3 rounded-br-3xl bg-[#ffd366] px-7 text-sm font-bold text-[#092346] shadow-[0_4px_14px_rgba(13,39,77,.18)] transition hover:bg-[#f8be43]"
              href="/services"
            >
          <span> All Services</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0d274d] px-5 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="section-title-line text-3xl font-black">
              Why Choose Us
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100">
              A cleaning company should be easy to contact, careful inside your
              property, and honest about what the team can do. Al Nawras Plus
              builds each visit around trained staff, supervised cleaning, suitable
              products, and a practical checklist for the service you book. That
              matters whether you need a small apartment cleaned before guests, a
              villa cleaned after a family event, or an office prepared before the
              next working day.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {reasons.map(([title, text]) => (
                <div key={title}>
                  <div className="mb-3 text-2xl text-[#f8be43]">✦</div>
                  <h3 className="font-bold text-[#f8be43]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustSignals.map(([title, text]) => (
                <article
                  className="border border-white/15 bg-white/5 p-4"
                  key={title}
                >
                  <h3 className="font-black text-[#ffd366]">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-200">
                    {text}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-8 inline-flex overflow-hidden rounded-br-[32px] rounded-tl-[32px] shadow-[0_0_18px_rgba(255,211,102,.55)]">
              <a
                className="inline-flex h-12 min-w-36 items-center justify-center gap-3 border-2 border-[#f8be43] bg-white px-7 text-sm font-bold text-[#0d274d] transition hover:bg-slate-50"
                href="https://wa.me/96595511354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>←</span>
                Call Now
              </a>
              <Link
                className="inline-flex h-12 min-w-36 items-center justify-center gap-3 bg-[#ffd366] px-7 text-sm font-bold text-[#092346] transition hover:bg-[#f8be43]"
                href="/contact"
              >
                <span>←</span>
                Book Now
              </Link>
            </div>
          </div>
          <Image
            alt="Professional cleaning staff for residential and commercial cleaning in Kuwait"
            className="h-full min-h-72 w-full rounded-lg object-cover"
            height={288}
            src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&fit=crop&w=1000&q=80"
            width={380}
          />
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-title-line text-sm font-bold text-[#f0a600]">
                Home, House & Commercial Cleaning
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight text-[#0d274d] md:text-5xl">
                Cleaning Service in Kuwait Built Around Your Space
              </h2>
              <p className="mt-7 text-base leading-8 text-[#4c5d76]">
                Every property has a different cleaning need. A family home may
                need regular dusting, floor care, kitchen cleaning, and bathroom
                sanitization. A villa may need a larger team for rooms, stairs,
                halls, windows, chandeliers, and outdoor-access areas. An
                apartment may need compact but detailed cleaning before guests,
                after renovation, or before a tenant moves in. An office needs a
                clean reception, desks, pantry, washrooms, and high-touch surfaces
                so staff and visitors feel comfortable.
              </p>
              <p className="mt-5 text-base leading-8 text-[#4c5d76]">
                Al Nawras Plus brings these needs together in one professional
                cleaning service in Kuwait. We help customers who search for
                cleaning service near me, house cleaning services Kuwait, home
                cleaning services, residential cleaning Kuwait, apartment cleaning
                Kuwait, villa cleaning services, office cleaning services Kuwait,
                and deep cleaning services Kuwait. Our goal is simple: clean the
                right areas, use suitable products, respect your time, and leave
                your space ready to use.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                [
                  "For Homes & Villas",
                  "House cleaning services and villa cleaning services for bedrooms, living rooms, kitchens, bathrooms, floors, doors, surfaces, and everyday family spaces.",
                ],
                [
                  "For Apartments",
                  "Apartment cleaning Kuwait for studios, flats, rentals, furnished apartments, new tenants, landlords, and property managers.",
                ],
                [
                  "For Offices",
                  "Office cleaning services Kuwait for reception areas, workstations, meeting rooms, pantries, washrooms, floors, and high-touch points.",
                ],
                [
                  "For Deep Cleaning",
                  "Deep cleaning services Kuwait for seasonal cleaning, post-event cleaning, move in move out cleaning, dusty spaces, and detailed hygiene work.",
                ],
              ].map(([title, text]) => (
                <article
                  className="border border-[#e8edf3] bg-[#f8fafc] p-6 shadow-sm"
                  key={title}
                >
                  <h3 className="text-xl font-black text-[#0d274d]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5e7189]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-t border-[#e9edf2] pt-14 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-black text-[#0d274d]">
                What We Clean
              </h3>
              <p className="mt-5 text-base leading-8 text-[#4c5d76]">
                Our team can clean floors, bathrooms, kitchens, bedrooms, living
                rooms, majlis seating, sofas, carpets, windows, glass, balconies,
                office desks, pantry areas, corridors, common areas, and fixtures.
                Sofa cleaning services and carpet cleaning are available as
                separate services or as part of a larger deep clean.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#0d274d]">
                When To Book
              </h3>
              <p className="mt-5 text-base leading-8 text-[#4c5d76]">
                Book regular cleaning for daily comfort, deep cleaning when dust
                and buildup need extra attention, move in move out cleaning before
                handover, and office cleaning on a daily, weekly, monthly, or
                one-time schedule. Same day cleaning service may be available when
                the team schedule allows.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#0d274d]">
                How Pricing Works
              </h3>
              <p className="mt-5 text-base leading-8 text-[#4c5d76]">
                As an affordable cleaning company Kuwait customers can contact
                easily, we keep pricing based on the service type, property size,
                number of rooms, condition, cleaning materials, and preferred time.
                Share your location and photos when possible for a faster quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="section-title-line text-sm font-bold text-[#f0a600]">
              Cleaning Process
            </p>
            <h2 className="mt-5 text-3xl font-black text-[#0d274d] md:text-5xl">
              From Booking to Final Quality Check
            </h2>
            <p className="mt-7 text-base leading-8 text-[#4c5d76]">
              A clear process helps customers know what will happen before our
              team arrives. It also helps us avoid missed details. For house
              cleaning Kuwait, office cleaning Kuwait, deep cleaning Kuwait, sofa
              cleaning Kuwait, and apartment cleaning Kuwait, we follow a simple
              workflow that keeps communication, timing, and service quality easy
              to understand.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {cleaningProcess.map(([title, text], index) => (
              <article
                className="border border-[#dfe7f0] bg-white p-6 shadow-sm"
                key={title}
              >
                <span className="grid h-10 w-10 place-items-center bg-[#ffd366] text-sm font-black text-[#0d274d]">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-black text-[#0d274d]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5e7189]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-title-line text-sm font-bold text-[#f0a600]">
              Equipment & Materials
            </p>
            <h2 className="mt-5 text-3xl font-black text-[#0d274d] md:text-5xl">
              Tools Chosen for Kuwait Homes and Offices
            </h2>
            <p className="mt-7 text-base leading-8 text-[#4c5d76]">
              Cleaning is not only about sending people with mops. Good results
              depend on matching the right equipment with the surface and the
              problem. Dust in carpets, oil in kitchens, water marks on glass,
              stains on sofas, and bathroom buildup all need different handling.
              Our team brings practical cleaning tools, microfiber cloths, vacuum
              support, steam machine support, floor care supplies, fabric shampoo
              tools, and eco friendly chemicals selected for the job.
            </p>
            <div className="mt-8">
              <Image
                alt="Vacuum cleaning equipment for professional cleaning services in Kuwait"
                className="h-72 w-full rounded-lg object-cover shadow-sm"
                height={288}
                src="/services/vacuum-cleaning-equipment-kuwait.jpg"
                width={540}
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {equipmentList.map(([title, text]) => (
              <article
                className="border border-[#e8edf3] bg-[#fff9e8] p-6"
                key={title}
              >
                <h3 className="text-lg font-black text-[#0d274d]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5e7189]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff4d8] px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="section-title-line text-sm font-bold text-[#f0a600]">
                Meet Our Team
              </p>
              <h2 className="mt-5 text-3xl font-black text-[#0d274d] md:text-5xl">
                Supervisors and Cleaners With Practical Field Experience
              </h2>
              <p className="mt-7 text-base leading-8 text-[#4c5d76]">
                Customers trust a cleaning company when they understand who is
                entering the property. Our work is arranged around supervisors,
                home cleaners, fabric care cleaners, and support staff who know how
                to move through rooms carefully. For larger jobs, the supervisor
                helps confirm priorities, divide the work, and review the finished
                areas before the team leaves.
              </p>
            </div>

            <div className="grid gap-5">
              {teamMembers.map(([title, text, image, alt]) => (
                <article
                  className="grid gap-5 bg-white p-5 shadow-sm sm:grid-cols-[150px_1fr]"
                  key={title}
                >
                  <Image
                    alt={alt}
                    className="h-36 w-full object-cover sm:h-full"
                    height={150}
                    src={image}
                    width={150}
                  />
                  <div>
                  <h3 className="text-xl font-black text-[#0d274d]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5e7189]">
                    {text}
                  </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {beforeAfterItems.map(([title, text]) => (
              <article
                className="bg-white p-8 shadow-sm"
                key={title}
              >
                <h3 className="text-2xl font-black text-[#9b1b1f]">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#4c5d76]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="section-title-line text-sm font-bold text-[#f0a600]">
              Trust & Service Proof
            </p>
            <h2 className="mt-5 text-3xl font-black text-[#0d274d] md:text-5xl">
              Clear Signals Before You Book a Cleaning Team
            </h2>
            <p className="mt-7 text-base leading-8 text-[#4c5d76]">
              Customers want to know who is entering their home, office, apartment,
              or villa. This section highlights the trust details people commonly
              check before booking a professional cleaning company in Kuwait:
              business information, team identification, customer feedback, and
              visible cleaning results.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {trustProofItems.map(([title, text, label, image, alt]) => (
              <article
                className="border border-[#e8edf3] bg-[#f8fafc] p-6 shadow-sm"
                key={title}
              >
                {image ? (
                  <Image
                    alt={alt}
                    className="h-36 w-full object-cover"
                    height={144}
                    src={image}
                    width={260}
                  />
                ) : (
                  <div className="grid h-36 place-items-center bg-white text-center text-sm font-black uppercase tracking-wide text-[#0d274d] shadow-inner">
                    {label}
                  </div>
                )}
                <h3 className="mt-5 text-lg font-black text-[#0d274d]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5e7189]">
                  {text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-black text-[#0d274d]">
              Before & After Cleaning Results
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#4c5d76]">
              Review the type of improvement customers expect from detailed
              cleaning work. For final project photos, our team can share recent
              examples during booking when available.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {beforeAfterGallery.map(([title, text, image, alt]) => (
                <article className="bg-[#fff9e8] shadow-sm" key={title}>
                  <Image
                    alt={alt}
                    className="h-56 w-full object-cover"
                    height={224}
                    src={image}
                    width={370}
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-black text-[#0d274d]">
                      {title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[#5e7189]">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d274d] px-5 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="section-title-line text-sm font-bold text-[#ffd366]">
              Cleaning Video Preview
            </p>
            <h2 className="mt-5 text-3xl font-black md:text-5xl">
              A One Minute Look at How We Prepare a Property
            </h2>
            <p className="mt-7 text-base leading-8 text-slate-100">
              A short service video can help customers see the team, tools, and
              cleaning flow before booking. A 30 to 60 second video can show team
              arrival, equipment setup, room cleaning, before and after details,
              and customer handover in a simple, confidence-building format.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {videoStoryboard.map((step) => (
                <div
                  className="border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-slate-100"
                  key={step}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="mt-8 inline-flex overflow-hidden rounded-br-[32px] rounded-tl-[32px] shadow-[0_0_18px_rgba(255,211,102,.45)]">
              <Link
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-[#ffd366] px-8 text-lg font-black text-[#092346]"
                href="/contact"
              >
                <span>←</span>
                Book Now
              </Link>
              <a
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-white px-8 text-lg font-black text-[#0d274d]"
                href="https://wa.me/96595511354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>←</span>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-black shadow-[0_18px_35px_rgba(0,0,0,.28)]">
            <Image
              alt="Video preview for Al Nawras Plus cleaning process in Kuwait"
              className="absolute inset-0 h-full w-full object-cover opacity-75"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              src="/services/office-cleaning-kuwait.jpg"
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-[#ffd366] text-3xl font-black text-[#0d274d]">
                ▶
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white px-5 pb-20 pt-14 text-center">
        <div
          className="absolute inset-x-0 top-0 h-[260px] bg-[#f1f1f1] bg-cover bg-right opacity-95"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(241,241,241,.96), rgba(241,241,241,.8)), url('https://images.unsplash.com/photo-1580493113011-ad79f792a2f8?auto=format&fit=crop&w=1400&q=80')",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <p className="section-title-line justify-center text-lg font-normal text-[#0d274d]">
              Clients <span className="font-black">Love</span>
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#0d274d]">
              Customer Reviews for Cleaning Services in Kuwait
            </h2>
            <p className="mt-3 text-sm font-bold text-[#0d274d]">
              ★★★★★ 5.0 average from {testimonials.length} homepage reviews
            </p>
          </div>

          <div className="testimonial-slider ltr mx-auto mt-8 max-w-3xl overflow-hidden">
            <div className="testimonial-track flex w-max gap-5">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <article
                  className="relative min-h-[178px] w-[330px] shrink-0 rounded-sm bg-white p-8 text-left shadow-[0_8px_25px_rgba(13,39,77,.08)] md:w-[370px]"
                  dir="ltr"
                  key={testimonial.name + index}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#0d274d] text-sm font-black text-[#ffd366]">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="text-xl tracking-[4px] text-[#f8be43]">
                    ★★★★★
                  </div>
                  <p className="mt-6 text-sm leading-7 text-[#687486]">
                    {testimonial.text}
                  </p>
                  <strong className="mt-7 block text-sm text-black">
                    — {testimonial.name}
                  </strong>
                  <span className="mt-1 block text-xs font-bold text-[#8b8f96]">
                    {testimonial.service}
                  </span>
                  <span className="absolute bottom-6 left-7 text-5xl leading-none text-[#d9ecfb]">
                    ”
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-between gap-5 bg-[#0d274d] px-6 py-6 text-white shadow-[0_12px_25px_rgba(13,39,77,.12)] md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm font-black text-[#ffd366]">
                Ready for a cleaner space?
              </p>
              <p className="mt-1 text-base leading-7 text-slate-100">
                Send your location, property type, and preferred time for a quick
                quote.
              </p>
            </div>
            <div className="inline-flex overflow-hidden rounded-br-[22px] rounded-tl-[22px] shadow-[0_0_12px_rgba(13,39,77,.16)]">
              <Link
                className="inline-flex h-9 min-w-28 items-center justify-center gap-2 bg-[#ffd366] px-4 text-xs font-bold text-[#092346]"
                href="/contact"
              >
                <span>←</span>
                Book Now
              </Link>
              <a
                className="inline-flex h-9 min-w-28 items-center justify-center gap-2 bg-[#0d274d] px-4 text-xs font-bold text-[#ffd366]"
                href="https://wa.me/96595511354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>←</span>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff4d8] px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12">
          <div className="text-center md:text-left">
            <div className="inline-block">
              <h2 className="section-title-line justify-center text-3xl font-normal text-[#697486] md:justify-start">
                Governorates{" "}
                <span className="font-black text-[#0d274d]">We Cover</span>
              </h2>
              <div className="mt-2 h-3 w-full bg-[#a8a5a0]">
                <div className="h-full w-24 bg-[#0d274d]" />
              </div>
            </div>

            <h3 className="mt-16 text-2xl font-black text-[#c72424]">
              Local Cleaning Services Across Kuwait
            </h3>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#4c5d76] md:mx-0">
              We deliver professional cleaning services in all governorates of
              Kuwait. Whether you need cleaning service in Al Asimah, cleaning
              service in Hawalli, cleaning service in Farwaniya, cleaning service
              in Ahmadi, cleaning service in Jahra, or cleaning service in Mubarak
              Al-Kabeer, our team can plan the right visit for your home, apartment,
              villa, office, shop, or building.
            </p>

            <ul className="mx-auto mt-10 grid max-w-6xl gap-3 text-left text-sm font-black leading-7 text-[#243955] md:mx-0 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Cleaning service in Al Asimah / Capital Governorate for homes, offices, and apartments",
                "Cleaning service in Hawalli for house cleaning, sofa cleaning, and deep cleaning",
                "Cleaning service in Farwaniya for residential cleaning, villas, and rentals",
                "Cleaning service in Mubarak Al-Kabeer for apartments, homes, and offices",
                "Cleaning service in Ahmadi for villa cleaning, office cleaning, and building cleaning",
                "Cleaning service in Jahra for deep cleaning, move in move out cleaning, and regular cleaning",
              ].map((area) => (
                <li
                  className="border border-[#ead9aa] bg-white/70 p-4"
                  key={area}
                >
                  <span className="text-[#87919d]">◎</span> {area}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
              {areaDetails.map(([area, text]) => (
                <article className="bg-white p-5 shadow-sm" key={area}>
                  <h4 className="text-lg font-black text-[#0d274d]">
                    {area}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-[#5e7189]">
                    {text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 text-left">
              <h3 className="text-2xl font-black text-[#0d274d]">
                House Cleaning in Popular Kuwait Areas
              </h3>
              <p className="mt-5 text-base leading-8 text-[#4c5d76]">
                Customers often search by area when they need a cleaner quickly.
                These local house cleaning pages and descriptions help users find
                the right service for Salmiya, Hawally, Farwaniya, Mahboula, and
                Fahaheel without reading through unrelated content.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {houseCleaningAreas.map(([title, text]) => (
                  <article className="bg-white p-6 shadow-sm" key={title}>
                    <h4 className="text-xl font-black text-[#9b1b1f]">
                      {title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[#5e7189]">
                      {text}
                    </p>
                    <Link
                      className="mt-4 inline-flex text-sm font-black text-[#0d274d] underline"
                      href="/services/house-cleaning-kuwait"
                    >
                      View House Cleaning Service
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12 inline-flex overflow-hidden rounded-br-[32px] rounded-tl-[32px] shadow-[0_0_18px_rgba(255,211,102,.45)]">
              <Link
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-[#ffd366] px-8 text-lg font-black text-[#092346]"
                href="/contact"
              >
                <span>←</span>
                Book Now
              </Link>
              <a
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-[#0d274d] px-8 text-lg font-black text-[#ffd366]"
                href="https://wa.me/96595511354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>←</span>
                Call Now
              </a>
            </div>
          </div>

          <article className="rounded-[28px] border border-[#e3d6b7] bg-white/80 p-8 text-left shadow-[0_0_18px_rgba(13,39,77,.18)] md:p-12">
            <h2 className="text-3xl font-black leading-tight text-[#9b1b1f]">
              Professional Cleaning Company in Kuwait
            </h2>
            <p className="mt-8 text-base leading-8 text-[#6d6d6d]">
              At Al Nawras Plus, we offer fast, organized, and professional cleaning
              services in Kuwait for people who want a clean property without
              stress. From Kuwait City and Farwaniya to Hawalli, Ahmadi, Jahra,
              and Mubarak Al-Kabeer, we focus on clear booking, trained cleaners,
              suitable cleaning products, and consistent hygiene standards.
            </p>

            <h3 className="mt-8 text-2xl font-black text-[#1d6a29]">
              Serving Popular Areas in Kuwait
            </h3>
            <p className="mt-8 text-base font-bold leading-8 text-[#6d6d6d]">
              Abdullah Al-Salem, Adailiya, Bneid Al-Qar, Daiya, Dasma, Faiha,
              Jaber Al-Ahmad, Kaifan, Khaldiya, Mansouriya, Nuzha, Qadisiya,
              Qurtuba, Rawda, Shamiya, Surra, Yarmouk, Rabia, Ishbiliya,
              Abdullah Al-Mubarak, Sabah Al-Nasser, Firdous, Rumaithiya,
              Salmiya, Salwa, Shaab, Shuhada, Bayan, Hawally, Hitteen, Jabriya.
            </p>

            <div className="mt-8 border-t border-[#d8d2c8] pt-8">
              {[
                [
                  "Same Day Cleaning Service Available",
                  "Same day cleaning service Kuwait customers can request for urgent home, office, apartment, and villa cleaning needs when slots are available."],
                [
                  "Residential & Commercial Coverage",
                  "From homes, villas, and apartments to offices, shops, clinics, and buildings in Kuwait City, Farwaniya, Hawalli, Salmiya, Ahmadi, and Jahra, we handle each job professionally."],
                [
                  "Detailed & Hygienic Cleaning",
                  "Every visit focuses on practical detail, cleaner surfaces, better hygiene, and eco-friendly products suitable for healthy spaces."],
              ].map((group) => (
                <div className="mt-8 first:mt-0" key={group[0]}>
                  <h4 className="text-lg font-black text-[#b14f24]">
                    ✓ {group[0]}
                  </h4>
                  <p className="mt-2 text-base leading-8 text-[#5e7189]">
                    {group[1]}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="section-title-line text-sm font-bold text-[#f0a600]">
              Popular Searches & Service Pages
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#0d274d]">
              Cleaning Services Near You in Kuwait
            </h2>
            <p className="mt-5 text-base leading-8 text-[#4c5d76]">
              Find local cleaning help for Kuwait City, Farwaniya, Hawalli,
              Salmiya, Ahmadi, Jahra, and nearby areas. These quick links help
              customers reach the most relevant cleaning service or booking page,
              while also connecting the homepage to detailed pages for house
              cleaning, office cleaning, deep cleaning, sofa cleaning, window
              cleaning, kitchen cleaning, bathroom cleaning, mattress cleaning,
              and curtain cleaning requests.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {internalServiceLinks.map(([keyword, href]) => (
              <Link
                className="border border-[#dfe7f0] bg-white px-4 py-4 text-sm font-black text-[#0d274d] shadow-sm transition hover:border-[#ffd366] hover:bg-[#fff9e8]"
                href={href}
                key={keyword}
              >
                {keyword}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {localSeoKeywords.map(([keyword, href]) => (
              <Link
                className="border border-[#ffd366] bg-[#fff9e8] px-4 py-3 text-sm font-black text-[#0d274d] transition hover:bg-[#ffd366]"
                href={href}
                key={keyword}
              >
                {keyword}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-5xl font-black text-emerald-800">
            📌 FAQ
          </h2>
          <div className="mt-14 grid gap-x-24 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                className="border-b-2 border-slate-200 py-5 text-right"
                key={faq.question}
              >
                <h3 className="text-xl font-black leading-8 text-[#243955]">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm font-bold leading-7 text-[#687486]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#0d274d] px-5 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-base font-black text-[#ffd366]">Let’s talk</p>
            <h2 className="mt-8 text-2xl font-black text-white">
              Clean, fresh, and flawless
            </h2>
            <p className="mt-8 text-3xl font-black leading-tight text-[#ffd366]">
              Your space is about to shine like never before.
            </p>

            <div className="mt-10 inline-flex overflow-hidden rounded-br-[32px] rounded-tl-[32px] shadow-[0_0_18px_rgba(255,211,102,.5)]">
              <Link
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-[#ffd366] px-8 text-lg font-black text-[#092346]"
                href="/contact"
              >
                <span>←</span>
                Book Now
              </Link>
              <a
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-white px-8 text-lg font-black text-[#0d274d]"
                href="https://wa.me/96595511354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>←</span>
                Call Now
              </a>
            </div>
          </div>

          <div
            className="ltr mt-32 grid gap-14 md:grid-cols-[1.15fr_.8fr_1fr_1.35fr]"
            dir="ltr"
          >
            <div className="text-left">
              <LogoBadge />
<p className="mt-8 max-w-sm text-base leading-8 text-white">
                Al Nawras Plus is a cleaning company Kuwait customers trust for
                professional cleaning services, house cleaning, office cleaning,
                sofa cleaning, apartment cleaning, carpet cleaning, and deep cleaning
                across Al Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and
                Mubarak Al-Kabeer Governorates with affordable prices.
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
              <h3 className="text-2xl font-black text-[#ffd366]">
                Quick links
              </h3>

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

            <div className="text-left">
              <h3 className="text-2xl font-black text-[#ffd366]">
                Contact information
              </h3>
              <p className="mt-8 text-base leading-8 text-white ltr">
                Farwaniya block 1 street 74 building 15
              </p>
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-black leading-tight text-[#ffd366]">
                Subscribe for special offers
              </h3>
              <p className="mt-8 text-base leading-8 text-white">
                Subscribe to receive exclusive cleaning tips, special offers,
                and the latest updates on our professional services.
              </p>
              <form className="mt-10 flex items-end gap-0">
                <label className="sr-only" htmlFor="footer-email">
                  Email Address
                </label>
                <input
                  className="h-14 min-w-0 flex-1 border-b-2 border-[#ffd366] bg-transparent px-3 text-left text-base text-white outline-none placeholder:text-[#ffd366]"
                  id="footer-email"
                  placeholder="Email Address"
                  type="email"
                />
                <button
                  className="h-14 rounded-full bg-[#ffd366] px-8 text-sm font-black leading-5 text-[#0d274d]"
                  type="button"
                >
                  Get a
                  <br />
                  Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <a
        aria-label="Chat with Al Nawras Plus on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-2xl text-white shadow-[0_10px_24px_rgba(13,39,77,.28)] transition hover:scale-105"
        href="https://wa.me/96595511354"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    </main>
  );
}
