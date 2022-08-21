<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainView from './views/MainView.vue';
</script>

<template>
  <MainView></MainView>
</template>

<style scoped>

/* Desktop view */
@media (min-width: 1024px) {
  .profile-pane {
    display: flex;
    place-items: left;
    width: 500px;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .profile-pane .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}

/* Mobile View */
@media (max-width: 1024px) {
  nav {
    width: 100%;
    text-align: center;
    padding: 5px 0;
  }
}

</style>
