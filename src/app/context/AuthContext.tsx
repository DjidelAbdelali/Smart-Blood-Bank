"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  bloodType: BloodGroup;
  wilaya: string;
  hospital?: string;
  role: "donor" | "hospital" | "recipient";
  lastDonationDate?: string;
  totalDonations: number;
  isAvailable: boolean;
  bio?: string;
  pack?: string;
}

export interface BloodRequest {
  id: string;
  patientName: string;
  bloodType: BloodGroup;
  hospital: string;
  wilaya: string;
  unitsNeeded: number;
  urgency: "CRITICAL" | "HIGH" | "MODERATE";
  contactPhone: string;
  postedAt: string;
  description: string;
  respondedCount: number;
}

export interface HospitalPartner {
  id: string;
  name: string;
  city: string;
  wilaya: string;
  address: string;
  phone: string;
  emergencyPhone: string;
  hours: string;
  availableStock: Record<BloodGroup, number>; // units available
  criticalNeeded: BloodGroup[];
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email?: string, password?: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updated: Partial<UserProfile>) => void;
  requests: BloodRequest[];
  addRequest: (req: Omit<BloodRequest, "id" | "postedAt" | "respondedCount">) => void;
  respondToRequest: (requestId: string) => void;
  hospitals: HospitalPartner[];
}

const DEFAULT_USER: UserProfile = {
  id: "donor-01",
  name: "Ahmed FEKKAI",
  email: "ahmed.fekkai@smartblood.dz",
  phone: "0550 50 50 50",
  bloodType: "O+",
  wilaya: "16 - Alger",
  hospital: "CHU Mustapha Pacha",
  role: "donor",
  lastDonationDate: "2024-09-15",
  totalDonations: 6,
  isAvailable: true,
  bio: "Regular voluntary donor. Ready to respond to emergency O+ and O- transfusion alerts in Algiers region.",
  pack: "Hero Gold Donor",
};

const INITIAL_REQUESTS: BloodRequest[] = [
  {
    id: "req-1",
    patientName: "Emergency ICU - Surgery",
    bloodType: "O-",
    hospital: "CHU Mustapha Pacha",
    wilaya: "16 - Alger",
    unitsNeeded: 4,
    urgency: "CRITICAL",
    contactPhone: "+213 21 23 55 55",
    postedAt: "15 min ago",
    description: "Urgent need for open-heart pediatric surgery. Universal O- donors requested immediately.",
    respondedCount: 2,
  },
  {
    id: "req-2",
    patientName: "Maternity Ward Alert",
    bloodType: "A+",
    hospital: "EPH Bologhine Ibn Ziri",
    wilaya: "16 - Alger",
    unitsNeeded: 3,
    urgency: "HIGH",
    contactPhone: "+213 21 95 12 12",
    postedAt: "45 min ago",
    description: "Postpartum hemorrhage complication. Looking for healthy A+ or O+ voluntary donors.",
    respondedCount: 5,
  },
  {
    id: "req-3",
    patientName: "Oncology Patient Support",
    bloodType: "B-",
    hospital: "CHU Oran (Dr. Benzerdjeb)",
    wilaya: "31 - Oran",
    unitsNeeded: 2,
    urgency: "HIGH",
    contactPhone: "+213 41 40 33 22",
    postedAt: "2 hours ago",
    description: "Platelet & whole blood transfusion for acute leukemia chemotherapy support.",
    respondedCount: 1,
  },
  {
    id: "req-4",
    patientName: "Trauma Center - Accident",
    bloodType: "AB-",
    hospital: "CHU Constantine (Ibn Badis)",
    wilaya: "25 - Constantine",
    unitsNeeded: 3,
    urgency: "CRITICAL",
    contactPhone: "+213 31 88 44 00",
    postedAt: "3 hours ago",
    description: "Multi-vehicle highway accident. Rare AB- blood group required urgently.",
    respondedCount: 0,
  },
  {
    id: "req-5",
    patientName: "Hematology Service",
    bloodType: "B+",
    hospital: "EPH Kouba",
    wilaya: "16 - Alger",
    unitsNeeded: 2,
    urgency: "MODERATE",
    contactPhone: "+213 21 28 66 11",
    postedAt: "5 hours ago",
    description: "Thalassemia regular exchange transfusion for pediatric care center.",
    respondedCount: 4,
  },
];

