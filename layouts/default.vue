<template>
  <div>
    <div id="wrapper" :class="{ 'sidebar-enable': isOpen }">
      <app-sidebar/>
      <app-navbar class="mb-5"/>
      <div class="content-page">
        <div class="content">
          <nuxt/>
        </div>
      </div>
    </div>
    <div class="right-bar-overlay"></div>
  </div>
</template>

<script>
import AppSidebar from "./sidebar";
import AppNavbar from "./navbar";
import { mapGetters } from "vuex";
export default {
  components: {
    AppSidebar,
    AppNavbar
  },

  computed: {
    ...mapGetters({
      isOpen: "isOpen/getDrawerState"
    })
  }
};
</script>
<style scoped>
body {
  background-color: #ffffff !important;
}
.content-page {
  margin: auto !important;
}
</style>