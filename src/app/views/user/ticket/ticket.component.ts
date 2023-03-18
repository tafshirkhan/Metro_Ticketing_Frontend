import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import jsPDF from 'jspdf';
import { Transaction } from 'src/app/core/models/metro/transaction.model';
import { NotificationsService } from 'src/app/services/notifications.service';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit{
  @ViewChild("ticket",{static:false}) el!: ElementRef;
  ticketForm: FormGroup;

  trainData: any;
  passengerData: any;
  bookingData: any;

  
  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService,
    private notifyService: NotificationsService
  ) { 
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    var shareTrain = localStorage.getItem('trains');
    this.trainData = JSON.parse(shareTrain);

    var sharePassenger = localStorage.getItem('singlePass')
    this.passengerData = JSON.parse(sharePassenger);

    var shareBooking = localStorage.getItem('singleBook');
    this.bookingData = JSON.parse(shareBooking);
  }

  ticketDownload() {
    this.trainService
      .addTicket(this.passengerData.passengerId,
        this.bookingData.bookingId,
        this.trainData.trainId)
      .subscribe((res) => {
        console.log(res);
      });
    let pdf = new jsPDF('p','pt','a4');
    pdf.text("Ticket", 19, 19);
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
         pdf.save("ticket.pdf");
      }
    })
   
  
  }

}
