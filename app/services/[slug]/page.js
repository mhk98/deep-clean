import Link from "next/link";
import { notFound } from "next/navigation";
import { getServicePage, serviceAreas, servicePages } from "../servicePages";

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }) {
  const service = getServicePage(params.slug);

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

export default function ServiceLandingPage({ params }) {
  const service = getServicePage(params.slug);

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
    </main>
  );
}
