import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import vuetify from './plugins/vuetify'
Vue.use(require('vue-moment'));

Vue.use(VModal, {dynamic:true});


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
