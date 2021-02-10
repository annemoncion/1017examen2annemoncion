<template>
  <div id="app">
    <Header />
    <nav>
      <router-link v-for="(item, i) in menuItems" :key="i" :to="item.path">{{ item.name }}</router-link>
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      menuItems: [
        {
          name: "Accueil",
          path: "/",
        },
        {
          name: "Projets",
          path: "/projets",
        },
        {
          name: "Contact",
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
