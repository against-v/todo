<template lang="pug">
  .container
    form.form
      .form__el.form-el
        .form-el__title Название
        .form-el__body
          input.input
      .form__el.form-el
        .form-el__title Чеклист
        .form-el__body
          .checklist
            .checklist__item

</template>

<script>
export default {
  name: "TaskPage"
};
</script>
