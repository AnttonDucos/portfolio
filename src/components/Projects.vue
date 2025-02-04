<template>
  <section id="projects">
    <h3>Mes Projets</h3>
    <ul>
      <li v-for="project in projects" :key="project.title">
        <a :href="project.link" target="_blank">{{ project.title }}</a>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  { title: "Projet 1", description: "Description du projet 1", link: "#" },
  { title: "Projet 2", description: "Description du projet 2", link: "#" },
  { title: "Projet 3", description: "Description du projet 3", link: "#" },
]);
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
