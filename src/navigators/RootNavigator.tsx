import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native'
import { theme } from 'Theme/index'

export const RootNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>START_HERE</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
})
