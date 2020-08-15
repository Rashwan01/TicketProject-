import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Auth/Login";
import Auth from "../middleware/auth";
import Guest from "../middleware/guest";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: Home,
    name: "home",
    beforeEnter: Auth,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: Guest,
  },
  {
    path: "/users",
    name: "users.index",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/Users/index"),
    beforeEnter: Auth,
  },
  {
    path: "/users/create",
    name: "users.create",
    component: () =>
      import(/* webpackChunkName: "users-create" */ "../views/Users/Create"),
    beforeEnter: Auth,
  },
  {
    path: "/users/edit/:username",
    name: "users.edit",
    component: () =>
      import(/* webpackChunkName: "users-create" */ "../views/Users/Edit"),
    beforeEnter: Auth,
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`,
  mode: "history",
});

export default router;
