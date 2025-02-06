<template>
  <section class="section">
    <h3>My Projects</h3>
    <div v-for="(project, index) in projects" :key="index" class="project">
      <img :src="project.image" :alt="project.title" />
      <div class="project-content">
        <h4>{{ project.title }}</h4>
        <p>{{ project.description }}</p>
        <div class="tech-tools">
          <div v-if="project.technologies.length" class="stack" :style="{ flex: project.technologies.length }">
            <span class="stack-title">Stacks</span>
            <div class="tech-stack">
              <img v-for="(tech, i) in project.technologies" :key="i" :src="tech" :alt="'Tech ' + (i+1)" />
            </div>
          </div>
          <div v-if="project.tools.length" class="tools" :style="{ flex: project.tools.length }">
            <span class="tools-title">Tools</span>
            <div class="tool-list">
              <img v-for="(tool, i) in project.tools" :key="i" :src="tool" :alt="'Tool ' + (i+1)" />
            </div>
          </div>
        </div>
        <a :href="project.link" target="_blank">More →</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import c_logo from "../assets/C_Logo.png";
import cpp_logo from "../assets/cpp_logo.png";
import python_logo from "../assets/Python-logo.png";
import mongo_logo from "../assets/mongo_logo.png";
import postman_logo from "../assets/postman_logo.webp";
import js_logo from "../assets/javascript_logo.png";

const projects = ref([
  {
    title: "MDM Shazam",
    description: "The project aims to develop a strategy for multiple robots to navigate a maze as quickly as possible. The goal is to optimize their movements so that all robots reach the exit in the shortest time.",
    image: "/src/assets/project1.png",
    link: "#",
    technologies: [cpp_logo, python_logo, js_logo],
    tools: [mongo_logo, postman_logo],
  },
  {
    title: "A-Mazed",
    description: "The project aims to develop a strategy for multiple robots to navigate a maze as quickly as possible. The goal is to optimize their movements so that all robots reach the exit in the shortest time.",
    image: project2,
    link: "#",
    technologies: [c_logo],
    tools: [],
  },
  {
    title: "Projet 3",
    description: "Description du projet 3",
    image: "/src/assets/projet3.jpg",
    link: "#",
    technologies: [],
    tools: [],
  },
]);
</script>
