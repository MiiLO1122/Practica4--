//definir un enrutador
import { Router } from "express"


class IndexRoutes {

    //definir enrutador
    public router: Router = Router();

    constructor(){
        this.config();

    }

    // definir ruta
    config(): void{

        //ruta inicial
        this.router.get("/", (req, res) => res.send("hello"))
    }


}

const indexRoutes =  new IndexRoutes()

//exportamos la clase
export default indexRoutes.router;