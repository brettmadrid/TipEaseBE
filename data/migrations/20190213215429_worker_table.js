exports.up = function(knex, Promise) {
  return knex.schema.createTable('workers', worker => {
    worker.increments();
    worker.string('photo');
    worker
      .string('username')
      .notNullable()
      .unique();
    worker.string('password').notNullable();
    worker.string('accountType').notNullable();
    worker.string('fname');
    worker.string('lname');
    worker.string('jobTitle');
    worker.string('tagline');
    worker.float('totalTips');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('workers');
};
