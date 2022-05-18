
const express = require('express');
const app = express();
app.use(express.json());
const https = require('https')
app.post('/login', function (req, res) {
  
  if(req.body.user == "alexandrei" && req.body.parola == 'parola'){
      res.body.succes=true;
  }
  else{
      res.body.succes=false;
  }
  return res;
});

app.listen({ port:3000 }, async () => {
  console.log('Server is up on http://localhost: 3000')
})

