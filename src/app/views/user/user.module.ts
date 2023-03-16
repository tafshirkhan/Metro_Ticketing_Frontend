import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { TrainsComponent } from './trains/trains/trains.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';



@NgModule({
  declarations: [
    RegisterComponent,
    Page404Component,
    Page500Component,
    TrainsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule
  ]
})
export class UserModule {
}
