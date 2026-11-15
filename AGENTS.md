# Repository Engineering & Creation Guidelines (Suite Complète)

Ce projet respecte les standards d'ingénierie et de création issus des 32 dépôts Claude et des compétences avancées :

## 1. Principes d'Ingénierie Karpathy & Ponytail
- **Think Before Coding** : Diagnostic de la cause racine avant toute modification.
- **Simplicité d'Abord** : Préférer des fonctions lisibles et directes aux abstractions prématurées.
- **Diffs Chirurgicaux** : Modifier uniquement ce qui est nécessaire sans toucher au code fonctionnel adjacent.
- **Validation Stricte** : Toujours vérifier la compilation (`build`), le typage et le runtime.
- **Minimalisme du Code** : Le meilleur code est celui qu'on n'a pas besoin d'écrire. Éliminer le code mort.

## 2. UI/UX Pro Max & Modern Web Craft
- Grille de 8px, padding généreux et typographie hiérarchisée.
- Animations fluides à 60–120 FPS avec courbes spring `cubic-bezier(0.16, 1, 0.3, 1)`.
- Élimination du "slop IA" (pas de dégradés violets fluo superflus, pas de blobs informes).
- Architecture de conversion : Hero percutant, preuve sociale, grilles interactives et SEO technique complet.

## 3. Social Media & Content Engine (LinkedIn, Instagram, Facebook)
- **LinkedIn** : Dwell time, hooks à contre-courant, études de cas et carrousels PDF.
- **Instagram** : Scripts Reels 0–60s (Hook-Retain-Reward), carrousels 8–10 slides, micro-appels à l'action.
- **Facebook** : Copywriting direct-response (PAS, AIDA, Before-After-Bridge) et posts d'engagement communautaire.

## 4. Game Development & Design 2D / 3D
- Game loop normalisée avec `deltaTime` (indépendante du framerate).
- **2D** : Sprite sheets, tilemaps, parallaxes et animations dynamiques.
- **3D** : Three.js, React Three Fiber, WebGL shaders, modèles GLTF/GLB optimisés Draco, éclairages PBR et moteurs physiques (Rapier).

## 5. Automatisation de Workflows d'Agents IA
- Orchestration multi-agents via `run_workflow` (pipelines séquentiels, fan-out/fan-in parallèle, boucles générateur-évaluateur).
- Tâches d'arrière-plan autonomes planifiées (cron expressions).
