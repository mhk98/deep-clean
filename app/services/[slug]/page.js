import Link from "next/link";
import { notFound } from "next/navigation";
import TranslateWidget from "../../TranslateWidget";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { getServicePage, serviceAreas, servicePages } from "../servicePages";

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
    },
  };
}

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
              <span>☎ +96595511354</span>
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
              Services
            </Link>
            <Link
              className="hidden text-base font-black text-[#0d274d] md:inline-flex"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="hidden text-base font-black text-[#0d274d] md:inline-flex"
              href="/about"
            >
              About
            </Link>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <a
              className="inline-flex h-11 min-w-32 items-center justify-center gap-3 bg-[#0d274d] px-6 text-sm font-black text-[#ffd366]"
              href="https://wa.me/96595511354"
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
              href="https://wa.me/96595511354"
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
              Al Nawras Plus provides reliable cleaning services for homes,
              apartments, offices, villas, and buildings across Kuwait
              governorates.
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
              ].map((link) => (
                <li className="px-9 py-4 text-white" key={link.name}>
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

export default async function ServiceLandingPage({ params }) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Al Nawras Plus",
      telephone: "+96595511354",
      email: "alnawraspluskuwait@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Farwaniya block 1 street 74 building 15",
        addressCountry: "KW",
      },
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    serviceType: service.title,
  };

  return (
    <main className="min-h-screen bg-white text-[#0d274d]" dir="ltr">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <section className="bg-[#fff4d8] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Link className="text-sm font-black text-[#c72424]" href="/services">
            Back to all cleaning services
          </Link>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-[#1d6a29]">
            Al Nawras Plus Cleaning Services
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-[#0d274d] md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#4c5d76]">
            {service.intro}
          </p>
          <p className="mt-5 max-w-3xl text-base font-bold leading-8 text-[#6d3d20]">
            {service.localCopy}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              className="inline-flex h-12 items-center justify-center bg-[#0d274d] px-7 text-sm font-black text-[#ffd366]"
              href="https://wa.me/96595511354"
              rel="noopener noreferrer"
              target="_blank"
            >
              Call on WhatsApp
            </a>
            <Link
              className="inline-flex h-12 items-center justify-center bg-[#ffd366] px-7 text-sm font-black text-[#092346]"
              href="/contact"
            >
              Book This Service
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_.9fr]">
          <div>
            <h2 className="text-3xl font-black text-[#0d274d]">
              What This Service Includes
            </h2>
            <div className="mt-8 grid gap-4">
              {service.benefits.map((benefit) => (
                <div
                  className="border border-slate-200 bg-white p-5 shadow-[0_4px_14px_rgba(13,39,77,.06)]"
                  key={benefit}
                >
                  <p className="text-base font-bold leading-7 text-[#243955]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-[#0d274d] p-7 text-white">
            <h2 className="text-2xl font-black text-[#ffd366]">
              Available Service Areas
            </h2>
            <ul className="mt-6 space-y-3">
              {serviceAreas.map((area) => (
                <li className="text-sm font-bold leading-6" key={area}>
                  {area}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl font-black text-[#ffd366]">
              Related Keywords
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.keywords.map((keyword) => (
                <span
                  className="bg-white px-3 py-2 text-xs font-bold text-[#0d274d]"
                  key={keyword}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
