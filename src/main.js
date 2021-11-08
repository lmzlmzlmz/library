import Vue from 'vue'
import App from './App.vue'


import {Mybtn} from "./index.js"
import "../components/style/index.scss";

Vue.use(Mybtn)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
