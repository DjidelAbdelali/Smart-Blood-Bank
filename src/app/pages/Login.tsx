import Navbar from "../Navbar";
import Link from "next/link";
import { useState } from "react";
import Button from "../components/Button";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Ajoute ici la logique de connexion
    }, 2000);
    return (
      <main
        className="relative flex min-h-screen flex-col items-center justify-center text-center bg-cover bg-center px-6"
        style={{ backgroundImage: "url('/your-image.jpg')" }}
      >
        <Navbar />

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-red-600">Sign In</h2>
          <p className="text-sm mt-2">
            Don’t have an account?{" "}
            <Link href="/register" className="text-red-500">
              Create one
            </Link>
          </p>

          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            autoComplete="username"
            required
            className="block w-full mt-4 p-2 border rounded"
          />

          <input
            className="block w-full mt-4 p-2 border rounded"
            type="text"
            placeholder="Username"
          />
          <input
            className="block w-full mt-2 p-2 border rounded"
            type="password"
            placeholder="Password"
          />

          <Button
            onClick={handleLogin}
            disabled={loading}
            className={`bg-red-600 text-white px-8 py-3 mt-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Loading..." : "Sign In"}
          </Button>
        </div>
      </main>
    );
  };
}
