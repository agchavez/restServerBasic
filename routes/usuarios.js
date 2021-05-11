
const { Router } = require('express');
const { usuariosGet, usuarioPost, usuarioDelete, usuarioPut } = require('../controllers/usuarios');

const router = new Router();

router.get('/',usuariosGet);

router.post('/', usuarioPost);

router.put('/:id', usuarioPut);

router.delete('/', usuarioDelete);


module.exports = router; 



