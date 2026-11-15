"use client";

import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { ArrowLeft, MapPin, Phone } from "lucide-react";

export default function PostsPage() {
  const { requests } = useAuth();

  return (
    <div className="max-w-4xl mx-auto py-6 pb-12 space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/donate"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-red-600 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au tableau de bord</span>
        </Link>
        <span className="text-xs font-semibold text-slate-500">
          {requests.length} alertes actives
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Archives des Appels de Don Sanguin</h1>
        <p className="text-sm text-slate-500 mt-1">
          Tous les appels vérifiés émis par les services de réanimation et les hôpitaux en Algérie.
        </p>

        <div className="mt-8 space-y-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="p-5 rounded-2xl border border-slate-200 hover:border-red-200 hover:bg-red-50/20 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center text-lg font-black shrink-0">
                  {req.bloodType}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900">{req.patientName}</h3>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-red-100 text-red-700">
                      {req.urgency}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {req.hospital} • {req.wilaya}
                  </p>
                  <p className="text-xs text-slate-600 mt-2">{req.description}</p>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 shrink-0">
                <span className="text-xs font-bold text-red-600">
                  {req.unitsNeeded} poches requises
                </span>
                <a
                  href={`tel:${req.contactPhone}`}
                  className="px-3.5 py-1.5 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700 transition flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contacter</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
