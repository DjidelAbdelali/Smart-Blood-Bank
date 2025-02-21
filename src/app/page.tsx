import Link from "next/link";
import Navbar from "./Navbar"; // Ensure correct import

export default function Home() {
  return (
    <main
      className="relative  min-h-screen flex-col items-center justify-center text-center bg-cover bg-center px-6"
      style={{ backgroundImage: "url('/your-image.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center h-screen w-full text-center">
        <h1 className="text-6xl font-bold text-red-600">iDonate</h1>
        <p className="text-xl text-yellow-400">
          Seamless Blood Donation & Smart Conservation
        </p>
        <div className="flex space-x-4 mt-6">
          <button className="px-6 py-3 bg-white text-red-600 font-semibold rounded-full shadow-lg">
            Sign In
          </button>
          <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg">
            Register
          </button>
        </div>
      </div>
    </main>
  );
}
