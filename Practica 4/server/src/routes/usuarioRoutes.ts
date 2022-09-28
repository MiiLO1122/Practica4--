//definir un enrutador
import { Router } from "express"
import usuarioController from '../controllers/usuarioController'


class usuarioRoutes {

    //definir enrutador
    public router: Router = Router();

    constructor(){
        this.config();

    }

    // definir ruta
    config(): void{

        //ruta para listar todos
        this.router.get("/", usuarioController.list)

        //ruta para listar unico
        this.router.get("/:Registro_Academico", usuarioController.unico)

        //ruta post crear
        this.router.post("/", usuarioController.create)

        //ruta put actualizar
        this.router.put("/:Registro_Academico", usuarioController.update)

    }


}

const usuarioR =  new usuarioRoutes()

//exportamos la clase
export default usuarioR.router;