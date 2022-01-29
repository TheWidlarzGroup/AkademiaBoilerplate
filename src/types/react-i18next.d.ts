import 'react-i18next'
import local from 'Locales/local.json'
import { NAMESPACES } from '../i18n/i18n'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: NAMESPACES.DEFAULT
    // custom resources type
    resources: {
      local: typeof local
    }
  }
}
