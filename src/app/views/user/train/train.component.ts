import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications.service';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit{
  trainForm: FormGroup;

  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService,
    private notifyService: NotificationsService
  ) {
    
  }
  ngOnInit(): void {
    this.trainForm = this.getTrainFormGroup();
  }

  getTrainFormGroup() {
    return this.formBuilder.group({
      arrivalStation: ['',
        [
          Validators.required
        ]
      ],
      departureStation: ['',
        [
          Validators.required
        ]
      ],
      journeyDate:['']
    })
  }

}
