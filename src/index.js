/*Criar rota no EXPRESS, app.(o verbo da rota, seja get, post, put, delete e afins...)
A rota é feita em função, e o primeiro parametro é qual será a rota, no caso a / seria a pagina principal
Sendo outra pagina seria /e nome da pagina, ex: /teste vai pra pagina teste,
Apos a virgula aplicar a função, o res.send é a resposta (o stast e a requisição mostra pro usuario)
*/

import * as express from 'express'

const app = express()

app.get('/', function (req, res) {
  res.send('GET /')
})

app.post ('/', (req, res) => {
  res.status(201).send ('POST /')
})

app.put ('/', (req, res) => {
  res.status(400).send ('PUT /')
})

app.delete ('/', (req, res) => {
  res.send ('DELETE /')
})

app.patch ('/', (req, res) => {
  res.send ('PATCH /')
})

app.listen(3000, () => console.log (`ONLINE http://localhost:3000`))