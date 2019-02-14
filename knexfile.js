// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/tipease',
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds/production'
    },
    useNullAsDefault: true
  }
};
