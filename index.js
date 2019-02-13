const server = require('./server');

const port = 4040;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
