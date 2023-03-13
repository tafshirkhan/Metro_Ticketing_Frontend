import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/admin-dashboard/dashboard.component';
import { TrainListComponent } from './layout/admin-dashboard/train/train-list/train-list.component';
import { LoginComponent } from './layout/login/login.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { SignupComponent } from './layout/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
      reuse: true,
    },
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Signup',
      reuse: true,
    }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path: 'admin-dashboard',
    component: DashboardComponent
  },
  {
    path: 'train-list',
    component: TrainListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
