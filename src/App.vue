<template lang="pug">
  #app
    .page
      .page__header
        main-header
      .page__body
        router-view
      .page__footer
        main-footer
    confirm-modal(
    v-if="confirmModal.show"
    :text="confirmModal.text"
    :confirm-func="confirmModal.confirmFunc"
    @close="toggleConfirmModal({show: false})"
    )

</template>

<script>
import { mapState, mapMutations } from "vuex";
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
import ConfirmModal from "@/components/confirm-modal";
export default {
  name: "App",
  components: {ConfirmModal, MainFooter, MainHeader},
  computed: {
    ...mapState(["confirmModal"]),
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations(["toggleConfirmModal"])
  }
};
</script>
