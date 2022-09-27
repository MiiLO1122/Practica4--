"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//definir un enrutador
const express_1 = require("express");
class GamesRoutes {
    constructor() {
        //definir enrutador
        this.router = (0, express_1.Router)();
        this.config();
    }
    // definir ruta
    config() {
        //ruta inicial
        this.router.get("/", (req, res) => res.send("Games"));
    }
}
const gamesRoutes = new GamesRoutes();
//exportamos la clase
exports.default = gamesRoutes.router;
