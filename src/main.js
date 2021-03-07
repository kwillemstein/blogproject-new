import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import moment from 'moment'
import pluralize from 'pluralize'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY [om] hh:mm')
  }
});

Vue.filter('pluralize', function (value, number) {
  return pluralize(value, number)
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
