"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative bg-white text-red p-4 flex justify-around items-center w-full">
      <Link href="/" className="text-xl font-bold text-red-600">
        Guest Mode
      </Link>
      <Link href="/services" className="text-xl font-bold text-black">
        Services
      </Link>
      <Link href="/PartnerHospitals" className="text-xl font-bold text-black">
        Partner Hospitals
      </Link>
      <Link href="/About" className="text-xl font-bold text-black">
        About us
      </Link>
      <Link href="/Contact" className="text-xl font-bold text-black">
        Contact us
      </Link>
    </nav>
  );
}
