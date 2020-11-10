const express = require('express');
const app = express();

app.listen(3000, () => console.log("kuuntelen"))
app.use(express.static("public"));
app.use(express.json({limit: '1mb'}));

const paikat =[
  {
    "paikka": "Helsinki",
    "arvostelu": "hmmmmm",
    "longitude": "24.887296",
    "latitude": "60.2341376000004"
  },
  {
    "paikka": "Levi",
    "arvostelu": "krhhhhh",
    "longitude": "52.97550001",
    "latitude": "41.155776420"
  }
]

app.get('/api/paikat', function(request, response) {
  response.send(paikat);
})

app.post('/api/arvostelu', function(request, response) {
  console.log('Käyttäjän arvostelu');
  console.log(request.body);
  paikat.push(request.body);
  response.send(200);
})
