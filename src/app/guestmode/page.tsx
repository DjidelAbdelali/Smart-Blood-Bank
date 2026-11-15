"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth, BloodGroup } from "../context/AuthContext";
import { ShieldAlert, Search, Phone, MapPin, AlertCircle, Heart } from "lucide-react";

export default function GuestMode() {
  const { hospitals } = useAuth();
  const [neededBlood, setNeededBlood] = useState<BloodGroup>("O-");
  const [selectedWilaya, setSelectedWilaya] = useState<string>("ALL");

  const bloodGroups: BloodGroup[] = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];
  const wilayas = ["ALL", "16 - Alger", "31 - Oran", "25 - Constantine", "15 - Tizi Ouzou"];

  // Filter hospitals that have stock for this group
  const hospitalsWithStock = hospitals.filter((h) => {
    const matchesWilaya = selectedWilaya === "ALL" || h.wilaya === selectedWilaya;
    const stock = h.availableStock[neededBlood] || 0;
    return matchesWilaya && stock > 0;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Emergency Alert Banner */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-red-500/20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-red-700 text-xs font-black uppercase tracking-wider mb-4">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
            <span>Mode Urgence Immédiate • Accès Public Sans Compte</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Recherche Express de Sang en Cas d&apos;Urgence
          </h1>
          <p className="mt-2 text-sm sm:text-base text-red-100 leading-relaxed">
            Trouvez instantanément les stocks disponibles dans les hôpitaux les plus proches et contactez directement les régulateurs de transfusion sanguine.
          </p>
        </div>
      </div>

      {/* Filter Selector Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Search className="w-5 h-5 text-red-600" />
          <span>Sélectionnez le Groupe Sanguin Requis</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
              Groupe Requis
            </label>
            <div className="flex flex-wrap gap-2">
              {bloodGroups.map((bg) => (
                <button
                  key={bg}
                  onClick={() => setNeededBlood(bg)}
                  className={`px-4 py-2 rounded-xl text-sm font-black transition-all ${
                    neededBlood === bg
                      ? "bg-red-600 text-white shadow-md shadow-red-500/20 scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {bg}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
              Filtrer par Région / Wilaya
            </label>
            <select
              value={selectedWilaya}
              onChange={(e) => setSelectedWilaya(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {wilayas.map((w) => (
                <option key={w} value={w}>
                  {w === "ALL" ? "Toutes les Wilayas (National)" : w}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results matching hospitals */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Hôpitaux avec réserve disponible pour le groupe <span className="text-red-600 font-black">{neededBlood}</span>
          </h2>
          <span className="text-xs font-semibold text-slate-500">
            {hospitalsWithStock.length} centre(s) disponible(s)
          </span>
        </div>

        {hospitalsWithStock.length === 0 ? (
          <div className="bg-rose-50 border border-rose-200 rounded-3xl p-8 text-center max-w-xl mx-auto">
            <AlertCircle className="w-12 h-12 text-rose-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-rose-900">Alerte : Stock très bas pour {neededBlood}</h3>
            <p className="text-xs text-rose-700 mt-1 mb-4">
              Aucun hôpital n&apos;a de stock suffisant actuellement dans cette sélection. Nous vous recommandons d&apos;appeler immédiatement le standard de transfusion d&apos;Alger ou le SAMU.
            </p>
            <a
              href="tel:14"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white rounded-xl font-bold text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Appeler le SAMU (14)</span>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hospitalsWithStock.map((hosp) => {
              const stock = hosp.availableStock[neededBlood] || 0;
              return (
                <div
                  key={hosp.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                        {stock} poche(s) de {neededBlood}
                      </span>
                      <span className="text-xs text-slate-400">{hosp.wilaya}</span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 leading-tight mb-1">{hosp.name}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {hosp.address}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={`tel:${hosp.emergencyPhone}`}
                      className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Appel Urgence CTS</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Volunteer Donor Callout */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold">Vous êtes donneur volontaire en bonne santé ?</h3>
          <p className="text-xs text-slate-400 mt-1">
            Enregistrez-vous sur iDonate pour recevoir les alertes SMS dès qu&apos;un patient de votre wilaya a besoin de votre groupe sanguin.
          </p>
        </div>
        <Link
          href="/register"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold text-sm shadow-md transition flex items-center gap-2 shrink-0"
        >
          <Heart className="w-4 h-4 fill-white" />
          <span>S&apos;inscrire comme donneur</span>
        </Link>
      </div>
    </div>
  );
}
