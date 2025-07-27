<template>
  <section class="section">
    <h3>{{ t("projects.title") }}</h3>
    <div v-for="(project, index) in projects" :key="index" class="project">
      <img v-if="project.image" :src="project.image" />
      <div class="project-content">
        <h4>{{ t(`projects.items.${project.key}.title`) }}</h4>
        <p>{{ t(`projects.items.${project.key}.description`) }}</p>

        <div class="tech-tools">
          <div
            v-if="project.technologies.length"
            class="stack"
            :style="{ flex: project.technologies.length }"
          >
            <span class="stack-title">{{ t("projects.stack") }}</span>
            <div class="tech-stack">
              <div
                v-for="(tech, i) in project.technologies"
                :key="i"
                class="logo-wrapper"
              >
                <img :src="tech.src" :alt="tech.name" />
                <span class="logo-label">{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <div
            v-if="project.tools.length"
            class="tools"
            :style="{ flex: project.tools.length }"
          >
            <span class="tools-title">{{ t("projects.tools") }}</span>
            <div class="tool-list">
              <div
                v-for="(tool, i) in project.tools"
                :key="i"
                class="logo-wrapper"
              >
                <img :src="tool.src" :alt="tool.name" />
                <span class="logo-label">{{ tool.name }}</span>
              </div>
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
    technologies: [
      { src: cpp_logo, name: "C++" },
      { src: python_logo, name: "Python" },
      { src: js_logo, name: "JavaScript" },
    ],
    tools: [
      { src: mongo_logo, name: "MongoDB" },
      { src: postman_logo, name: "Postman" },
    ],
  },
  {
    key: "amazed",
    image: project2,
    link: "#",
    technologies: [{ src: c_logo, name: "C" }],
    tools: [],
  },
  {
    key: "portfolio",
    link: "https://github.com/AnttonDucos/portfolio",
    technologies: [
      { src: js_logo, name: "JavaScript" },
      { src: css_logo, name: "CSS" },
      { src: html_logo, name: "HTML" },
    ],
    tools: [{ src: vue_logo, name: "Vue.js" }],
  },
]);

onMounted(async () => {
  await loadLocaleMessages(locale.value, "projects");
});
</script>

<style scoped>
.section {
  padding: 20px;
}

.section h3 {
  font-size: 22px;
  color: #333;
}

.project {
  display: flex;
  align-items: center;
  background: #eee;
  margin: 15px 0;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  min-height: 180px;
}

.project:nth-child(even) {
  flex-direction: row-reverse;
}

.project img {
  height: 180px;
  width: auto;
  border-radius: 15px;
  object-fit: contain;
  margin: 10px;
}

.project-content {
  flex: 1;
  text-align: center;
}

.project-content h4 {
  margin: 0 0 10px;
}

.project-content p {
  text-align: justify;
  margin: 0 0 10px;
}

.project-content a {
  display: block;
  text-decoration: none;
  font-weight: bold;
  color: #0073e6;
}

.project-content a:hover {
  text-decoration: underline;
}

.tech-tools {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
}

.stack,
.tools {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stack-title,
.tools-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.tech-stack,
.tool-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.logo-wrapper {
  position: relative;
  display: inline-block;
}

.logo-wrapper img {
  width: 40px;
  height: auto;
  display: block;
  z-index: 1;
}

.logo-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 0.8em;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  z-index: 2;
}

.logo-wrapper:hover .logo-label {
  opacity: 1;
}
</style>
