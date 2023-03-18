import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from './passenger/passenger.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { TicketInfoComponent } from './ticket-info/ticket-info.component';
import { TicketComponent } from './ticket/ticket.component';
import { TrainComponent } from './train/train.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
    { 
        path: 'train',
        component: TrainComponent, 
    },
    {
        path: 'passenger',
        component: PassengerComponent
    },
    {
        path: 'ticket-booking',
        component: TicketBookingComponent
    },
    {
        path: 'ticket-information',
        component: TicketInfoComponent
    },
    {
        path: 'payment-transaction',
        component: TransactionComponent
    },
    {
        path: 'get-ticket',
        component: TicketComponent
    }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
