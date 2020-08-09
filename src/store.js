import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskList: JSON.parse(localStorage.getItem('taskList') )|| []
  },
  mutations: {
    saveTask(state, data) {
      state.taskList[data.id - 1] = data;
      window.localStorage.taskList = JSON.stringify(state.taskList);
    },
  }
});
