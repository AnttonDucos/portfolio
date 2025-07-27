<template>
  <section class="section hobbies">
    <h3>{{ t("hobbies.title") }}</h3>
    <div class="wrapper">
      <div class="card" v-for="(image, index) in images" :key="index">
        <img :src="image.url" :alt="t(image.altKey)" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';
import { loadLocaleMessages } from '../i18n';

import sport from "../assets/sport.png";
import asso from "../assets/association.png";
import dj from "../assets/dj.png";

const { t, locale } = useI18n();

const images = ref([
  { url: sport, altKey: 'hobbies.items.sport' },
  { url: asso, altKey: 'hobbies.items.association' },
  { url: dj, altKey: 'hobbies.items.dj' }
]);

onMounted(async () => {
  await loadLocaleMessages(locale.value, 'hobbies');
});
</script>

<style scoped>
.wrapper {
    display: flex;
    width: 80%px;
    height: 350px;
    border-radius: 15px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
}

.card {
    flex: 1;
    height: 100%;
    transition: all 0.5s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(4px) grayscale(100%);
    transition: all 0.5s ease;
}

.card:hover {
    flex: 3;
    cursor: auto;
}

.card:hover img {
    filter: grayscale(0%);
}

.card:hover::after {
    opacity: 0.5;
}
</style>