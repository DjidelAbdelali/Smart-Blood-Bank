"use client";
import { motion } from "framer-motion";

export default function PartnerHospitals() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="p-10"
    >
      <h1 className="text-3xl font-bold">Partner Hospitals</h1>
      <p className="mt-4 text-lg">Manage your donor profile and blood donation history.</p>
    </motion.main>
  );
}
