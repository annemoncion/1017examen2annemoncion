<template>
  <div class="projects">
    <h2>{{ 'myProjects' | translate }}</h2>
    <ul>
        <li v-for="(project, i) in projects" :key="i"> {{ project }}</li>
    </ul>
  </div>
</template>

<script>
import { MixinTranslate } from "@/mixins/MixinTranslate.js"

export default {
  mixins: [MixinTranslate],
  name: 'Projet',
  data() {
      return {
          projects: [
              "Louise Lapierre Danse",
              "Portfolio d'illustrations",
              "Site web Point'n Click",
          ]
      }
  }
}
</script>

<style scoped>

.projects {
    background-color: whitesmoke;
    padding: 2rem;
    margin: 2rem 0;
    text-align: left;
}

</style>