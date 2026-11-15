"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth, BloodGroup } from "../../context/AuthContext";
import { ArrowLeft, Check, User, Phone, MapPin, Award, FileText, Droplets } from "lucide-react";

export default function EditProfile() {
  const router = useRouter();
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user?.name || "Ahmed FEKKAI");
  const [phoneNumber, setPhoneNumber] = useState(user?.phone || "0550 50 50 50");
  const [bloodType, setBloodType] = useState<BloodGroup>(user?.bloodType || "O+");
  const [wilaya, setWilaya] = useState(user?.wilaya || "16 - Alger");
  const [bio, setBio] = useState(
    user?.bio ||
      "Donneur régulier et bénévole. Prêt à intervenir en cas d'urgence de transfusion dans la région algéroise."
  );
  const [pack, setPack] = useState(user?.pack || "Hero Gold Donor");
  const [savedSuccess, setSavedSuccess] = useState(false);

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

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name,
      phone: phoneNumber,
      bloodType,
      wilaya,
      bio,
      pack,
    });
    setSavedSuccess(true);
    setTimeout(() => {
      router.push("/donate");
    }, 1200);
  };

  return (
    <div className="max-w-3xl mx-auto py-6 pb-12">
      <button
        onClick={() => router.push("/donate")}
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-red-600 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Retour au profil donneur</span>
      </button>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-red-600 text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-red-500/20 mx-auto">
              {bloodType}
            </div>
            <div className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 rounded-full border-2 border-white text-white">
              <Check className="w-4 h-4" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mt-4">Modifier le Profil Donneur</h1>
          <p className="text-sm text-slate-500">Mettez à jour vos coordonnées médicales et de contact</p>
        </div>

        {savedSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Profil mis à jour avec succès ! Redirection en cours...</span>
          </div>
        )}

        <form onSubmit={handleConfirm} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-red-500" />
                <span>Nom & Prénom</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>Numéro de Téléphone</span>
              </label>
              <input
                type="text"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-red-500" />
                <span>Groupe Sanguin (Certifié)</span>
              </label>
              <select
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value as BloodGroup)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {bloodGroups.map((g) => (
                  <option key={g} value={g}>
                    Groupe {g}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Wilaya de Résidence</span>
              </label>
              <select
                value={wilaya}
                onChange={(e) => setWilaya(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {wilayas.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-red-500" />
              <span>Niveau de Donateur / Badge d&apos;Honneur</span>
            </label>
            <input
              type="text"
              value={pack}
              onChange={(e) => setPack(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-red-500" />
              <span>Bio & Disponibilité pour les dons</span>
            </label>
            <textarea
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Indiquez vos disponibilités et vos préférences d'intervention..."
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => router.push("/donate")}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-500/20 transition active:scale-95"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
