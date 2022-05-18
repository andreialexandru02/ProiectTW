const express = require('express');
const app = express();
const https = require('https')
app.get('/muie', function (req, res) {
  res.send('Hello World!');
});

app.listen({ port:3000 }, async () => {
  console.log('Server is up on http://localhost: 3000')
})

