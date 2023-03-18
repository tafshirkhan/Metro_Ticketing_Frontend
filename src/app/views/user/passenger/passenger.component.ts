import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { passenger } from 'src/app/core/models/metro/passenger.model';
import { Train } from 'src/app/core/models/metro/train.model';
import { NotificationsService } from 'src/app/services/notifications.service';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit{
  passengerForm: FormGroup;
  passenger: any = {};
  passengers: any;
  passenngerModel: passenger = new passenger();
  passengerValue: any;

  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService,
    private notifyService: NotificationsService
  ) {
    
  }

  ngOnInit(): void {
    this.passengerForm = this.getPassengerFormGroup();
    this.getListOfPassenger();
  }

  getPassengerFormGroup() {
    return this.formBuilder.group({
      passengerId: [''],
      userId:['5F43C871-FA7A-4724-AD8E-08DB23A86637'],
      passengerName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender:['',[Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.passengerForm);

    if (this.passengerForm.valid) {
      this.trainService.addPassenger(this.passengerForm.value).subscribe(res => {
          console.log(res);
          alert("Passenger details has been added");
          this.passengerForm.reset();
          location.reload();
          localStorage.setItem("passengers", JSON.stringify(res));
          console.log(localStorage);
          var jsonValue = localStorage.getItem("passengers") as string;
          console.log(jsonValue);
          var saveData = JSON.parse(jsonValue);
          console.log(saveData);
          console.log(saveData.passengerName);
       
          //this.router.navigateByUrl('/user/ticket-booking');
      })
    }

    // if (this.passengerForm.valid) {
    //   this.passenngerModel.passengerName = this.passengerForm.value.passengerName;
    //   this.passenngerModel.age = this.passengerForm.value.age;
    //   this.passenngerModel.gender = this.passengerForm.value.age;
    //   console.log(this.passenngerModel);
    //   this.trainService.addPassenger(this.passenngerModel).subscribe(res => {
    //     console.log(res);
    //     alert("Passenger details has been added");
    //     localStorage.setItem("passengers", JSON.stringify(res));
    //     console.log(localStorage);
    //     var jsonValue = localStorage.getItem("passengers") as string;
    //     console.log(jsonValue);
    //     var saveData = JSON.parse(jsonValue);
    //     console.log(saveData);
    //     console.log(saveData.passengerName);
    //     this.router.navigateByUrl('/user/ticket-booking');
    //   })
    // }
  }

  getListOfPassenger() {
    this.trainService.getAllPassenger().subscribe(res => {
      console.log(res);
      this.passengerValue = res;
    })
  }

}
