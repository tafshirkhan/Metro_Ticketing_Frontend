import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
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
  }

  getPassengerFormGroup() {
    return this.formBuilder.group({
      passengerId: [''],
      passengerName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender:['',[Validators.required]]
    })
  }

}
