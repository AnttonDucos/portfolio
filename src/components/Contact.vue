<template>
  <section class="section contact">
    <h3>{{ t('contact.title') }}</h3>
    <p>
      {{ t('contact.emailLabel') }}:
      <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
    </p>
    <p>
      {{ t('contact.linkedinLabel') }}:
      <a :href="contact.linkedin" target="_blank">{{ t('contact.profile') }}</a>
    </p>
    <p>
      {{ t('contact.githubLabel') }}:
      <a :href="contact.github" target="_blank">{{ t('contact.profile') }}</a>
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { loadLocaleMessages } from '../i18n';

const { t, locale } = useI18n();

const contact = ref({
  email: "antton.ducos@gmail.com",
  linkedin: "https://linkedin.com/in/antton-ducos",
  github: "https://github.com/AnttonDucos/",
});

onMounted(async () => {
  await loadLocaleMessages(locale.value, 'contact');
});
</script>
