import {Request, Response} from 'express';

class GamesController{

    public index(req: Request, res: Response){
         res.send("hello")
    }

}

const gamesController = new GamesController();
export default gamesController;