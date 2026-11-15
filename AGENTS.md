# Repository Engineering & Creation Guidelines (Suite Complète)

Ce projet respecte les standards d'ingénierie et de création issus des 32 dépôts Claude et des compétences avancées :

## 1. Principes d'Ingénierie Karpathy & Ponytail
- **Think Before Coding** : Diagnostic de la cause racine avant toute modification.
- **Simplicité d'Abord** : Préférer des fonctions lisibles et directes aux abstractions prématurées.
- **Diffs Chirurgicaux** : Modifier uniquement ce qui est nécessaire sans toucher au code fonctionnel adjacent.
- **Validation Stricte** : Toujours vérifier la compilation (`build`), le typage et le runtime.
- **Minimalisme du Code** : Le meilleur code est celui qu'on n'a pas besoin d'écrire. Éliminer le code mort.

## 2. Ingénierie Systèmes, Électrique & Rétro-Ingénierie
- **Ingénierie Systèmes** : Cycle en V, analyse FMEA/AMDEC, boucles PID, automatismes industriels (PLC/IEC 61131-3, Modbus, CAN).
- **Génie Électrique & Électronique** : Dimensionnement de circuits, alimentations à découpage/LDO, microcontrôleurs (STM32, ESP32, Arduino), bus (I2C, SPI, UART), règles de routage PCB KiCad (plans de masse, CEM).
- **Rétro-Ingénierie (Reverse Engineering)** : Analyse statique/dynamique de binaires (Ghidra, objdump, strace), rétro-ingénierie de protocoles de communication et extraction de firmware/schémas pour l'interopérabilité.

## 3. UI/UX Pro Max & Modern Web Craft
- Grille de 8px, padding généreux et typographie hiérarchisée.
- Animations fluides à 60–120 FPS avec courbes spring `cubic-bezier(0.16, 1, 0.3, 1)`.
- Élimination du "slop IA" (pas de dégradés violets fluo superflus, pas de blobs informes).
- Architecture de conversion : Hero percutant, preuve sociale, grilles interactives et SEO technique complet.

## 4. Social Media & Content Engine (LinkedIn, Instagram, Facebook)
- **LinkedIn** : Dwell time, hooks à contre-courant, études de cas et carrousels PDF.
- **Instagram** : Scripts Reels 0–60s (Hook-Retain-Reward), carrousels 8–10 slides, micro-appels à l'action.
- **Facebook** : Copywriting direct-response (PAS, AIDA, Before-After-Bridge) et posts d'engagement communautaire.

## 5. Game Development & Design 2D / 3D
- Game loop normalisée avec `deltaTime` (indépendante du framerate).
- **2D** : Sprite sheets, tilemaps, parallaxes et animations dynamiques.
- **3D** : Three.js, React Three Fiber, WebGL shaders, modèles GLTF/GLB optimisés Draco, éclairages PBR et moteurs physiques (Rapier).

## 6. Automatisation de Workflows d'Agents IA
- Orchestration multi-agents via `run_workflow` (pipelines séquentiels, fan-out/fan-in parallèle, boucles générateur-évaluateur).
- Tâches d'arrière-plan autonomes planifiées (cron expressions).
