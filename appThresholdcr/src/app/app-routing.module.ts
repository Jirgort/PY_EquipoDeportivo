import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { CoachComponent } from './components/coach/coach.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/adminModules/admin-home/admin-home.component';
import { CoachManagementComponent } from './components/adminModules/coach-management/coach-management.component';
import { CoachSidenavOperationsComponent } from './components/coach-sidenav-operations/coach-sidenav-operations.component';

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
  {
    path: 'coachManagement',
    component: CoachManagementComponent,
  },
  {
    path: 'coachSidenav',
    component: CoachSidenavOperationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
