import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskList: JSON.parse(localStorage.getItem('taskList') )|| []
  },
  mutations: {
    saveTask(state, data) {
      data.index > -1 ? state.taskList[data.index] = data.task : state.taskList.push(data.task);
      window.localStorage.taskList = JSON.stringify(state.taskList);
    },
  }
});
