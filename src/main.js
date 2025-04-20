import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';

/* const hls =require("videojs-contrib-hls")

Vue.use(hls) */
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
