const path = require("path");
const resolve = function resolve(dir) {
  return path.join(__dirname, dir);
};

module.exports = {
  configureWebpack: {
    plugins: []
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    const imagesRule = config.module.rule("images");
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();
    // 添加要替换的 loader
    svgRule.include
      .add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
    // 修改 image加载 添加svg exclude
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude.add(resolve("src/icons"))
      .end();
  },

  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    proxy: {
      "/dev-api/user/login": {
        target: "https://panjiachen.github.io/vue-admin-template",
        // target: "http://dev20.missfresh.net",
        // target: "http://172.16.157.149:18599", //圆波
        // target: "http://172.16.156.66:18599", //武超
        // target: "http://risk-manage.missfresh.net",
        changeOrigin: true,
        pathRewrite: {
          "^/dev-api/user/login": "/dev-api/user/login"
        },
        logLevel: "debug"
      }
    },
    disableHostCheck: true
  }
};
