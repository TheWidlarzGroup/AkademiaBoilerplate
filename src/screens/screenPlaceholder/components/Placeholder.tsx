import React, { ReactNode } from 'react'
import { View } from 'react-native'

type Props = {
  children: ReactNode
}

export const PlaceholderComponent = ({ children }: Props) => {
  return <View>{children}</View>
}
