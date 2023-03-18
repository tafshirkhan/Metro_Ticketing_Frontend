import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Booking } from 'src/app/core/models/metro/booking.model';
import { Train } from 'src/app/core/models/metro/train.model';
import { NotificationsService } from 'src/app/services/notifications.service';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss']
})
export class TicketInfoComponent implements OnInit {
  public train: Train[] = [];
  public booking: Booking[] = [];
  trainValue: any;
  passengerValue: any;
  trainFare: any;


  passengerId: any;
  passIdStatic: any;
  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService,
    private notifyService: NotificationsService
  ) {
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    var trainData = localStorage.getItem('trains');
    this.trainValue = JSON.parse(trainData);
    var passengerData = localStorage.getItem('passengers');
    this.passengerValue = JSON.parse(passengerData);
    var fareData = localStorage.getItem('singleBook');
    this.trainFare = JSON.parse(fareData);

    //this.passengerId = '858E4E49-1C44-485F-4A25-08DB2709C36A';
    //this.passIdStatic = JSON.parse();
    //this.passengerId = this.passengerValue.passengerId;

    // this.trainService.calculatedTrainFare(
    //   this.trainValue.trainId,
    //   //this.passengerValue.passengerId,
    //   this.passengerValue.passengerId,
    //   this.passengerValue.userId
    // ).subscribe((res) => {
    //   this.trainFare = res;
    //   console.log(res);
    //   localStorage.setItem('trainFare', JSON.stringify(res));
    // });
  }

  goForPayment() {
    this.router.navigateByUrl('/user/payment-transaction');
  }

}
