import React, { createContext, memo, PropsWithChildren, ReactNode, useContext } from 'react'

type Example = {
  isExample: boolean
  doSth: F0
}

const ExampleContext = createContext<Example | undefined>(undefined)

export const ExampleProvider = memo(({ children }: PropsWithChildren<ReactNode>) => {
  return (
    <ExampleContext.Provider
      value={{ isExample: true, doSth: () => console.log('remove this example') }}>
      {children}
    </ExampleContext.Provider>
  )
})

export const useExampleContext = () => {
  const context = useContext(ExampleContext)

  if (context) {
    return context
  }

  throw Error('Use this hook in ExampleContextProvider scope')
}
