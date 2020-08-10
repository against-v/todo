<template lang="pug">
  .modal-wrapper
    .modal
      .modal__text {{text}}
      .modal__buttons-container
        button.button.button_paint-main Да
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
      type: Function
    }
  }
};
</script>
