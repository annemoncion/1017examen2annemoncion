<template>
  <form class="contact">
    <h2>{{ 'contactMe' | translate }}</h2>
    <input type="text" name="lastname" :placeholder="'lastName' | translate" />
    <input type="text" name="firstname" :placeholder="'firstName' | translate" />
    <input type="text" name="email" :placeholder="'email' | translate" />
    <select name="categorie">
        <!-- Boucler dans toutes les options du menu déroulant (voir data "dropdown"). -->
        <option v-for="(subject, i) in dropdown" :key="i"> {{ subject | translate }}</option>
    </select>
  </form>
</template>

<script>
import { MixinTranslate } from "@/mixins/MixinTranslate.js"

export default {
  // Comme définit présentement, le filtre de traduction doit être importé dans chaque composant qui l'utilise. Ce serait un comportement à revoir.
  mixins: [MixinTranslate],
  name: 'Projet',
  data() {
      return {
          dropdown: [
              "generalInfo",
              "soumission",
              "technicalQuestion"
          ]
      }
  },
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