declare module 'react-native-config' {
  // MODE
  export const MODE: 'debug' | 'production' | 'staging'

  // API
  export const API_URL_BASE: string
  export const GOOGLE_WEB_CLIENT_ID: string
  export const ENABLE_EXTERNAL_LOGIN_PROVIDERS: 'false' | 'true'
  export const GOOGLE_PLACE_API_KEY: string
  export const OAUTH_FACEBOOK_ID: string
  export const OAUTH_FACEBOOK_SECRET: string
}
