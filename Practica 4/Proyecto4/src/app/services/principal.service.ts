import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Usuario } from '../models/usuario'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  //Guardar la direccion de nuestra Api
  API_URI = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  //Todos los usuarios
  getUsuarios(){
    return this.http.get('${this.API_URI}/usuarios');
  }

  //Unico Usuario
  getUsuario(){
    return this.http.get('${this.API_URI}/usuarios/${Registro_Academico}');
  }

  //Guardar un usuario
  saveUser(usuario: Usuario){
    return this.http.post('${this.API_URI}/usuarios', usuario);
  }

  //Actualizar un usuario
  updateUser(Registro_Academico: any, updateUser:Usuario){
    return this.http.put('${this.API_URI}/usuarios/${Registro_Academico}', updateUser);
  }
}