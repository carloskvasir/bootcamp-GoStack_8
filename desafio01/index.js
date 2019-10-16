const express = require("express");

const server = express();


server.get('/test', (req, res) => {
  res.send('Hello Word');
})


server.listen(3000);
