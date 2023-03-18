import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainListComponent } from './train-list/train-list.component';
import { AddTrainComponent } from './add-train/add-train.component';
import { EditTrainComponent } from './edit-train/edit-train.component';
import { SeatComponent } from './seats/seat/seat.component';
import { AddSeatComponent } from './seats/seat/add-seat/add-seat.component';

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
        path: 'train-list',
        component: TrainListComponent
      },
      {
        path: 'add-train',
        component: AddTrainComponent
      },
      {
        path: 'edit-train',
        component: EditTrainComponent
      },
      {
        path: 'seat-list',
        component: SeatComponent
      },
      {
        path: 'add-seat',
        component: AddSeatComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

