const withAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

const config = withAnalyzer({
  webpack(config) {
    // adds support for typescript's paths
    const plugin = new TsConfigPathsPlugin({ configFile: "./src/tsconfig.json" })
    config.resolve.plugins = config.resolve.plugins || []
    config.resolve.plugins.push(plugin)

    return config
  },
})

config.env = {
  ENV: process.env.ENV,
}

module.exports = config
