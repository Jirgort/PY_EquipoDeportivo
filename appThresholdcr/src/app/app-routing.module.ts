import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { CoachComponent } from './components/coach/coach.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/adminModules/admin-home/admin-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'coach',
    component: CoachComponent,
  },
  {
    path: 'adminHome',
    component: AdminHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
