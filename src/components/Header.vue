<template>
  <header>
    <section class="profile-section">
      <div class="profile-left">
        <img src="../assets/profile.jpg" alt="Photo de profil" />
        <h2>Antton Ducos</h2>
        <p>IT Developer</p>
      </div>

      <div class="profile-right">
        <p>
          Passionate about computer science and mathematics,
          I enjoy algorithm design and solving complex problems with logical and optimized approaches. 
          thrive on developing efficient solutions, analyzing data structures, and optimizing systems,
          always seeking to learn and apply my skills to real-world challenges.
        </p>
      </div>
    </section>
  </header>
</template>

<script setup>
import { ref } from "vue";
import photo from "../assets/profile.jpg";

const name = ref("Antton Ducos");
const jobTitle = ref("IT developer");
</script>
