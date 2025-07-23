<template>
  <header>
    <button @click="switchLang">{{ t('header.switch') }}</button>
    <section class="profile-section">
      <div/>
        <div class="profile-left">
          <img :src="photo" alt="Photo de profil" />
          <!-- <h2>{{ t('header.name') }}</h2>
          <p>{{ t('header.title') }}</p> -->
        </div>

        <div class="profile-right">
          <p>{{ t('header.description') }}</p>
        </div>
      <div/>
    </section>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';
import { loadLocaleMessages } from '../i18n';
import photo from '../assets/profile.jpg';

const { t, locale } = useI18n();

const scopes = ['header', 'projects', 'studies', 'hobbies', 'contact'];

onMounted(async () => {
  await Promise.all(scopes.map(scope => loadLocaleMessages(locale.value, scope)));
});

async function switchLang() {
  const newLocale = locale.value === 'fr' ? 'en' : 'fr';
  locale.value = newLocale;
  localStorage.setItem('lang', newLocale);

  await Promise.all(scopes.map(scope => loadLocaleMessages(newLocale, scope)));
}
</script>
