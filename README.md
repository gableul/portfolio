# Portfolio

Portfolio personnel statique : minimaliste, typographique (serif + sans + mono),
cartes, thème clair/sombre automatique + manuel, et bilingue **EN / FR**.

## Structure

```
index.html     → Accueil (nom, tagline, navigation, réseaux)
about.html     → À propos (lieu, langues, email, cv, bio, formation, compétences)
work.html      → Expérience pro (HumanX, Thales)
projects.html  → Projets / SaaS (Get5Stars, MIA CV, TipsYou…)
competitions.html → Hackathons & awards (Alan×Mistral, BIG Berlin, Paris AI)
styles.css     → Design system (couleurs, typo, composants)
app.js         → Thème + langue (EN/FR) + contenu bilingue + âge live
```

## Personnalisation

- **Contenu bilingue** : tout le texte visible vit dans le dictionnaire `I18N`
  (EN/FR) de `app.js`, référencé via les attributs `data-i18n` du HTML.
- **Âge live** : optionnel - dans `about.html`, décommente le bloc `#age`
  et renseigne `data-birth="AAAA-MM-JJ"`.
- **Liens** : GitHub, CV (pdf), et liens démo/repo des projets sont des `#`
  ou `TODO` à compléter.
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
