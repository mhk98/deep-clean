import Link from "next/link";
import TranslateWidget from "./TranslateWidget";

const services = [
  {
    title: "تنظيف الكنَب",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
    text: "تنظيف عميق وآمن يزيل الأتربة والبقع ويحافظ على جودة المفروشات والأسطح.",
  },
  {
    title: "تنظيف الثريا",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    text: "تنظيف دقيق للثريات والزجاج مع عناية كاملة بالتفاصيل اللامعة.",
  },
  {
    title: "تنظيف المنازل",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=80",
    text: "خدمة تنظيف منزلية متكاملة للمطابخ والغرف والصالات بأدوات احترافية.",
  },
  {
    title: "تنظيف النوافذ",
    image:
      "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?auto=format&fit=crop&w=1000&q=80",
    text: "تنظيف النوافذ والإطارات وإزالة الغبار والبقع للحصول على لمعان واضح.",
  },
];

const reasons = [
  ["خبرة فنية", "فريق مدرب على تنظيف المنازل والمكاتب بعناية واهتمام."],
  ["خدمة سريعة وموثوقة", "نصل في الموعد وننفذ العمل بمعايير واضحة."],
  ["مواد صديقة للبيئة", "منظفات آمنة للاستخدام اليومي داخل المنزل."],
  ["متوفر في جميع أنحاء الكويت", "نغطي أغلب المناطق بخيارات حجز مرنة."],
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
  "كيف يمكنني حجز خدمة التنظيف؟",
  "هل توفرون عمالة منزلية؟",
  "كم يستغرق تنظيف المنزل؟",
  "هل تقدمون ضمان للخدمة؟",
  "طرق دفع خدمات التنظيف لديكم؟",
  "ما هي المناطق التي تغطيها في الكويت؟",
];

