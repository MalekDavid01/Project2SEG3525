import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translation files
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

// Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
