import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Train } from 'src/app/core/models/metro/train.model';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-add-seat',
  templateUrl: './add-seat.component.html',
  styleUrls: ['./add-seat.component.scss']
})
export class AddSeatComponent implements OnInit {
  seatForm: FormGroup;
  public train: Train[] = [];
  allTrain: any;


  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService,
  ) { 
  }

  ngOnInit(): void {
    this.getAllTrain();
    this.seatForm = this.getSeatFormGroup();
  }
  getSeatFormGroup() {
    return this.formBuilder.group({
      seatId: [''],
      trainId: [null,[Validators.required]],
      total: ['',
        [
          Validators.required
        ]
      ],
    })
  }
   getAllTrain(){
    this.trainService.getAllTrains().subscribe(res=>{
      this.allTrain = res;
    })
   }
  
  onSubmit() {
    console.log(this.seatForm);
    if (this.seatForm.valid) {
      this.trainService.saveSeat(this.seatForm.value).subscribe(res => {
        console.log(res);
        alert("Seat added successful");
        this.seatForm.reset();
        this.router.navigate(['/base/seat-list']);
      })
    }
  }
}
