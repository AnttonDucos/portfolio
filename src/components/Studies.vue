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
