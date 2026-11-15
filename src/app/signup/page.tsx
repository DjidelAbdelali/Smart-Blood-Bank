"use client";

import Link from "next/link";
import { Heart, Hospital, ArrowRight, UserCheck } from "lucide-react";

export default function Signup() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl max-w-xl w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-red-500/20">
          <Heart className="w-9 h-9 fill-white" />
        </div>

        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Rejoignez iDonate</h1>
        <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
          Choisissez votre profil pour commencer à utiliser la plateforme nationale de don du sang.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/register"
            className="p-6 rounded-2xl border-2 border-red-500 bg-red-50/40 hover:bg-red-50 hover:shadow-md transition text-left flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-red-600 transition">
                Donneur Citoyen
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Recevez les alertes de votre région et sauvez des vies bénévolement.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-red-200/60 flex items-center gap-1 text-xs font-bold text-red-600">
              <span>S&apos;inscrire en 1 min</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/partner"
            className="p-6 rounded-2xl border-2 border-slate-200 hover:border-slate-400 bg-slate-50/40 hover:bg-slate-50 hover:shadow-md transition text-left flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center mb-4">
                <Hospital className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-slate-800 transition">
                Centre Hospitalier
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Gérez vos stocks sanguins et émettez des appels d&apos;urgence vérifiés.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1 text-xs font-bold text-slate-700">
              <span>Espace Hôpitaux</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          Déjà inscrit ?{" "}
          <Link href="/login" className="text-red-600 font-bold hover:underline">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
