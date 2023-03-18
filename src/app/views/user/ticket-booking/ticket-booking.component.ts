import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { booking, Booking } from 'src/app/core/models/metro/booking.model';
import { Train } from 'src/app/core/models/metro/train.model';
import { NotificationsService } from 'src/app/services/notifications.service';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.scss']
})
export class TicketBookingComponent implements OnInit {

  ticketForm: FormGroup;
  userID!:any;
  trainId: any;

  bookingModel: booking = new booking();
  bookings: any;
  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService,
    private notifyService: NotificationsService
  ) {
  }

  ngOnInit(): void {
    this.ticketForm = this.getTicketBookingForm();
  }

  getTicketBookingForm() {
    return this.formBuilder.group({
      bookingId: [''],
      passengerId: ['00000000-0000-0000-0000-000000000000'],
      userId:['5F43C871-FA7A-4724-AD8E-08DB23A86637'],
      fare: ['', [Validators.required]],
      seatNum: ['', [Validators.required]],
      date: ['', [Validators.required]],
      status:['PENDING'],
      isActive: true
    })
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      let user = localStorage.getItem("userId");
      this.userID = JSON.parse(user);
      let train = localStorage.getItem("trains");
      this.trainId = JSON.parse(train);

      this.bookingModel.userId = this.userID;
      this.bookingModel.trainId = this.trainId.trainId;
      this.bookingModel.seatNum = this.ticketForm.value.seatNum;
      this.bookingModel.fare = this.ticketForm.value.fare;
      this.bookingModel.date = this.ticketForm.value.date;
      this.bookingModel.status = this.ticketForm.value.status;
      this.bookingModel.isActive = this.ticketForm.value.isActive;
      console.log(this.bookingModel);

      this.trainService
        .addBooking(this.bookingModel)
        .subscribe((res) => {
          console.log(res);
          alert("Ticket booking successful, please make payment for confirmation");
          localStorage.setItem("bookings", JSON.stringify(res));
          var json = localStorage.getItem("bookings") as string;

          var saveData = JSON.parse(json);
          this.router.navigateByUrl('/user/ticket-information');
        });
    }
  }

}
