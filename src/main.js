// main.js
import { createApp } from 'vue';
import App from './App.vue';
import i18n, { loadLocaleMessages } from './i18n';

const savedLang = localStorage.getItem('lang') || 'fr';

async function bootstrap() {
  const scopes = ['header', 'projects', 'studies', 'hobbies', 'contact'];

  // Charge tous les fichiers nécessaires
  await Promise.all(scopes.map(scope => loadLocaleMessages(savedLang, scope)));

  i18n.global.locale.value = savedLang;

  createApp(App).use(i18n).mount('#app');
}

bootstrap();
