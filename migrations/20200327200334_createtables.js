exports.up = function(knex) {
  return knex.schema
    .createTable("workers", worker => {
      worker.increments();
      worker.string("photo");
      worker
        .string("username")
        .notNullable()
        .unique();
      worker.string("password").notNullable();
      worker.string("accountType").notNullable();
      worker.string("fname");
      worker.string("lname");
      worker.string("jobTitle");
      worker.string("tagline");
      worker.float("totalTips");
    })
    .createTable("customers", customer => {
      customer.increments();
      customer
        .string("username")
        .notNullable()
        .unique();
      customer.string("password").notNullable();
      customer.string("accountType").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("workers")
    .dropTableIfExists("customers");
};
