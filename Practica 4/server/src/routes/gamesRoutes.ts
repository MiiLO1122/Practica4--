//definir un enrutador
import { Router } from "express"
import gamesController from '../controllers/gamesController'


class GamesRoutes {

    //definir enrutador
    public router: Router = Router();

    constructor(){
        this.config();

    }

    // definir ruta
    config(): void{

        //ruta para listar todos
        this.router.get("/", gamesController.list)

        //ruta para listar unico
        this.router.get("/:Registro_Academico", gamesController.unico)

        //ruta post crear
        this.router.post("/", gamesController.create)

        //ruta put actualizar
        this.router.put("/:Registro_Academico", gamesController.update)

        //ruta delete eliminar
        this.router.delete("/:Registro_Academico", gamesController.delete)

    }


}

const gamesRoutes =  new GamesRoutes()

//exportamos la clase
export default gamesRoutes.router;