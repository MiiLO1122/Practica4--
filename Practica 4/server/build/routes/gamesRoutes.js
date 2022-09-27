"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//definir un enrutador
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        //definir enrutador
        this.router = (0, express_1.Router)();
        this.config();
    }
    // definir ruta
    config() {
        //ruta para listar todos
        this.router.get("/", gamesController_1.default.list);
        //ruta para listar unico
        this.router.get("/:Registro_Academico", gamesController_1.default.unico);
        //ruta post crear
        this.router.post("/", gamesController_1.default.create);
        //ruta put actualizar
        this.router.put("/:Registro_Academico", gamesController_1.default.update);
        //ruta delete eliminar
        this.router.delete("/:Registro_Academico", gamesController_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
//exportamos la clase
exports.default = gamesRoutes.router;
