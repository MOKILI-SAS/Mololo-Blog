# SUIVI.md — Journal de Bord & Traçabilité MOKILI

**Projet :** Blog Mololo  
**Date de démarrage :** 08 Octobre 2026  
**Responsable :** Équipe d'Ingénierie MOKILI / Antigravity Senior Full-Stack & Product Designer  

---

## Registre des Événements & Décisions

### 08/10/2026 — 21:56 — Cadrage & Découverte
- **Action :** Inspection des ressources du dossier (`Logo Mololo sans fond.png`, `MOLOLO CHARTE & CO.pdf`).
- **Découverte :** 8 déclinaisons de formats de marque identifiées (Session, Club, Radar, News, +, Episode, Playlist, Original).
- **Découverte :** Palette officielle (`#e01a31`, `#000000`, `#fff1d9`, `#ffffff`) et typographies (`Exo`, `Unbounded`).
- **Analyse :** Étude de la référence design fournie par l'utilisateur : https://pan-african-music.com (PAM).
- **Chargement MOKILI :** Localisation du framework central sous `C:\Users\MONYANYO\Desktop\MONYANYO\ENTREPRISE\MOKILI\framework`.
- **Validation utilisateur :** Cadrage validé par l'utilisateur avec consignes d'adopter le style PAM adapté à Mololo et déploiement du Lot 0.

### 08/10/2026 — 22:06 à 22:40 — Déploiement des Lots 0 à 5
- Mise en place du socle technique Astro v5 + Tailwind CSS v4 + TypeScript strict.
- Création des collections de contenu avec validation Zod.
- Intégration des composants d'interface et des pages du site.

### 08/10/2026 — 22:56 — Alignement sur les Captures PAM & Règle Rouge
- Règle « partout où la PAM utilise le noir, Mololo utilise le rouge » appliquée.
- Extraction vectorielle du logo officiel Mololo depuis le PDF source.

