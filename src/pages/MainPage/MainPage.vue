<template lang="pug">
  .container
    .button-container
      router-link.button.button_full.button_paint-main(
      :to="{name: 'TaskEditor', params: {id: 'new'}}"
      ) Добавить новый список
    ul.task-list
      li.task-list__item(
        v-for="(card, $index) in taskList"
      )
        task-card(
        :card="card"
        :index="$index"
        )
</template>

<script>
import { mapState } from "vuex";
import TaskCard from "@/pages/MainPage/components/task-card";
export default {
  name: "MainPage",
  components: { TaskCard },
  computed: {
    ...mapState(["taskList"])
  },
};
</script>
