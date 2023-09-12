import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.get('/', UserController.get);

router.get('/isexist', (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  res.send({login, password});
});

router.get('/:id', UserController.getOne);

router.post('/', UserController.post);

router.put('/:id', UserController.put);

router.delete('/:id', UserController.delete);

export default router;