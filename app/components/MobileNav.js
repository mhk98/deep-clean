"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export default function MobileNav({ active = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(active === "services");
  const [menuServices, setMenuServices] = useState(serviceMenuItems);

  useEffect(() => {
    fetch(`${API_BASE_URL}/services`)
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => setMenuServices(mergeServices(payload?.data || [])))
      .catch(() => setMenuServices(serviceMenuItems));
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="mobile-nav relative ml-auto w-auto md:hidden">
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="ml-auto grid h-12 w-12 place-items-center bg-[#0d274d] text-lg text-[#ffd366] shadow-[0_8px_18px_rgba(13,39,77,.2)]"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-full z-50 mt-3 w-[min(22rem,calc(100vw-2.5rem))] border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(9,29,58,.18)]">
          <Link
            className={`block !min-w-0 !px-4 py-3 !text-left text-sm font-black ${
              active === "home" ? "bg-[#fff7df] text-[#0d274d]" : "text-[#243955]"
            }`}
            href="/"
            onClick={closeMenu}
          >
            Home
          </Link>

          <button
            aria-expanded={servicesOpen}
            className={`mt-1 flex w-full items-center justify-between px-4 py-3 text-left text-sm font-black ${
              active === "services"
                ? "bg-[#fff7df] text-[#0d274d]"
                : "text-[#243955]"
            }`}
            onClick={() => setServicesOpen((current) => !current)}
            type="button"
          >
            <span>Services</span>
            <span aria-hidden="true">{servicesOpen ? "▴" : "▾"}</span>
          </button>

          {servicesOpen ? (
            <div className="max-h-[55vh] overflow-y-auto border-t border-slate-100 py-2">
              <Link
                className="block !min-w-0 !px-6 py-3 !text-left text-sm font-black text-[#0d274d]"
                href="/services"
                onClick={closeMenu}
              >
                All Services
              </Link>
              {menuServices.map((service) => (
                <Link
                  className="block !min-w-0 !px-6 py-3 !text-left text-sm font-bold text-[#243955]"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  onClick={closeMenu}
                >
                  {service.title.replace(" Kuwait", "")}
                </Link>
              ))}
            </div>
          ) : null}

          {navLinks.slice(1).map((link) => (
            <Link
              className={`block !min-w-0 !px-4 py-3 !text-left text-sm font-black ${
                active === link.name.toLowerCase()
                  ? "bg-[#fff7df] text-[#0d274d]"
                  : "text-[#243955]"
              }`}
              href={link.href}
              key={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
            <a
              className="flex !min-w-0 min-h-11 items-center justify-center bg-[#0d274d] !px-3 text-center text-xs font-black text-[#ffd366]"
              href="https://wa.me/96595511354"
              onClick={closeMenu}
              rel="noopener noreferrer"
              target="_blank"
            >
              Call now
            </a>
            <Link
              className="flex !min-w-0 min-h-11 items-center justify-center bg-[#ffd366] !px-3 text-center text-xs font-black text-[#092346]"
              href="/contact"
              onClick={closeMenu}
            >
              Book now
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
