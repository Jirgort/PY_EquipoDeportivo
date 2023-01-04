import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoachComponent } from './components/coach/coach.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';

import { AdminHomeComponent } from './components/adminModules/admin-home/admin-home.component';

import { CoachManagementComponent } from './components/adminModules/admin-coach/coach-management-create/coach-management.component';
import { CoachSidenavOperationsComponent } from './components/adminModules/admin-coach/coach-sidenav-operations/coach-sidenav-operations.component';
import { CoachManagementReadComponent } from './components/adminModules/admin-coach/coach-management-read/coach-management-read.component';
import { AthleteSidenavOperationsComponent } from './components/adminModules/admin-athlete/athlete-sidenav-operations/athlete-sidenav-operations.component';
import { AthleteManagmentCreateComponent } from './components/adminModules/admin-athlete/athlete-managment-create/athlete-managment-create.component';
import { AthleteManagmentReadComponent } from './components/adminModules/admin-athlete/athlete-managment-read/athlete-managment-read.component';
import { AthleteManagmentUpdateComponent } from './components/adminModules/admin-athlete/athlete-managment-update/athlete-managment-update.component';
import { AthleteManagmentDeleteComponent } from './components/adminModules/admin-athlete/athlete-managment-delete/athlete-managment-delete.component';
import { CoachReadComponent } from './components/adminModules/coach-read/coach-read.component';
import { CoachManagementDeleteComponent } from './components/adminModules/admin-coach/coach-management-delete/coach-management-delete.component';
import { CoachManagementEditComponent } from './components/adminModules/admin-coach/coach-management-edit/coach-management-edit.component';
import { SportManagementCreateComponent } from './components/adminModules/admin-sport/sport-management-create/sport-management-create.component';
import { SportManagementReadComponent } from './components/adminModules/admin-sport/sport-management-read/sport-management-read.component';
import { SportManagementUpdateComponent } from './components/adminModules/admin-sport/sport-management-update/sport-management-update.component';
import { SportManagementDeleteComponent } from './components/adminModules/admin-sport/sport-management-delete/sport-management-delete.component';
import { NewsManagementCreateComponent } from './components/adminModules/admin-news/news-management-create/news-management-create.component';
import { NewsManagementEditComponent } from './components/adminModules/admin-news/news-management-edit/news-management-edit.component';
import { NewsManagementReadComponent } from './components/adminModules/admin-news/news-management-read/news-management-read.component';
import { NewsManagementDeleteComponent } from './components/adminModules/admin-news/news-management-delete/news-management-delete.component';
import { NewsSidenavOperationsComponent } from './components/adminModules/admin-news/news-sidenav-operations/news-sidenav-operations.component';
import { SportSidenavOperationsComponent } from './components/adminModules/admin-sport/sport-sidenav-operations/sport-sidenav-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    CoachComponent,
    LoginComponent,
    AdminHomeComponent,
    CoachManagementComponent,
    CoachSidenavOperationsComponent,
    CoachManagementReadComponent,
    AthleteSidenavOperationsComponent,
    AthleteManagmentCreateComponent,
    AthleteManagmentReadComponent,
    AthleteManagmentUpdateComponent,
    AthleteManagmentDeleteComponent,
    CoachReadComponent,
    CoachManagementDeleteComponent,
    CoachManagementEditComponent,
    SportManagementCreateComponent,
    SportManagementReadComponent,
    SportManagementUpdateComponent,
    SportManagementDeleteComponent,
    NewsManagementCreateComponent,
    NewsManagementEditComponent,
    NewsManagementReadComponent,
    NewsManagementDeleteComponent,
    NewsSidenavOperationsComponent,
    SportSidenavOperationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
