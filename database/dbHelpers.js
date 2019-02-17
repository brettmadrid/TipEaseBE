const express = require('express');
const db = require('./dbConfig');

module.exports = {
  // getCustomers,
  // getAllWorkersInfo,
  getWorkers,
  insertUser,
  findByUsername,
  sendTipToWorker,
  getWorkerProfile,
  deleteWorker,
  updateWorker,
  storeImagePath,
  findWorkerById
};

// function getCustomers() {
//   return db('customers');
// }

// function getAllWorkersInfo() {
//   return db('workers');
// }

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

async function sendTipToWorker(workerId, tip) {
  // query DB to get specific workors totalTips, then sum up the current total with the amount that the customer is sending
  const prevTotalTips = await db('workers')
    .select('totalTips')
    .where('id', workerId);
  const curTotalTips = await sumTips(prevTotalTips[0].totalTips, tip);

  const updateTotalTips = await db('workers')
    .where('id', workerId)
    .update({ totalTips: curTotalTips });

  return updateTotalTips ? 'Tip Received' : 'Tip was not received';

  function sumTips(pt, t) {
    return pt + t;
  }
}

function getWorkerProfile(id) {
  return db('workers')
    .select(
      'id',
      'photo',
      'username',
      'accountType',
      'fname',
      'lname',
      'jobTitle',
      'tagline',
      'totalTips'
    )
    .where({ id });
}

function deleteWorker(id) {
  return db('workers')
    .where({ id })
    .del();
}

function updateWorker(id, changes) {
  return db('workers')
    .where({ id })
    .update(changes);
}

function storeImagePath(id, path) {
  return db('workers')
    .where({ id })
    .update({ photo: path });
}

function findWorkerById(id) {
  return db('workers')
    .select('id')
    .where({ id });
}
