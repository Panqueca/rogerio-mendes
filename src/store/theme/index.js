import { createState, useState } from '@hookstate/core'

const themeState = createState({
  darkMode: true,
})

export function useThemeState() {
  const state = useState(themeState)

  return {
    get isDarkMode() {
      return state.darkMode.get()
    },
    closePopup(slug) {
      close(state, { slug })
    },
    get toggleDarkMode() {
      return state.darkMode.set(current => !current)
    },
  }
}
