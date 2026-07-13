import Link from "next/link";
import { notFound } from "next/navigation";
import TranslateWidget from "../../TranslateWidget";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ServiceMenu from "../../components/ServiceMenu";
import { getService as getApiService } from "../../lib/api";
import { getServicePage, serviceAreas } from "../servicePages";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await loadService(slug);

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

async function loadService(slug) {
  const localService = getServicePage(slug);

  try {
    const service = await getApiService(slug);
    const normalizeList = (value, fallback = []) => {
      if (Array.isArray(value)) return value;
      if (!value) return fallback;
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) return parsed;
      } catch (error) {
        // Plain comma/newline strings are valid for admin-entered SEO lists.
      }
      return String(value)
        .split(/[,\n]/)
        .map((item) => item.trim())
        .filter(Boolean);
    };

    const title = service.title || localService?.title;
    return {
      title,
      metaTitle:
        localService?.metaTitle || service.metaTitle || `${title} | Al Nawras Plus`,
      metaDescription:
        localService?.metaDescription ||
        service.metaDescription ||
        service.excerpt ||
        service.content ||
        "",
      intro:
        localService?.intro ||
        service.excerpt ||
        service.content ||
        service.metaDescription ||
        "",
      localCopy:
        localService?.localCopy ||
        service.metaDescription ||
        "Available across Kuwait governorates for homes, apartments, offices, villas, and commercial spaces.",
      content: localService?.content || service.content || "",
      image: service.image || localService?.image || "",
      benefits: localService?.benefits?.length
        ? localService.benefits
        : service.benefits?.length
          ? normalizeList(service.benefits)
          : ["Professional cleaning service", "Available across Kuwait"],
      keywords: localService?.keywords?.length
        ? localService.keywords
        : service.keywords?.length
          ? normalizeList(service.keywords)
          : [title],
    };
  } catch (error) {
    return localService || null;
  }
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
            <ServiceMenu active />
            <Link
              className="hidden text-base font-black text-[#0d274d] md:inline-flex"
              href="/blog"
            >
              Blog
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
  const service = await loadService(slug);

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

      <section className="overflow-hidden bg-[#fbefd6] px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_.85fr]">
          <div>
          <Link className="text-sm font-black text-[#4b6650]" href="/services">
            Back to all cleaning services
          </Link>
          <p className="mt-8 flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-[#4b6650] before:block before:h-px before:w-6 before:bg-[#4b6650]">
            Al Nawras Plus Cleaning Services
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-[#0e2240] md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#4c5d76]">
            {service.intro}
          </p>
          <p className="mt-5 max-w-3xl border-l-4 border-[#efb84c] bg-white/55 px-4 py-3 text-base font-bold leading-8 text-[#0e2240]">
            {service.localCopy}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              className="inline-flex h-12 items-center justify-center bg-[#0e2240] px-7 text-sm font-black text-white"
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
          <div className="relative hidden aspect-square md:block" aria-hidden="true">
            <svg className="h-full w-full" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="320" height="320" fill="#F3E2B8" />
              <g stroke="#0E2240" strokeWidth="1" opacity="0.18">
                {[46,82,118,154,190,226,262,298].map((line) => (
                  <line key={`h-${line}`} x1="10" y1={line} x2="330" y2={line} />
                ))}
                {[46,82,118,154,190,226,262,298].map((line) => (
                  <line key={`v-${line}`} x1={line} y1="10" x2={line} y2="330" />
                ))}
              </g>
              <circle cx="170" cy="170" r="70" fill="#0E2240" />
              <path d="M120 170 Q145 130 170 170 T220 170" stroke="#EFB84C" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M120 170 Q145 210 170 170 T220 170" stroke="#EFB84C" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
            </svg>
            <div className="absolute -bottom-5 -left-5 border border-[#efb84c] bg-[#0e2240] px-6 py-5 text-white">
              <div className="text-4xl font-black text-[#efb84c]">6</div>
              <div className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-slate-200">
                Governorates Covered
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.content ? (
        <>
          <section className="bg-[#fffdf9] px-5 py-16">
            <div
              className="service-pattern-wrap mx-auto max-w-6xl"
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
          </section>
          <style>{`
            .service-pattern-wrap .service-pattern{color:#1e2a38}
            .service-pattern-wrap .service-section{padding:64px 0;border-bottom:1px solid #e4dcc8}
            .service-pattern-wrap .service-section:first-child{padding-top:0}
            .service-pattern-wrap .service-eyebrow{display:flex;align-items:center;gap:10px;margin:0 0 14px;font-size:12px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:#4b6650}
            .service-pattern-wrap .service-eyebrow:before{content:"";width:22px;height:1px;background:#4b6650}
            .service-pattern-wrap h2{margin:0 0 16px;color:#0e2240;font-size:clamp(28px,3vw,38px);font-weight:900;line-height:1.15}
            .service-pattern-wrap h3{margin:0 0 8px;color:#0e2240;font-size:18px;font-weight:900;line-height:1.25}
            .service-pattern-wrap p{max-width:72ch;margin:0 0 18px;color:#55606e;font-size:16px;line-height:1.8}
            .service-pattern-wrap ul{margin:0;padding-left:20px}
            .service-pattern-wrap li{padding:6px 0;color:#55606e;font-weight:700}
            .service-pattern-wrap .service-card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:30px;background:#e4dcc8;border:1px solid #e4dcc8}
            .service-pattern-wrap .service-card-grid article{background:#fffdf9;padding:30px 26px}
            .service-pattern-wrap article span{display:block;margin-bottom:14px;color:#e1a731;font-size:12px;font-weight:900;letter-spacing:.08em}
            .service-pattern-wrap .service-dark{margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);padding-left:calc(50vw - 50%);padding-right:calc(50vw - 50%);background:#0e2240}
            .service-pattern-wrap .service-dark h2,.service-pattern-wrap .service-dark h3{color:#fff}
            .service-pattern-wrap .service-dark p{color:#b7c2d3}
            .service-pattern-wrap .service-dark .service-eyebrow{color:#efb84c}
            .service-pattern-wrap .service-dark .service-eyebrow:before{background:#efb84c}
            .service-pattern-wrap .service-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:24px;position:relative;margin-top:34px}
            .service-pattern-wrap .service-steps:before{content:"";position:absolute;left:0;right:0;top:22px;border-top:2px dashed rgba(239,184,76,.45)}
            .service-pattern-wrap .service-steps article{position:relative;z-index:1}
            .service-pattern-wrap .service-steps span{display:grid;width:46px;height:46px;place-items:center;border-radius:999px;border:2px solid #efb84c;background:#0e2240;color:#efb84c}
            .service-pattern-wrap .service-tags{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}
            .service-pattern-wrap .service-tags span{border:1px solid #e4dcc8;border-left:3px solid #efb84c;background:#fbefd6;padding:11px 18px;color:#0e2240;font-size:13px;font-weight:900}
            .service-pattern-wrap .service-benefits{display:grid;grid-template-columns:1.15fr .85fr;gap:50px;align-items:center;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);padding-left:calc(50vw - 50%);padding-right:calc(50vw - 50%);background:#fbefd6}
            .service-pattern-wrap .service-benefits aside{background:#0e2240;color:#fff;padding:34px}
            .service-pattern-wrap .service-benefits aside strong{display:block;color:#efb84c;font-size:44px;line-height:1}
            .service-pattern-wrap .service-benefits aside p,.service-pattern-wrap .service-benefits aside li{color:#cfd7e2}
            .service-pattern-wrap .service-areas{display:grid;grid-template-columns:1fr 1fr;gap:40px;background:#0e2240;color:#fff;padding:44px}
            .service-pattern-wrap .service-areas h2{color:#efb84c;font-size:22px}
            .service-pattern-wrap .service-areas li{color:#fff;border-top:1px solid rgba(255,255,255,.12);list-style:none}
            .service-pattern-wrap .service-areas ul{padding:0}
            .service-pattern-wrap .service-difference{margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);padding-left:calc(50vw - 50%);padding-right:calc(50vw - 50%);background:#081527}
            .service-pattern-wrap .service-difference h2,.service-pattern-wrap .service-difference h3{color:#fff}
            .service-pattern-wrap .service-difference p{color:#aeb9c9}
            .service-pattern-wrap .service-difference .service-eyebrow{color:#efb84c}
            .service-pattern-wrap .service-difference .service-eyebrow:before{background:#efb84c}
            .service-pattern-wrap .service-diff-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:30px;background:rgba(255,255,255,.1)}
            .service-pattern-wrap .service-diff-grid article{background:#081527;padding:8px 22px 8px 0}
            .service-pattern-wrap .service-diff-grid span{display:grid;width:34px;height:34px;place-items:center;border:1px solid #efb84c;color:#efb84c;margin-bottom:18px}
            .service-pattern-wrap .service-booking{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:28px}
            .service-pattern-wrap .service-booking article{position:relative;border:1px solid #e4dcc8;background:#fbefd6;padding:28px 26px}
            .service-pattern-wrap .service-booking span{color:#4b6650;text-transform:uppercase}
            .service-pattern-wrap .service-testimonials{margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);padding-left:calc(50vw - 50%);padding-right:calc(50vw - 50%);background:#fbefd6}
            .service-pattern-wrap .service-testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:30px}
            .service-pattern-wrap .service-testimonial-grid article{border:1px solid #e4dcc8;border-top:3px solid #efb84c;background:#fffdf9;padding:26px 24px}
            .service-pattern-wrap .service-testimonial-grid div{margin-bottom:14px;color:#e1a731;letter-spacing:2px}
            .service-pattern-wrap .service-testimonial-grid strong{display:block;color:#0e2240;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.06em}
            .service-pattern-wrap .service-testimonial-grid span{color:#55606e;font-size:12px}
            @media(max-width:900px){
              .service-pattern-wrap .service-card-grid,.service-pattern-wrap .service-steps,.service-pattern-wrap .service-benefits,.service-pattern-wrap .service-areas,.service-pattern-wrap .service-diff-grid,.service-pattern-wrap .service-booking,.service-pattern-wrap .service-testimonial-grid{grid-template-columns:1fr}
              .service-pattern-wrap .service-steps:before{display:none}
            }
          `}</style>
        </>
      ) : (
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
      )}
      <Footer />
    </main>
  );
}
