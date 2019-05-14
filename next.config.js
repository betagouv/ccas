const isProduction = 'production' === process.env.NODE_ENV
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  assetPrefix: isProduction ? '/ccas' : '',
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' }
    }
  }
})
