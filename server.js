const express = require('express');
const cors = require('cors');

const db = require('./database/dbHelpers');

const server = express();

server.use(express.json());
server.use(cors());

//sanity check endpoint
server.get('/', (req, res) => {
  res.send("It's Alive!!");
});

// endpoint that will be used when a customer is logged in and wants to look through list of workers
server.get('/api/workers', async (req, res) => {
  try {
    const workers = await db.getWorkers();
    res.json(workers);
  } catch (err) {
    res.status(500).json({ error: 'an error has occured' });
  }
});

module.exports = server;
