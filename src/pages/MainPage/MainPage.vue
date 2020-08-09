<template lang="pug">
  .container
    .button-container
      router-link.button.button_full.button_paint-main(
      :to="{name: 'TaskEditor', params: {id: 'new'}}"
      ) Добавить новый список
    ul.task-list
      li.task-list__item(
        v-for="card in cards"
      )
        task-card(
        :card="card"
        )
</template>

<script>
import TaskCard from "@/pages/MainPage/components/task-card";
export default {
  name: "MainPage",
  components: { TaskCard },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Название карточки",
          checklist: [
            {
              title: "Сделать первое",
              checked: false
            },
            {
              title: "Сделать второе",
              checked: false
            },
            {
              title: "Сделать третье",
              checked: false
            }
          ]
        }
      ]
      // cards: [
      //   {
      //     id: 1,
      //     title: "Название карточки",
      //     checklist: [
      //       {
      //         title: "Сделать первое",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать второе",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать третье",
      //         checked: false
      //       }
      //     ]
      //   },
      //   {
      //     id: 2,
      //     title: "Название карточки 2",
      //     checklist: [
      //       {
      //         title: "Сделать первое",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать второе",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать второе",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать второе",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать второе",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать третье",
      //         checked: false
      //       }
      //     ]
      //   },
      //   {
      //     id: 3,
      //     title: "Название карточки 3",
      //     checklist: [
      //       {
      //         title: "Сделать первое",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать второе",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать третье",
      //         checked: false
      //       }
      //     ]
      //   },
      //   {
      //     id: 4,
      //     title: "Название карточки 3",
      //     checklist: [
      //       {
      //         title: "Сделать первое",
      //         checked: true
      //       }
      //     ]
      //   },
      //   {
      //     id: 5,
      //     title: "Название карточки 3",
      //     checklist: [
      //       {
      //         title: "Сделать первое",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать второе",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать третье",
      //         checked: false
      //       }
      //     ]
      //   },
      //   {
      //     id: 6,
      //     title: "Название карточки 6",
      //     checklist: [
      //       {
      //         title: "Сделать первое",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать второе",
      //         checked: false
      //       },
      //       {
      //         title: "Сделать третье",
      //         checked: false
      //       }
      //     ]
      //   },
      // ]
    };
  }
};
</script>
