//definir un enrutador
import { Router } from "express"


class GamesRoutes {

    //definir enrutador
    public router: Router = Router();

    constructor(){
        this.config();

    }

    // definir ruta
    config(): void{

        //ruta inicial
        this.router.get("/", (req, res) => res.send("Games"))
    }


}

const gamesRoutes =  new GamesRoutes()

//exportamos la clase
export default gamesRoutes.router;