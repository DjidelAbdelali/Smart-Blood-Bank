"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth, BloodGroup } from "../context/AuthContext";
import { Heart, User, Mail, Phone, MapPin, Droplets, CheckCircle } from "lucide-react";

export default function Register() {
  const router = useRouter();
  const { login, updateProfile } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodType, setBloodType] = useState<BloodGroup>("O+");
  const [wilaya, setWilaya] = useState("16 - Alger");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const bloodGroups: BloodGroup[] = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const wilayas = [
    "16 - Alger",
    "31 - Oran",
    "25 - Constantine",
    "06 - Béjaïa",
    "09 - Blida",
    "15 - Tizi Ouzou",
    "19 - Sétif",
    "23 - Annaba",
    "13 - Tlemcen",
    "35 - Boumerdès",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Veuillez confirmer les critères médicaux d'éligibilité au don.");
      return;
    }
    setLoading(true);

    await login(email, "password123");
    updateProfile({
      name,
      phone,
      bloodType,
      wilaya,
      role: "donor",
      totalDonations: 0,
      pack: "Nouveau Donneur Bienveillant",
      bio: "Nouveau donneur volontaire inscrit sur iDonate.",
    });

    router.push("/donate");
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xl max-w-lg w-full">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-red-500/20">
            <Heart className="w-8 h-8 fill-white" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Inscription Donneur Volontaire</h1>
          <p className="text-xs text-slate-500 mt-1">
            Rejoignez le réseau national pour répondre aux alertes de transfusion
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Nom & Prénom</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ex: Yacine Bouzid"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@mail.dz"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Téléphone</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05 / 06 / 07..."
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Groupe Sanguin</label>
              <div className="relative">
                <Droplets className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <select
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value as BloodGroup)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {bloodGroups.map((g) => (
                    <option key={g} value={g}>
                      Groupe {g}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Wilaya</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <select
                  value={wilaya}
                  onChange={(e) => setWilaya(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {wilayas.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Eligibility checkbox */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-500"
              />
              <span className="text-xs text-slate-600 leading-snug">
                Je confirme avoir entre 18 et 65 ans, peser au moins 50 kg et être apte au don bénévole selon les normes sanitaires algériennes.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm shadow-md shadow-red-500/20 transition flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <span>Création du profil...</span>
            ) : (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Confirmer mon Inscription</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center text-xs text-slate-500">
          Vous avez déjà un compte ?{" "}
          <Link href="/login" className="text-red-600 font-bold hover:underline">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
