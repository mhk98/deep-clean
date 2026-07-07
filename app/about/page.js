import Link from "next/link";
import TranslateWidget from "../TranslateWidget";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title:
    "About Al Nawras Plus | Cleaning Company Across Kuwait Governorates",
  description:
    "Learn about Al Nawras Plus, a trusted cleaning company in Kuwait providing house cleaning, apartment cleaning, office cleaning, sofa cleaning, carpet cleaning, deep cleaning, and commercial cleaning services across Al Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer Governorates.",
};

const qualityServices = [
  [
    "⌂",
    "House cleaning",
    "A thorough cleaning of every corner of your home across Kuwait governorates.",
  ],
  [
    "▥",
    "Apartment cleaning",
    "Professional apartment cleaning services for Farwaniya, Hawalli, and Al Asimah homes.",
  ],
  [
    "✧",
    "Cleaning an entire floor",
    "A thorough floor cleaning service for moving, renovation, and building handover in Kuwait.",
  ],
  [
    "▰",
    "Sofa cleaning",
    "Remove stains and odors from sofas using safe materials for homes and majlis seating.",
  ],
  [
    "♧",
    "carpet cleaning",
    "Deep carpet cleaning in Kuwait to remove dirt, bacteria, dust, and odors.",
  ],
  [
    "♨",
    "Kitchen cleaning",
    "A thorough kitchen cleaning service that removes grease and grime from home and office kitchens.",
  ],
  [
    "◒",
    "Bathroom cleaning",
    "Complete bathroom sanitation and cleaning for apartments, villas, offices, and facilities.",
  ],
  [
    "☼",
    "Cleaning the chandelier",
    "We carefully clean chandeliers in villas, halls, homes, and commercial spaces.",
  ],
  [
    "▦",
    "mattress cleaning",
    "Mattress cleaning and sanitizing that removes dust, germs, and allergens.",
  ],
];

