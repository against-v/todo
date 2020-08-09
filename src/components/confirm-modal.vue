<template lang="pug">
  .modal-wrapper
    .modal
      .modal__text
      .modal__buttons-container

</template>

<script>
export default {
  name: "confirm-modal",
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
