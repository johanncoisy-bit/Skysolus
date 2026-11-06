# Skysolus

Site vitrine de **SKY SOLUS** : prises de vues, inspections, thermographie, cartographie et surveillance aérienne par drone (DJI Mini 5 Pro, DJI Matrice 4T) et ULM (Bristell XL8), depuis Hyères (Var).

## Technique

- [Astro](https://astro.build) (site statique), hébergement prévu sur Vercel
- Polices auto-hébergées : Saira (titres) et Source Sans 3 (texte)
- Aucun service externe obligatoire

## À compléter avant la mise en ligne

Tout se règle dans `src/config.ts` :

- téléphone, e-mail, numéro WhatsApp ;
- `formEndpoint` : URL d'un service de formulaire (ex. Formspree). Laissé vide, le formulaire ouvre la messagerie du visiteur avec la demande pré-remplie ;
- mentions légales (statut, SIRET, adresse, n° d'exploitant UAS) ;
- nom de domaine (`url`, et `site` dans `astro.config.mjs`).

Les contenus (prestations, clientèle, méthode) sont dans `src/data.ts`.

## Remplacer le film d'ouverture

Remplacer `public/video/skysolus-intro.mp4` (MP4 H.264, 1280 à 1920 px de large, idéalement moins de 8 Mo) et `public/video/poster.jpg` (image affichée avant la lecture).

## Commandes

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Mise en ligne sur Vercel

Sur vercel.com : *Add New → Project*, importer le dépôt `johanncoisy-bit/skysolus`. Vercel détecte Astro automatiquement : chaque push sur `main` met le site à jour.

## SEO

- Une page par prestation (`/prestations/...`), générée depuis `src/data.ts` et `src/seo.ts` (titre, description, FAQ).
- Données structurées : entreprise (ProfessionalService), service, FAQ, fil d'Ariane.
- `sitemap-index.xml` généré au build, `robots.txt`, image de partage `public/og.jpg`.

Après la mise en ligne :
1. Google Search Console : ajouter le domaine et soumettre `https://<domaine>/sitemap-index.xml`.
2. Créer la fiche Google Business Profile « Skysolus » (Hyères), catégorie « Service de photographie aérienne » ou équivalent, avec le lien du site.
3. Inscrire la société sur Pages Jaunes et les annuaires de télépilotes, avec exactement le même nom, la même adresse et le même téléphone.
4. Ajouter des photos de missions réelles au fil de l'eau : c'est ce qui fera la différence.

### Référencement national

- 13 pages régionales (`/france/...`) et une page « Partout en France », générées depuis `src/regions.ts`.
- 9 articles de conseil dans `src/pages/actualites/` : en publier un nouveau par mois aide à remonter durablement.
- Clé IndexNow (Bing, Yandex) : `public/4f888b60fcbfc098716017bc34f10a17.txt`. Dans Bing Webmaster Tools, importer le site depuis Google Search Console.
