import "@babel/polyfill";
import Vue from 'vue'
import Router from 'vue-router'
import App from "../App.vue";
import store from "../store";
import SignUp from '../components/SignUp.vue';
import Hello from '../components/Hello.vue';
import Home from '../components/Home.vue';
import Lab from '../components/Lab.vue';
import RamaEMR from '../components/RamaEMR.vue';
import About from '../components/About.vue';
import Login from '../Login.vue';
import Page from '../Page.vue';




Vue.use(Router)

const routerOptions = [
  {
    path: '/',
    component: 'Home'
  },
  {
    path: '/signup',
    component: 'SignUp'
  }
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import (`@/components/${route.component}.vue`)
  }
})

export default new Router({
  mode: 'history',
    routes: [
      { path: '/foo', component: SignUp },// path เมื่อเข้า /foo ให้แสดง component Foo
      {
        path: '/hello',
        name:'hello',
        component: Hello,
      },
      {
        path: '/',
        name:'home',
        component: Home,
      },
      {
        path: '/Page',
        name:'page',
        component: Page,
      },
      {
        path: '/lab',
        name:'Lab',
        component: Lab,
      },

      {
        path: '/ramaemr',
        name:'RamaEMR',
        component: RamaEMR,
      },
      {
        path: '/about',
        name:'About',
        component: About,
      },
      {
        path: '/login',
        name:'Login',
        component: Login,
      },

    ]



})
