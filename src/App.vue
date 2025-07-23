<template>
  <div v-if="ready" class="container" :lang="locale">
    <Header />
    <Projects />
    <Studies />
    <Hobbies />
    <Contact />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { loadLocaleMessages } from './i18n';

import Header from "./components/Header.vue";
import Projects from "./components/Projects.vue";
import Studies from "./components/Studies.vue";
import Hobbies from "./components/Hobbies.vue";
import Contact from "./components/Contact.vue";
import "./styles.css";

const { locale } = useI18n();
const scopes = ['header', 'projects', 'studies', 'hobbies', 'contact'];
const ready = ref(false);

async function loadAll(localeToLoad) {
  await Promise.all(scopes.map(scope => loadLocaleMessages(localeToLoad, scope)));
  ready.value = true;
}

onMounted(() => loadAll(locale.value));

watch(locale, async (newLocale) => {
  ready.value = false;
  await loadAll(newLocale);
});
</script>
