import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import {CoachComponent} from './components/coach/coach.component'
import {LoginComponent} from './components/login/login.component'
const routes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'coach',
  component: CoachComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
