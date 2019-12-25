const entryConfig = require("./entry-config")
const moduleConfig = require("./module-config")
const pluginsConfig = require("./plugin-config")
module.exports = function (argv,isDev) {
  return{
    ...entryConfig(argv,isDev),
    ...moduleConfig(isDev),
    ...pluginsConfig(),
  }
}
