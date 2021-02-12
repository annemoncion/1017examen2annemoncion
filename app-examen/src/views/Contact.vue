<template>
  <form class="contact">
    <h2>{{ 'contactMe' | translate }}</h2>
    <input type="text" name="lastname" :placeholder="'lastName' | translate" />
    <input type="text" name="firstname" :placeholder="'firstName' | translate" />
    <input type="text" name="email" :placeholder="'email' | translate" />
    <select name="categorie">
        <option v-for="(subject, i) in dropdown" :key="i"> {{ subject | translate }}</option>
    </select>
  </form>
</template>

<script>
import { MixinTranslate } from "@/mixins/MixinTranslate.js"

export default {
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