### 08/10/2026 — 23:30 — Ajustements Fins d'Expérience & Menu Déroulant
1. **Header épuré :** Suppression des mentions « Écouter » et « FR / EN » dans la barre supérieure.
2. **Hauteur optimisée :** Légère diminution de la hauteur de la barre de navigation.
3. **Position du menu :** Repositionnement du bouton hamburger sur la droite avec logo Mololo blanc centré.
4. **Header transparent sur le Hero :** La barre rouge est 100% invisible/transparente sur la Hero section (seuls le logo blanc et le hamburger blanc flottent sur l'image de fond) et n'apparaît avec son fond rouge qu'au défilement vers les articles.
5. **Titre de la Cover Story :** Taille de la titraille réduite pour plus de retenue éditoriale et positionnée plus bas au ras de la flèche descendante.
6. **Menu dépliant déroulant PAM :** Intégration du système d'accordéons / sous-menus déroulants pour la section *Articles* (Portraits, Chroniques, Interviews, Séries) et les *8 Formats Mololo*.
7. **Footer fidèle à la Capture 5 :** Logo Mololo à taille diminuée, disposition en une ligne épurée (Logo gauche | Liens centre | Réseaux droite) et mention obligatoire « Propulsé par MOKILI ».

### 09/10/2026 — Lot 6 : Modal Playlist Spotify / Apple Music, Carrousel Hero 5s & Partage d'Articles
1. **Modal Playlist Streaming (Capture utilisateur) :** Intégration du modal modal fidèle à la capture avec avatar rond de SLIMITO, nom officiel **MOLOLO playlist**, et redirections directes vers Apple Music (`https://music.apple.com/cd/playlist/mololo-playlist/pl.u-jV890dkTDyEbNAX?l=fr-FR&ls`) et Spotify (`https://open.spotify.com/playlist/0Rj2DV5GbYSqlC8vXXtApS?pi=p02mVUWXSgW1I`).
2. **Lecteur Spotify In-Site :** Lecture directe intégrée in-site de la playlist Spotify via iframe responsive dépliable sans quitter la navigation.
3. **Carrousel Hero Automatique (5s) :** Rotation toutes les 5 secondes des slides de la Cover Story avec synchronisation de l'image, du badge de format, du titre et du bouton CTA adaptatif (« Lire maintenant », « Regarder maintenant », « Écouter maintenant », « Découvrir maintenant »).
4. **Boutons « Lire plus d'articles » / « Voir tous les dossiers » :** Ajoutés sous chaque section principale pour une navigation fluide.
5. **Page de Lecture Complète d'Article (`/articles/[slug]`) :** Expérience de lecture soignée avec typographie responsive, citations exergues, crédits d'auteur/date, et barre d'actions sociales (WhatsApp, Twitter/X, Facebook, Copie de lien avec notification toast).
6. **Re-compilation de production :** Réussie (23 pages statiques générées en 8.69s).
7. **Serveur de prévisualisation :** Actif et testé sur `http://localhost:4321/` (Code HTTP 200 OK).

### 09/10/2026 — Lot 7 : Menu Tiroir Droit PAM, Player Vidéo Hero, Harmonisation Liens & Mololo Session
1. **Suppression du badge Hero :** Badge au-dessus de la titraille retiré pour un impact visuel épuré.
2. **Menu Tiroir Latéral Droit (Capture PAM) :**
   - Remplacement du menu plein écran par un panneau coulissant amarré à droite avec fond d'atténuation (backdrop flouté).
   - Barre de recherche `Recherche... 🔍` en en-tête.
   - Rangée « Suivre » avec les icônes officielles TikTok, Instagram, YouTube, Facebook, X.
   - Sous-catégories Articles en double colonne (Portraits, Chroniques, Interviews, Séries).
   - Liens directs News, Vidéos, Écouter, 8 Formats Mololo, Mololo+ (VIP), À propos, Rejoignez-nous !
   - Pied de tiroir avec Logo Mololo blanc et mention obligatoire « Propulsé par MOKILI » (`https://mokili.io`).
3. **Bouton Play Circulaire :** Bouton « Lecture Spotify » transformé en pur bouton Play circulaire (▶ / ⏸) sans texte superflu.
4. **Player Vidéo Intégré au Hero :** Support des slides vidéo avec bouton play central animé, lancement direct d'un lecteur vidéo intégré dans la Hero section, et mise en pause automatique de la rotation 5s pendant le visionnage.
5. **Résolution de la lecture d'articles & bouton « Voir plus » :** Ajustement de `trailingSlash: 'ignore'` et canonicalisation de toutes les URLs (`/articles/`, `/articles/[slug]/`) résolvant le blocage HTTP 404 (validé 200 OK avec et sans slash).
6. **Section « MOLOLO SESSION » :** Remplacement de l'intitulé « Pam Meets » par « MOLOLO SESSION » dédié aux performances live, studio et acoustiques.
7. **Repositionnement de la Newsletter :** Déplacée après « Mololo Session », juste avant le footer.
8. **Intégration de tous les liens officiels Mololo :**
   - TikTok : `https://www.tiktok.com/@oyomololo`
   - Instagram : `https://www.instagram.com/oyomololo`
   - YouTube : `https://www.youtube.com/@oyomololo`
   - Facebook : `https://www.facebook.com/oyomololo`
   - X (Twitter) : `https://x.com/oyomololo`
   - Mololo+ : `https://mololoplus.com`
9. **Build & Preview validés :** 23 pages compilées avec succès, statut HTTP 200 OK.

### 13/10/2026 — Lot 8 : Page Écosystème, Génération Logos de Branches & Synchronisation GitHub
1. **Extraction de la Charte & Branches Officielles :** Analyse des 11 planches vectorielles de `MOLOLO CHARTE & CO.pdf` identifiant toutes les déclinaisons de marque (Mololo Studio, Mololo Session, Mololo Club, Mololo Radar, Mololo News, Mololo+, Mololo Episode, Mololo Playlist, Mololo Original, Monogramme M).
2. **Génération d'Assets Vectoriels & Haute Définition :** Script automatisé `scripts/generate-ecosystem-assets.cjs` générant les déclinaisons SVG et PNG pour chaque branche dans `public/images/ecosystem/`.
3. **Création de la Page Catalogue `/ecosysteme/` :**
   - En-tête immersif avec présentation de l'architecture de marque et lien vers le PDF source.
   - Grille responsive interactive des 9 branches avec logo officiel, badge, descriptif, fréquence de parution et CTA ciblé.
   - Redirection directe au clic sur chaque carte vers l'URL dédiée de la branche (Sessions, Club, Radar, News, Mololo+ VIP, Épisodes, Playlists, Originaux, Studio).
   - Présentation de la palette officielle (`#e01a31`, `#fff1d9`, `#000000`, `#ffffff`) et des typographies de la charte (Exo, Asgard Trial, Unbounded).
4. **Intégration du Bouton « Écosystème » :**
   - Ajouté dans le tiroir coulissant droit du menu hamburger (`Header.astro`) avec badge « Catalogue ».
   - Ajouté dans la barre de navigation du pied de page (`Footer.astro`).
5. **Compilation Statique :** 24 pages statiques compilées sans aucune erreur via Astro v5.
6. **Serveur de Prévisualisation :** Actif et testé sur `http://localhost:4321/` (HTTP 200 OK sur toutes les routes).
7. **Dépôt Git & Déploiement :** Initialisation du dépôt Git, configuration du `.gitignore` et push vers le dépôt officiel `https://github.com/MOKILI-SAS/Mololo-Blog`.

---

## État de Disponibilité
- **Compilation de production :** Réussie (24 pages statiques).
- **Serveur de prévisualisation actif :** [http://localhost:4321/](http://localhost:4321/)
- **Dépôt GitHub :** [https://github.com/MOKILI-SAS/Mololo-Blog](https://github.com/MOKILI-SAS/Mololo-Blog)
- **Respect du Framework MOKILI :** 100% conforme.
