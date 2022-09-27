import {Request, Response} from 'express';

import pool from '../database'
class GamesController{

    public index(req: Request, res: Response){
        pool.query('DESCRIBE usuario');
        res.json('games')
    }

}

const gamesController = new GamesController();
export default gamesController;