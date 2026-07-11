import Link from "next/link";
import Image from "next/image";
import TranslateWidget from "./TranslateWidget";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ServiceMenu from "./components/ServiceMenu";

const services = [
  {
    title: "House Cleaning",
    image: "/services/house-cleaning.jpg",
    href: "/services/house-cleaning-kuwait",
    alt: "House cleaning service in Kuwait for homes and villas",
    text: "House Cleaning Kuwait for spotless homes and villas in Farwaniya, Hawalli, and nearby areas.",
  },
  {
    title: "Sofa Cleaning",
    image: "/services/sofa-cleaning.jpg",
    href: "/services/sofa-cleaning-kuwait",
    alt: "Sofa cleaning service in Kuwait for fabric sofas and majlis seating",
    text: "Sofa Cleaning Kuwait with shampoo care for homes in Al Asimah, Hawalli, and Salmiya.",
  },
  {
    title: "Office Cleaning",
    image: "/services/office-cleaning.jpg",
    href: "/services/office-cleaning-kuwait",
    alt: "Office cleaning service in Kuwait for companies and workplaces",
    text: "Office Cleaning Kuwait for companies in Kuwait City, Farwaniya, Ahmadi, and Jahra.",
  },
  {
    title: "Apartment Cleaning",
    image: "/services/apartment-cleaning.jpg",
    href: "/services/apartment-cleaning-kuwait",
    alt: "Apartment cleaning service in Kuwait for flats and rentals",
    text: "Apartment Cleaning Kuwait for flats and rentals across Farwaniya, Hawalli, and Mubarak Al-Kabeer.",
  },
  {
    title: "Carpet Cleaning",
    image: "/services/carpet-cleaning.jpg",
    href: "/services/carpet-cleaning-kuwait",
    alt: "Carpet cleaning service in Kuwait for rugs and carpets",
    text: "Carpet Cleaning Kuwait for fresh rugs and cleaner floors across Kuwait governorates.",
  },
  {
    title: "Window Cleaning",
    image: "/services/window-cleaning.jpg",
    href: "/services/window-cleaning-kuwait",
    alt: "Window cleaning service in Kuwait for homes and offices",
    text: "Crystal-clear window cleaning services for homes, offices, and buildings in Kuwait.",
  },
  {
    title: "Floor Cleaning",
    image: "/services/floor-cleaning.jpg",
    href: "/services/floor-cleaning-kuwait",
    alt: "Floor cleaning and polishing service in Kuwait",
    text: "Expert floor cleaning and polishing services in Al Asimah, Farwaniya, Hawalli, and Ahmadi.",
  },
  {
    title: "Kitchen Cleaning",
    image: "/services/kitchen-cleaning.jpg",
    href: "/services/kitchen-cleaning-kuwait",
    alt: "Kitchen cleaning service in Kuwait with grease removal",
    text: "Detailed kitchen cleaning in Kuwait with grease removal for homes and commercial kitchens.",
  },
  {
    title: "Bathroom Cleaning",
    image: "/services/bathroom-cleaning.jpg",
    href: "/services/bathroom-cleaning-kuwait",
    alt: "Bathroom cleaning service in Kuwait for homes and offices",
    text: "Sanitized bathroom cleaning service for hygienic homes, apartments, and offices in Kuwait.",
  },
  {
    title: "Deep Cleaning",
    image: "/services/deep-cleaning.jpg",
    href: "/services/deep-cleaning-kuwait",
    alt: "Deep cleaning service in Kuwait for homes offices and villas",
    text: "Deep Cleaning Kuwait for homes, villas, apartments, offices, and buildings in every governorate.",
  },
  {
    title: "Move In / Move Out Cleaning",
    image: "/services/move-cleaning.jpg",
    href: "/services/move-in-move-out-cleaning-kuwait",
    alt: "Move in and move out cleaning service in Kuwait",
    text: "Specialized move in and move out cleaning service for tenants and landlords in Kuwait.",
  },
  {
    title: "Janitorial Service",
    image: "/services/janitorial-cleaning.jpg",
    href: "/services/janitorial-services-kuwait",
    alt: "Janitorial cleaning service in Kuwait for offices and facilities",
    text: "Reliable janitorial services for offices, buildings, clinics, and facilities across Kuwait.",
  },
  {
    title: "Chandelier Cleaning",
    image: "/services/chandelier-cleaning.jpg",
    href: "/services/chandelier-cleaning-kuwait",
    alt: "Chandelier cleaning service in Kuwait for villas and halls",
    text: "Careful chandelier and decorative light fixture cleaning for villas, homes, and halls in Kuwait.",
  },
];

