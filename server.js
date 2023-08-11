const express = require('express');
const path = require('path');
const app = express();

app.get('/api/assetlinks.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'assetlinks.json'));
});

module.exports = app;
