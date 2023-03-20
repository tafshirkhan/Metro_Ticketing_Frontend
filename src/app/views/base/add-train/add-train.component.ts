import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications.service';
import { TrainService } from 'src/app/services/train.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.scss']
})
export class AddTrainComponent implements OnInit {

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

  onSubmit() {
    console.log(this.trainForm);
    if (this.trainForm.valid) {
      this.trainService.saveTrain(this.trainForm.value).subscribe(res => {
        console.log(res);
        alert("Train added successful");
        //this.notifyService.showSuccess("New train added successfully")
        this.trainForm.reset();
        this.router.navigate(['/base/seat-list']);
      })
    }
  }
}
