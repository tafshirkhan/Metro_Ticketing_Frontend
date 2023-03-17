import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainComponent } from './train/train.component';

const routes: Routes = [
    { 
        path: 'train',
        component: TrainComponent, 
    },
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
