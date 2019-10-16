const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request boy = { "name": "Diego", "email": "aa@bb.cc" }

server.get('/users/:id', (req, res) => {
  const { id } = req.params;

  return res.json({ id });
})

server.listen(3000);
