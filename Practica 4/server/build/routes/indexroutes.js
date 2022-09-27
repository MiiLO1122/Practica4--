"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//definir un enrutador
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        //definir enrutador
        this.router = (0, express_1.Router)();
        this.config();
    }
    // definir ruta
    config() {
        //ruta inicial
        this.router.get("/", (req, res) => res.send("hello"));
    }
}
const indexRoutes = new IndexRoutes();
//exportamos la clase
exports.default = indexRoutes.router;
