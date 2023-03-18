import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Transaction } from 'src/app/core/models/metro/transaction.model';
import { NotificationsService } from 'src/app/services/notifications.service';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit{
  transactionForm: FormGroup;
  tModel: Transaction = new Transaction();
  paymentHandler: any = null;
  passengerId: any;
  bID: any;
  bFare: any;
  passId: any;
  fare: any;

  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService,
    private notifyService: NotificationsService
  ) { 
  }

  ngOnInit(): void {
    this.transactionForm = this.getTransactionFormGroup();
    var fareData = localStorage.getItem('singleBook');
    this.fare = JSON.parse(fareData);
  }

  getTransactionFormGroup() {
    return this.formBuilder.group({
      transactionId: [''],
      number: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      transactionStatus:['Successful']
    })
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      let booking = localStorage.getItem("singleBook");
      this.bID = JSON.parse(booking);
      this.bFare = JSON.parse(booking);

      this.tModel.bookingId = this.bID.bookingId;
      this.tModel.fare = this.bFare.fare;
      this.tModel.transactionStatus = this.transactionForm.value.transactionStatus;
      console.log(this.tModel);

      this.trainService
          .addTransaction(this.tModel)
          .subscribe((res)=>{
            this.trainService.confirmBooking(res.bookingId)
              .subscribe((result) => {
                console.log(result);
                alert("Booking Confirmed");
               });
               console.log(res);
               alert("Payment Successful");  
          });
          this.router.navigateByUrl('/user/get-ticket');
    }
  }

  // payAmount() {
  //   var passengerData = localStorage.getItem('passengers');
  //   this.passengerId = JSON.parse(passengerData);
  //   this.passId = this.passengerId.passengerId;
  //   //console.log(this.passId);

  //   this.trainService
  //     .getBookingPassengerId(this.passId)
  //     .subscribe((res) => {
  //       this.trainService
  //         .confirmBooking(res)
  //         .subscribe((result) => {
  //           console.log(result);
  //           alert("Ticket confirmed")
  //         });
  //       console.log(res);
  //       localStorage.setItem('bookingId', JSON.stringify(res));
  //       alert("Payment successful");
  //     });
    
  //   //this.router.navigateByUrl('/user/get-ticket');

  // }

  //  makePayment(amount: any) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: 'pk_test_51LaFFoD1QbGk12MCEQXiO6U60PnZKz6Fv1V2zQV3DEDPrHoqi0eK4X15oycz0vad2vdXuRtMok2H2pEvHdpa8zxI00oam25HVE',
  //     locale: 'auto',
  //     token: function (stripeToken: any) {
  //       console.log(stripeToken);
  //       alert('Stripe token generated!');
  //     },
  //   });
  //   paymentHandler.open({
  //     name: 'Positronx',
  //     description: '3 widgets',
  //     amount: amount * 100,
  //   });
  // }
  // invokeStripe() {
  //   if (!window.document.getElementById('stripe-script')) {
  //     const script = window.document.createElement('script');
  //     script.id = 'stripe-script';
  //     script.type = 'text/javascript';
  //     script.src = 'https://checkout.stripe.com/checkout.js';
  //     script.onload = () => {
  //       this.paymentHandler = (<any>window).StripeCheckout.configure({
  //         key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
  //         locale: 'auto',
  //         token: function (stripeToken: any) {
  //           console.log(stripeToken);
  //           alert('Payment has been successfull!');
  //         },
  //       });
  //     };
  //     window.document.body.appendChild(script);
  //   }
  // }

}
