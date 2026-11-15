"use client";

import Link from "next/link";
import { Heart, Target, Shield, Users, ArrowRight } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Bénévolat & Éthique",
      desc: "Le don de sang est un acte purement bénévole, gratuit et désintéressé, conforme aux normes internationales de l'OMS et de l'Agence Nationale du Sang (ANS).",
      icon: Heart,
    },
    {
      title: "Sécurité & Traçabilité",
      desc: "Chaque poche de sang est rigoureusement testée en sérologie et immuno-hématologie, avec un code-barres unique assurant une traçabilité totale du donneur au receveur.",
      icon: Shield,
    },
    {
      title: "Réactivité Face aux Urgences",
      desc: "Grâce aux technologies web et mobiles, nous réduisons le délai moyen de recherche de sang rare de 8 heures à moins de 25 minutes.",
      icon: Target,
    },
    {
      title: "Communauté Solidaire",
      desc: "Un réseau national uni par la volonté de sauver des vies, composé de citoyens donneurs, d'étudiants, de médecins et de coordinateurs hospitaliers.",
      icon: Users,
    },
  ];

  return (
    <div className="space-y-10 pb-12">
      {/* Hero Section */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold mb-4">
            <Heart className="w-3.5 h-3.5 fill-red-600" />
            <span>Notre Mission Humanitaire</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Digitaliser le Don de Sang pour qu&apos;aucune vie ne soit perdue
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            iDonate est une plateforme nationale intelligente née pour surmonter les pénuries chroniques de produits sanguins dans les hôpitaux algériens. Nous facilitons la rencontre entre les besoins hospitaliers vitaux et la générosité des citoyens donneurs.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900">Nos Piliers Fondamentaux</h2>
          <p className="text-sm text-slate-500 mt-1">
            Les valeurs médicales et éthiques qui guident chacune de nos actions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Un Impact Direct sur le Terrain</h2>
          <p className="text-sm text-slate-400 mt-2">
            Des milliers de patients bénéficient chaque mois de notre réseau d&apos;intervention rapide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="block text-3xl sm:text-4xl font-black text-red-500">4 800+</span>
            <span className="block text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Donneurs Volontaires
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="block text-3xl sm:text-4xl font-black text-emerald-400">14 200+</span>
            <span className="block text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Vies Préservées
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="block text-3xl sm:text-4xl font-black text-amber-400">35+</span>
            <span className="block text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Hôpitaux & Cliniques
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="block text-3xl sm:text-4xl font-black text-blue-400">22 min</span>
            <span className="block text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Temps Moyen d&apos;Alerte
            </span>
          </div>
        </div>
      </section>

      {/* Team & Partnership Statement */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">En partenariat avec le corps médical algérien</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Notre plateforme collabore étroitement avec les chefs de service d&apos;hématologie et les associations d&apos;aide aux malades hémodialysés, drépanocytaires et cancéreux.
          </p>
        </div>
        <Link
          href="/donate"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold text-sm shadow-md shadow-red-500/20 transition flex items-center gap-2 shrink-0"
        >
          <span>Rejoindre le Mouvement</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
