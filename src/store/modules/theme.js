export const theme = {
  namespaced: true,
  state: {
    dark: true
  },
  muations: {
    setDark (state, dark) {
      state.dark = dark
    }
  }
}
