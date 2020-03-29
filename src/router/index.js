import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VueHead from 'vue-head';

Vue.use(VueHead, {
  separator: '-',
  complement: 'Slovenskymanazer.sk'
});
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add",
    component: () => import(/* webpackChunkName: "add" */ "../views/Add.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/:hash",
    name: "Slogan",
    component: Home,
  },
  {
    path: '*',
    component: Home
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
