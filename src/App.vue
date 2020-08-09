<template lang="pug">
  #app
    .page
      .page__header
        main-header
      .page__body
        router-view
      .page__footer
        main-footer

</template>

<script>
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";
export default {
  name: "App",
  components: {MainFooter, MainHeader}
};
</script>
