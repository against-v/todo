<template lang="pug">
  header.header
    .header__container.container
      .header__logo
        router-link.logo(
        :to="{name: 'MainPage'}"
        ) ToDo
</template>

<script>
export default {
  name: "MainHeader"
};
</script>
