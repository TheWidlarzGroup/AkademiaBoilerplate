import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import local from 'Locales/local.json'

export enum LANGUAGES {
  LOCAL = 'en',
}

export enum NAMESPACES {
  DEFAULT = 'default',
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: LANGUAGES.LOCAL,
  ns: NAMESPACES.DEFAULT,
  debug: __DEV__,
  resources: {
    [LANGUAGES.LOCAL]: {
      [NAMESPACES.DEFAULT]: local,
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
