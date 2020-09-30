import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register";
import Page from "../views/Page";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/review",
    name: "Review",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Review.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Page",
    name: "Page",
    component: Page,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
