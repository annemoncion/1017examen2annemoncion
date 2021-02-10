<template>
  <form class="contact">
    <h2>Contactez-moi</h2>
    <input type="text" name="lastname" placeholder="Nom" />
    <input type="text" name="firstname" placeholder="Prénom" />
    <input type="text" name="email" placeholder="Courriel" />
    <select name="categorie">
        <option v-for="(subject, i) in dropdown" :key="i"> {{ subject }}</option>
    </select>
  </form>
</template>

<script>
export default {
  name: 'Projet',
  data() {
      return {
          dropdown: [
              "Informations générales",
              "Soumission",
              "Question technique"
          ]
      }
  }
}
</script>

<style scoped>

.contact {
    background-color: darkkhaki;
    padding: 2rem;
    margin: 2rem 0;
    text-align: left;
}

</style>