const INITIAL_HOSPITALS: HospitalPartner[] = [
  {
    id: "hosp-1",
    name: "CHU Mustapha Pacha",
    city: "Alger Centre",
    wilaya: "16 - Alger",
    address: "Place du 1er Mai, Alger",
    phone: "+213 21 23 55 55",
    emergencyPhone: "+213 21 23 55 00",
    hours: "24/7 Transfusion Center",
    availableStock: { "A+": 18, "A-": 4, "B+": 12, "B-": 2, "AB+": 8, "AB-": 1, "O+": 25, "O-": 3 },
    criticalNeeded: ["O-", "AB-", "A-"],
  },
  {
    id: "hosp-2",
    name: "CHU Bab El Oued (Mohamed Lamine Debaghine)",
    city: "Bab El Oued",
    wilaya: "16 - Alger",
    address: "Boulevard Saïd Touati, Bab El Oued",
    phone: "+213 21 96 00 00",
    emergencyPhone: "+213 21 96 11 11",
    hours: "24/7 Transfusion Center",
    availableStock: { "A+": 14, "A-": 2, "B+": 9, "B-": 3, "AB+": 6, "AB-": 2, "O+": 19, "O-": 1 },
    criticalNeeded: ["O-", "A-"],
  },
  {
    id: "hosp-3",
    name: "CHU Oran - Plateau (Dr. Benzerdjeb)",
    city: "Oran",
    wilaya: "31 - Oran",
    address: "Boulevard Docteur Benzerdjeb, Oran",
    phone: "+213 41 40 33 22",
    emergencyPhone: "+213 41 40 33 00",
    hours: "24/7 Transfusion Center",
    availableStock: { "A+": 22, "A-": 5, "B+": 14, "B-": 1, "AB+": 10, "AB-": 0, "O+": 28, "O-": 2 },
    criticalNeeded: ["AB-", "B-", "O-"],
  },
  {
    id: "hosp-4",
    name: "CHU Constantine (Ibn Badis)",
    city: "Constantine",
    wilaya: "25 - Constantine",
    address: "Avenue Benboulaid, Constantine",
    phone: "+213 31 88 44 00",
    emergencyPhone: "+213 31 88 44 11",
    hours: "24/7 Transfusion Center",
    availableStock: { "A+": 11, "A-": 1, "B+": 8, "B-": 2, "AB+": 4, "AB-": 0, "O+": 15, "O-": 2 },
    criticalNeeded: ["AB-", "A-"],
  },
  {
    id: "hosp-5",
    name: "EPH Kouba (Hôpital Bachir Mentouri)",
    city: "Kouba",
    wilaya: "16 - Alger",
    address: "Rue Mohamed Fellah, Kouba, Alger",
    phone: "+213 21 28 66 11",
    emergencyPhone: "+213 21 28 66 00",
    hours: "08:00 - 20:00 Transfusion Wing",
    availableStock: { "A+": 16, "A-": 3, "B+": 11, "B-": 4, "AB+": 5, "AB-": 2, "O+": 20, "O-": 4 },
    criticalNeeded: ["O-", "B-"],
  },
  {
    id: "hosp-6",
    name: "CHU Tizi Ouzou (Nedir Mohamed)",
    city: "Tizi Ouzou",
    wilaya: "15 - Tizi Ouzou",
    address: "Route de Hasnaoua, Tizi Ouzou",
    phone: "+213 26 21 14 14",
    emergencyPhone: "+213 26 21 14 00",
    hours: "24/7 Blood Bank Center",
    availableStock: { "A+": 19, "A-": 4, "B+": 13, "B-": 2, "AB+": 7, "AB-": 1, "O+": 24, "O-": 3 },
    criticalNeeded: ["AB-", "B-"],
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [user, setUser] = useState<UserProfile | null>(DEFAULT_USER);
  const [requests, setRequests] = useState<BloodRequest[]>(INITIAL_REQUESTS);
  const [hospitals] = useState<HospitalPartner[]>(INITIAL_HOSPITALS);

  useEffect(() => {
    const saved = localStorage.getItem("smart_blood_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
        setIsAuthenticated(true);
      } catch {
        // use default
      }
    }
  }, []);

  const login = async (email?: string, _password?: string): Promise<boolean> => {
    // Simulate auth
    const profile: UserProfile = {
      ...DEFAULT_USER,
      name: email?.split("@")[0]?.toUpperCase() || "Ahmed FEKKAI",
      email: email || "ahmed.fekkai@smartblood.dz",
    };
    setUser(profile);
    setIsAuthenticated(true);
    localStorage.setItem("smart_blood_user", JSON.stringify(profile));
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("smart_blood_user");
  };

  const updateProfile = (updated: Partial<UserProfile>) => {
    if (!user) return;
    const newProfile = { ...user, ...updated };
    setUser(newProfile);
    localStorage.setItem("smart_blood_user", JSON.stringify(newProfile));
  };

  const addRequest = (req: Omit<BloodRequest, "id" | "postedAt" | "respondedCount">) => {
    const newReq: BloodRequest = {
      ...req,
      id: `req-${Date.now()}`,
      postedAt: "Just now",
      respondedCount: 0,
    };
    setRequests((prev) => [newReq, ...prev]);
  };

  const respondToRequest = (requestId: string) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === requestId ? { ...r, respondedCount: r.respondedCount + 1 } : r
      )
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        updateProfile,
        requests,
        addRequest,
        respondToRequest,
        hospitals,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
