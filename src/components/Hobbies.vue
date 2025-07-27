<template>
  <section class="section hobbies">
    <h3>{{ t("hobbies.title") }}</h3>
    <div class="wrapper">
      <div
        class="card"
        v-for="(image, index) in images"
        :key="index"
        @mouseover="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <img :src="image.url" :alt="t(image.altKey)" />
      </div>
    </div>
    <transition name="fade">
      <div class="description" v-if="hoveredIndex !== null">
        <h4>{{ t(images[hoveredIndex].altKey) }}</h4>
        <p>{{ t(`${images[hoveredIndex].altKey}_description`) }}</p>
      </div>
    </transition>
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

const hoveredIndex = ref(null);

onMounted(async () => {
  await loadLocaleMessages(locale.value, 'hobbies');
});
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 80%;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: auto;
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

.description {
  margin-top: 25px;
  text-align: center;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  background: rgba(105, 105, 105, 0.05);
  padding: 20px;
  border-radius: 10px;
  color: #222;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.description h4 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #0073e6;
}

.description p {
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.6;
  color: #333;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
