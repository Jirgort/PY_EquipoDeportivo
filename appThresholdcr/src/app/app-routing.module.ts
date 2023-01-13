import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { CoachComponent } from './components/coach/coach.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/adminModules/admin-home/admin-home.component';
import { CoachManagementComponent } from './components/adminModules/admin-coach/coach-management-create/coach-management.component';
import { CoachSidenavOperationsComponent } from './components/adminModules/admin-coach/coach-sidenav-operations/coach-sidenav-operations.component';
import { CoachManagementReadComponent } from './components/adminModules/admin-coach/coach-management-read/coach-management-read.component';
import { AthleteSidenavOperationsComponent } from './components/adminModules/admin-athlete/athlete-sidenav-operations/athlete-sidenav-operations.component';
import { SportSidenavOperationsComponent } from './components/adminModules/admin-sport/sport-sidenav-operations/sport-sidenav-operations.component';
import { NewsSidenavOperationsComponent } from './components/adminModules/admin-news/news-sidenav-operations/news-sidenav-operations.component';
import { ClassesSidenavOperationsComponent } from './components/adminModules/admin-classes/classes-sidenav-operations/classes-sidenav-operations.component';
import { EventSidenavOperationsComponent } from './components/adminModules/admin-event/event-sidenav-operations/event-sidenav-operations.component';
import { MainContentComponent } from './components/main-content/main-content.component';

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
  {
    path: 'athleteSidenav',
    component: AthleteSidenavOperationsComponent,
  },
  {
    path: 'newsFeed',
    component: NewsSidenavOperationsComponent,
  },
  {
    path: 'trainers',
    component: CoachManagementReadComponent,
  },
  {
    path: 'sportSidenav',
    component: SportSidenavOperationsComponent,
  },
  {
    path: 'classesSidenav',
    component: ClassesSidenavOperationsComponent,
  },
  {
    path: 'eventsSidenav',
    component: EventSidenavOperationsComponent,
  },
  {
    path: 'mainContent',
    component: MainContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
