// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import en from 'vuetify/lib/locale/en'
import zhHans from 'vuetify/lib/locale/zh-Hans'

import store from '@/store'
import colors from 'vuetify/lib/util/colors'

const basicColors = {
  success: colors.green.darken3,
  error: colors.red.darken4,
  'primary-button': colors.blue.darken2
}

const getVuetifyLocale = () => {
  const currentLocale = store.state.language.language

  switch (currentLocale) {
    case 'cn':
      return 'zhHans'
    default:
      return currentLocale
  }
}

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    icons: { iconfont: 'mdi' },
    theme: {
      themes: {
        dark: basicColors,
        light: basicColors
      },
      dark: store.state.theme.dark
    },
    lang: {
      locales: { en, zhHans },
      current: getVuetifyLocale()
    }
  }
)
