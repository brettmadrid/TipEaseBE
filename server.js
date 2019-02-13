const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

//sanity check endpoint
server.get('/', (req, res) => {
  res.send("It's Alive!!");
});

module.exports = server;
