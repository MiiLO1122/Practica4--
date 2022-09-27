"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//definir un enrutador
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        //definir enrutador
        this.router = (0, express_1.Router)();
        this.config();
    }
    // definir ruta
    config() {
        //ruta inicial
        this.router.get("/", indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
//exportamos la clase
exports.default = indexRoutes.router;
