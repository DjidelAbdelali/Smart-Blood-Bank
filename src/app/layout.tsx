"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { AuthProvider } from "./context/AuthContext";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="fr" className="h-full">
      <head>
        <title>iDonate | Smart Blood Bank & Donation Network</title>
        <meta
          name="description"
          content="Smart Blood Bank platform connecting voluntary donors with hospitals and transfusion centers in real-time."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#dc2626" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col">
        <AuthProvider>
          {/* Subtle medical grid & gradient background */}
          <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40 bg-[radial-gradient(#fecdd3_1px,transparent_1px)] [background-size:20px_20px]" />

          <Navbar />

          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
            >
              {children}
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <footer className="mt-auto border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                <span className="font-semibold text-slate-700">iDonate • Smart Blood Bank</span>
                <span>— Réseau National Algérien de Don du Sang</span>
              </div>
              <div className="flex items-center gap-4 text-slate-500">
                <span>Urgence 24/7 : 14 ou 021 23 55 55</span>
                <span>•</span>
                <span>v1.0 Mobile & Web</span>
              </div>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
