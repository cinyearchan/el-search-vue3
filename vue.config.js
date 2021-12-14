const { VuetifyLoaderPlugin } = require('vuetify-loader')

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/',
  assetsDir: 'assets',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    // disableHostCheck: true
  },
  configureWebpack: {
    performance: {
      maxEntrypointSize: 768000,
      maxAssetSize: 768000
    },
    plugins: [
      new VuetifyLoaderPlugin()
    ]
  },
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0].VERSION = JSON.stringify(process.env.npm_package_version)
      return args
    })
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      match (originalTag, { kebabTag, camelTag, path, component }) {
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
        }
      }
    }])
  },
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		},
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
