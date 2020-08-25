import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/pages/Landing.vue"),
      meta: {
        title: "Home",
      },
    },
  ],
});
