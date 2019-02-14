const express = require('express');
const db = require('./dbConfig');

module.exports = {
  getWorkers
};

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