const reasons = [
  [
    "Skilled Experts",
    "A trained team for home and office cleaning with care and attention.",
  ],
  [
    "Fast & Reliable Service",
    "We arrive on time and work with clear quality standards.",
  ],
  [
    "Eco-Friendly Products",
    "Safe cleaning supplies for daily use inside your home.",
  ],
  [
    "Available Across Kuwait",
    "We serve Al Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer Governorates.",
  ],
];

const partners = [
  { name: "DESBANK", mark: "▦" },
  { name: "pandora", mark: "✤" },
  { name: "VS BANK", mark: "●" },
  { name: "INDESIT", mark: "◌" },
  { name: "DigiTech", mark: "▥" },
  { name: "V BANK", mark: "◒" },
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
    question: "Are your cleaning products safe for homes and offices?",
    answer:
      "We use cleaning products and methods suitable for regular homes, offices, apartments, villas, and commercial spaces, with attention to hygiene and surface care.",
  },
];

const localSeoKeywords = [
  ["Cleaning Services Kuwait City", "/services"],
  ["Cleaning Company Farwaniya", "/services"],
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
              <ServiceMenu className="hidden md:block" />
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
              Cleaning Services Kuwait
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#102b55] md:text-6xl">
              Professional Cleaning Services in Kuwait
              <br />
              by Al Nawras Plus
            </h1>
            <h2 className="mt-10 text-2xl font-black text-[#102b55] md:text-3xl">
              House Cleaning Kuwait, Office Cleaning Kuwait & Deep Cleaning Kuwait
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#213d63]">
              Al Nawras Plus is a trusted cleaning company Kuwait customers choose for
              affordable cleaning services across Al Asimah, Hawalli, Farwaniya,
              Ahmadi, Jahra, and Mubarak Al-Kabeer Governorates. Our team handles
              house cleaning, sofa cleaning, apartment cleaning, carpet cleaning,
              villa cleaning, and building cleaning with eco-friendly products and
              spotless results.
            </p>
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

      <section id="about" className="bg-white px-5 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1fr_1.05fr]">
          <div className="order-2 text-center md:order-1">
            <Image
              alt="Al Nawras Plus cleaning team serving homes and offices in Kuwait"
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
              Trusted Cleaning Experts in
              <br />
              Kuwait
            </h2>
            <p className="mt-10 text-lg leading-9 text-[#18365e]">
              As a top rated cleaning company Kuwait residents and businesses trust, we
              provide high-quality cleaning services you can rely on every time. Our
              professional cleaning team specializes in residential cleaning, commercial
              cleaning, villa cleaning Kuwait, and building cleaning Kuwait for homes,
              offices, apartments, and facilities across Kuwait governorates.
            </p>
            <div className="mt-9 grid overflow-hidden rounded-bl-[28px] rounded-tr-[28px] border border-[#f1dc97] bg-white text-center shadow-sm md:max-w-xl md:grid-cols-3">
              {[
                ["500 +", "Satisfied customers"],
                ["500 +", "Professional cleaning jobs"],
                ["5 Y", "Years of experience"],
              ].map(([value, label], index) => (
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

      <section id="services" className="bg-[#fff4d8] px-5 py-24 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
<p className="section-title-line text-sm font-bold text-[#f0a600]">
            Professional Cleaning Services Kuwait
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#0d274d]">
            House Cleaning Kuwait, Sofa Cleaning Kuwait, Office Cleaning Kuwait & More
          </h2>

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

      <section className="bg-[#0d274d] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_380px]">
          <div>
            <h2 className="section-title-line text-3xl font-black">
              Why Choose Us
            </h2>
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
            className="h-72 w-full rounded-lg object-cover"
            height={288}
            src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&fit=crop&w=1000&q=80"
            width={380}
          />
        </div>
      </section>

      <section className="relative bg-white px-5 pb-24 pt-16 text-center">
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
            <p className="mt-1 text-xs font-bold text-[#0d274d]">Testimonial</p>
          </div>

          <div className="testimonial-slider ltr mx-auto mt-8 max-w-3xl overflow-hidden">
            <div className="testimonial-track flex w-max gap-5">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <article
                  className="relative min-h-[178px] w-[330px] shrink-0 rounded-sm bg-white p-8 text-left shadow-[0_8px_25px_rgba(13,39,77,.08)] md:w-[370px]"
                  dir="ltr"
                  key={testimonial.name + index}
                >
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

          <div className="mx-auto mt-16 max-w-xl overflow-hidden rounded-[22px] bg-black text-right text-white shadow-[0_12px_25px_rgba(13,39,77,.15)]">
            <div className="grid items-center md:grid-cols-[1fr_170px]">
              <div className="p-7">
                <p className="text-5xl font-black leading-none text-[#f8be43]">
                  Grab Offer
                  <br />
                  <span className="text-white">Now</span>
                </p>
                <p className="mt-4 inline-block rounded bg-[#f8be43] px-2 py-1 text-xs font-black text-[#0d274d]">
                  Before Services Limited
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-200">
                  Get up to 20% off your first cleaning order with the Al Nawras
                  Plus team.
                </p>
              </div>
              <div className="relative hidden h-full min-h-48 bg-[#f8be43] md:block">
                <div className="absolute left-[-48px] top-12 h-28 w-28 rounded-full bg-[#f8be43]" />
                <div className="absolute right-8 top-10 h-32 w-20 rounded-2xl border-4 border-[#0d274d] bg-white shadow-lg">
                  <div className="mx-auto mt-4 h-2 w-8 rounded-full bg-[#dce7f2]" />
                  <div className="mx-auto mt-8 h-9 w-9 rounded-full border-4 border-[#8fb3d9]" />
                </div>
                <div className="absolute bottom-11 left-8 text-7xl">📣</div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-center">
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

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-4">
            {partners.map((partner) => (
              <div
                className="flex h-32 items-center justify-center gap-5 border-[6px] border-[#f0f1f3] bg-white text-xl font-black text-[#8f949b]"
                key={partner.name}
              >
                <span className="p-3 text-2xl text-[#70757c]">
                  {partner.mark}
                </span>
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff4d8] px-5 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1fr_1.05fr]">
          <div className="text-center md:text-right">
            <div className="inline-block">
              <h2 className="section-title-line justify-center text-3xl font-normal text-[#697486] md:justify-start">
                Government{" "}
                <span className="font-black text-[#0d274d]">We Cover</span>
              </h2>
              <div className="mt-2 h-3 w-full bg-[#a8a5a0]">
                <div className="h-full w-24 bg-[#0d274d]" />
              </div>
            </div>

            <h3 className="mt-16 text-2xl font-black text-[#c72424]">
              Local Cleaning Services Across Kuwait
            </h3>
            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#4c5d76] md:mx-0">
              We deliver professional cleaning services in all governorates of
              Kuwait, including Al Asimah / Capital Governorate, Hawalli Governorate,
              Farwaniya Governorate, Ahmadi Governorate, Jahra Governorate, and
              Mubarak Al-Kabeer Governorate. Wherever you are, our team is ready
              to serve you quickly, efficiently, and with the highest quality.
            </p>

            <ul className="mx-auto mt-10 max-w-xl text-base font-black leading-8 text-[#243955] md:mx-0">
              {[
                "Cleaning services in Al Asimah / Capital Governorate",
                "Cleaning company serving Hawalli Governorate",
                "House and apartment cleaning in Farwaniya Governorate",
                "Residential cleaning in Mubarak Al-Kabeer Governorate",
                "Villa and office cleaning in Ahmadi Governorate",
                "Deep cleaning and building cleaning in Jahra Governorate",
              ].map((area) => (
                <li
                  className="border-b border-dashed border-[#d8cdb3] py-4 last:border-b-0"
                  key={area}
                >
                  <span className="text-[#87919d]">◎</span> {area}
                </li>
              ))}
            </ul>

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
              Top Rated Cleaning Company Kuwait
            </h2>
            <p className="mt-8 text-base leading-8 text-[#6d6d6d]">
              At Al Nawras Plus, we offer fast and professional cleaning
              services in all areas of Kuwait, from Kuwait City and Farwaniya
              to Hawalli, Ahmadi, Jahra, and Mubarak Al-Kabeer, with a commitment
              to the highest standards of hygiene and quality every time.
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
                  "Same day cleaning service Kuwait customers can book for urgent home, office, apartment, and villa cleaning needs."],
                [
                  "Residential & Commercial Coverage",
                  "From homes, villas, and apartments to offices and buildings in Kuwait City, Farwaniya, Hawalli, Salmiya, Ahmadi, and Jahra, we handle everything professionally."],
                [
                  "Detailed & Hygienic Cleaning",
                  "Every corner is cleaned with care using eco-friendly products for healthy spaces."],
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
              Popular Searches
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#0d274d]">
              Cleaning Services Near You in Kuwait
            </h2>
            <p className="mt-5 text-base leading-8 text-[#4c5d76]">
              Find local cleaning help for Kuwait City, Farwaniya, Hawalli,
              Salmiya, Ahmadi, Jahra, and nearby areas. These quick links help
              customers reach the most relevant cleaning service or booking page.
            </p>
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
    </main>
  );
}
