<template>
  <section class="studies-section">
    <h3>{{ t("studies.title") }}</h3>
    <div v-for="(study, index) in studies" :key="index" class="study-box">
      <img :src="study.logo" alt="Logo" class="study-logo" />
      <div class="study-content">
        <h4>{{ t(`studies.items.${study.key}.name`) }}</h4>
        <p class="university">{{ t(`studies.items.${study.key}.university`) }}</p>
        <p class="dates">{{ t(`studies.items.${study.key}.dates`) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { loadLocaleMessages } from "../i18n";

import schoolLogo1 from "/epitech.png";
import schoolLogo2 from "../assets/ub.jpg";

const { t, locale } = useI18n();

const studies = ref([
  {
    key: "study1",
    logo: schoolLogo1
  },
  {
    key: "study2",
    logo: schoolLogo2
  }
]);

onMounted(async () => {
  await loadLocaleMessages(locale.value, "studies");
});
</script>

<style scoped>
.studies-section {
    max-width: 80%;
    margin: 50px auto;
    padding: 20px;
}

.studies-section h3 {
    font-size: 22px;
    color: #333;
}

.study-box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.study-logo {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    object-fit: contain;
}

.study-content {
    text-align: left;
}

.study-content h4 {
    font-weight: bold;
    margin: 0 0 5px;
}

.study-content p {
    margin: 0;
}

.study-content p.university {
    color: #555;
}

.study-content p.dates {
    font-style: italic;
    color: #777;
}
</style>