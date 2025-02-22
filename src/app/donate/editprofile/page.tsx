"use client";

import { useState } from "react";

export default function EditProfile() {
  const [username, setUsername] = useState("FEKKAI Ahmed");
  const [phoneNumber, setPhoneNumber] = useState("0550 50 50 50");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus nibh sit amet tempus hendrerit."
  );
  const [pack, setPack] = useState("Current Pack");

  const handleDiscard = () => console.log("Changes discarded");
  const handleConfirm = () =>
    console.log("Profile updated:", { username, phoneNumber, bio, pack });
  const handleChangeOffer = () => console.log("Change the Offer clicked");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Scrollable container */}
      <div className="flex-1 overflow-y-auto flex justify-center items-start px-6 py-8">
        <section className="bg-white max-w-4xl w-full p-4 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-black mb-4 text-center">
            Edit Profile
          </h2>

          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-4">
            <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5.121 17.804A4 4 0 018 16h8a4 4 0 012.879 1.804M12 14v.01M12 14c-1.933 0-3.714-.78-5.02-2.05A6.978 6.978 0 015 9a7 7 0 1114 0c0 1.933-.78 3.714-2.05 5.02A6.978 6.978 0 0112 14z"
                />
              </svg>
            </div>
            <p className="text-red-600 font-semibold cursor-pointer hover:underline text-sm">
              Change Profile Picture
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-lg font-semibold text-gray-700 mb-1"
              >
                Edit Username:
              </label>
              <input
                id="username"
                type="text"
                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="text-lg font-semibold text-gray-700 mb-1"
              >
                Edit Number:
              </label>
              <input
                id="phoneNumber"
                type="text"
                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="bio"
                className="text-lg font-semibold text-gray-700 mb-1"
              >
                Edit Bio:
              </label>
              <textarea
                id="bio"
                rows={3}
                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            {/* Offer and Change Button Inline */}
            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="pack"
                className="text-lg font-semibold text-gray-700 mb-1"
              >
                Edit Pack:
              </label>
              <div className="flex space-x-2">
                <input
                  id="pack"
                  type="text"
                  className="border border-gray-300 rounded-md p-2 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-red-400"
                  value={pack}
                  onChange={(e) => setPack(e.target.value)}
                />
                <button
                  onClick={handleChangeOffer}
                  className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md text-sm hover:bg-red-700 transition"
                >
                  Change The Offer
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center md:justify-end mt-4 space-x-3">
            <button
              onClick={handleDiscard}
              className="px-4 py-2 bg-white text-red-500 border border-red-500 font-semibold rounded-md text-sm hover:bg-red-50 transition"
            >
              Discard
            </button>
            <button
              onClick={handleConfirm}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md text-sm hover:bg-green-600 transition"
            >
              Confirm
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
