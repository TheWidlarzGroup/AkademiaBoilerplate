import React from 'react'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StyleSheet, Text } from 'react-native'
import { isIos } from 'Utils/device'
import { theme } from 'Theme/index'

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics} style={styles.container}>
      <GestureHandlerRootView style={styles.gestureRoot}>
        <Text>TWG</Text>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  gestureRoot: { flex: 1 },
  container: { flex: 1, backgroundColor: isIos ? 'transparent' : theme.colors.black },
})

export default App
