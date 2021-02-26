# Déploiement
## Serveur utilisé
GitHub Pages

**Pourquoi?** Comme le code du site web est déjà maintenu à jour sur GitHub, que la mise en place du service est d'une simplicité désarmante, et que j'adhère à la philosophie open source de la plateforme, cela semblait une solution évidente.

## Étapes de déploiement

Considérant que le dépôt a déjà été cloné localement et que les changements ont été apportés...
1. Faire rouler la commande <code>npm run build</code>.
2. Pousser les changements sur GitHub à l'aide des commandes git:
    1. <code>git add /dist</code>
    2. <code>git commit -m "description du commit"</code>
    3. <code>git push</code>
3. Se rendre à l'adresse [annemoncion.github.io/1017examen2annemoncion/app-examen/dist/#/](https://annemoncion.github.io/1017examen2annemoncion/app-examen/dist/#/) pour visualiser le site web.
