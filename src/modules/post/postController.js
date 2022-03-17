import { Router } from 'express'
import { verifyAcessToken } from '../../utils/auth'

const router = Router ()
router.post('/', verifyAcessToken, (req, res) => {
  res.send ('CREATE POST /')
})

router.get('/:id?', verifyAcessToken, (req, res) => {
  //DUAS OPÇÕES: Listar todos os post ou apenas um. id é a variavel que vai receber de cada "post"
  res.send ('GET POST /')
})


export default router