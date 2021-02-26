<template>
  <div id="app">
    <Header />
    <nav>
      <!-- Boucler à traver les routes. (Voir objet "menuItems") -->
      <router-link v-for="(item, i) in menuItems" :key="i" :to="item.path">{{ item.name | translate }}</router-link>
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { MixinTranslate } from "@/mixins/MixinTranslate.js"

export default {
  // Comme définit présentement, le filtre de traduction doit être importé dans chaque composant qui l'utilise. Ce serait un comportement à revoir.
  mixins: [MixinTranslate],
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      menuItems: [
        {
          name: "homePage",
          path: "/",
        },
        {
          name: "projects",
          path: "/projets",
        },
        {
          name: "contact",
          path: "/contact",
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  background-color: lavender;
  padding: 1rem;

}  

nav a {
  padding: 1rem;
}

nav a.router-link-exact-active {
  color: #fff;
  background-color: purple;
}
</style>
