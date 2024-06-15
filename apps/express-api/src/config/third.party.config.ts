/**
 * @desc this variable will hold any secrets for third party apps
 */
const thirdPartyConfig = {
  jwt: {
    secret: process.env.ACCESS_TOKEN_SECRET,
    secretRefresh: process.env.REFRESH_TOKEN_SECRET,
  },
};

export { thirdPartyConfig };
