"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    //Listar usuarios
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.default.query('SELECT * FROM usuario');
            res.json({ usuario });
        });
    }
    //Listar un unico usuario
    unico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Registro_Academico } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM usuario WHERE Registro_Academico = ?', [Registro_Academico]);
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            res.status(404).json({ text: 'El Usuario no existe' });
        });
    }
    //Crear usuario
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            res.json({ message: 'Usuario saved' });
        });
    }
    //Actualizar usuario
    update(req, res) {
        res.json({ text: 'updating a game ' + req.params.Registro_Academico });
    }
    //Eliminar usuario
    delete(req, res) {
        res.json({ text: 'deleting a game ' + req.params.Registro_Academico });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
