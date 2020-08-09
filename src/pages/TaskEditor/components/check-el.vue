<template lang="pug">
  .check-el
    .check-el__checkbox
      label.checkbox
        input.checkbox__input(
        type="checkbox"
        v-model="checked"
        )
        .checkbox__icon
    .check-el__input
      input.input(
      v-model="title"
      )
    .check-el__button
      button.button-square.button-square_remove

</template>

<script>
export default {
  name: "CheckEl",
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    checked: {
      get() {
        return this.data.checked;
      },
      set(value) {
        this.$emit("on-change", value, "checked", this.index);
      }
    },
    title: {
      get() {
        return this.data.title;
      },
      set(value) {
        this.$emit("on-change", value, "title", this.index);
      }
    }
  }
};
</script>
