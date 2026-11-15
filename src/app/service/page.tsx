"use client";

import Link from "next/link";
import { Heart, Droplet, Shield, Truck, TestTube2, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "sang-total",
      title: "Don de Sang Total",
      desc: "Le don classique de 450 ml permettant de séparer globules rouges, plasma et plaquettes pour traiter les traumatismes, les interventions chirurgicales lourdes et les accouchements à risque.",
      duration: "10 minutes de prélèvement (45 min sur place)",
      interval: "Tous les 3 mois pour les hommes, 4 mois pour les femmes",
      icon: Droplet,
      badge: "Plus Fréquent",
    },
    {
      id: "plaquettes",
      title: "Don de Plaquettes (Aphérèse)",
      desc: "Prélèvement ciblé des plaquettes sanguines grâce à un séparateur de cellules. Indispensable aux malades atteints de leucémie ou sous chimiothérapie intensive pour éviter les hémorragies.",
      duration: "Environ 90 minutes",
      interval: "Toutes les 4 semaines",
      icon: Heart,
      badge: "Haute Nécessité",
    },
    {
      id: "plasma",
      title: "Don de Plasma",
      desc: "Prélèvement de la partie liquide du sang riche en protéines, immunoglobulines et facteurs de coagulation. Utilisé pour les grands brûlés, les hémophiles et la réanimation néonatale.",
      duration: "Environ 60 minutes",
      interval: "Toutes les 2 semaines",
      icon: TestTube2,
      badge: "Vital",
    },
    {
      id: "urgence",
      title: "Réseau d'Urgence & Groupes Rares",
      desc: "Système de dispatching automatique par SMS et notification push pour mobiliser les donneurs de groupes rares (O négatif, Bombay, AB négatif) lors d'urgences vitales immédiates.",
      duration: "Intervention sous 1h",
      interval: "Mobilisation sur alerte",
      icon: Clock,
      badge: "24h/24 & 7j/7",
    },
    {
      id: "collectes",
      title: "Collectes Mobiles Universités & Entreprises",
      desc: "Organisation de campagnes de don du sang itinérantes avec nos camions de collecte médicalisés au sein des campus universitaires, ministères et grandes entreprises partenaires.",
      duration: "Journée ou demi-journée",
      interval: "Sur réservation",
      icon: Truck,
      badge: "Itinérant",
    },
    {
      id: "securite",
      title: "Contrôle Biologique & Sérologique",
      desc: "Chaque don fait l'objet d'analyses systématiques rigoureuses (VIH, Hépatite B, Hépatite C, Syphilis, paludisme). Le donneur bénéficie ainsi d'un suivi médical régulier et gratuit.",
      duration: "Résultats sous 48h",
      interval: "À chaque don",
      icon: Shield,
      badge: "Sécurité 100%",
    },
  ];

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold mb-3">
          <Heart className="w-3.5 h-3.5 fill-red-600" />
          <span>Services Transfusionnels & Sauvetage</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Nos Services de Transfusion & Conservation
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          iDonate met en relation les donneurs bénévoles avec les centres de transfusion sanguine accrédités en Algérie pour garantir un approvisionnement continu, sécurisé et rapide.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {s.badge}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{s.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-red-500" />
                  <span>Durée : <strong>{s.duration}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Fréquence : <strong>{s.interval}</strong></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-red-500/20 text-center flex flex-col items-center max-w-3xl mx-auto">
        <Heart className="w-12 h-12 fill-white mb-3" />
        <h2 className="text-2xl sm:text-3xl font-extrabold">Prêt à faire la différence ?</h2>
        <p className="text-sm text-red-100 mt-2 max-w-xl">
          Prenez 45 minutes aujourd&apos;hui pour sauver 3 vies. Trouvez le centre de collecte le plus proche de chez vous.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link
            href="/donate"
            className="px-6 py-3 bg-white text-red-700 rounded-2xl font-bold hover:bg-red-50 transition shadow-xs flex items-center gap-2"
          >
            <span>Faire un Don</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/partner"
            className="px-6 py-3 bg-red-800 text-white rounded-2xl font-bold hover:bg-red-900 transition flex items-center gap-2"
          >
            <span>Voir les Hôpitaux Partenaires</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
