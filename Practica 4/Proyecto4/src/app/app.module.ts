import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListComponent } from './components/list/list.component';
import{ PrincipalService} from './services/principal.service';
import { LoginComponent } from './components/login/login.component';
import { ForoComponent } from './components/foro/foro.component';
import { CreateComponent } from './components/create/create.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { OlcontraComponent } from './components/olcontra/olcontra.component'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListComponent,
    LoginComponent,
    ForoComponent,
    CreateComponent,
    ConocenosComponent,
    OlcontraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PrincipalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
