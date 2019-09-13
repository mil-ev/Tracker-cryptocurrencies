import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'

// init jQuery globally
window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
