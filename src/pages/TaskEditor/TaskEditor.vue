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
              v-for="item in checklist"
            )
              check-el(
              :data="item"
              )
            .checklist__item.checklist__item_button
              button.button(
              @click.prevent="onAddCheckEl"
              ) Добавить пункт
    .button-container
      button.button.button_full.button_paint-main(
      @click.prevent=""
      ) Сохранить
</template>

<script>
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
    mode() {
      return this.$route.params.id === "new" ? "create" : "edit";
    },
  },
  data() {
    return {
      title: "",
      checklist: []
    };
  },
  methods: {
    onAddCheckEl() {
      this.checklist.push({
        title: "",
        checked: false
      });
    }
  }
};
</script>
