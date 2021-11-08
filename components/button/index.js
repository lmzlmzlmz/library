import Mybtn from "./src/main.vue"

Mybtn.install = function(Vue) {
  Vue.component(Mybtn.name, Mybtn);
};

export default Mybtn;