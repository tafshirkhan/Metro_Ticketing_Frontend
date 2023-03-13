import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTrainComponent } from './layout/admin-dashboard/train/add-train/add-train.component';
import { EditTrainComponent } from './layout/admin-dashboard/train/edit-train/edit-train.component';
import { TrainListComponent } from './layout/admin-dashboard/train/train-list/train-list.component';
import { LoginComponent } from './layout/login/login.component';
import { SignupComponent } from './layout/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/Auth/auth.service';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { DashboardComponent } from './layout/admin-dashboard/dashboard.component';
import { HeaderComponent } from './layout/admin-dashboard/header/header.component';
import { SideNavComponent } from './layout/admin-dashboard/side-nav/side-nav.component';
import { MainComponent } from './layout/admin-dashboard/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    AddTrainComponent,
    EditTrainComponent,
    TrainListComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
