import express, {Application} from "express";
import morgan from "morgan"
import cors from "cors"

//importacion de rutas
import indexRoutes from "./routes/indexRoutes";
import gamesRoutes from "./routes/gamesRoutes";


class server {

    public app: Application;

    //para inicializar express

    constructor(){
        this.app = express();
        this.config();
        this.routes();

    }


    //configurar el app
    config(): void {
        this.app.set("port", 3000)

        //para mostrar las peticiones en consola
        this.app.use(morgan("dev"))

        //para pedir datos al servidor
        this.app.use(cors())

        //para aceptar formatos json
        this.app.use(express.json())

        //para enviar desde un formulario html
        this.app.use(express.urlencoded({extended: false}))

    };


    //para definir rutas
    routes(): void {
        //this.app.use(la importacion con la ruta)
        this.app.use(indexRoutes);
        this.app.use("/api/games",gamesRoutes)

    };

    //para ejecutar el app.listen

    start(): void {
        //this.app.get() obtnener valor del puerto del this.app.set
        this.app.listen(this.app.get("port"), () =>{
            console.log("Server on port", this.app.get("port"))

        })

    }


}


const servicio = new server();

//ejecuta el metodo start
servicio.start()