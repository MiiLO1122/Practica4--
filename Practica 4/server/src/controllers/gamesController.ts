import { Request, Response } from "express";

import pool from "../dataBase";

class GamesController{
    
    public index (req: Request, res: Response) {
        pool.query("DESCRIBE games")
        res.json({"text": "Hello"})
    }
}

const gamesController = new GamesController();
export default gamesController;