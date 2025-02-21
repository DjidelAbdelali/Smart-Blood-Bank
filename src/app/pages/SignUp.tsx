import Navbar from "../Navbar";
import Link from "next/link";

export default function Signup() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center text-center bg-cover bg-center px-6"
      style={{ backgroundImage: "url('/your-image.jpg')" }}
    >
      <Navbar />

      <h1 className="text-7xl md:text-8xl font-extrabold text-red-600 drop-shadow-lg">
        iDonate
      </h1>

      <p className="text-lg md:text-2xl text-yellow-400 mt-2 font-semibold drop-shadow-md">
        Seamless Blood Donation & Smart Conservation
      </p>

      <div className="mt-6 flex gap-4">
        <Link href="/donor">
          <button className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition">
            Donor
          </button>
        </Link>
        <Link href="/hospital">
          <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition">
            Hospital
          </button>
        </Link>
      </div>
    </main>
  );
}
