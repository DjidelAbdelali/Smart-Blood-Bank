"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Get current route

  return (
    <nav className="relative bg-white p-4 flex justify-around items-center w-full">
      {[
        { href: "/", label: "Guest Mode" },
        { href: "/service", label: "Services" },
        { href: "/partner", label: "Partner Hospitals" },
        { href: "/about", label: "About us" },
        { href: "/contact", label: "Contact us" },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-xl font-bold ${
            pathname === href ? "text-red-600" : "text-black"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
