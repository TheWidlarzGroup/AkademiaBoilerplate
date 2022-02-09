import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enLocale from 'Locales/en.json'

export enum LANGUAGES {
  EN = 'en',
}

export enum NAMESPACES {
  DEFAULT = 'default',
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: LANGUAGES.EN,
  ns: NAMESPACES.DEFAULT,
  debug: __DEV__,
  resources: {
    [LANGUAGES.EN]: {
      [NAMESPACES.DEFAULT]: enLocale,
    },
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  react: {
    bindI18nStore: 'added',
    bindI18n: 'added',
  },
})

export default i18n
