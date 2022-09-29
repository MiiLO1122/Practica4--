import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent} from "@angular/router"
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PrincipalService } from 'src/app/services/principal.service'; 
import{ LoginI } from 'src/app/models/LoginI'
import { ResponseI } from 'src/app/models/ResponseI'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Registro_Academico: string = "";
  password: string = "";


  usuariologear: any= {
    Registro_Academico: "",
    password : ""
  }


  constructor(private api:PrincipalService, private router: Router) { }
  errorStatus: boolean = false;
  errorMsj: any = "";


  ngOnInit(): void {
  }

  logear():void{
    this.Registro_Academico=((document.getElementById('Registro_Academico') as HTMLInputElement).value);
    this.password=((document.getElementById('password') as HTMLInputElement).value);
    this.usuariologear={
      Registro_Academico: this.Registro_Academico,
      password: this.password
    }
  

  this.api.login(this.usuariologear).subscribe(data => {
    if(data.text == 'Credenciales correctas'){
      console.log("Todo bien");

      this.router.navigate(['usuario', this.Registro_Academico])
      console.log(data.text);
    }else{
      console.log("El usuario no se logeo")
      console.log(data.text);
    }
    console.log(data);
  })
}

}
