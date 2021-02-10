import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Accueil = () => import(/* webpackChunkName: "accueil" */ "../views/Accueil.vue");
const Contact = () =>
  import(/* webpackChunkName: "contact" */ "../views/Contact.vue");
const Projet = () =>
  import(/* webpackChunkName: "projet" */ "../views/Projet.vue");

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/projets",
    name: "Projets",
    component: Projet
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
