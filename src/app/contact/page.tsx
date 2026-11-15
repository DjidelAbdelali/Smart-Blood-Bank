"use client";

import { useState } from "react";
import { Phone, Mail, Send, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Demande d'information générale");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold mb-3">
          <Phone className="w-3.5 h-3.5" />
          <span>Assistance & Urgences 24/7</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Contactez l&apos;Équipe iDonate</h1>
        <p className="mt-2 text-base text-slate-600">
          Une urgence vitale ? Une question sur le don ou l&apos;organisation d&apos;une collecte ? Notre équipe médicale et technique est à votre écoute continue.
        </p>
      </div>

      {/* Emergency Hotlines Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-gradient-to-br from-red-600 to-rose-700 text-white p-6 rounded-3xl shadow-lg shadow-red-500/15 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg">Urgences Vitales SAMU</h3>
            <p className="text-xs text-red-100 mt-1">Numéro national gratuit d&apos;urgence médicale en Algérie.</p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/20">
            <a
              href="tel:14"
              className="text-2xl font-black hover:underline block"
            >
              14 ou 1021
            </a>
            <span className="text-[11px] text-red-200 font-medium">Ligne Prioritaire H24</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Permanence iDonate</h3>
            <p className="text-xs text-slate-500 mt-1">Coordination des donneurs bénévoles et dispatching.</p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100">
            <a
              href="tel:0550505050"
              className="text-xl font-bold text-slate-900 hover:text-red-600 block"
            >
              0550 50 50 50
            </a>
            <span className="text-[11px] text-slate-400 font-medium">Disponible 7j/7 de 8h à 22h</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Support Numérique</h3>
            <p className="text-xs text-slate-500 mt-1">Pour les partenariats hospitaliers et questions techniques.</p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100">
            <a
              href="mailto:contact@smartbloodbank.dz"
              className="text-sm font-bold text-slate-900 hover:text-red-600 block truncate"
            >
              contact@smartbloodbank.dz
            </a>
            <span className="text-[11px] text-slate-400 font-medium">Réponse sous 2 heures</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Envoyez-nous un Message</h2>
        <p className="text-xs sm:text-sm text-slate-500 mb-6">
          Remplissez ce formulaire et notre responsable de coordination vous recontactera sans délai.
        </p>

        {submitted && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Votre message a été envoyé à l&apos;équipe iDonate avec succès ! Nous vous répondrons très rapidement.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nom Complet</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ex: Dr. Amine Benali"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@exemple.dz"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Numéro de Téléphone</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="05 / 06 / 07..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Objet de la demande</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="Information Donneur">Information Donneur</option>
                <option value="Urgence Transfusionnelle">Urgence Transfusionnelle</option>
                <option value="Partenariat Hôpital / Clinique">Partenariat Hôpital / Clinique</option>
                <option value="Organisation Collecte Mobile">Organisation Collecte Mobile</option>
                <option value="Autre Demande">Autre Demande</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Décrivez votre situation ou votre demande..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm shadow-md shadow-red-500/20 transition flex items-center justify-center gap-2 active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Transmettre le Message</span>
          </button>
        </form>
      </div>
    </div>
  );
}
