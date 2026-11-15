"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth, BloodGroup } from "./context/AuthContext";
import { Heart, Activity, MapPin, AlertCircle, ArrowRight, Droplets, Clock, Building2, CheckCircle2 } from "lucide-react";

export default function Home() {
  const { requests } = useAuth();
  const [selectedGroup, setSelectedGroup] = useState<BloodGroup>("O+");

  const COMPATIBILITY_MAP: Record<BloodGroup, { canGiveTo: BloodGroup[]; canReceiveFrom: BloodGroup[] }> = {
    "O-": {
      canGiveTo: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
      canReceiveFrom: ["O-"],
    },
    "O+": {
      canGiveTo: ["O+", "A+", "B+", "AB+"],
      canReceiveFrom: ["O+", "O-"],
    },
    "A-": {
      canGiveTo: ["A-", "A+", "AB-", "AB+"],
      canReceiveFrom: ["A-", "O-"],
    },
    "A+": {
      canGiveTo: ["A+", "AB+"],
      canReceiveFrom: ["A+", "A-", "O+", "O-"],
    },
    "B-": {
      canGiveTo: ["B-", "B+", "AB-", "AB+"],
      canReceiveFrom: ["B-", "O-"],
    },
    "B+": {
      canGiveTo: ["B+", "AB+"],
      canReceiveFrom: ["B+", "B-", "O+", "O-"],
    },
    "AB-": {
      canGiveTo: ["AB-", "AB+"],
      canReceiveFrom: ["AB-", "A-", "B-", "O-"],
    },
    "AB+": {
      canGiveTo: ["AB+"],
      canReceiveFrom: ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"],
    },
  };

  const bloodGroups: BloodGroup[] = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const urgentCount = requests.filter((r) => r.urgency === "CRITICAL").length;

  return (
    <div className="space-y-12 pb-12">
      {/* Urgent Broadcast Bar */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-red-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm uppercase tracking-wide bg-white text-red-700 px-2 py-0.5 rounded text-[11px]">
                Alerte Réseau
              </span>
              <span className="text-xs text-red-100 font-medium">Mise à jour en temps réel</span>
            </div>
            <p className="text-sm font-medium mt-0.5">
              <span className="font-bold">{urgentCount} demandes critiques</span> de sang en cours dans les hôpitaux de référence (Mustapha Pacha, Oran, Constantine).
            </p>
          </div>
        </div>
        <Link
          href="/guestmode"
          className="shrink-0 bg-white text-red-700 hover:bg-red-50 px-5 py-2 rounded-xl text-sm font-bold transition flex items-center gap-1.5 shadow-xs"
        >
          <span>Voir les Urgences</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-6 border border-red-100">
            <Droplets className="w-3.5 h-3.5 fill-red-600" />
            <span>Chaque don compte • Sauvez jusqu&apos;à 3 vies</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Banque de Sang Intelligente & Réseau de Donateurs en <span className="text-red-600">Algérie</span>
          </h1>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl">
            iDonate connecte instantanément les centres de transfusion sanguine, les hôpitaux et les donneurs volontaires pour éliminer les pénuries de sang et sauver des vies sans délai.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/donate"
              className="px-6 py-3.5 bg-red-600 text-white rounded-2xl font-bold shadow-md shadow-red-500/25 hover:bg-red-700 hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Je veux donner mon sang</span>
            </Link>

            <Link
              href="/partner"
              className="px-6 py-3.5 bg-slate-100 text-slate-800 rounded-2xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2 active:scale-95"
            >
              <Building2 className="w-5 h-5 text-slate-600" />
              <span>Consulter les stocks des hôpitaux</span>
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-100">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">4 820+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Donneurs enregistrés</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-red-600">35+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Hôpitaux partenaires</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">12 400+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Poches distribuées</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">100%</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Bénévolat & Gratuité</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Blood Group Compatibility Matrix */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-6 h-6 text-red-600" />
              <span>Calculateur de Compatibilité Sanguine</span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Sélectionnez votre groupe sanguin pour découvrir vos donneurs et vos receveurs compatibles.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl overflow-x-auto">
            {bloodGroups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedGroup === group
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-red-600"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Can give to */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-emerald-900">
                Vous pouvez DONNER votre sang ({selectedGroup}) à :
              </span>
              <span className="text-xs font-semibold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full">
                {COMPATIBILITY_MAP[selectedGroup].canGiveTo.length} Groupes
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {COMPATIBILITY_MAP[selectedGroup].canGiveTo.map((g) => (
                <div
                  key={g}
                  className="px-3.5 py-1.5 bg-white border border-emerald-300 text-emerald-800 rounded-xl text-sm font-bold shadow-xs"
                >
                  {g}
                </div>
              ))}
            </div>
            {selectedGroup === "O-" && (
              <p className="text-xs text-emerald-700 mt-3 font-medium">
                ⭐ <strong>Donneur Universel :</strong> Votre sang peut sauver n&apos;importe quel patient en urgence absolue !
              </p>
            )}
          </div>

          {/* Can receive from */}
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-rose-900">
                Vous pouvez RECEVOIR du sang ({selectedGroup}) de :
              </span>
              <span className="text-xs font-semibold bg-rose-200 text-rose-900 px-2 py-0.5 rounded-full">
                {COMPATIBILITY_MAP[selectedGroup].canReceiveFrom.length} Groupes
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {COMPATIBILITY_MAP[selectedGroup].canReceiveFrom.map((g) => (
                <div
                  key={g}
                  className="px-3.5 py-1.5 bg-white border border-rose-300 text-rose-800 rounded-xl text-sm font-bold shadow-xs"
                >
                  {g}
                </div>
              ))}
            </div>
            {selectedGroup === "AB+" && (
              <p className="text-xs text-rose-700 mt-3 font-medium">
                ⭐ <strong>Receveur Universel :</strong> Vous pouvez recevoir du sang de tous les groupes sanguins.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Real-time Emergency Requests Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Appels Urgents de Don</h2>
            <p className="text-sm text-slate-500">Demandes de transfusion vérifiées dans les hôpitaux</p>
          </div>
          <Link
            href="/guestmode"
            className="text-sm font-semibold text-red-600 hover:text-red-700 flex items-center gap-1"
          >
            <span>Toutes les alertes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {requests.slice(0, 3).map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span>
                    {req.urgency}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {req.postedAt}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center text-lg font-black shrink-0 shadow-xs">
                    {req.bloodType}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 leading-tight">{req.patientName}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {req.hospital} ({req.wilaya})
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  {req.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600">
                  Besoin : <strong className="text-red-600">{req.unitsNeeded} poches</strong>
                </span>
                <Link
                  href="/donate"
                  className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Répondre</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conditions to Donate Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
        <div className="max-w-2xl mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-red-400 bg-red-950/60 px-3 py-1 rounded-full border border-red-800/50">
            Guide du Donneur
          </span>
          <h2 className="text-3xl font-bold mt-3">Qui peut donner son sang ?</h2>
          <p className="text-sm text-slate-300 mt-2">
            Le don de sang est un geste simple, rapide et sans danger pour la santé. Vérifiez vos critères d&apos;éligibilité ci-dessous.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="font-bold text-base">Âge</h4>
            <p className="text-xs text-slate-300 mt-1">
              Être âgé de 18 à 65 ans (premier don possible jusqu&apos;à 60 ans).
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="font-bold text-base">Poids</h4>
            <p className="text-xs text-slate-300 mt-1">
              Peser au minimum 50 kg pour un prélèvement de 450 ml en toute sécurité.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="font-bold text-base">Santé Générale</h4>
            <p className="text-xs text-slate-300 mt-1">
              Être en bonne forme, ne pas avoir de fièvre ou d&apos;infection récente.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="font-bold text-base">Hydratation</h4>
            <p className="text-xs text-slate-300 mt-1">
              Ne pas venir à jeun, boire beaucoup d&apos;eau avant et après le don.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
