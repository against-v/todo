<template lang="pug">
  .card
    .card__header
      h2.card__title {{card.title}}
      .card__controls
        router-link.button-square.button-square_edit(
        :to="{name: 'TaskEditor', params: {id: index + 1}}"
        title="Редактировать"
        )
        button.button-square.button-square_remove(
        @click.prevent="confirmRemove(index)"
        title="Удалить"
        )
    .card__body
      .card__checklist.card-checklist
        h3.card-checklist__title Чеклист:
        ul.card-checklist__list
          li.card-checklist__item(
          v-for="item in checklist"
          :class="{'card-checklist__item_checked' : item.checked}"
          ) {{item.title}}

</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "task-card",
  props: {
    card: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    checklist() {
      return this.card.checklist.slice(0, 3);
    }
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations(["toggleConfirmModal"]),
    ...mapActions(["removeTask"]),
    confirmRemove() {
      this.toggleConfirmModal({
        show: true,
        text: "Вы действительно хотите удалить список?",
        confirmFunc: {
          func: this.removeTask,
          params: [this.index]
        }
      })
    }
  }
};
</script>
