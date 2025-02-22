"use client";

import Link from "next/link";

export default function Services() {
  return (
    <main
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/your-background-image.jpg')" }}
    >
      {/* If you already have a Navbar globally, remove or comment out the next line */}
      {/* <Navbar /> */}

      <div className="flex flex-col items-center pt-16 px-4">
        {/* Title and Tagline */}
        <h1 className="text-5xl font-bold text-red-600 mb-2">iDonate</h1>
        <p className="text-xl text-yellow-400 mb-8">
          Seamless Blood Donation &amp; Smart Conservation
        </p>

        {/* Three Service Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          {/* Card 1 */}
          <div
            className="
            w-64 h-80 bg-white rounded-lg shadow-md p-4 
            transition-all duration-200
            hover:bg-red-50 hover:shadow-xl hover:scale-105
          "
          >
            <h2 className="text-lg font-bold mb-2">Service One</h2>
            <p className="text-sm text-gray-600">
              Description of service one. Provide some details here about how
              this service helps with blood donation or management.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
            w-64 h-80 bg-white rounded-lg shadow-md p-4
            transition-all duration-200
            hover:bg-red-50 hover:shadow-xl hover:scale-105
          "
          >
            <h2 className="text-lg font-bold mb-2">Service Two</h2>
            <p className="text-sm text-gray-600">
              Description of service two. Provide some details here about how
              this service helps with blood donation or management.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
            w-64 h-80 bg-white rounded-lg shadow-md p-4
            transition-all duration-200
            hover:bg-red-50 hover:shadow-xl hover:scale-105
          "
          >
            <h2 className="text-lg font-bold mb-2">Service Three</h2>
            <p className="text-sm text-gray-600">
              Description of service three. Provide some details here about how
              this service helps with blood donation or management.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <Link href="/">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Back
          </button>
        </Link>
      </div>
    </main>
  );
}
