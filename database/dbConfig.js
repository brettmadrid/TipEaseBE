const dbEnvironment = process.env.DB_ENVIRONMENT || 'development';

const dbConfig = require('../knexfile')[dbEnvironment];

module.exports = require('knex')(dbConfig);
