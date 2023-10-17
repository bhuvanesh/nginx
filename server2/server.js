// 'use strict';
 
const express = require('express');
 
// Constants
const PORT = 7071;
const HOST = '0.0.0.0';
 
// App
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to 2nd the world of Node.Js');
});
 
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});