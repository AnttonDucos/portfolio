<template>
  <div id="app">
    <Header />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 20px;
}
</style>
