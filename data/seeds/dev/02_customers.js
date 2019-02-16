exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('customers').insert([
        { username: 'admin', password: 'pass', accountType: 'customer' }
      ]);
    });
};
