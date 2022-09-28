import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

import{ PrincipalService} from './services/principal.service'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PrincipalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
