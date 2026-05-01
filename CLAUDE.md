# CLAUDE.md

## Objectif du projet

Créer un template professionnel de site vitrine réutilisable pour plusieurs entreprises locales : restaurants, artisans, coachs, cabinets, agences, indépendants.

Le site doit être :
- moderne
- responsive
- rapide
- sécurisé
- facile à personnaliser
- prêt à déployer sur Vercel
- optimisé SEO

## Stack technique

- Next.js 16
- TypeScript
- App Router
- Tailwind CSS
- ESLint
- npm
- Déploiement Vercel

## Règles de code

- Utiliser TypeScript proprement.
- Garder un code simple, lisible et maintenable.
- Créer des composants réutilisables.
- Ne pas ajouter de dépendance sans raison claire.
- Ne jamais mettre de clé API ou secret dans le code.
- Utiliser `.env.local` pour les variables sensibles.
- Vérifier le responsive design.
- Toujours tester avec `npm run dev`, `npm run lint` et `npm run build`.

## Design attendu

Le site doit avoir un style premium, moderne et professionnel.

Sections recommandées :
- Header
- Hero
- Services
- À propos
- Pourquoi nous choisir
- Témoignages
- FAQ
- Contact
- Footer

## Sécurité minimale

- Ne jamais exposer de secrets côté client.
- Valider les données des formulaires.
- Éviter le HTML injecté.
- Prévoir une protection anti-spam pour le formulaire de contact.
- Utiliser HTTPS en production.
- Ajouter des métadonnées SEO propres.

## Workflow

Avant de coder :
1. Analyser le besoin.
2. Proposer un plan.
3. Modifier une seule partie à la fois.
4. Expliquer les fichiers modifiés.
5. Tester le résultat.