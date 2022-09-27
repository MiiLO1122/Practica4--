import {Request, Response} from 'express';

class IndexController{

    public index(req: Request, res: Response){
         res.send("Esta funcionando")
    }

}

export const indexController = new IndexController();