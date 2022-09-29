import { Request, Response } from "express";

import pool from "../database";

class usuarioController{

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
        const usuario = await pool.query('INSERT INTO usuario set ?', [req.body]);
        console.log(usuario)        
        res.json({message: 'Usuario saved'})
    }

    //Actualizar usuario
    public async update(req: Request, res: Response): Promise<void>{
        const { Registro_Academico } = req.params;
        await pool.query('UPDATE usuario set ? WHERE Registro_Academico = ?', [req.body, Registro_Academico])
        res.json({message: 'El usuario ha sido actualizado'})
    }

    //Metodo Login
    public async login(req: Request, res: Response){
        const registro = req.body.Registro_Academico;
        const pass = req.body.password;
        
        //if (registro && pass) {
          //  pool.query('SELECT * FROM usuario WHERE Registro_Academico = ?', [registro], function(err, usuario, fields){
            //    if (err) throw err;
              //  if (usuario.length>0 && usuario[0].password==pass){
                //    res.json({text: 'Credenciales correctas', Registro_Academico: usuario[0].Registro_Academico, nombres: usuario[0].nombres, apellidos: usuario[0].apellidos, password: usuario[0].password, correo: usuario[0].correo});
                  //  console.log('Ok')
                //}
                //else{
                  //  res.json({text: 'Credenciales incorrectas'});
                    //console.log('Not valid')
                //};

            //});
        //}
        //else{res.json({text:'No hay datos'})};
    } 
    
}

const usuarioC = new usuarioController();
export default usuarioC;