const serviceAreas = [
  "Cleaning services in Al Asimah / Capital Governorate",
  "House and apartment cleaning in Hawalli Governorate",
  "Home, villa, and office cleaning in Farwaniya Governorate",
  "Deep cleaning and building cleaning in Ahmadi Governorate",
  "Carpet, sofa, and residential cleaning in Jahra Governorate",
  "Professional cleaning services in Mubarak Al-Kabeer Governorate",
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
              Main
            </Link>
            <Link
              className="hidden text-base font-black text-[#0d274d] md:inline-flex"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="hidden text-base font-black text-[#0d274d] md:inline-flex"
              href="/contact"
            >
              Contact us
            </Link>
            <Link
              className="inline-flex h-12 min-w-44 items-center justify-center border-2 border-[#0d274d] px-7 text-base font-black text-[#0d274d]"
              href="/about"
            >
              About the company
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
              We offer reliable, high-quality cleaning services for homes and
              businesses across Al Asimah, Hawalli, Farwaniya, Ahmadi, Jahra,
              and Mubarak Al-Kabeer Governorates. We bring a touch of pure
              cleanliness, care, and perfection to every space we serve.
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

export default function AboutPage() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-white text-[#0d274d]"
      dir="ltr"
    >
      <Header />

      <section
        className="relative bg-cover bg-center px-5 py-24 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,39,77,.9), rgba(13,39,77,.88)), url('https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.1fr_.9fr]">
          <div className="text-center">
            <p className="text-sm font-black text-[#35a847]">
              # Best cleaning company in Kuwait
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight text-[#ffd366]">
              Al Nawras Plus Company for
              <br />
              General Building Cleaning
            </h1>
            <p className="mt-9 text-sm font-black text-[#35a847]">
              # Best cleaning company in Kuwait
            </p>
            <h2 className="mt-3 text-2xl font-black text-[#ffd366]">
              Al Nawras Plus Company for General Building Cleaning
            </h2>
            <h3 className="mt-9 text-2xl font-black text-[#ffd366]">
              We give every space an Al Nawras Plus
            </h3>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white">
              Al Nawras Plus General Cleaning Company is committed to providing
              high-quality cleaning services throughout Kuwait, including Al
              Asimah, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak
              Al-Kabeer Governorates. With a focus on precision, care, and
              professionalism, we transform every space into a clean, fresh,
              and comfortable environment you can rely on.
            </p>
            <div className="mt-10 inline-flex overflow-hidden rounded-br-[24px] rounded-tl-[24px]">
              <a
                className="inline-flex h-12 min-w-32 items-center justify-center gap-3 border border-[#ffd366] bg-[#0d274d] px-6 text-sm font-black text-[#ffd366]"
                href="https://wa.me/96595511354"
                target="_blank"
                rel="noopener noreferrer"
              >
                Call now <span>→</span>
              </a>
              <Link
                className="inline-flex h-12 min-w-32 items-center justify-center gap-3 bg-[#ffd366] px-6 text-sm font-black text-[#092346]"
                href="/contact"
              >
                Book now <span>→</span>
              </Link>
            </div>
          </div>

          <div className="space-y-10 text-center">
            <div>
              <h2 className="text-2xl font-black text-[#ffd366]">
                Our mission
              </h2>
              <p className="mx-auto mt-5 max-w-md text-base leading-7">
                Our mission is to provide the Al Nawras Plus clean to every
                building by using the latest technologies and trained staff. We
                do not just clean, we consider it our primary responsibility to
                provide a healthy, bright, and comfortable environment.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#ffd366]">Our vision</h2>
              <p className="mx-auto mt-5 max-w-md text-base leading-7">
                To be the most trusted name in cleaning by consistently
                delivering the Al Nawras Plus clean, ensuring every space we
                serve shines with cleanliness and perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8e8] px-5 py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#c72424]">
              Service Areas
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-[#0d274d]">
              Cleaning Services Across Kuwait Governorates
            </h2>
            <p className="mt-6 text-base leading-8 text-[#4c5d76]">
              Al Nawras Plus provides local cleaning services for homes,
              apartments, villas, offices, buildings, and commercial facilities
              across Kuwait. Our team is ready for regular cleaning, deep
              cleaning, sofa cleaning, carpet cleaning, kitchen cleaning,
              bathroom cleaning, mattress cleaning, and janitorial support.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <article
                className="border border-[#efd894] bg-white p-5 shadow-[0_4px_14px_rgba(13,39,77,.08)]"
                key={area}
              >
                <h3 className="text-base font-black leading-7 text-[#0d274d]">
                  {area}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black text-[#0d274d]">
            High-quality services<span className="text-[#ffd366]">Quality</span>
          </h2>
          <p className="mt-3 text-sm font-black text-[#c72424]">
            Professional cleaning services tailored to your needs
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {qualityServices.map(([icon, title, text]) => (
              <article
                className="min-h-64 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_0_14px_rgba(13,39,77,.28)]"
                key={title}
              >
                <div className="text-5xl text-[#0d274d]">{icon}</div>
                <h3 className="mt-8 text-xl font-black text-[#0d274d]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-2">
          <div className="bg-[#fff8e8] p-8">
            <h2 className="text-3xl font-black leading-tight text-[#31923b]">
              Enjoy a 20% discount on your first order!
            </h2>
            <p className="mt-7 text-sm font-black text-[#a33939]">
              And get a permanent 10% discount for our distinguished (Elite)
              customers.
            </p>
            <div className="mt-8 flex gap-7 text-4xl font-black text-[#0d274d]">
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
            <h3 className="mt-8 text-2xl font-black text-[#333]">Visit Us</h3>
            <p className="mt-4 text-base leading-7 text-[#707070]">
              Farwaniya block 1 street 74 building 15
            </p>
          </div>
          <img
            alt="Al Nawras Plus cleaning team serving Kuwait governorates"
            className="h-80 w-full object-cover"
            src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&fit=crop&w=1100&q=80"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
