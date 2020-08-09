<template lang="pug">
  .card
    .card__header
      h2.card__title {{card.title}}
      .card__controls
        router-link.button-square.button-square_edit(
        :to="{name: 'TaskPage', params: {id: card.id}}"
        )
        button.button-square.button-square_remove(
        @click.prevent="onRemoveCard(card.id)"
        )
    .card__body
      .card__checklist.card-checklist
        h3.card-checklist__title Чеклист:
        ul.card-checklist__list
          li.card-checklist__item(
          v-for="item in checklist"
          :class="{'checklist__item_checked' : item.checked}"
          ) {{item.title}}

</template>

<script>
export default {
  name: "TaskCard",
  props: {
    card: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    checklist() {
      return this.card.checklist.slice(0,3);
    }
  },
  methods: {
    onRemoveCard(id) {
      console.log(id);
    }
  }
};
</script>
