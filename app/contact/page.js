import Link from "next/link";
import TranslateWidget from "../TranslateWidget";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
              className="inline-flex h-12 min-w-32 items-center justify-center border-2 border-[#0d274d] px-7 text-base font-black text-[#0d274d]"
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
              href="https://wa.me/96595511354"
              target="_blank"
              rel="noopener noreferrer"
            >
              Call now <span>→</span>
            </a>
            <a
              className="inline-flex h-12 min-w-32 items-center justify-center gap-3 bg-[#ffd366] px-7 text-sm font-black text-[#092346]"
              href="https://wa.me/96595511354"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book now <span>→</span>
            </a>
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

export default function ContactPage() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-white text-[#0d274d]"
      dir="ltr"
    >
      <Header />

      <section className="relative bg-[#f5f5f6] px-5 py-24">
        <div className="absolute left-[-24px] top-24 h-16 w-16 rounded-full bg-[#fff4d8]" />
        <div className="absolute right-48 top-10 h-10 w-10 rounded-full bg-emerald-100" />
        <div className="absolute right-[48%] bottom-12 h-6 w-6 rounded-full bg-indigo-100" />
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl font-black text-[#2d376d]">Contact</h1>
          <p className="mt-4 text-sm font-black text-[#2d376d]">
            Home <span className="mx-2">›</span> Contact
          </p>
        </div>
      </section>

      <section className="bg-white px-5">
        <div className="mx-auto grid max-w-6xl gap-16 bg-[#fff4d8] px-8 py-24 md:grid-cols-[1fr_1.1fr] md:px-16">
          <div>
            <h2 className="text-3xl font-black text-[#333333]">
              Send us a message
            </h2>
            <p className="mt-6 max-w-xl text-sm font-black leading-6 text-[#3b3b3b]">
              Contact us for customized pricing and special offers that will
              give your space the perfect cleanliness it deserves.
            </p>
            <h3 className="mt-8 text-3xl font-black text-[#31923b]">
              Enjoy a 20% discount on your first order!
            </h3>
            <p className="mt-6 text-sm font-black text-[#a33939]">
              And get a permanent 10% discount for our distinguished (Elite)
              customers.
            </p>

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

            <div className="mt-14 space-y-8 text-[#333333]">
              <div>
                <h3 className="text-2xl font-black">Visit Us</h3>
                <p className="mt-4 text-base leading-7 text-[#707070]">
                  Farwaniya block 1 street 74 building 15
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-black">Call Us</h3>
                <p className="mt-3 text-base text-[#707070]">+96595511354</p>
              </div>
              <div>
                <h3 className="text-2xl font-black">Email Us</h3>
                <p className="mt-3 text-base text-[#707070]">
                  alnawraspluskuwait@gmail.com
                </p>
              </div>
            </div>
          </div>

          <form
            className="self-center rounded-[36px] bg-[#fff4d8] p-10 shadow-[0_16px_45px_rgba(13,39,77,.08)]"
            id="contact-form"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                className="h-12 rounded-lg bg-[#0d274d] px-5 text-sm font-bold text-white outline-none placeholder:text-[#bda869]"
                placeholder="Name*"
                type="text"
              />
              <input
                className="h-12 rounded-lg bg-[#0d274d] px-5 text-sm font-bold text-white outline-none placeholder:text-[#bda869]"
                placeholder="Phone Number*"
                type="tel"
              />
              <input
                className="h-12 rounded-lg bg-[#0d274d] px-5 text-sm font-bold text-white outline-none placeholder:text-[#bda869] md:col-span-1"
                placeholder="Email Address*"
                type="email"
              />
            </div>
            <textarea
              className="mt-5 h-32 w-full rounded-lg bg-[#0d274d] px-5 py-4 text-sm font-bold text-white outline-none placeholder:text-[#bda869]"
              placeholder="Tell us how we can help."
            />
            <div className="mt-6 flex justify-end">
              <button
                className="h-11 rounded-full bg-[#ffd366] px-7 text-xs font-black text-[#0d274d]"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="h-[460px] overflow-hidden">
        <iframe
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Farwaniya%20block%201%20street%2074%20building%2015&output=embed"
          title="Al Nawras Plus location map"
        />
      </section>

      <Footer />
    </main>
  );
}
