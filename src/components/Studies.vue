<template>
  <section class="studies-section">
    <h3>My Studies</h3>
    <div v-for="(study, index) in studies" :key="index" class="study-box">
      <img :src="study.logo" alt="Logo" class="study-logo" />
      <div class="study-content">
        <h4>{{ study.name }}</h4>
        <p class="university">{{ study.university }}</p>
        <p class="dates">{{ study.dates }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Données des études
import schoolLogo1 from "/epitech.png";
import schoolLogo2 from "../assets/ub.jpg";

const studies = ref([
  {
    name: "Licence Informatique",
    university: "Epitech Bordeaux",
    dates: "Septembre 2023 - Now",
    logo: schoolLogo1,
  },
  {
    name: "Bachelor's Degree in Pure Mathematics",
    university: "Bordeaux University",
    dates: "September 2019 - May 2023",
    logo: schoolLogo2,
  },
]);
</script>
