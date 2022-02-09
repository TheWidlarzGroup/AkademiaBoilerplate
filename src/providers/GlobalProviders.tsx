import React, { memo, ReactNode } from 'react'
import { ExampleProvider } from 'Providers/ExampleProvider'

type Props = {
  children: ReactNode
}

export const GlobalProviders = memo(({ children }: Props) => {
  return <ExampleProvider>{children}</ExampleProvider>
})
