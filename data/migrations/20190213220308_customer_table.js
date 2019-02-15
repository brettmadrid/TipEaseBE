exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', customer => {
    customer.increments();
    customer
      .string('username')
      .notNullable()
      .unique();
    customer.string('password').notNullable();
    customer.string('accountType').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('customers');
};
