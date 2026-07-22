"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../lib/api";
import { serviceMenuItems } from "../services/serviceMenuItems";

const mergeServices = (apiServices = []) => {
  const apiMenuServices = apiServices
    .filter((service) => service?.slug && service?.title)
    .map((service) => ({
      slug: service.slug,
      title: service.title,
    }));

  if (!apiMenuServices.length) {
    return serviceMenuItems;
  }

  const servicesBySlug = new Map();

  apiMenuServices.forEach((service) => {
    servicesBySlug.set(service.slug, service);
  });

  serviceMenuItems.forEach((service) => {
    if (!servicesBySlug.has(service.slug)) {
      servicesBySlug.set(service.slug, service);
    }
  });

  return Array.from(servicesBySlug.values());
};

export default function ServiceMenu({ active = false, className = "" }) {
  const [menuServices, setMenuServices] = useState(serviceMenuItems);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/services`)
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => setMenuServices(mergeServices(payload?.data || [])))
      .catch(() => setMenuServices(serviceMenuItems));
  }, []);

  const baseClass = active
    ? "h-12 min-w-32 items-center justify-center border-2 border-[#0d274d] px-7 text-base font-black text-[#0d274d]"
    : "text-base font-black text-[#0d274d] md:inline-flex";

  const panelClass = isOpen
    ? "mt-2 block md:invisible md:absolute md:left-1/2 md:top-full md:mt-0 md:block md:w-72 md:-translate-x-1/2 md:pt-3 md:opacity-0 md:transition md:group-focus-within:visible md:group-focus-within:opacity-100 md:group-hover:visible md:group-hover:opacity-100"
    : "hidden md:invisible md:absolute md:left-1/2 md:top-full md:block md:w-72 md:-translate-x-1/2 md:pt-3 md:opacity-0 md:transition md:group-focus-within:visible md:group-focus-within:opacity-100 md:group-hover:visible md:group-hover:opacity-100";

  return (
    <div className={`group relative w-full md:w-auto ${className}`}>
      <Link className={`${baseClass} hidden gap-2 md:inline-flex`} href="/services">
        Services <span aria-hidden="true">▾</span>
      </Link>
      <button
        aria-expanded={isOpen}
        className={`flex h-12 w-full items-center justify-center gap-2 border px-4 text-base font-black text-[#0d274d] md:hidden ${
          active ? "border-[#0d274d] bg-[#fff7df]" : "border-slate-200 bg-white"
        }`}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        Services <span aria-hidden="true">{isOpen ? "▴" : "▾"}</span>
      </button>
      <div className={`${panelClass} z-50`}>
        <div className="border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(9,29,58,.2)]">
          <Link
            className="block border-b border-slate-100 px-4 py-3 text-sm font-black text-[#0d274d] hover:bg-[#fff4d8]"
            href="/services"
            onClick={() => setIsOpen(false)}
          >
            All Services
          </Link>
          <div className="grid max-h-[60vh] gap-1 overflow-y-auto py-2 md:max-h-[430px]">
            {menuServices.map((service) => (
              <Link
                className="block px-4 py-3 text-sm font-bold text-[#243955] hover:bg-[#0d274d] hover:text-[#ffd366]"
                href={`/services/${service.slug}`}
                key={service.slug}
                onClick={() => setIsOpen(false)}
              >
                {service.title.replace(" Kuwait", "")}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
