import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import brazilian from '../utils/languages/br.json';
import english from '../utils/languages/en.json';

const resources = {
  EN_US: {
    translation: english,
  },
  PT_BR: {
    translation: brazilian,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'PT_BR',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
