import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskList: JSON.parse(localStorage.getItem('taskList') )|| [],
    confirmModal: {
      show: false,
      text: "",
      confirmFunc: null
    }
  },
  mutations: {
    addTaskToTaskList(state, data) {
      data.index > -1 ? state.taskList[data.index] = data.task : state.taskList.push(data.task);
    },
    removeTaskFromTaskList(state, index) {
      state.taskList.splice(index, 1);
    },
    updateTaskList(state) {
      window.localStorage.taskList = JSON.stringify(state.taskList);
    },
    toggleConfirmModal(state, data) {
      state.confirmModal = data;
    },
  },
  actions: {
    createTask({commit}, data) {
      commit("addTaskToTaskList", data);
      commit("updateTaskList");
    },
    removeTask({commit}, data) {
      commit("removeTaskFromTaskList", data);
      commit("updateTaskList");
    }
  }
});
