<template>
  <section id="contact">
    <h3>Contact</h3>
    <p>Email: <a :href="'mailto:' + contact.email">{{ contact.email }}</a></p>
    <p>LinkedIn: <a :href="contact.linkedin" target="_blank">Profil</a></p>
    <p>GitHub: <a :href="contact.github" target="_blank">Profil</a></p>
  </section>
</template>

<script setup>
import { ref } from "vue";

const contact = ref({
  email: "votre.email@example.com",
  linkedin: "https://linkedin.com/in/votreprofil",
  github: "https://github.com/votreprofil",
});
</script>
