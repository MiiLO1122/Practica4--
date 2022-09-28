"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataBase_1 = __importDefault(require("../dataBase"));
class GamesController {
    index(req, res) {
        dataBase_1.default.query("DESCRIBE games");
        res.json({ "text": "Hello" });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
