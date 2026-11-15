# 🩸 iDonate — Smart Blood Bank & Transfusion Network (Algérie)

> **Plateforme Intelligente de Gestion et Don de Sang pour les Hôpitaux et Donneurs Bénévoles en Algérie.**
> Développé avec **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion** et **Capacitor 8 (Android & iOS)**.

---

## 🌟 Fonctionnalités Clés

1. **Calculateur Dynamique de Compatibilité Sanguine** :
   - Sélection interactive du groupe sanguin (A+, A-, B+, B-, AB+, AB-, O+, O-).
   - Affichage immédiat des groupes compatibles pour donner et recevoir.
   - Mise en valeur des profils Donneur Universel (O-) et Receveur Universel (AB+).

2. **Alertes de Transfusion & Appels d'Urgence en Temps Réel** :
   - Flux d'appels urgents vérifiés (service de réanimation, chirurgie, oncologie).
   - Niveau d'urgence (Critique, Élevé, Modéré) avec compte à rebours et nombre de poches nécessaires.
   - Bouton d'engagement citoyen : *"Je viens donner mon sang"* et appel direct du coordinateur.
   - Possibilité de créer et diffuser un appel urgent vérifié.

3. **Annuaire des Hôpitaux Partenaires & Stocks Sanguins en Direct** :
   - CHU Mustapha Pacha, CHU Bab El Oued, CHU Oran, CHU Constantine, EPH Kouba, CHU Tizi Ouzou.
   - Jauges de stock de poches en temps réel pour chaque groupe sanguin.
   - Détection automatique des pénuries critiques et numéros d'urgence directe du centre de transfusion.
   - Liens directs vers Google Maps.

4. **Espace Donneur & Profil Médical Certifié** :
   - Historique des dons, nombre de vies sauvées estimé, badges d'honneur.
   - Indicateur d'éligibilité médicale au don du jour.
   - Éditeur de profil complet (numéro, wilaya, bio, groupe sanguin).

5. **Mode SOS / Urgence Express (Guest Mode)** :
   - Accès public sans compte pour trouver en 1 clic les hôpitaux possédant des poches du groupe recherché.
   - Numéros d'urgence vitale (SAMU 14, 1021).

6. **Application Mobile Android & iOS Native (Capacitor 8)** :
   - Fichier APK Android généré automatiquement par GitHub Actions.
   - Support iOS natif.
   - Support Progressive Web App (PWA) avec `manifest.json`.

---

## 📱 Téléchargement de l'Application Mobile (APK Android)

L'APK Android est compilé automatiquement à chaque mise à jour via **GitHub Actions** :

1. Rendez-vous sur l'onglet [**Actions**](https://github.com/DjidelAbdelali/Smart-Blood-Bank/actions) du dépôt GitHub.
2. Cliquez sur le dernier workflow exécuté : **Build Android APK & iOS Mobile App**.
3. Dans la section **Artifacts**, téléchargez l'archive **`smart-blood-bank-apk`**.
4. Installez le fichier `smart-blood-bank.apk` directement sur votre téléphone Android.

---

## 🗺️ Structure des Routes (Next.js App Router)

```
src/app/
├── page.tsx                 # Page d'accueil avec matrice de compatibilité et alertes
├── layout.tsx               # Layout principal avec fond médical et AuthProvider
├── globals.css              # Styles Tailwind CSS
├── Navbar.tsx               # Barre de navigation responsive avec menu mobile
├── context/
│   └── AuthContext.tsx      # Gestion d'état globale (auth, hôpitaux, requêtes)
├── components/
│   ├── Button.tsx           # Composant bouton typé
│   └── Input.tsx            # Composant champ de saisie typé
├── donate/
│   ├── page.tsx             # Tableau de bord donneur & filtres d'urgences
│   ├── editprofile/page.tsx # Édition du profil donneur
│   └── posts/page.tsx       # Archives complètes des appels de don
├── partner/
│   └── page.tsx             # Hôpitaux partenaires & inventaire des poches en réserve
├── service/
│   └── page.tsx             # Services : Sang total, Plaquettes, Plasma, Collectes
├── about/
│   └── page.tsx             # Mission, valeurs éthiques et chiffres clés
├── contact/
│   └── page.tsx             # Lignes d'urgence SAMU, permanences et formulaire
├── guestmode/
│   └── page.tsx             # Recherche express de sang en urgence
├── login/
│   └── page.tsx             # Connexion avec bouton Démo 1-clic
├── register/
│   └── page.tsx             # Formulaire complet d'inscription donneur
└── signup/
    └── page.tsx             # Sélection de profil (Donneur ou Hôpital)
```

---

## 💻 Lancer le Projet Localement

### Prérequis
- Node.js >= 20.x ou 22.x
- npm

### Installation
```bash
git clone https://github.com/DjidelAbdelali/Smart-Blood-Bank.git
cd Smart-Blood-Bank
npm install
```

### Démarrage Serveur de Développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Compilation de Production
```bash
npm run build
```

---

## 🛠️ Technologies Utilisées
- **Framework** : Next.js 15.1.7 (Turbopack / App Router)
- **UI / Bibliothèque** : React 19, Tailwind CSS 3.4
- **Animations** : Framer Motion 12
- **Icônes** : Lucide React
- **Mobile** : Capacitor 8 (Core, CLI, Android, iOS)
- **CI/CD** : GitHub Actions (Ubuntu 22.04, JDK 21, macOS 14)
