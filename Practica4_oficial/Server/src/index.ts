import express, {Application} from 'express';

class server{

    public app: Application;

    constructor(){
        this.app = express();
    }

    config(): void{
        //puerto
        this.app.set('port',process.env.PORT || 3000);
    }
    //rutas
    routes():void{

    }

    //inicia server
    start(): void{
        this.app.listen();
        console.groupCollapsed('ejecutando en puero',this.app.get('PORT'))
    }
}

new server();