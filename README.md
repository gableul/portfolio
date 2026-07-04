# Portfolio

Portfolio personnel statique, inspiré du design de [elia.vc](https://elia.vc) :
minimaliste, typographique (serif + sans + mono), cartes, thème clair/sombre
automatique + manuel, et bilingue **EN / FR**.

## Structure

```
index.html            → Accueil (nom, tagline, navigation, réseaux)
about.html            → À propos (âge live, lieu, cv, bio)
work.html             → Expériences pro (timeline de cartes)
projects.html         → Projets perso (cartes → détail)
project-detail.html   → Modèle de page détail projet
competitions.html     → Hackathons / concours (résultats en rouge, vidéos)
research.html         → Recherche (liste)
research-article.html → Modèle d'article long-format
open-source.html      → Open source (stub)
blog.html             → Blog (stub)
styles.css            → Design system (couleurs, typo, composants)
app.js                → Thème + langue (EN/FR) + compteur d'âge live
```

## Personnalisation

- **Nom / tagline** : `index.html` (`.home__name`, `.home__tagline`).
- **Bio & âge** : `about.html` — mets ta date de naissance dans
  `data-birth="AAAA-MM-JJ"` (l'âge défile en secondes automatiquement).
- **Liens réseaux** : remplace les `#` dans `index.html`.
- **Contenu** : chaque page contient des blocs `<!-- ... -->` à dupliquer.
- **Traductions** : dictionnaire `I18N` dans `app.js` (clés `data-i18n`).
- **Couleurs / typo** : variables en haut de `styles.css`.

Typographies (Google Fonts) : Fraunces (serif), Inter (sans), JetBrains Mono
(mono). Change-les librement dans le `<link>` des pages + `styles.css`.

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvre http://localhost:8000
```

## Déploiement

Aucune dépendance / build. Déployable sur GitHub Pages, Vercel, Netlify, Cloudflare Pages…