function Button({
  children,
  variant = "gold",
  href = "/contact",
  target,
  rel,
}) {
  return (
    <a
      className={`inline-flex h-12 min-w-36 items-center justify-center gap-3 rounded-none px-7 text-sm font-bold shadow-[0_4px_14px_rgba(13,39,77,.18)] transition ${
        variant === "gold"
          ? "rounded-br-3xl bg-[#ffd366] text-[#092346] hover:bg-[#f8be43]"
          : "bg-[#0d274d] text-[#ffd366] hover:bg-[#082142]"
      }`}
      href={href}
      target={target}
      rel={rel}
    >
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
            Deep Clean
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
                <span>☎ +96594026150</span>
                <span>✉ awesa7547@gmail</span>
              </div>
              <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 leading-6">
                <span>📍</span>
                <span>
                  Ali Fahad Al Dewailah St, Block 3, Al Farwaniya, 80003, Kuwait
                  Shop No. 26, Al Khuraj Commercial Complex, Nearby Asfour
                  Canary Restaurant
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-7 text-xl font-black md:justify-end">
              <span>f</span>
              <span>◎</span>
              <span>◔</span>
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
              <a
                className="inline-flex h-14 min-w-36 items-center justify-center border-2 border-[#0d274d] px-8 text-lg font-black text-[#0d274d]"
                href="#home"
              >
                الرئيسية
              </a>
              <a
                className="hidden text-lg font-bold text-[#0d274d] md:inline-flex"
                href="/services"
              >
                الخدمات
              </a>
              <a
                className="hidden text-lg font-bold text-[#0d274d] md:inline-flex"
                href="/contact"
              >
                اتصل بنا
              </a>
              <a
                className="hidden text-lg font-bold text-[#0d274d] md:inline-flex"
                href="/about"
              >
                عن الشركة
              </a>
            </div>

            <div className="hidden items-center gap-4 lg:flex" dir="ltr">
              <Button
                variant="outline"
                href="https://wa.me/96594026150"
                target="_blank"
                rel="noopener noreferrer"
              >
                اتصل الآن
              </Button>
              <Button>احجز الآن</Button>
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
            <p className="mb-7 text-lg font-black text-red-600">
              # أفضل شركة تنظيف في الكويت
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#102b55] md:text-6xl">
              شركة اللمسة الذهبية للتنظيف العام
              <br />
              للمباني
            </h1>
            <h2 className="mt-10 text-2xl font-black text-[#102b55] md:text-3xl">
              تنظيف عالي الجودة للمنازل والأعمال
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#213d63]">
              استمتع بمساحات نظيفة تمامًا مع خدمات التنظيف الاحترافية لدينا. من
              المنازل إلى المكاتب، نقدم تنظيفًا عميقًا وموثوقًا وحيدًا يمكنك
              الاعتماد عليه.
            </p>
            <div className="mt-10 flex justify-center">
              <Button>احجز الآن</Button>
              <Button
                variant="outline"
                href="https://wa.me/96594026150"
                target="_blank"
                rel="noopener noreferrer"
              >
                اتصل الآن
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
            <div className="mt-12 inline-flex overflow-hidden rounded-br-[32px] rounded-tl-[32px] shadow-[0_0_20px_rgba(118,97,255,.28)]">
              <a
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-[#ffd366] px-8 text-lg font-black text-[#092346]"
                href="/contact"
              >
                <span>←</span>
                احجز الآن
              </a>
              <a
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-[#0d274d] px-8 text-lg font-black text-[#ffd366]"
                href="https://wa.me/96594026150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>←</span>
                اتصل الآن
              </a>
            </div>
          </div>

          <div className="order-1 text-center md:order-2 md:text-right">
            <p className="text-2xl font-black text-[#24882e]">Committed!</p>
            <h2 className="mt-7 text-4xl font-black leading-tight text-[#102b55] md:text-6xl">
              خبراء تنظيف موثوقون في
              <br />
              الكويت
            </h2>
            <p className="mt-10 text-lg leading-9 text-[#18365e]">
              نقدم خدمات تنظيف موثوقة وعالية الجودة يمكنك الاعتماد عليها في كل
              مرة
            </p>
            <div className="mt-9 grid overflow-hidden rounded-bl-[28px] rounded-tr-[28px] border border-[#f1dc97] bg-white text-center shadow-sm md:max-w-xl md:grid-cols-3">
              {[
                ["500 +", "أكثر من 500 عميل راضي"],
                ["500 +", "أكثر من 500 عميل راضي"],
                ["5 Y", "سنوات من الخبرة الاحترافية"],
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
            المميزة خدماتنا عالية
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#0d274d]">
            نستمتع بتقديم خدمات مميزة
          </h2>

          <div className="services-slider ltr mx-auto mt-16 max-w-5xl overflow-hidden">
            <div className="services-track flex w-max gap-10">
              {[...services, ...services].map((service, index) => (
                <article
                  className="w-[320px] shrink-0 bg-white text-right shadow-[0_10px_22px_rgba(13,39,77,.08)] md:w-[470px]"
                  key={service.title + index}
                >
                  <img
                    alt={service.title}
                    className="h-48 w-full object-cover md:h-56"
                    src={service.image}
                  />
                  <div className="p-8" dir="rtl">
                    <h3 className="border-r-2 border-[#0d274d] pr-5 text-2xl font-black text-[#0d274d]">
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
            <Button>كل الخدمات</Button>
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
                href="https://wa.me/96594026150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>←</span>
                اتصل الآن
              </a>
              <a
                className="inline-flex h-12 min-w-36 items-center justify-center gap-3 bg-[#ffd366] px-7 text-sm font-bold text-[#092346] transition hover:bg-[#f8be43]"
                href="/contact"
              >
                <span>←</span>
                احجز الآن
              </a>
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
                  className="relative min-h-[178px] w-[330px] shrink-0 rounded-sm bg-white p-8 text-right shadow-[0_8px_25px_rgba(13,39,77,.08)] md:w-[370px]"
                  dir="rtl"
                  key={name + index}
                >
                  <div className="text-xl tracking-[4px] text-[#f8be43]">
                    ★★★★★
                  </div>
                  <p className="mt-6 text-sm leading-7 text-[#687486]">
                    خدمة ممتازة وفريق محترف. تم التنظيف بعناية وفي الوقت المحدد،
                    وكانت النتيجة رائعة.
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
                  احصل على خصم حتى 20% على أول طلب تنظيف مع فريق اللمسة الذهبية.
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
              <a
                className="inline-flex h-9 min-w-28 items-center justify-center gap-2 bg-[#ffd366] px-4 text-xs font-bold text-[#092346]"
                href="/contact"
              >
                <span>←</span>
                احجز الآن
              </a>
              <a
                className="inline-flex h-9 min-w-28 items-center justify-center gap-2 bg-[#0d274d] px-4 text-xs font-bold text-[#ffd366]"
                href="https://wa.me/96594026150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>←</span>
                اتصل الآن
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
              نغطي جميع محافظات الكويت
            </h3>
            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#4c5d76] md:mx-0">
              نقدم خدمات التنظيف الاحترافية في جميع محافظات الكويت. أينما كنت،
              فريقنا جاهز لخدمتك بسرعة وكفاءة وبأعلى جودة.
            </p>

            <ul className="mx-auto mt-10 max-w-xl text-base font-black leading-8 text-[#243955] md:mx-0">
              {[
                "Al-Asimah Governorate → محافظة العاصمة",
                "Hawalli Governorate → محافظة حولي",
                "Farwaniya Governorate → محافظة الفروانية",
                "Mubarak Al-Kabeer Governorate → محافظة مبارك الكبير",
                "Al-Ahmadi Governorate → محافظة الأحمدي",
                "Al-Jahra Governorate → محافظة الجهراء",
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
              <a
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-[#ffd366] px-8 text-lg font-black text-[#092346]"
                href="/contact"
              >
                <span>←</span>
                احجز الآن
              </a>
              <a
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-[#0d274d] px-8 text-lg font-black text-[#ffd366]"
                href="https://wa.me/96594026150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>←</span>
                اتصل الآن
              </a>
            </div>
          </div>

          <article className="rounded-[28px] border border-[#e3d6b7] bg-white/80 p-8 text-right shadow-[0_0_18px_rgba(13,39,77,.18)] md:p-12">
            <h2 className="text-3xl font-black leading-tight text-[#9b1b1f]">
              نقدم خدمات التنظيف في جميع أنحاء الكويت
            </h2>
            <p className="mt-8 text-base leading-8 text-[#6d6d6d]">
              في شركة اللمسة الذهبية، نقدم خدمات تنظيف سريعة واحترافية في جميع
              مناطق الكويت، مع ضمان أعلى مستوى من الجودة والنظافة في كل مرة.
            </p>

            <h3 className="mt-8 text-2xl font-black text-[#1d6a29]">
              Serving Popular Areas
            </h3>
            <p className="mt-8 text-base font-bold leading-8 text-[#6d6d6d]">
              Abdullah Al-Salem, Adailiya, Bneid Al-Qar, Daiya, Dasma, Faiha,
              Jaber Al-Ahmad, Kaifan, Khaldiya, Mansouriya, Nuzha, Qadisiya,
              Qurtuba, Rawda, Shamiya, Surra, Yarmouk, Rabia, Ishbiliya,
              Abdullah Al-Mubarak, Sabah Al-Nasser, and Firdous, Rumaithiya,
              Salmiya, Salwa, Shaab, Shuhada, Bayan, Hawally, Hitteen, Jabriya.
            </p>

            <div className="mt-8 border-t border-[#d8d2c8] pt-8">
              {[
                [
                  "Fast Response Across Kuwait",
                  "We reach your location quickly and start cleaning without delay.",
                ],
                [
                  "Residential & Commercial Coverage",
                  "From homes and apartments to offices, we handle everything professionally.",
                ],
                [
                  "Detailed & Hygienic Cleaning",
                  "Every corner is cleaned with care to ensure a fresh and healthy environment.",
                ],
              ].map(([title, text]) => (
                <div className="mt-8 first:mt-0" key={title}>
                  <h4 className="text-lg font-black text-[#b14f24]">
                    ✓ {title}
                  </h4>
                  <p className="mt-2 text-base leading-8 text-[#5e7189]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="faq" className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-5xl font-black text-emerald-800">
            📌 FAQ
          </h2>
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
            <p className="text-base font-black text-[#ffd366]">دعنا نتحدث</p>
            <h2 className="mt-8 text-2xl font-black text-white">
              نظيف، منعش، وخالٍ من العيوب
            </h2>
            <p className="mt-8 text-3xl font-black leading-tight text-[#ffd366]">
              مساحتك على وشك أن تتألق كما لم يحدث من قبل
            </p>

            <div className="mt-10 inline-flex overflow-hidden rounded-br-[32px] rounded-tl-[32px] shadow-[0_0_18px_rgba(255,211,102,.5)]">
              <a
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-[#ffd366] px-8 text-lg font-black text-[#092346]"
                href="/contact"
              >
                <span>←</span>
                احجز الآن
              </a>
              <a
                className="inline-flex h-14 min-w-40 items-center justify-center gap-3 bg-white px-8 text-lg font-black text-[#0d274d]"
                href="https://wa.me/96594026150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>←</span>
                اتصل الآن
              </a>
            </div>
          </div>

          <div
            className="ltr mt-32 grid gap-14 md:grid-cols-[1.15fr_.8fr_1fr_1.35fr]"
            dir="ltr"
          >
            <div className="text-right" dir="rtl">
              <LogoBadge />
              <p className="mt-8 max-w-sm text-base leading-8 text-white">
                نقدم خدمات تنظيف موثوقة وعالية الجودة للمنازل والشركات. نضيف
                لمسة ذهبية من النظافة والعناية والكمال على كل مساحة نخدمها.
              </p>
              <div className="mt-8 flex gap-5 text-2xl font-black text-[#ffd366]">
                <span>f</span>
                <span>|</span>
                <span>◎</span>
                <span>|</span>
                <span>◔</span>
              </div>
            </div>

            <div className="text-right" dir="rtl">
              <h3 className="text-2xl font-black text-[#ffd366]">
                روابط سريعة
              </h3>
              <ul className="mt-8 space-y-0 text-base font-bold">
                {["الرئيسية", "الخدمات", "اتصل بنا", "عن الشركة"].map(
                  (link, index) => (
                    <li
                      className={`px-9 py-4 ${
                        index === 0
                          ? "border border-white text-[#ffd366]"
                          : "text-white"
                      }`}
                      key={link}
                    >
                      {link}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="text-right" dir="rtl">
              <h3 className="text-2xl font-black text-[#ffd366]">
                معلومات الاتصال
              </h3>
              <p className="mt-8 text-base leading-8 text-white ltr">
                Ali Fahad Al Dewailah St, Block 3, Al Farwaniya, 80003, Kuwait
                Shop No. 26, Al Khuraj Commercial Complex, Nearby Asfour Canary
                Restaurant
              </p>
            </div>

            <div className="text-right" dir="rtl">
              <h3 className="text-2xl font-black leading-tight text-[#ffd366]">
                اشترك للحصول على عروض خاصة
              </h3>
              <p className="mt-8 text-base leading-8 text-white">
                اشترك للحصول على نصائح تنظيف حصرية، وعروض خاصة، وآخر التحديثات
                حول خدماتنا الاحترافية.
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
                  احصل على
                  <br />
                  عرض سعر
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
