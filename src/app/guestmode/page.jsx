"use client";

import React from "react";
import Link from "next/link";

const Home = () => (
  <div className="text-center p-10">
    <h1 className="text-4xl font-bold text-red-600">
      Save a Life, Donate Blood
    </h1>
    <p className="mt-4 text-lg">
      Join our network of life-saving donors and hospitals.
    </p>
    <div className="mt-6">
      <Link href="/register">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
