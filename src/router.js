import Vue from "vue";
import Router from "vue-router";

import MainPage from "./pages/MainPage/MainPage.vue";
import TaskEditor from "./pages/TaskEditor/TaskEditor.vue";

Vue.use(Router);

const routes = [
  {
    path: "*",
    redirect: { name: "MainPage" }
  },
  {
    path: "/",
    name: "MainPage",
    component: MainPage
  },
  {
    path: "/task/:id",
    name: "TaskEditor",
    component: TaskEditor
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
