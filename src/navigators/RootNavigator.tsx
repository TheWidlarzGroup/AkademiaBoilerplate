import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native'
import { theme } from 'Theme/index'
import { useTranslation } from 'react-i18next'

export const RootNavigator = () => {
  const i18 = useTranslation()

  return (
    <SafeAreaView style={styles.container}>
      <Text>{i18.t('placeholderScreen.label.startHere')}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
})
