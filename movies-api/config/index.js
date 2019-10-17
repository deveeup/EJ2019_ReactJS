const config = {
  // dev: process.env.NODE_ENV !== 'production',
  // port: process.env.PORT || 3000,
  // cors: process.env.CORS,
  // dbUser: process.env.DB_USER,
  // dbPassword: process.env.DB_PASSWORD,
  // dbHost: process.env.DB_HOST,
  // dbName: process.env.DB_NAME

  dev: process.env.NODE_ENV !== 'production',
  port: 3000,
  dbUser: 'db_user_video',
  dbPassword: 'BOQ2MKbkGuRqg74V',
  dbHost: 'cluster0-lw3ow.mongodb.net',
  dbName: 'pVideos_db'
}

module.exports = { config };