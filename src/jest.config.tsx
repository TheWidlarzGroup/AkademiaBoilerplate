/** @format */

// we always make sure 'react-native' gets included first

import 'react-native'
// @ts-ignore
import 'react-native-gesture-handler/jestSetup'

// @ts-ignore
global.__reanimatedWorkletInit = jest.fn()

// jest.spyOn(global.console, 'warn').mockImplementation(() => jest.fn())
// jest.spyOn(global.console, 'log').mockImplementation(() => jest.fn())
// jest.spyOn(global.console, 'error').mockImplementation(() => jest.fn())

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {}

  return Reanimated
})

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: jest.fn().mockImplementation(({ children }) => children),
  }
})

jest.mock('react-native-reanimated', () => ({
  ...require('react-native-reanimated/mock'),
  addWhitelistedUIProps: () => {},
}))

jest.mock('react-native-screens', () => {
  const RealComponent = jest.requireActual('react-native-screens')
  RealComponent.enableScreens = () => {}
  return RealComponent
})

jest.mock('react-native-device-info', () => {
  return {
    hasNotch: jest.fn(),
    isTablet: jest.fn(),
    getManufacturerSync: jest.fn(),
    getModel: jest.fn(),
    getSystemName: jest.fn(),
    getSystemVersion: jest.fn(),
    getVersion: jest.fn(),
    getBuildNumber: jest.fn(),
    isLandscape: jest.fn().mockImplementation(async () => {
      return false
    }),
  }
})
