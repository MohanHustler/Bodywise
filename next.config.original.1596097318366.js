const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  target: "serverless",
  crossOrigin: "anonymous",
  pwa: {
    register: true,
    scope: ".",
    sw: "/sw.js",
    dest: "public",
    disable: prod ? false : true,
  },
});
