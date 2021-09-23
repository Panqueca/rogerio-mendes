export const theme = {
  dark: {
    text1: '#fff',
    bg1: '#111',
  },
  light: {
    text1: '#111',
    bg1: '#fff',
  },
}

export function getTheme(isDarkTheme) {
  if (isDarkTheme) return theme.dark
  return theme.light
}
