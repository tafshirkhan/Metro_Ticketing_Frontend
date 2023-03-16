import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Train } from 'src/app/core/models/metro/train.model';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-edit-train',
  templateUrl: './edit-train.component.html',
  styleUrls: ['./edit-train.component.scss']
})
export class EditTrainComponent implements OnInit {

  trainForm: FormGroup;
  public trains: Train[] = [];
  train: Train;
  allTrain: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService,
  ) {
    
  }
  ngOnInit(): void {
    // this.id = this.route.snapshot.params['trainId'];
    // this.trainService.findTrain(this.id).subscribe((data: Train) => {
    //   this.train = data;
    //   this.trainForm = this.getTrainFormGroup();
    // })
    this.trainForm = this.getTrainFormGroup();
    
  }

  getTrainFormGroup() {
    return this.formBuilder.group({
      trainId: [''],
      name: ['',
        [
          Validators.required
        ]
      ],
      arrivalTime: ['',
        [
          Validators.required
        ]
      ],
      departureTime: ['',
        [
          Validators.required
        ]
      ],
      arrivalDate: ['',
        [
          Validators.required
        ]
      ],
      departureDate: ['',
        [
          Validators.required
        ]
      ],
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
      distance: ['',
        [
          Validators.required
        ]
      ],
      isActive: true
    })
  }

  editTrain(item:any){
    this.trainForm.controls['trainId'].setValue(item.trainId)
    this.trainForm.controls['name'].setValue(item.name);
    this.trainForm.controls['arrivalTime'].setValue(item.arrivalTime);
    this.trainForm.controls['departureTime'].setValue(item.departureTime);
    this.trainForm.controls['arrivalDate'].setValue(item.arrivalDate);
    this.trainForm.controls['departureDate'].setValue(item.departureDate);
    this.trainForm.controls['arrivalStation'].setValue(item.arrivalStation);
    this.trainForm.controls['departureStation'].setValue(item.departureStation);
    this.trainForm.controls['distance'].setValue(item.distance);
  }

  updateTrain(){
  this.allTrain.trainId=this.trainForm.value.trainId;
  this.allTrain.name=this.trainForm.value.name;
  this.allTrain.arrivalDate=this.trainForm.value.arrivalDate;
  this.allTrain.departureDate=this.trainForm.value.departureDate;
  this.allTrain.departureTime=this.trainForm.value.departureTime;
  this.allTrain.arrivalTime=this.trainForm.value.arrivalTime;
  this.allTrain.arrivalStation=this.trainForm.value.arrivalStation;
  this.allTrain.departureStation=this.trainForm.value.departureStation;
  this.allTrain.distance=this.trainForm.value.distance;
  
    this.trainService.updateTrain(this.allTrain)
      .subscribe(res => {
          console.log(res);
          alert("Train added successful");
          this.trainForm.reset();
          this.router.navigate(['/base/train-list']);
        })
 }
  
  onSubmit() {
    console.log(this.trainForm);
    if (this.trainForm.valid) {
      this.trainService.updateTrain(this.trainForm.value).subscribe(res => {
        console.log(res);
        alert("Train updated successful");
        this.trainForm.reset();
        this.router.navigate(['/base/train-list']);
      })
    }
  }
  edit(id: string | undefined): void {
    if (typeof id == undefined || id == '' || id == null) return;
    this.trainService
        .findTrain(this.id)
      .subscribe((res: Train) => {
        this.trainForm.patchValue(res);
      });
  }

}
