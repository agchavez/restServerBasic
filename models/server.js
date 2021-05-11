const express = require('express');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middelware.
        this.middleware();

        //Rutas de mi server.
        this.route();
    }

    middleware(){
        this.app.use(express.static('public'));

        //lectura y parceo del body
        this.app.use(express.json());
    }

    route(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        
    }

    listem(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor en el puerto', this.port);
        })
    }

}

module.exports = Server;