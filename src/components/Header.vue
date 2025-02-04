<template>
  <header>
    <h1>{{ name }}</h1>
    <h2>{{ jobTitle }}</h2>
  </header>
</template>

<script setup>
import { ref } from "vue";

const name = ref("Ducos Antton");
const jobTitle = ref("IT developer");
</script>

<style scoped>
header {
  text-align: center;
  margin-bottom: 20px;
}
</style>
