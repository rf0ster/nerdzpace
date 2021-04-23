import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("Route Guard");
  console.log(to);
  console.log(from);
  next();

  // if (to.name !== "Login" && !isAuthenticated) {
  //   next({ name: "Login" });
  // } else {
  //   next();
  // }
});

export default router;
