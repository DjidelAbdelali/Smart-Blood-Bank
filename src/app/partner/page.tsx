"use client";

import { useState } from "react";
import { useAuth, BloodGroup } from "../context/AuthContext";
import { Hospital, Phone, MapPin, Clock, AlertCircle, ExternalLink } from "lucide-react";

export default function PartnerHospitals() {
  const { hospitals } = useAuth();
  const [selectedWilaya, setSelectedWilaya] = useState<string>("ALL");

  const wilayas = ["ALL", "16 - Alger", "31 - Oran", "25 - Constantine", "15 - Tizi Ouzou"];

  const filteredHospitals = hospitals.filter((h) => {
    if (selectedWilaya === "ALL") return true;
    return h.wilaya === selectedWilaya;
  });

  const bloodKeys: BloodGroup[] = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold mb-2">
              <Hospital className="w-3.5 h-3.5" />
              <span>Réseau Hospitalier Connecté</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900">Hôpitaux Partenaires & Stocks Sanguins</h1>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Consultez en direct les niveaux de stock des centres de transfusion sanguine (CTS) et les besoins prioritaires par établissement.
            </p>
          </div>

          {/* Wilaya Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl overflow-x-auto">
            {wilayas.map((w) => (
              <button
                key={w}
                onClick={() => setSelectedWilaya(w)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  selectedWilaya === w
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-red-600"
                }`}
              >
                {w === "ALL" ? "Toutes les Wilayas" : w.split(" - ")[1]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hospital Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredHospitals.map((hosp) => (
          <div
            key={hosp.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Hospital Title and Details */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0">
                    <Hospital className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 leading-tight">{hosp.name}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{hosp.address} ({hosp.city})</span>
                    </p>
                    <p className="text-xs text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>{hosp.hours}</span>
                    </p>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    hosp.name + " " + hosp.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                  title="Voir sur Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Critical needs badges */}
              {hosp.criticalNeeded.length > 0 && (
                <div className="mb-4 p-3 rounded-2xl bg-rose-50 border border-rose-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 animate-pulse" />
                  <div className="text-xs text-rose-800">
                    <strong className="font-bold">Besoins critiques immédiats :</strong>{" "}
                    {hosp.criticalNeeded.map((bg) => (
                      <span
                        key={bg}
                        className="inline-block px-2 py-0.5 ml-1 rounded-md bg-white border border-rose-300 font-black text-rose-700"
                      >
                        {bg}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Stock Inventory Meters */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Inventaire des poches en réserve
                </h4>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {bloodKeys.map((bg) => {
                    const count = hosp.availableStock[bg] || 0;
                    const isLow = count <= 2;
                    return (
                      <div
                        key={bg}
                        className={`p-2 rounded-xl text-center border ${
                          isLow
                            ? "bg-rose-50/70 border-rose-200 text-rose-700"
                            : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}
                      >
                        <span className="block text-[11px] font-bold">{bg}</span>
                        <span className="block text-sm font-extrabold mt-0.5">{count}</span>
                        <span className="block text-[9px] text-slate-400">unités</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <a
                href={`tel:${hosp.emergencyPhone}`}
                className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-xs transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Urgence CTS : {hosp.emergencyPhone}</span>
              </a>

              <a
                href={`tel:${hosp.phone}`}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition"
              >
                Standard
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
