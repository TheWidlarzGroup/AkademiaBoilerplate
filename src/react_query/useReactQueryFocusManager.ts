import { useEffect } from 'react'
import { AppState, AppStateStatus } from 'react-native'
import { focusManager } from 'react-query'

export const useReactQueryFocusManager = () => {
  useEffect(() => {
    focusManager.setEventListener((handleFocus) => {
      const _handleFocus = (nextAppState: AppStateStatus) => {
        const isFocused = nextAppState === 'active'

        handleFocus(isFocused)
      }

      const { remove } = AppState.addEventListener('change', _handleFocus)

      return () => {
        remove()
      }
    })
  }, [])
}
