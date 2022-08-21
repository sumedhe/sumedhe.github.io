<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ProfilePane from '../components/ProfilePane.vue';
import profileData from '../data/profile-data.json'

</script>

<script>

export default {
  data() {
    profileData: profileData
  }
}

</script>

<template>

  <div>
    <div id="left">
        <ProfilePane/>
    </div>
    <div id="right">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <RouterLink to="/experience">Experience</RouterLink>
            <RouterLink to="/education">Education</RouterLink>
            <RouterLink to="/patents">Patents</RouterLink>
            <RouterLink to="/achievements">Achievements</RouterLink>
            <!-- <RouterLink to="/research">Research</RouterLink> -->
            <RouterLink to="/certifications">Certifications</RouterLink>
            <RouterLink to="/volunteering">Volunteering</RouterLink>
        </nav>
        <RouterView class="router-view"/>
    </div> 
  </div>

</template>

<style scoped>

.router-view {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
}

nav {
  width: 100%;
  text-align: center;
  padding: 1rem 0;
}

/* Desktop view */
@media (min-width: 1024px) {
  .profile-pane {
    display: flex;
    place-items: left;
    width: 500px;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .profile-pane .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  #left{
      float:left;
      width: 260px;
  }
  #right{
      float:left;
      width: 700px;
  }
}

/* Mobile View */
@media (max-width: 1024px) {
  /* nav {
    width: 100%;
    padding: 5px 0;
  } */
}



nav a.router-link-exact-active {
  /* color: var(--color-text); */
  color: rgb(1, 123, 229);
  background-color: rgb(201, 220, 238);
}

nav a.router-link-exact-active:hover {
  /* background-color: transparent; */
}

nav a {
  display: inline-block;
  padding: 0.1rem 1rem;
  border-radius: 3px;
  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}

#left {
    /* border-style: dotted; */
}

#right {
    /* border-style: dotted; */
}
</style>
