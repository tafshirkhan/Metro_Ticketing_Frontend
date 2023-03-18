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
  userId:any;
  trainId: any;
  passengerId: any;
  bookingValue: any;
  singleBookingValue: any;
  singleBook: any;


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
    this.getListOfBooking();
  }

  getTicketBookingForm() {
    return this.formBuilder.group({
      bookingId: [''],
      //passengerId: ['00000000-0000-0000-0000-000000000000'],
      //userId:['5F43C871-FA7A-4724-AD8E-08DB23A86637'],
      fare: ['', [Validators.required]],
      seatNum: ['', [Validators.required]],
      date: ['', [Validators.required]],
      status:['PENDING'],
      isActive: true
    })
  }


  getPassengerById(id: number) {
    this.trainService.getPassengerById(id).subscribe((res) => {
      console.log(res);
      console.log(res.passengerId);
      localStorage.setItem('trains',JSON.stringify(res));
      this.router.navigateByUrl('/user/passenger');

    })
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      //let user = localStorage.getItem("userId");
      //this.userID = JSON.parse(user);
      let train = localStorage.getItem("trains");
      this.trainId = JSON.parse(train);
      let passenger = localStorage.getItem("singlePass");
      this.passengerId = JSON.parse(passenger);
      let user = localStorage.getItem("singlePass");
      this.userId = JSON.parse(user);

      this.bookingModel.userId = this.userId.userId;
      this.bookingModel.passengerId = this.passengerId.passengerId;
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
          this.ticketForm.reset();
          location.reload();
          localStorage.setItem("bookings", JSON.stringify(res));
          var json = localStorage.getItem("bookings") as string;

          var saveData = JSON.parse(json);
          this.router.navigateByUrl('/user/ticket-information');
        });
    }
  }

  getListOfBooking() {
    this.trainService.getAllBooking().subscribe(res => {
      console.log(res);
      this.bookingValue = res;
    });
  }

  getBookingById(id: number) {
    this.trainService.getBookingById(id).subscribe((res) => {
      console.log(res);
      console.log(res.bookingId);
      this.singleBookingValue = res;
      console.log(this.singleBookingValue);
      localStorage.setItem('singleBook', JSON.stringify(res));
      this.router.navigateByUrl('/user/ticket-information');
    });
  }

}
