"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//importacion de rutas
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class server {
    //para inicializar express
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //configurar el app
    config() {
        this.app.set("port", 3000);
        //para mostrar las peticiones en consola
        this.app.use((0, morgan_1.default)("dev"));
        //para pedir datos al servidor
        this.app.use((0, cors_1.default)());
        //para aceptar formatos json
        this.app.use(express_1.default.json());
        //para enviar desde un formulario html
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    ;
    //para definir rutas
    routes() {
        //this.app.use(la importacion con la ruta)
        this.app.use(indexRoutes_1.default);
        this.app.use("/api/games", gamesRoutes_1.default);
    }
    ;
    //para ejecutar el app.listen
    start() {
        //this.app.get() obtnener valor del puerto del this.app.set
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const servicio = new server();
//ejecuta el metodo start
servicio.start();
