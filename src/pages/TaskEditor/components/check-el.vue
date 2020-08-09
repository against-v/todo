<template lang="pug">
  .check-el
    .check-el__checkbox
      label.checkbox
        input.checkbox__input(
        type="checkbox"
        )
        .checkbox__icon
    .check-el__input
      input.input
    .check-el__button
      button.button-square.button-square_remove

</template>

<script>
export default {
  name: "CheckEl",
};
</script>
