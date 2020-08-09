<template lang="pug">
  footer.footer
    .footer__container.container
      .footer__logo
        router-link.logo(
          :to="{name: 'MainPage'}"
        ) ToDo
      a.footer__copyright(
        href="mailto:aleksandr.azdakhov@gmail.com"
      ) aleksandr.azdakhov@gmail.com
</template>

<script>
export default {
  name: "MainFooter"
};
</script>
