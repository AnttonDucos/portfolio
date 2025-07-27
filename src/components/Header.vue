<template>
  <header>
    <button @click="switchLang">{{ t('header.switch') }}</button>
    <section class="profile-section">
      <div class="profile-left">
        <img :src="photo" alt="Profile picture" />
        <h2>{{ t('header.name') }}</h2>
        <p class="role">{{ t('header.title') }}</p>
      </div>

      <div class="profile-right">
        <p class="portfolio-label">Portfolio</p>
        <p>{{ t('header.description') }}</p>
      </div>
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

<style scoped>
  .profile-section {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    padding: 20px;
}

.profile-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
}

.profile-left img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #0073e6;
}

.profile-left p {
    font-size: 1.2em;
    font-weight: bold;
    color: #aaaaaa;
}

.profile-right {
    flex: 2;
    padding-left: 20px;
    text-align: justify;
}

.profile-pic {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid white;
    display: block;
    margin: 0 auto 10px;
}

.profile-left h2 {
  margin: 15px 0 5px;
  font-size: 1.8em;
  font-weight: bold;
  color: #d1d1d1;
}

.subtitle {
  font-size: 1.2em;
  font-weight: 500;
  color: #555;
  margin-bottom: 10px;
}

.role {
  margin-bottom: 5px;
}

.portfolio-label {
  font-size: 1em;
  font-weight: 600;
  color: #0073e6;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
}


</style>