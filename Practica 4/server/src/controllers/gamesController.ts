import {Request, Response} from 'express';

import pool from '../database'
class GamesController{

    //Listar usuarios
    public async list(req: Request, res: Response){
        const usuario = await pool.query('SELECT * FROM usuario');
        res.json({usuario});
    }

    //Listar un unico usuario
    public async unico(req: Request, res: Response): Promise<any> {
        const { Registro_Academico } = req.params;
        const usuario = await pool.query('SELECT * FROM usuario WHERE Registro_Academico = ?', [Registro_Academico])
        
        if (usuario.length > 0){
            return res.json(usuario[0]);
        }
        res.status(404).json({text: 'El Usuario no existe'})
    }

    //Crear usuario
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO usuario set ?', [req.body]);
        res.json({message: 'Usuario saved'})
    }

    //Actualizar usuario
    public update(req: Request, res: Response){
        res.json({text: 'updating a game ' + req.params.Registro_Academico})
    }

    //Eliminar usuario
    public delete(req: Request, res: Response){
        res.json({text: 'deleting a game ' + req.params.Registro_Academico})
    }
}

const gamesController = new GamesController();
export default gamesController;