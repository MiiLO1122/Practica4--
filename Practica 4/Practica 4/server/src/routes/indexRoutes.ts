//definir un enrutador
import { Router } from "express"

import {indexController} from '../controllers/indexController'
class IndexRoutes {

    //definir enrutador
    public router: Router = Router();

    constructor(){
        this.config();

    }

    // definir ruta
    config(): void{

        //ruta inicial
        this.router.get("/",indexController.index)
    }


}

const indexRoutes =  new IndexRoutes()

//exportamos la clase
export default indexRoutes.router;