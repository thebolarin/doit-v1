import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './routes'
import Vuelidate from 'vuelidate'
import moment from 'moment';
import VueNoty from 'vuejs-noty';
import 'vuejs-noty/dist/vuejs-noty.css'


Vue.prototype.moment = moment;
Vue.use(VueNoty);
Vue.use(VueRouter);
Vue.use(Vuelidate)

// const authData = localStorage.getItem("auth");

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
