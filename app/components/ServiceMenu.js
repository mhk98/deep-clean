"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../lib/api";

export default function ServiceMenu({ active = false, className = "" }) {
  const [menuServices, setMenuServices] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/services`)
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => setMenuServices(payload?.data || []))
      .catch(() => setMenuServices([]));
  }, []);

  const baseClass = active
    ? "inline-flex h-12 min-w-32 items-center justify-center border-2 border-[#0d274d] px-7 text-base font-black text-[#0d274d]"
    : "hidden text-base font-black text-[#0d274d] md:inline-flex";

  return (
    <div className={`group relative ${className}`}>
      <Link className={`${baseClass} gap-2`} href="/services">
        Services <span aria-hidden="true">▾</span>
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(9,29,58,.2)]">
        <Link
          className="block border-b border-slate-100 px-4 py-3 text-sm font-black text-[#0d274d] hover:bg-[#fff4d8]"
          href="/services"
        >
          All Services
        </Link>
        <div className="grid max-h-[430px] gap-1 overflow-y-auto py-2">
          {menuServices.map((service) => (
            <Link
              className="block px-4 py-3 text-sm font-bold text-[#243955] hover:bg-[#0d274d] hover:text-[#ffd366]"
              href={`/services/${service.slug}`}
              key={service.slug}
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
