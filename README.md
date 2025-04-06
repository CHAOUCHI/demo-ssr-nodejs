# SSR démo et explication
Ce repos contient une démo simpliste du serveur side Randering. 

C'est à dire le rendu côté serveur.

Le code contenu dans le fichier Mail génère un nombre aléatoire et l'affiche côté client sans pour autant qu'il y ait le moindre code javascript exécuté côté client. 

La vue est calculée côté serveur, puis envoyée en tant que body au client. 

Ce qui permet un rendu dynamique sans pour autant coder de la logique front-end.

```bash
node main.mjs
```


Vous pouvez vous amuser à rendre encore plus dynamique votre rendu côté serveur, par exemple en utilisant les query param de la requete pour les valeurs minimum et maximum de votre nombre aléatoire.

Ou encore en développant un système de parcing de fichier  html qui nous permettrait de passer des variables du fichier .mjs au fichier .html. 

On peut imaginer une syntaxe comme celle-ci :

```html
<style>
    body{
        margin : 0px;
        background-color : #5d7cd8;
        display : flex;
        align-items : center;
        justify-content : center;
        padding : 10px;
        color : white;
        height:100vh;
        font-family : Arial;
        font-size:2rem;
    }
</style>

<h1>{{randomValue}}</h1>
```

Sachez cependant que si vous avez ce besoin à l'avenir, le PHP peut résoudre votre problème.

*index.php*
```php
<?php
$random = rand(0,10);
?>


<style>
    body{
        margin : 0px;
        background-color : #5d7cd8;
        display : flex;
        align-items : center;
        justify-content : center;
        padding : 10px;
        color : white;
        height:100vh;
        font-family : Arial;
        font-size:2rem;
    }
</style>

<h1><?= $random ?> </h1>
```

Les frameworks comme `Symfony` ou `Laravel` qui implémente l'architecutre modèle vue contrôleur permettent un rendu côté serveur de très bonne qualité. 

Si toutefois vous avez énormément de changements d'état dans votre site lors d'interactions avec l'utilisateur ou des serveurs, il faudra plutôt un framework front-end et le rendu côté serveur ne sera pas une solution. Angular,NextJs(React) Vue.js peuvent être des solutions à votre problème.