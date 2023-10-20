const withImages = require("next-images");

module.exports = withImages({
  env: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
    NEXT_PUBLIC_ALCHEMY_ID: process.env.NEXT_PUBLIC_ALCHEMY_ID,
  },
});
