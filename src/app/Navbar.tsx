"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useAuth } from "./context/AuthContext"; // adjust the path as needed

export default function Navbar() {
  const pathname = usePathname();
  // const { isAuthenticated } = useAuth();

  const links = [
    { href: "/", label: "IDonate" },
    { href: "/service", label: "Services" },
    { href: "/partner", label: "Partner Hospitals" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact us" },
  ];

  return (
    <nav className="relative bg-white p-4 flex justify-around items-center w-full">
      {links.map(({ href, label }) => (
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
