# Médias des projets

Dépose ici les logos et captures d'écran de chaque projet. Ils s'affichent
automatiquement sur la page détail (`project-<slug>.html`) et sur les cartes
de la page Projets — aucun code à modifier, et rien ne casse si un fichier
est absent.

## Convention

Dans `assets/<slug>/` :

- **Logo** : `logo.svg`, `logo.png` ou `logo.jpg` (le premier trouvé est utilisé).
- **Captures** : `1.png`, `2.png`, `3.png`, ... consécutives (ou `.jpg`).
  Le chargeur s'arrête au premier numéro manquant (jusqu'à 12).

## Slugs des projets

| Projet               | Dossier              |
|----------------------|----------------------|
| Offload              | `assets/offload/`    |
| UsAIble              | `assets/usaible/`    |
| Kiffe                | `assets/kiffe/`      |
| Get5Stars            | `assets/get5stars/`  |
| MIA CV               | `assets/miacv/`      |
| Restaurant AI Agent  | `assets/restaurant/` |
| Intelligent Memory   | `assets/memory/`     |
| TipsYou              | `assets/tipsyou/`    |

Exemple : `assets/tipsyou/logo.png`, `assets/tipsyou/1.png`, `assets/tipsyou/2.png`.
