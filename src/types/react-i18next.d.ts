import 'react-i18next'
import en from 'Locales/en.json'
import { NAMESPACES } from 'Locales/i18n'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: NAMESPACES.DEFAULT
    // custom resources type
    resources: {
      local: typeof en
    }
  }
}
