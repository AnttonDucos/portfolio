import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {},
  globalInjection: true,
});

export async function loadLocaleMessages(locale, scope) {
  if (!i18n.global.availableLocales.includes(locale)) {
    i18n.global.setLocaleMessage(locale, {});
  }

  try {
    const messages = await import(`./locales/${locale}/${scope}.json`);
    i18n.global.mergeLocaleMessage(locale, { [scope]: messages.default });
  } catch (e) {
    console.warn(`Could not load messages for ${locale}/${scope}`, e);
  }
}

export default i18n;
