import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Train } from 'src/app/core/models/metro/train.model';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.scss']
})
export class TrainListComponent implements OnInit {

  trainForm: FormGroup;
  public train: Train[] = [];
  allTrain: any;
  id: number;
  showUpdate !: boolean;


  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService
  ) {
  }

  ngOnInit(): void {
    this.getAllTrain();
  }
  goToNextPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }

  getAllTrain(){
  this.trainService.getAllTrains().subscribe(res=>{
    this.allTrain = res;
  })
  }
  
  deleteTrain(id:number){
    this.trainService.deleteTrain(id).subscribe(data=>{
      console.log(data);
      alert("Train deleted successful");
      location.reload();
    }); 
  }

  findTrain(id: number) {
    this.trainService.findTrain(id).subscribe(data => {
      console.log(data);
    });
  }
}
