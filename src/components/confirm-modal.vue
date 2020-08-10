<template lang="pug">
  .modal-wrapper
    .modal
      .modal__text {{text}}
      .modal__buttons-container
        button.button.button_paint-main(
        @click.prevent="onButtonConfirmClick"
        ) Да
        button.button(
        @click.prevent="$emit('close')"
        ) Нет

</template>

<script>
export default {
  name: "confirm-modal",
  props: {
    text: {
      type: String,
      default: "Подтвердите действие"
    },
    confirmFunc: {
      func: {
        type: Function
      },
      params: {
        type: Array
      }
    }
  },
  methods: {
    onButtonConfirmClick() {
      this.confirmFunc.func.apply(this, this.confirmFunc.params);
      this.$emit("close");
    }
  }
};
</script>
