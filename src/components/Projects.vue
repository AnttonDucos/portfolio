<template>
  <section class="section">
    <h3>{{ t("projects.title") }}</h3>
    <div v-for="(project, index) in projects" :key="index" class="project">
      <img v-if="project.image" :src="project.image" />
      <div class="project-content">
        <h4>{{ t(`projects.items.${project.key}.title`) }}</h4>
        <p>{{ t(`projects.items.${project.key}.description`) }}</p>

        <div class="tech-tools">
          <div v-if="project.technologies.length" class="stack" :style="{ flex: project.technologies.length }">
            <span class="stack-title">{{ t("projects.stack") }}</span>
            <div class="tech-stack">
              <img v-for="(tech, i) in project.technologies" :key="i" :src="tech" :alt="'Tech ' + (i + 1)" />
            </div>
          </div>

          <div v-if="project.tools.length" class="tools" :style="{ flex: project.tools.length }">
            <span class="tools-title">{{ t("projects.tools") }}</span>
            <div class="tool-list">
              <img v-for="(tool, i) in project.tools" :key="i" :src="tool" :alt="'Tool ' + (i + 1)" />
            </div>
          </div>
        </div>

        <a :href="project.link" target="_blank">{{ t("projects.more") }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { loadLocaleMessages } from "../i18n";

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

const { t, locale } = useI18n();

const projects = ref([
  {
    key: "mdm",
    image: project1,
    link: "https://shazzam-mdm.rhinov.fr/",
    technologies: [cpp_logo, python_logo, js_logo],
    tools: [mongo_logo, postman_logo],
  },
  {
    key: "amazed",
    image: project2,
    link: "#",
    technologies: [c_logo],
    tools: [],
  },
  {
    key: "portfolio",
    link: "https://github.com/AnttonDucos/portfolio",
    technologies: [js_logo, css_logo, html_logo],
    tools: [vue_logo],
  },
]);

onMounted(async () => {
  await loadLocaleMessages(locale.value, "projects");
});
</script>
