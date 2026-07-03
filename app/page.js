import Link from "next/link";
import TranslateWidget from "./TranslateWidget";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

// const services = [
//   {
//     title: "Sofa Cleaning",
//     image:
//       "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
//     text: "Deep and safe cleaning removes dust and stains while preserving upholstery and surfaces.",
//   },
//   {
//     title: "Chandelier Cleaning",
//     image:
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
//     text: "Precise chandelier and glass cleaning with full attention to sparkling details.",
//   },
//   {
//     title: "Home Cleaning",
//     image:
//       "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=80",
//     text: "Complete home cleaning for kitchens, rooms, and living areas using professional equipment.",
//   },
//   {
//     title: "Window Cleaning",
//     image:
//       "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?auto=format&fit=crop&w=1000&q=80",
//     text: "Window and frame cleaning with dust and stain removal for a clear shine.",
//   },
// ];

const services = [
  {
    title: "House Cleaning",
    image: "/services/house-cleaning.jpg",
    text: "House Cleaning Kuwait for spotless homes, villas, and family living spaces.",
  },
  {
    title: "Sofa Cleaning",
    image: "/services/sofa-cleaning.jpg",
    text: "Sofa Cleaning Kuwait with shampoo care for stains, dust, and fabric freshness.",
  },
  {
    title: "Office Cleaning",
    image: "/services/office-cleaning.jpg",
    text: "Office Cleaning Kuwait for productive, hygienic, and well-maintained workspaces.",
  },
  {
    title: "Apartment Cleaning",
    image: "/services/apartment-cleaning.jpg",
    text: "Apartment Cleaning Kuwait for flats, rentals, and move-ready residential spaces.",
  },
  {
    title: "Carpet Cleaning",
    image: "/services/carpet-cleaning.jpg",
    text: "Carpet Cleaning Kuwait for fresh rugs, cleaner floors, and stain removal.",
  },
  {
    title: "Window Cleaning",
    image: "/services/window-cleaning.jpg",
    text: "Crystal-clear window cleaning services for homes and offices in Kuwait.",
  },
  {
    title: "Floor Cleaning",
    image: "/services/floor-cleaning.jpg",
    text: "Expert floor cleaning and polishing services across Kuwait.",
  },
  {
    title: "Kitchen Cleaning",
    image: "/services/kitchen-cleaning.jpg",
    text: "Detailed kitchen cleaning in Kuwait with grease and stain removal.",
  },
  {
    title: "Bathroom Cleaning",
    image: "/services/bathroom-cleaning.jpg",
    text: "Sanitized bathroom cleaning service for hygienic homes in Kuwait.",
  },
  {
    title: "Deep Cleaning",
    image: "/services/deep-cleaning.jpg",
    text: "Deep Cleaning Kuwait for homes, villas, apartments, offices, and buildings.",
  },
  {
    title: "Move In / Move Out Cleaning",
    image: "/services/move-cleaning.jpg",
    text: "Specialized move in/move out cleaning service in Kuwait.",
  },
  {
    title: "Janitorial Service",
    image: "/services/janitorial-cleaning.jpg",
    text: "Reliable janitorial services for offices, buildings, and facilities.",
  },
  {
    title: "Chandelier Cleaning",
    image: "/services/chandelier-cleaning.jpg",
    text: "Careful chandelier and decorative light fixture cleaning in Kuwait.",
  },
];

const reasons = [
  ["Top Rated Cleaning Team", "Our trained cleaners deliver top rated cleaning company Kuwait quality for homes, villas, apartments, and offices."],
  ["Fast & Reliable Service", "We arrive on time for cleaning services near me searches across Kuwait with clear quality standards."],
  ["Eco-Friendly Products", "Safe cleaning supplies for daily use inside your home and office."],
  ["Affordable Kuwait Coverage", "Affordable cleaning services Kuwait customers can book in all governorates with flexible options."],
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
  "Ahmed Al-Harbi",
  "Fatima Al-Nashat",
  "Mohammed Al-Salem",
  "Noura Al-Khaled",
];

const faqs = [
  "How can I book cleaning services in Kuwait?",
  "Do you offer cleaning services near me in Kuwait?",
  "Which areas do you cover for cleaning services in Kuwait?",
  "Do you provide professional house cleaning staff?",
  "How long does office cleaning take in Kuwait?",
  "Do you offer same day cleaning service guarantee?",
  "What areas do you cover for cleaning services?",
  "Are your cleaning products safe for homes and offices?",
];

