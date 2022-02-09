import { Platform, Dimensions } from 'react-native'

export const ScreenDimensions = Dimensions.get('screen')
export const isIos = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
