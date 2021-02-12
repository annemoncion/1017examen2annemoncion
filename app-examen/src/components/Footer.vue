<template>
  <footer v-copyright>
    <p >
      Footer.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  directives: {
    copyright: {
      bind: function (el) {
        var d = new Date();
        var n = d.getFullYear();
        let copyright = "<p>Anne Moncion - Copyright &copy;, " + n + "</p>";
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
