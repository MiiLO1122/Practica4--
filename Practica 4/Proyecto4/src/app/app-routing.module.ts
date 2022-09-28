import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component'
import { LoginComponent } from './components/login/login.component'
import { CreateComponent } from './components/create/create.component'
import { ForoComponent } from './components/foro/foro.component'
import { ConocenosComponent } from './components/conocenos/conocenos.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: ListComponent
  },
  {
    path: 'inicio/login',
    component: LoginComponent
  },
  {
    path: 'inicio/create',
    component: CreateComponent
  },
  {
    path: 'inicio/foro',
    component: ForoComponent
  },
  {
    path: 'inicio/conocenos',
    component: ConocenosComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
