const dotenv = require('dotenv');
dotenv.config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: 3000,
  dbUser: 'db_user_video',
  dbPassword: 'BOQ2MKbkGuRqg74V',
  dbHost: 'cluster0-lw3ow.mongodb.net',
  dbName: 'pVideos_db',
  defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
  defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
  adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN
}

module.exports = { config };