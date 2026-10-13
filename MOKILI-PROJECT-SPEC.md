# MOKILI PROJECT SPECIFICATION — BLOG MOLOLO
## Spécification d'Ingénierie & Produit (Conforme MOKILI Framework V1.1)

---

### 1. INFORMATIONS GÉNÉRALES
- **Nom du projet :** Blog Mololo
- **Type de produit :** Site Vitrine & Média Culturel en Ligne
- **Organisation :** Mololo / MOKILI SAS
- **Référence Design :** Pan African Music (PAM - https://pan-african-music.com)
- **Source d'Identité :** `MOLOLO CHARTE & CO.pdf` + `Logo Mololo sans fond.png`

---

### 2. OBJECTIFS DU PRODUIT
1. Établir la présence de référence du studio média en ligne Blog Mololo.
2. Mettre en valeur la richesse des cultures contemporaines africaines et de la diaspora avec une vibration éditoriale pointue et chaleureuse.
3. Structurer et valoriser les 8 verticales du label Mololo :
   - *Mololo Session* (live sessions)
   - *Mololo Club* (culture club, soirées)
   - *Mololo Radar* (talents émergents)
   - *Mololo News* (dépêches et chroniques)
   - *Mololo+* (formats immersifs)
   - *Mololo Episode* (podcasts et séries vidéo)
   - *Mololo Playlist* (curation musicale)
   - *Mololo Original* (créations originales)
4. Assurer une conversion claire : inscriptions à la newsletter, écoutes de sessions/playlists, prises de contact pour collaborations et partenariats créatifs.
5. Garantir un référencement naturel (SEO) optimal et des Core Web Vitals impeccables sur mobile et desktop.

---

### 3. PROFIL & ARCHITECTURE
- **Profil MOKILI :** Profil Vitrine (sous-type Média Culturel Hybride)
- **Moteur Spécialisé Activé :** `MOKILI-SITE-VITRINE-ENGINE.md`
- **Niveau d'Architecture :** **Niveau A — Statique moderne (SSG)**
- **Justification :** Zéro composant serveur persistant nécessaire, résilience absolue, sécurité maximale, temps de réponse sous les 100ms mondialement.

---

### 4. STACK TECHNIQUE DÉTAILLÉE
- **Framework :** Astro v5 (`output: "static"`, `trailingSlash: "always"`)
- **Langage :** TypeScript (typé strictement, schémas Zod)
- **Styles :** Tailwind CSS v4 avec palette officielle :
  - `mololo-red`: `#e01a31`
  - `mololo-cream`: `#fff1d9`
  - `mololo-black`: `#000000`
  - `mololo-white`: `#ffffff`
- **Typographie :**
  - Titraille & texte de labeur : `Exo` (Google Fonts / Fontsource)
  - Chiffres & tags de formats : `Unbounded` (Google Fonts)
- **Gestion des Contenus :** Astro Content Collections (`src/content/articles`, `src/content/formats`, `src/content/playlists`)

---

### 5. MODULES MOKILI
| Module | Statut | Rôle |
|---|---|---|
| **SEO & Structured Data** | ACTIVE | `src/lib/seo.ts`, meta tags dynamiques, JSON-LD NewsArticle & Organization |
| **Editorial Grid Engine** | ACTIVE | Layout asymétrique façon PAM (Cover Story, 2-col, 3-col, format tags) |
| **Audio Capsule Player** | ACTIVE | Lecteur audio natif persistant avec contrôle de lecture fluide |
| **Lead Capture & Newsletter** | ACTIVE | Formulaire accessible avec feedback instantané |
| **Backend Serveur** | NOT REQUIRED | Non justifié pour la vitrine v1 |
| **Base de Données** | NOT REQUIRED | Contenus versionnés dans le dépôt sous format Markdown |
| **Authentification** | NOT REQUIRED | Consultation 100% publique |

---

### 6. HÉBERGEMENT & DÉPLOIEMENT
- **Profil Hébergement :** H01 — Static / Edge (Cloudflare Pages / Vercel / Netlify / VPS MOKILI statique)
- **Stratégie CI/CD :** Build statique `astro build` générant le dossier `dist/`.

---

### 7. OBLIGATIONS PARTICULIÈRES
- **Attribution légale MOKILI :** Footer intégrant obligatoirement :  
  `Propulsé par MOKILI` renvoyant vers `https://mokili.io`.
- **Qualité & Accessibilité :** Respect des contrastes WCAG AA sur fond crème `#fff1d9` et noir `#000000`.
