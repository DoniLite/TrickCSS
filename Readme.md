# Markdown Style

Ce projet est un fork d'une fonctionnalité dont j'ai rapidement ressenti le besoin en travaillant avec le Markdown : **la stylisation**. En effet, un document Markdown rendu en HTML brut peut manquer de style et d'esthétique, surtout si l'on doit recevoir du contenu dont on ignore la structure et le présenter directement sur une page web. C'est pourquoi ce projet fournit un ensemble de styles prêts à l'emploi pour améliorer le rendu visuel des documents Markdown.

## Fonctionnalités

- **Mode sombre et mode clair** : Vous pouvez choisir entre un thème sombre ou un thème clair selon vos préférences ou celles de vos utilisateurs.
- **JavaScript pour la copie de code** : Permet d'ajouter un bouton de copie pour chaque bloc de code afin de faciliter la récupération des exemples de code.

Vous pouvez décider de charger uniquement le **CSS** ou le **JavaScript**, en fonction de vos besoins.

## Utilisation

Pour utiliser le module, suivez les étapes ci-dessous pour charger les assets depuis les serveurs `CDN` :

```html
    <!-- Utilisez ceci pour le css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DoniLite/CSS/md.css">

    <!-- Ajoutez le style de highlight.js pour benéficier d'une coloration syntaxique de code -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">

    <!-- Pour le javaScript -->
     <script type="module" src="https://cdn.jsdelivr.net/gh/DoniLite/CSS/md.js" defer></script>
```

## Application dy style

Une fois les fichiers chargés, vous pouvez appliquer le thème souhaité. Notez que le CSS parcourt l'intégralité de votre document à la recherche des balises appropriées pour les styliser, tout en minimisant les conflits avec vos styles existants. Utilisez la structure suivante pour injecter du contenu **Markdown** déjà converti en **HTML** :

```html
    <div class="markdown-content light-mode">
        <div class="markdown-content" id="parsedContent">
            <!-- Ajoutez votre contenu ici -->
        </div>
    </div>
```

**Note** : Remplacez `light-mode` par `dark-mode` si vous souhaitez activer le mode sombre par défaut.

## Possible mise à jour et amélioration ?

Je prévois d'enrichir le projet avec de nouvelles fonctionnalités et d'autres styles pour les documents convertis en HTML :

- Ajout de nouveaux thèmes pour offrir plus de variété dans le rendu visuel.
- Support pour d'autres types de documents au-delà du Markdown, pour une meilleure flexibilité.
- Améliorations de l'ergonomie des boutons et des interactions pour la copie de code.
- Optimisation des performances pour le traitement des grandes quantités de contenu Markdown.

## Comment contribuer ?

Vous souhaitez contribuer à ce projet ou y ajouter des fonctionnalités ? Voici les étapes à suivre pour participer:

- **Forkez le projet :** Créez une copie du code sur votre propre dépôt.
- **Créez une branche de développement :** Travaillez sur vos modifications dans une branche `develop/description` (ou un nom de branche explicite pour votre fonctionnalité).
- **Effectuez vos modifications :** Implémentez vos ajouts ou corrections.
- **Soumettez votre mise à jour :** Envoyez vos modifications sur votre dépôt forké.
- **Faites une Pull Request :** Demandez l'intégration de vos changements en créant une `pull request` vers le dépôt d'origine.
- **Attendez la révision :** Votre code sera revu et validé par la communauté avant d'être fusionné.

## Licence

Ce projet est sous license **MIT**
