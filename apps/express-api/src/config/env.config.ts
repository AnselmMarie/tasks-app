/**
 * @desc this variable will hold all the configurations for each database environment
 */
const envConfig = {
  env: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === 'PRODUCTION',
  isNotProduction: process.env.NODE_ENV !== 'PRODUCTION',
  isDevelopment: process.env.NODE_ENV === 'DEVELOPMENT',
  isNotDevelopment: process.env.NODE_ENV !== 'DEVELOPMENT',
  isLocalhost: process.env.NODE_ENV === 'LOCALHOST',
  isNotLocalhost: process.env.NODE_ENV !== 'LOCALHOST',
};

export { envConfig };
