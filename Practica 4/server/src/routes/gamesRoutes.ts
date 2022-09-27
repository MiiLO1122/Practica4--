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

        //ruta inicial
        this.router.get("/", gamesController.index)
        this.router.post("/", gamesController.index)
    }


}

const gamesRoutes =  new GamesRoutes()

//exportamos la clase
export default gamesRoutes.router;