<template>
  <header>
    <img :src="photo" alt="Photo de profil" class="profile-pic" />
    <h1>{{ name }}</h1>
    <h2>{{ jobTitle }}</h2>
  </header>
</template>

<script setup>
import { ref } from "vue";
import photo from "../assets/profile.jpg";

const name = ref("Antton Ducos");
const jobTitle = ref("IT developer");
</script>
