const { response, request} = require('express');

const usuariosGet = (req, res)=>{
    const {q, nombre} = req.query;
    res.json({
        "msj": "Funcion completada controller"
        ,q, nombre
    })
}

const usuarioPost = (req, res) => {
    const {nombre , edad} = req.body;
    res.json({
        "msj": "Post",
        nombre, edad
    })
  }

const usuarioPut = (req, res) => {
    const id = req.params.id
    res.json({
        "msj":"Actualiazando",
        "id":id
    });
}
const usuarioDelete = (req, res) => {
    res.send('Hello Delete');
}


module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}