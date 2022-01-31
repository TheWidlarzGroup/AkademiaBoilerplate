import React from 'react'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StyleSheet, Text } from 'react-native'
import { isIos } from 'Utils/device'
import { theme } from 'Theme/index'
import { GlobalProviders } from 'Providers/GlobalProviders'
import 'Locales/i18n'
import { queryClient } from 'ReactQuery/queryClient'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from 'Navigation/RootNavigator'

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics} style={styles.container}>
      <GestureHandlerRootView style={styles.gestureRoot}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <GlobalProviders>
                <RootNavigator />
              </GlobalProviders>
            </ThemeProvider>
          </QueryClientProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  gestureRoot: { flex: 1 },
  container: { flex: 1, backgroundColor: isIos ? 'transparent' : theme.colors.black },
})

export default App
