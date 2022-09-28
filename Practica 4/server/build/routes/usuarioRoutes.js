"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//definir un enrutador
const express_1 = require("express");
const usuarioController_1 = __importDefault(require("../controllers/usuarioController"));
class usuarioRoutes {
    constructor() {
        //definir enrutador
        this.router = (0, express_1.Router)();
        this.config();
    }
    // definir ruta
    config() {
        //ruta para listar todos
        this.router.get("/", usuarioController_1.default.list);
        //ruta para listar unico
        this.router.get("/:Registro_Academico", usuarioController_1.default.unico);
        //ruta post crear
        this.router.post("/", usuarioController_1.default.create);
        //ruta put actualizar
        this.router.put("/:Registro_Academico", usuarioController_1.default.update);
    }
}
const usuarioR = new usuarioRoutes();
//exportamos la clase
exports.default = usuarioR.router;
