import * as express from 'express'
const app = express()

import userController from './controller/userController'
import postController from './controller/postController'

app.use('/user', userController)
app.use('/post', postController)


app.listen(3000, () => console.log (`ONLINE http://localhost:3000`))

/*
Atividade:
* Criar rotas de:
* USUARIO:
* Cadastro;
* Login;
* POSTS:
* Criar posts;
* Listar posts.
*/
/*Criar rota no EXPRESS, app.(o verbo da rota, seja get, post, put, delete e afins...)
A rota é feita em função, e o primeiro parametro é qual será a rota, no caso a / seria a pagina principal
Sendo outra pagina seria /e nome da pagina, ex: /teste vai pra pagina teste,
Apos a virgula aplicar a função, o res.send é a resposta (o stast e a requisição mostra pro usuario)
*/