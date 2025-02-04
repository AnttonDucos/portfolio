<template>
  <section class="section">
    <h3>Mes Projets</h3>
    <ul class="projects-list">
      <li v-for="project in projects" :key="project.title">
        <strong>{{ project.title }}</strong>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank">Voir plus →</a>
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
