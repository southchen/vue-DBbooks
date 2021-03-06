const isProd = process.env.NODE_ENV === 'production';
const path = require('path');
module.exports = {
  outputDir: 'music',

  configureWebpack: {
    resolve: {
      alias: {
        '@utils': path.resolve('src/assets'),
      },
    },

    // devtool: isProd ? false: 'source-map',
    // devServer: {
    //   open: true,
    //   proxy: {
    //     '/netease-api': {
    //       target: 'http://localhost:3000',
    //       pathRewrite: { '^/netease-api': '' },
    //       changeOrigin: true,
    //       secure: false,
    //     },
    //   },
    //   port: 8888,
    // },
    // externals: isProd ? {
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter',
    //   vuex: 'Vuex',
    //   axios: 'axios',
    // }: {},
    // plugins: [
    //   new WorkboxPlugin.GenerateSW()
    // ]
  },
  //   css: {
  //     loaderOptions: {
  //       sass: {
  //         data: `
  //           @import "~@/style/variables.scss";
  //           @import "~@/style/mixin.scss";
  //         `,
  //       },
  //     },
  //   },
};
