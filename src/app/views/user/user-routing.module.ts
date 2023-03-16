import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { TrainsComponent } from './trains/trains/trains.component';
import { RegisterComponent } from './register/register.component';

// const routes: Routes = [
//   {
//     path: '404',
//     component: Page404Component,
//     data: {
//       title: 'Page 404'
//     }
//   },
//   {
//     path: '500',
//     component: Page500Component,
//     data: {
//       title: 'Page 500'
//     }
//   },
//   {
//     path: 'trains',
//     component: TrainsComponent,
//     data: {
//       title: 'Train Page'
//     }
//   },
//   {
//     path: 'register',
//     component: RegisterComponent,
//     data: {
//       title: 'Register Page'
//     }
//   }
// ];

const routes: Routes = [
  {
    path: '',
    // data: {
    //   title: 'Base',
    // },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
      {
        path: 'trains',
        component: TrainsComponent
      },
       
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
