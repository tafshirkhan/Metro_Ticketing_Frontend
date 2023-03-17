import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from './passenger/passenger.component';
import { TrainComponent } from './train/train.component';

const routes: Routes = [
    { 
        path: 'train',
        component: TrainComponent, 
    },
    {
        path: 'passenger',
        component: PassengerComponent
    },
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
