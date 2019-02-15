const express = require('express');
const db = require('./dbConfig');

module.exports = {
  getCustomers,
  getWorkers,
  insertUser,
  findByUsername
};

function getCustomers() {
  return db('customers');
}

function getWorkers() {
  return db('workers').select(
    'id',
    'photo',
    'accountType',
    'fname',
    'lname',
    'jobTitle',
    'tagline'
  );
}

function insertUser(user) {
  return user.accountType === 'customer'
    ? db('customers').insert(user)
    : user.accountType === 'worker'
    ? db('workers').insert(user)
    : null;
}

async function findByUsername(username) {
  const customer = await db('customers')
    .where('username', username)
    .first();

  const worker = await db('workers')
    .where('username', username)
    .first();

  return worker ? worker : customer ? customer : null;
}
