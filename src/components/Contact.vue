<template>
  <section class="section contact">
    <h3>Contact</h3>
    <p>Email: <a :href="'mailto:' + contact.email">{{ contact.email }}</a></p>
    <p>
      LinkedIn:
      <a :href="contact.linkedin" target="_blank">Profil</a>
    </p>
    <p>
      GitHub:
      <a :href="contact.github" target="_blank">Profil</a>
    </p>
  </section>
</template>

<script setup>
import { ref } from "vue";

const contact = ref({
  email: "antton.ducos@gmail.com",
  linkedin: "https://linkedin.com/in/antton-ducos",
  github: "https://github.com/AnttonDucos/",
});
</script>
