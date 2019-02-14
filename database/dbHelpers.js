const express = require('express');
const db = require('./dbConfig');

module.exports = {
  insertUser,
  findByUsername,
  getWorkers
};

function insertUser(user) {
  return db('users').insert(user);
}

function findByUsername(username) {
  return db('users')
    .where('username', username)
    .first();
}

function getWorkers() {
  return db('workers').select(
    'id',
    'photo',
    'role',
    'fname',
    'lname',
    'jobTitle',
    'tagline'
  );
}
