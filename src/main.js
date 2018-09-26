import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";





import Router from 'vue-router'
import router from './router'


const VueInputMask = require("vue-inputmask").default;
const VueGoogleCharts = require("vue-google-charts").default;
const VueRouter = require("vue-router").default;


Vue.use(VueInputMask);
Vue.use(VueGoogleCharts);
Vue.use(VueRouter);


Vue.config.productionTip = false;



new Vue({

  store,

  render: h => h(App),
  router
}).$mount('#app')
