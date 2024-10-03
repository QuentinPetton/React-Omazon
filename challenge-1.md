# Challenge 1 : intégration en composants React

## 1. Environnement de dev

Avant tout il faut mettre en place un projet React avec TypeScript, SASS et biome.

> On peut tout faire à la main mais ça va être long, on va utiliser **Vite** !

## 2. Intégration de la maquette et architecture React en composants

Réalise l'**intégration en React avec JSX / SCSS** du projet !

### Ressources

Tu trouveras tout ce dont tu as besoin dans le dossier [resources](./resources/).
La maquette Figma est l'élément le plus important pour ton intégration : tu dois la reproduire le plus fidèlement possible.
Pour cela, lis bien la page `README` sur Figma, tu y trouveras peut-être des indications…

> La maquette est prototypée ; de ton côté, tu n'as pas besoin de mettre en place
> les animations : concentre-toi uniquement sur le HTML et le style.

### Structure de composants

Découpe le composant `<App />` en plusieurs sous composants pour modulariser ton application.
Par exemple comme ceci :

```text
<App />
├── <Header />
│   ├── <HeaderForm>
│   ├── <HeaderLogo>
│   ├── <HeaderMenu>
├── <HomePage />
│   ├── <Categories>
│   ├── <Products>
└── <Footer />
```

## 3. Dynamisation des produits

Tu trouvera des fichiers de données dans le dossier [resources/data](./resources/data/).  
Utilise les données du fichier `products.ts` pour afficher les produits.

## 4. Dynamisation des catégories

Utilise les données du fichier `categories.ts` pour afficher les catégories sur le contenu pricipal de la page d'accueil ainsi que dans la liste de sélection du filtre de recherche dans le Header.