const localSeoKeywords = [
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
  return (
    <main className="min-h-screen overflow-hidden bg-white">
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
                <span>✉ awesa7547@gmail</span>
              </div>
              <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 leading-6">
                <span>📍</span>
                <span>
Farwaniya block 1 street 74 building 15
                </span>
              </div>
            </div>
           

             <div className="flex justify-center gap-6 text-lg font-black md:justify-end">
           
                                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook />
                                      </a>
                                    
                                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram />
                                      </a>
                                  
                                     <a 
                                                    href="https://wa.me/96595511354"
                                    
                                      target="_blank" rel="noopener noreferrer">
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

<div className="flex flex-1 flex-wrap items-center justify-center gap-3 md:gap-8" dir="ltr">
               <Link
                 className="inline-flex h-12 min-w-28 items-center justify-center border-2 border-[#0d274d] px-6 text-base font-black text-[#0d274d] transition md:h-14 md:min-w-36 md:px-8 md:text-lg"
                 href="/"
               >
                 Home
               </Link>
               <Link
                 className="inline-flex text-base font-bold text-[#0d274d] md:text-lg"
                 href="/services"
               >
                 Services
               </Link>
               <Link
                 className="inline-flex text-base font-bold text-[#0d274d] md:text-lg"
                 href="/contact"
               >
                 Contact
               </Link>
               <Link
                 className="inline-flex text-base font-bold text-[#0d274d] md:text-lg"
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
              Al Nawras Plus - Best Cleaning Company Kuwait
              <br />
              Professional Cleaning Services Kuwait
            </h1>
            <h2 className="mt-10 text-2xl font-black text-[#102b55] md:text-3xl">
              House Cleaning Kuwait, Office Cleaning Kuwait & Deep Cleaning Kuwait
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#213d63]">
              Al Nawras Plus is a trusted cleaning company Kuwait customers choose for
              affordable cleaning services Kuwait wide. Our team handles house cleaning,
              sofa cleaning, apartment cleaning, carpet cleaning, villa cleaning, and
              building cleaning with eco-friendly products and spotless results.
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
            <img
              alt="Cleaning team"
              className="mx-auto h-[350px] w-full max-w-[540px] rounded-2xl object-cover shadow-sm"
              src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&fit=crop&w=1100&q=80"
            />
            <div className="mt-12 inline-flex max-w-full flex-wrap justify-center overflow-hidden rounded-br-[32px] rounded-tl-[32px] shadow-[0_0_20px_rgba(118,97,255,.28)]">
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
              cleaning, villa cleaning Kuwait, and building cleaning Kuwait with
              eco-friendly solutions.
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
                <article
                  className="w-[320px] shrink-0 bg-white shadow-[0_10px_22px_rgba(13,39,77,.08)] md:w-[470px]"
                  key={service.title + index}
                >
                  <img
                    alt={service.title}
                    className="h-48 w-full object-cover md:h-56"
                    src={service.image}
                  />
                  <div className="p-8" dir="ltr">
                    <h3 className="border-l-2 border-[#0d274d] pl-5 text-2xl font-black text-[#0d274d]">
                      {service.title}
                    </h3>
                    <p className="mt-7 text-lg leading-8 text-[#828b98]">
                      {service.text}
                    </p>
                  </div>
                </article>
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
                  <p className="mt-2 text-sm leading-7 text-slate-200">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 inline-flex max-w-full flex-wrap overflow-hidden rounded-br-[32px] rounded-tl-[32px] shadow-[0_0_18px_rgba(255,211,102,.55)]">
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
          <img
            alt="Professional cleaners"
            className="h-72 w-full rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&fit=crop&w=1000&q=80"
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
              {[...testimonials, ...testimonials].map((name, index) => (
                <article
                  className="relative min-h-[178px] w-[330px] shrink-0 rounded-sm bg-white p-8 text-left shadow-[0_8px_25px_rgba(13,39,77,.08)] md:w-[370px]"
                  dir="ltr"
                  key={name + index}
                >
                  <div className="text-xl tracking-[4px] text-[#f8be43]">★★★★★</div>
                  <p className="mt-6 text-sm leading-7 text-[#687486]">
                    Excellent service and a professional team. They cleaned carefully
                    and on time, and the result was amazing.
                  </p>
                  <strong className="mt-7 block text-sm text-black">
                    — {name}
                  </strong>
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
Get up to 20% off your first cleaning order with the Al Nawras Plus
                   team.
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
             <div className="inline-flex max-w-full flex-wrap justify-center overflow-hidden rounded-br-[22px] rounded-tl-[22px] shadow-[0_0_12px_rgba(13,39,77,.16)]">
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
                <span className="p-3 text-2xl text-[#70757c]">{partner.mark}</span>
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
                Areas <span className="font-black text-[#0d274d]">We Cover</span>
              </h2>
              <div className="mt-2 h-3 w-full bg-[#a8a5a0]">
                <div className="h-full w-24 bg-[#0d274d]" />
              </div>
            </div>

            <h3 className="mt-16 text-2xl font-black text-[#c72424]">
              Local Cleaning Services Across Kuwait
            </h3>
            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#4c5d76] md:mx-0">
              We deliver professional cleaning services in all governorates of Kuwait.
              If you are searching for cleaning services near me, our team is ready
              to reach your home, apartment, villa, office, or building quickly,
              efficiently, and with the highest quality. We serve Kuwait City,
              Farwaniya, Hawalli, Salmiya, Jabriya, Mahboula, Fahaheel, Mangaf,
              Ahmadi, Jahra, and nearby residential and commercial areas.
            </p>

            <ul className="mx-auto mt-10 max-w-xl text-base font-black leading-8 text-[#243955] md:mx-0">
              {[
                "Al-Asimah Governorate → Capital Governorate",
                "Hawalli Governorate → Hawalli Governorate",
                "Farwaniya Governorate → Farwaniya Governorate",
                "Mubarak Al-Kabeer Governorate → Mubarak Al-Kabeer Governorate",
                "Al-Ahmadi Governorate → Al-Ahmadi Governorate",
                "Al-Jahra Governorate → Al-Jahra Governorate",
              ].map((area) => (
                <li
                  className="border-b border-dashed border-[#d8cdb3] py-4 last:border-b-0"
                  key={area}
                >
                  <span className="text-[#87919d]">◎</span> {area}
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2 md:mx-0 md:justify-start">
              {localSeoKeywords.map((keyword) => (
                <span
                  className="border border-[#d8cdb3] bg-white px-3 py-2 text-xs font-black text-[#0d274d]"
                  key={keyword}
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="mt-12 inline-flex max-w-full flex-wrap justify-center overflow-hidden rounded-br-[32px] rounded-tl-[32px] shadow-[0_0_18px_rgba(255,211,102,.45)]">
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
              As Kuwait's best cleaning company, Al Nawras Plus offers fast and reliable
              cleaning services Kuwait customers can book at affordable prices. Our
              trusted cleaning experts provide house cleaning Kuwait, deep cleaning Kuwait,
              office cleaning Kuwait, sofa cleaning Kuwait, apartment cleaning Kuwait,
              carpet cleaning Kuwait, villa cleaning Kuwait, and building cleaning Kuwait
              with eco-friendly products.
            </p>

            <h3 className="mt-8 text-2xl font-black text-[#1d6a29]">
              Serving Popular Areas in Kuwait
            </h3>
            <p className="mt-8 text-base font-bold leading-8 text-[#6d6d6d]">
              We provide cleaning services Kuwait City customers can book quickly,
              plus cleaning company Farwaniya coverage, house cleaning Hawalli,
              deep cleaning Salmiya, sofa cleaning Jabriya, apartment cleaning
              Mahboula, carpet cleaning Fahaheel, villa cleaning Mangaf, building
              cleaning Ahmadi, and cleaning services Jahra. We also cover Abdullah
              Al-Salem, Adailiya, Bneid Al-Qar, Daiya, Dasma, Faiha, Jaber
              Al-Ahmad, Kaifan, Khaldiya, Mansouriya, Nuzha, Qadisiya, Qurtuba,
              Rawda, Shamiya, Surra, Yarmouk, Rabia, Ishbiliya, Sabah Al-Nasser,
              Rumaithiya, Salwa, Shaab, Shuhada, Bayan, Hawally, Hitteen, and
              nearby areas.
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
                  <h4 className="text-lg font-black text-[#b14f24]">✓ {group[0]}</h4>
                  <p className="mt-2 text-base leading-8 text-[#5e7189]">{group[1]}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="faq" className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-5xl font-black text-emerald-800">📌 FAQ</h2>
          <div className="mt-14 grid gap-x-24 md:grid-cols-2">
            {faqs.map((faq) => (
              <button
                className="border-b-2 border-slate-200 py-4 text-right text-xl font-black leading-8 text-[#243955]"
                key={faq}
              >
                {faq}
              </button>
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

            <div className="mt-10 inline-flex max-w-full flex-wrap justify-center overflow-hidden rounded-br-[32px] rounded-tl-[32px] shadow-[0_0_18px_rgba(255,211,102,.5)]">
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

          <div className="ltr mt-32 grid gap-14 md:grid-cols-[1.15fr_.8fr_1fr_1.35fr]" dir="ltr">
            <div className="text-left">
              <LogoBadge />
<p className="mt-8 max-w-sm text-base leading-8 text-white">
                Al Nawras Plus is a cleaning company Kuwait customers trust for
                professional cleaning services, house cleaning, office cleaning,
                sofa cleaning, apartment cleaning, carpet cleaning, and deep cleaning
                across Kuwait with affordable prices.
              </p>
               <div className="mt-7 flex gap-4 text-2xl font-black text-[#ffd366]">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                              <FaFacebook />
                            </a>
                          
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                              <FaInstagram />
                            </a>
                          
                           <a 
                                          href="https://wa.me/96595511354"
                          
                            target="_blank" rel="noopener noreferrer">
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
        <Link href={link.href}>
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

            <div className="text-left">
              <h3 className="text-2xl font-black text-[#ffd366]">Contact information</h3>
              <p className="mt-8 text-base leading-8 text-white ltr">
                Farwaniya block 1 street 74 building 15
              </p>
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-black leading-tight text-[#ffd366]">
                Subscribe for special offers
              </h3>
              <p className="mt-8 text-base leading-8 text-white">
                Subscribe to receive exclusive cleaning tips, special offers, and
                the latest updates on our professional services.
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
