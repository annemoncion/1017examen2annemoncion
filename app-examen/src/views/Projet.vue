<template>
  <div class="projects">
    <h2>{{ 'myProjects' | translate }}</h2>
    <ul>
        <!-- Boucler dans la liste des projets. (Voir object "projects") -->
        <li v-for="(project, i) in projects" :key="i"> {{ project }}</li>
    </ul>
  </div>
</template>

<script>
import { MixinTranslate } from "@/mixins/MixinTranslate.js"

export default {
  // Comme définit présentement, le filtre de traduction doit être importé dans chaque composant qui l'utilise. Ce serait un comportement à revoir.
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