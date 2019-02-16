require('dotenv').config(); // load the .env content
const server = require('./server');

const port = process.env.PORT || 4040;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
