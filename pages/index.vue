<template>
  <div>
    <homePage/>
  </div>
</template>

<script>
import homePage from '~/components/home-page/home-page.vue'

export default {
  layout: 'bare',
  components: {
    homePage
  }
}
</script>

<style scoped>
body{
  padding-bottom: 0 !important
}
</style>
