import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNavComponent } from './layout/admin-dashboard/navigation/side-nav/side-nav.component';
import { MainComponent } from './layout/admin-dashboard/navigation/main/main.component';
import { HeaderComponent } from './layout/admin-dashboard/navigation/header/header.component';
import { AddTrainComponent } from './layout/admin-dashboard/train/add-train/add-train.component';
import { EditTrainComponent } from './layout/admin-dashboard/train/edit-train/edit-train.component';
import { TrainListComponent } from './layout/admin-dashboard/train/train-list/train-list.component';
import { LoginComponent } from './layout/login/login.component';
import { SignupComponent } from './layout/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/Auth/auth.service';

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
    SignupComponent
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
