"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth, BloodGroup } from "../context/AuthContext";
import {
  Heart,
  Edit3,
  Calendar,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  PlusCircle,
  Award,
  Check,
  AlertTriangle,
  X
} from "lucide-react";

export default function DonatePage() {
  const router = useRouter();
  const { user, requests, respondToRequest, addRequest } = useAuth();
  const [filterGroup, setFilterGroup] = useState<string>("ALL");
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [confirmedId, setConfirmedId] = useState<string | null>(null);

  // New request form state
  const [newPatient, setNewPatient] = useState("");
  const [newBloodType, setNewBloodType] = useState<BloodGroup>("O+");
  const [newHospital, setNewHospital] = useState("CHU Mustapha Pacha");
  const [newWilaya, setNewWilaya] = useState("16 - Alger");
  const [newUnits, setNewUnits] = useState(2);
  const [newUrgency, setNewUrgency] = useState<"CRITICAL" | "HIGH" | "MODERATE">("HIGH");
  const [newPhone, setNewPhone] = useState("+213 550 00 00 00");
  const [newDesc, setNewDesc] = useState("");

  const bloodGroups: (BloodGroup | "ALL")[] = ["ALL", "O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];

  const filteredRequests = requests.filter((r) => {
    if (filterGroup === "ALL") return true;
    return r.bloodType === filterGroup;
  });

  const handleRespond = (id: string) => {
    respondToRequest(id);
    setConfirmedId(id);
    setTimeout(() => setConfirmedId(null), 4000);
  };

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPatient || !newDesc) return;
    addRequest({
      patientName: newPatient,
      bloodType: newBloodType,
      hospital: newHospital,
      wilaya: newWilaya,
      unitsNeeded: Number(newUnits),
      urgency: newUrgency,
      contactPhone: newPhone,
      description: newDesc,
    });
    setShowAddModal(false);
    setNewPatient("");
    setNewDesc("");
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Donor Profile Hero Card */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 text-white flex items-center justify-center text-3xl font-black shadow-md shadow-red-500/20">
                {user?.bloodType || "O+"}
              </div>
              <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 rounded-full border-2 border-white">
                <Check className="w-3.5 h-3.5 text-white" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl font-bold text-slate-900">{user?.name || "Ahmed FEKKAI"}</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  {user?.pack || "Hero Gold"}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-0.5">
                {user?.phone} • {user?.wilaya || "16 - Alger"}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Éligible au don de sang aujourd&apos;hui
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Dernier don : {user?.lastDonationDate || "15 Sept 2024"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => router.push("/donate/editprofile")}
              className="flex-1 md:flex-initial px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-1.5"
            >
              <Edit3 className="w-4 h-4 text-slate-600" />
              <span>Modifier profil</span>
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="flex-1 md:flex-initial px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-semibold shadow-xs transition flex items-center justify-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Publier un appel</span>
            </button>
          </div>
        </div>

        {/* Bio quote */}
        {user?.bio && (
          <div className="mt-6 pt-5 border-t border-slate-100 text-sm text-slate-600 italic">
            &ldquo;{user.bio}&rdquo;
          </div>
        )}

        {/* Donation Statistics */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl text-center">
            <span className="text-xs text-slate-500 block">Dons Effectués</span>
            <span className="text-xl font-bold text-slate-900">{user?.totalDonations || 6} dons</span>
          </div>
          <div className="p-3 bg-red-50 rounded-xl text-center">
            <span className="text-xs text-red-600 block">Vies Sauvées</span>
            <span className="text-xl font-bold text-red-700">{(user?.totalDonations || 6) * 3} vies</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl text-center">
            <span className="text-xs text-slate-500 block">Groupe Sanguin</span>
            <span className="text-xl font-bold text-slate-900">{user?.bloodType || "O+"}</span>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl text-center">
            <span className="text-xs text-emerald-600 block">Statut Actuel</span>
            <span className="text-xl font-bold text-emerald-700">Disponible</span>
          </div>
        </div>
      </section>

      {/* Confirmation Toast Alert */}
      {confirmedId && (
        <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-bold text-sm">Merci pour votre engagement humanitaire !</p>
              <p className="text-xs text-emerald-100">
                L&apos;hôpital et le coordinateur de transfusion ont été prévenus de votre venue. Présentez-vous avec une pièce d&apos;identité.
              </p>
            </div>
          </div>
          <button onClick={() => setConfirmedId(null)} className="p-1 hover:bg-emerald-700 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Blood Requests Section */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-600 fill-red-600" />
              <span>Demandes Urgentes de Transfusion</span>
            </h2>
            <p className="text-sm text-slate-500">
              Répondez directement aux patients et hôpitaux dans le besoin.
            </p>
          </div>

          {/* Group Filter */}
          <div className="flex items-center gap-1 overflow-x-auto p-1 bg-slate-100 rounded-2xl">
            {bloodGroups.map((group) => (
              <button
                key={group}
                onClick={() => setFilterGroup(group)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filterGroup === group
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-red-600"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* Requests Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredRequests.map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${
                      req.urgency === "CRITICAL"
                        ? "bg-red-100 text-red-700"
                        : req.urgency === "HIGH"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>
                    {req.urgency === "CRITICAL" ? "URGENCE VITALE" : `URGENCE ${req.urgency}`}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {req.postedAt}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-600 text-white flex items-center justify-center text-xl font-black shrink-0 shadow-xs">
                    {req.bloodType}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 leading-tight">{req.patientName}</h3>
                    <p className="text-xs font-medium text-slate-600 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      {req.hospital} • {req.wilaya}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                  <p className="text-xs text-slate-600 leading-relaxed">{req.description}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span>
                    Besoins : <strong className="text-red-600 font-bold">{req.unitsNeeded} poches</strong>
                  </span>
                  <span>
                    Donneurs déclarés : <strong>{req.respondedCount}</strong>
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={`tel:${req.contactPhone}`}
                  className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span>Appeler</span>
                </a>

                <button
                  onClick={() => handleRespond(req.id)}
                  className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-xs transition flex items-center justify-center gap-2 active:scale-95"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Je viens donner mon sang</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal: Add Request */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span>Publier un Appel de Sang Urgent</span>
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateRequest} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nom du Patient / Motif Médical
                </label>
                <input
                  type="text"
                  required
                  value={newPatient}
                  onChange={(e) => setNewPatient(e.target.value)}
                  placeholder="ex: Urgence Chirurgie Cardiaque"
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Groupe Sanguin</label>
                  <select
                    value={newBloodType}
                    onChange={(e) => setNewBloodType(e.target.value as BloodGroup)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                      <option key={bg} value={bg}>
                        {bg}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Poches Requises</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={newUnits}
                    onChange={(e) => setNewUnits(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Hôpital</label>
                  <input
                    type="text"
                    required
                    value={newHospital}
                    onChange={(e) => setNewHospital(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Wilaya</label>
                  <input
                    type="text"
                    required
                    value={newWilaya}
                    onChange={(e) => setNewWilaya(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Niveau d&apos;Urgence</label>
                  <select
                    value={newUrgency}
                    onChange={(e) => setNewUrgency(e.target.value as "CRITICAL" | "HIGH" | "MODERATE")}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="CRITICAL">CRITIQUE (Moins de 2h)</option>
                    <option value="HIGH">ÉLEVÉE (Aujourd&apos;hui)</option>
                    <option value="MODERATE">MODÉRÉE (24-48h)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Téléphone Contact</label>
                  <input
                    type="tel"
                    required
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Description / Consignes médicales
                </label>
                <textarea
                  rows={3}
                  required
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Détails sur l'intervention ou le lieu exact..."
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-bold bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-xs"
                >
                  Diffuser l&apos;appel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
