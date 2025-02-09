<template>
  <section class="section">
    <h3>My Projects</h3>
    <div v-for="(project, index) in projects" :key="index" class="project">
      <img v-if="project.image" :src="project.image"/>
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
import vue_logo from "../assets/vue.svg";
import css_logo from "../assets/css_logo.png";
import html_logo from "../assets/html_logo.png";

const projects = ref([
  {
    title: "MDM Shazam",
    description: "The goal of this project was to analyze an image to identify all the furniture present and match them with references from the Maisons du Monde catalog. If an exact match was unavailable, a similar reference was suggested to facilitate identification and purchase.",
    image: project1,
    link: "https://shazzam-mdm.rhinov.fr/",
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
    title: "This portfolio",
    description: "The goal of this project was to create an interactive and visually appealing web portfolio to showcase my work. It was designed to highlight my projects, background, and skills through a sleek, modern, and user-friendly interface.",
    link: "https://github.com/AnttonDucos/portfolio",
    technologies: [js_logo, css_logo, html_logo],
    tools: [vue_logo],
  },
]);
</script>
