import express, {Application} from 'express';

class server{

    public app: Application 
    constructor(){
        this.app = express();
    }
}

new server();