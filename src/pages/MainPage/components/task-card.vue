<template lang="pug">
  .card
    .card__header
      h2.card__title Название карточки
      .card__controls
        button.button-square.button-square_edit
        button.button-square.button-square_remove
    .card__body
      .card__checklist.checklist
        h3.checklist__title
        ul.checklist__list
          li.checklist__item Сделать первое
          li.checklist__item Сделать второе
          li.checklist__item Сделать тертье

</template>

<script>
export default {
  name: "TaskCard"
};
</script>
