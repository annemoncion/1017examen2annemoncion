import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import { MixinTranslate } from "@/mixins/MixinTranslate.js"

Vue.config.productionTip = false

new Vue({
  router,
  mixins: [MixinTranslate],
  render: h => h(App),
}).$mount('#app')
