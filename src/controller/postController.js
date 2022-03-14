import { Router } from 'express'

const router = Router ()
router.post('/', (req, res) => {
  res.send ('CREATE POST /')
})

router.get('/:id?', (req, res) => {
  //DUAS OPÇÕES: Listar todos os post ou apenas um. id é a variavel que vai receber de cada "post"
  res.send ('GET POST /')
})


export default router