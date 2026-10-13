# AGENTS.md — Constitution & Directives d'Exécution Mololo

**Projet :** Blog Mololo (Studio Média Culturel en ligne)  
**Organisation :** MOKILI SAS / Blog Mololo  
**Framework :** MOKILI Framework V1.1 (Master Prompt V1.1 & Site Vitrine Engine V1.0)  
**Profil :** Vitrine & Média Culturel Hybride (Architecture Niveau A — Statique / SSG)  

---

## 1. RÈGLE D'OR MOKILI
> Le besoin détermine l'architecture. L'architecture détermine l'infrastructure. L'infrastructure détermine l'hébergement.  
> Architecture d'abord → stack ensuite → infrastructure enfin.

---

## 2. PÉRIMÈTRE & OBJECTIFS
- **Produit :** Site vitrine et plateforme média culturelle pour Blog Mololo.
- **Direction Artistique :** Inspirée de Pan African Music (PAM - https://pan-african-music.com), adaptée avec l'identité officielle Mololo.
- **Charte Graphique :**
  - Rouge écarlate vibrant : `#e01a31`
  - Crème / Toile de lin chaleureux : `#fff1d9`
  - Noir profond : `#000000`
  - Blanc pur : `#ffffff`
  - Polices : `Exo` (principale & titraille vibrante), `Unbounded` (chiffres, badges & accents).
  - Logo officiel : `Logo Mololo sans fond.png`.
- **Formats Médias Officiels :**
  1. `MOLOLO SESSION` (Live sessions, acoustiques, performances studio)
  2. `MOLOLO CLUB` (Événements, culture club, nuits & DJ sets)
  3. `MOLOLO RADAR` (Nouveaux talents & défrichage)
  4. `MOLOLO NEWS` (Actualités culturelles, analyses & chroniques)
  5. `MOLOLO+` (Contenus exclusifs & grands entretiens)
  6. `MOLOLO EPISODE` (Podcasts, séries docu & épisodes vidéo)
  7. `MOLOLO PLAYLIST` (Curations sonores & sélections musicales)
  8. `MOLOLO ORIGINAL` (Productions et documentaires originaux)
- **Mention Obligatoire Footer :**
  - "Propulsé par MOKILI" avec lien direct vers `https://mokili.io`.

---

## 3. STACK TECHNIQUE
- **Moteur :** Astro v5 (`output: "static"`, `trailingSlash: "always"`).
- **Langage :** TypeScript (mode strict).
- **Styles :** Tailwind CSS avec Design Tokens Mololo.
- **Contenus :** Astro Content Collections + Zod schemas.
- **Hébergement cible :** H01 — Static / Edge (Cloudflare Pages, Vercel, Netlify, ou VPS MOKILI / Nginx).

---

## 4. COMMANDES DU PROJET
- Développement local : `npm run dev`
- Build statique : `npm run build`
- Prévisualisation du build : `npm run preview`
- Lint & Typecheck : `npx astro check`

---

## 5. INTERDITS & OBLIGATIONS ÉDITORIALES
- Ne jamais inventer de fausses citations ou de faux partenaires non corroborés.
- Préserver tous les assets graphiques sources (`Logo Mololo sans fond.png`, `MOLOLO CHARTE & CO.pdf`).
- Toujours vérifier l'accessibilité (contrastes WCAG AA, labels ARIA, navigation clavier).
- Ne jamais ajouter de backend serveur ou de base de données relationnelle sans justification démontrée.
