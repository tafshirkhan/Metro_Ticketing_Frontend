import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { TrainService } from 'src/app/services/train.service';
import { Seat } from 'src/app/core/models/metro/seat.model';
import { Train } from 'src/app/core/models/metro/train.model';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit{
  seatForm: FormGroup;
  public seat: Seat[] = [];
  allSeat: any;
  id: number;
  showUpdate !: boolean;
  trainItem: any;
  trainName: any = null;



  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService
  ) {
  }

  ngOnInit(): void {
    this.getAllSeat();
  }

  goToNextPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }

  getAllSeat(){
    this.trainService.getAllSeat().subscribe(res=>{
      this.allSeat = res;
    })
  }

  // seatDetails(name): void {
  //   let train = this.trainItem.find(
  //     (x) =>
  //       x.id === this.seatForm.get('trainId').value
  //   );
  //   this.trainName = train?.name ?? '';
  // }

  // getTrainName(trainName){
  //   return this.trainItem.filter(e => e['name'] == trainName)[0]['name'];
  // }
  
  deleteSeat(id:number){
    this.trainService.deleteSeat(id).subscribe(data=>{
      console.log(data);
      alert("Seat deleted successful");
      location.reload();
    }); 
  }

}
