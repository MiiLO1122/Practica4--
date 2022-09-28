import { Request, Response } from "express";

import pool from "../database";

class GamesController{

    //pool.query('DESCRIBE usuario'); esta acción solo verifica que existe la conexión a la base de datos

    //Listar usuarios
    public async list(req: Request, res: Response){
        const usuario = await pool.query('SELECT * FROM usuario');
        res.json({usuario});
    }

    //Listar un unico usuario
    public async unico(req: Request, res: Response): Promise<any> {
        const { Registro_Academico } = req.params;
        const usuario = await pool.query('SELECT * FROM usuario WHERE Registro_Academico = ?', [Registro_Academico])

        //Busca el usuario con el mismo Registro_Academico
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
    public async update(req: Request, res: Response): Promise<void>{
        const { Registro_Academico } = req.params;
        await pool.query('UPDATE usuario set ? WHERE Registro_Academico = ?', [req.body, Registro_Academico])
        res.json({message: 'El usuario ha sido actualizado'})
    }

    
    public index (req: Request, res: Response) {
        pool.query("DESCRIBE games")
        res.json({"text": "Hello"})
    }
}

const gamesController = new GamesController();
export default gamesController;