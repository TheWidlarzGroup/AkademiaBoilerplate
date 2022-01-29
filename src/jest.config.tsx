/** @format */

// we always make sure 'react-native' gets included first

import 'react-native'
import React from 'react'
// @ts-ignore
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
import 'react-native-gesture-handler/jestSetup'
import { View as MockView } from 'react-native'

export const MOCKED_API_BASE = 'http://localhost/'

// @ts-ignore
global.__reanimatedWorkletInit = jest.fn()

function FormDataMock() {
  // @ts-ignore
  this.append = jest.fn()
}
// @ts-ignore
global.FormData = FormDataMock

// jest.spyOn(global.console, 'warn').mockImplementation(() => jest.fn())
// jest.spyOn(global.console, 'log').mockImplementation(() => jest.fn())
// jest.spyOn(global.console, 'error').mockImplementation(() => jest.fn())

jest.mock('src/screens/personalData/components/LocationPicker.tsx', () => ({
  LocationPicker: () => <MockView />,
}))

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {}

  return Reanimated
})

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: jest.fn().mockImplementation(({ children }) => children),
  }
})

jest.mock('Providers/SessionProvider/externalProviders/useGoogleAuth', () => ({
  useGoogleAuth: () => ({ authenticate: jest.fn() }),
}))

jest.mock('Providers/SessionProvider/externalProviders/useAppleSignIn', () => ({
  useAppleSignIn: () => ({ authenticate: jest.fn() }),
}))

jest.mock('Providers/SessionProvider/externalProviders/useFacebookSignIn', () => ({
  useFacebookSignIn: () => ({ authenticate: jest.fn() }),
}))

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon')
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
jest.mock('react-native-config', () => ({
  API_URL_BASE: MOCKED_API_BASE,
}))

jest.mock('react-native-bootsplash')

jest.mock('react-native-reanimated', () => ({
  ...require('react-native-reanimated/mock'),
  addWhitelistedUIProps: () => {},
}))

jest.mock('react-native-screens', () => {
  const RealComponent = jest.requireActual('react-native-screens')
  RealComponent.enableScreens = () => {}
  return RealComponent
})

jest.mock('Services/inAppNotifications/emitter', () => ({
  emitter: {
    emit: jest.fn(),
    off: jest.fn(),
    on: jest.fn(),
  },
}))

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

jest.mock('@react-native-firebase/messaging', () => () => ({
  hasPermission: jest.fn(() => Promise.resolve(true)),
  onTokenRefresh: jest.fn(),
  subscribeToTopic: jest.fn(),
  unsubscribeFromTopic: jest.fn(),
  requestPermission: jest.fn(() => Promise.resolve(true)),
  getToken: jest.fn(() => Promise.resolve('myMockToken')),
}))

export const mockNotify = jest.fn()

jest.mock('Services/inAppNotifications/Notifications', () => ({
  ...jest.requireActual('Services/inAppNotifications/Notifications'),
  notify: mockNotify,
}))

jest.mock('@react-native-cookies/cookies', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  }
})
