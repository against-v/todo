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
            .checklist__add.checklist-add
              .checklist-add__input
                input.input(
                v-model="checkListInput"
                )
              .checklist-add__button
                button.button(
                  @click.prevent="onAddCheckEl"
                ) Добавить пункт
            .checklist__item(
              v-for="(item, $index) in checklist"
            )
              check-el(
              :data="item"
              :index="$index"
              @on-change="onChangeCheckEl"
              )
            .checklist__item.checklist__item_button

    .button-container
      button.button.button_full(
        @click.prevent="confirmRemove"
      ) Удалить
    .button-container
      button.button.button_full.button_paint-main(
      @click.prevent="onSaveTask"
      ) Сохранить
</template>

<script>
import {mapState, mapActions, mapMutations} from "vuex";
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
      checklist: [],
      checkListInput: ""
    };
  },
  methods: {
    ...mapMutations(["toggleConfirmModal"]),
    ...mapActions(["createTask", "removeTask"]),
    onAddCheckEl() {
      this.checklist.push({
        title: this.checkListInput,
        checked: false
      });
      this.checkListInput = "";
    },
    onChangeCheckEl(value, field, index) {
      this.checklist[index][field] = value;
    },
    onSaveTask() {
      const index = this.index < 0 ? this.taskList.length : this.index;
      this.createTask({
        task: {
          title: this.title,
          checklist: this.checklist
        },
        index: index
      });
      this.$router.replace({name: "TaskEditor", params: {id: index + 1}});
    },
    confirmRemove() {
      this.toggleConfirmModal({
        show: true,
        text: "Вы действительно хотите удалить список?",
        confirmFunc: {
          func: this.onRemoveTask,
          params: [this.index]
        }
      })
    },
    onRemoveTask(index) {
      this.$router.push({name: "MainPage"});
      this.removeTask(index);
      this.toggleConfirmModal({show: false});
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
