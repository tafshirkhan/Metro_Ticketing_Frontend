import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Train } from 'src/app/core/models/metro/train.model';
import { NotificationsService } from 'src/app/services/notifications.service';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit{
  trainForm: FormGroup;
  public train: Train[] = [];
  trainValue: any;
  allTrain: any;

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
    this.getAllTrain();
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
      date:['']
    })
  }

  searchAnyTrain() {
    this.trainService.searchTrain(
      this.trainForm.value.arrivalStation,
      this.trainForm.value.departureStation,
      this.trainForm.value.date
    )
      .subscribe(res => {
        console.log(res);
        this.trainValue = res;
        console.log(this.trainValue);
        if (res == null || Object.keys(res).length === 0) {
          alert("No train was found");
        }
        this.trainForm.reset();
      },
      error => {
          alert("No train was found");
      });
  }

  getTrainById(id: number) {
    this.trainService.getTrainbyId(id).subscribe((res) => {
      console.log(res);
      console.log(res.trainId);
      localStorage.setItem('trainId',JSON.stringify(res));
      this.router.navigateByUrl('/user/passenger');

    })
  }

   getAllTrain(){
    this.trainService.getAllTrains().subscribe(res=>{
      this.allTrain = res;
    })
  }


}
