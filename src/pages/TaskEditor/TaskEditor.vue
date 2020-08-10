<template lang="pug">
  .container
    form.form
      .form__el.form-el
        .form-el__title Название
        .form-el__body
          input.input(
          v-model="title"
          )
      .form__el.form-el
        .form-el__title Чеклист
        .form-el__body
          .checklist
            .checklist__item(
              v-for="(item, $index) in checklist"
            )
              check-el(
              :data="item"
              :index="$index"
              @on-change="onChangeCheckEl"
              )
            .checklist__item.checklist__item_button
              button.button(
              @click.prevent="onAddCheckEl"
              ) Добавить пункт
    .button-container
      button.button.button_full.button_paint-main(
      @click.prevent="onSaveTask"
      ) Сохранить
</template>

<script>
import { mapState, mapActions } from "vuex";
import CheckEl from "@/pages/TaskEditor/components/check-el";
export default {
  name: "TaskPage",
  components: { CheckEl },
  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapState(["taskList"]),
    isEdit() {
      return this.$route.params.id !== "new";
    },
    index() {
      return this.isEdit ? this.$route.params.id - 1 : -1;
    }
  },
  data() {
    return {
      title: "",
      checklist: []
    };
  },
  methods: {
    ...mapActions(["createTask"]),
    onAddCheckEl() {
      this.checklist.push({
        title: "",
        checked: false
      });
    },
    onChangeCheckEl(value, field, index) {
      this.checklist[index][field] = value;
    },
    onSaveTask() {
      this.createTask({
        task: {
          title: this.title,
          checklist: this.checklist
        },
        index: this.index
      });
    }
  },
  created() {
    if (this.isEdit) {
      const task = this.taskList[this.index];
      this.title = task.title;
      this.checklist = task.checklist;
    }
  }
};
</script>
