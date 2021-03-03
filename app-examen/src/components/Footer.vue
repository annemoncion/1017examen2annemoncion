<template>
  <footer v-copyright>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  directives: {
    copyright: {
      bind: function (el) {
        // Générer la date actuelle.
        var d = new Date();
        // Ne retenir que l'année.
        var n = d.getFullYear();
        // Ajouter la date au libellé de droit d'auteur par concaténation.
        let copyright = "<p>Anne Moncion - Copyright &copy;, " + n + ". Ce projet est sous <a href='https://github.com/annemoncion/1017examen2annemoncion/blob/main/LICENSE.md' target='_blank'>licence MIT</a>.</p>";
        // Ajouter le noeud "copyright" comme premier enfant du noeud sur lequel est appliquée la directive.
        el.insertAdjacentHTML( 'beforeend', copyright );
      }
    }
  }
}
</script>

<style scoped>
footer {
    background-color: rosybrown;
    padding: 1rem;
}
</style>
