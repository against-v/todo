<template lang="pug">
  .container
    form.form
      .form__el.form-el
        .form-el__title Название
        .form-el__body
          input.input(
          v-model="localTask.title"
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
              v-for="(item, $index) in localTask.checklist"
            )
              check-el(
              :data="item"
              :index="$index"
              @on-change="onChangeCheckEl"
              @remove="onRemoveCheckEl"
              )
            .checklist__item.checklist__item_button
    .button-container
      button.button.button_full(
        @click.prevent="$router.push({name: 'MainPage'})"
      ) Вернуться к списку
    .button-container
      button.button.button_full(
        v-if="isEdit"
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
    },
    isChanged() {
      const original = this.taskBeforeChanges;
      if (original.title !== this.title) {
        return true;
      }
      if (original.checklist.length !== this.checklist.length) {
        return true;
      }
      original.checklist.forEach((item, i) => {
        if (item.title !== this.checklist[i].title) {
          return true;
        }
        if (item.checked !== this.checklist[i].checked) {
          return true;
        }
      })
      return false;
    }
  },
  data() {
    return {
      localTask: {
        title: "",
        checklist: [],
      },
      checkListInput: "",
      taskBeforeChanges: null,
      requireCheck: true
    };
  },
  methods: {
    ...mapMutations(["toggleConfirmModal"]),
    ...mapActions(["createTask", "removeTask"]),
    onAddCheckEl() {
      this.localTask.checklist.push({
        title: this.checkListInput,
        checked: false
      });
      this.checkListInput = "";
    },
    onChangeCheckEl(value, field, index) {
      this.localTask.checklist[index][field] = value;
    },
    onRemoveCheckEl(index) {
      this.localTask.checklist.splice(index, 1);
    },
    onSaveTask() {
      this.createTask({
        task: this.localTask,
        index: this.index
      });
      this.requireCheck = false;
      this.$router.push({name: "MainPage"});
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
      this.requireCheck = false;
      this.$router.push({name: "MainPage"});
      this.removeTask(index);
    },
    checkChanges() {
      const original = this.taskBeforeChanges;
      const current = this.localTask;
      if (original.title !== current.title) {
        return true;
      }
      if (original.checklist.length !== current.checklist.length) {
        return true;
      }
      const diff = original.checklist.findIndex((item, i) => {
        return item.title !== current.checklist[i].title || item.checked !== current.checklist[i].checked;
      });
      if (diff > -1) {
        return true;
      }
      return false;
    }
  },
  created() {
    if (this.isEdit) {
      this.localTask = JSON.parse(JSON.stringify(this.taskList[this.index]));
    }
    this.taskBeforeChanges = JSON.parse(JSON.stringify(this.localTask));
  },
  beforeRouteLeave(to, from, next) {
    const revertChanges = () => {
      this.localTask = JSON.parse(JSON.stringify(this.taskBeforeChanges));
      next();
    };
    if (this.requireCheck && this.checkChanges()) {
      this.toggleConfirmModal({
        show: true,
        text: "Несохраненные изменения удалятся. Вы действительно хотите вернуться к списку?",
        confirmFunc: {
          func: revertChanges
        }
      });
    } else {
      next();
    }

  }
};
</script>
