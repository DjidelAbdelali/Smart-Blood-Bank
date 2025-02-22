"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  // Handler to navigate to the edit profile page
  const handleEditProfile = () => {
    router.push("/donate/editprofile"); // Adjust the route as needed
  };

  return (
    <main className="min-h-screen px-6 py-8">
      {/* Profile Section */}
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Profile</h2>

        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          {/* Profile Icon Placeholder */}
          <div className="mr-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-700">
              FA
            </div>
          </div>

          {/* Profile Info */}
          <div>
            <p className="text-xl font-semibold text-gray-900">FEKKAI Ahmed</p>
            <p className="text-md text-gray-500">0550 50 50 50</p>
          </div>

          {/* Profile Edit Icons */}
          <div className="ml-auto flex space-x-4 mt-4 md:mt-0">
            {/* Pencil Icon for Editing */}
            <button
              title="Edit Profile"
              onClick={handleEditProfile}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L7 21H3v-4L16.732 3.732z"
                />
              </svg>
            </button>

            {/* Settings Icon */}
            <button
              title="Settings"
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-6 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-6 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Profile Description */}
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus nibh sit amet tempus hendrerit. Pellentesque tincidunt
          scelerisque est eu consectetur justo scelerisque sit amet. Maecenas
          nec purus.
        </p>
      </section>

      {/* Recent Posts / Donations Section */}
      <section className="max-w-4xl mx-auto mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-700">Recent Posts</h2>
          <button
            className="text-red-600 hover:underline"
            onClick={() => router.push("/donate/posts")}
          >
            More Posts
          </button>
        </div>

        {/* Post Card */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-800">FEKKAI Ahmed</p>
              <p className="text-red-600 font-semibold">Emergency Call</p>
            </div>
            <p className="text-sm text-gray-400">16 Aug 24</p>
          </div>

          {/* Additional Info */}
          <div className="mt-2 text-sm text-gray-700">
            <p>Blood Type: A-</p>
            <p>Phone Number: 0550 50 50 50</p>
            <p className="text-green-600 font-semibold">Status: Done</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-4 space-x-2">
            {/* White button with red text */}
            <button className="border border-red-500 text-red-500 px-4 py-1 rounded-full hover:bg-red-50 transition">
              Edit Post
            </button>

            {/* Red button with white text */}
            <button className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition">
              Delete Post
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
