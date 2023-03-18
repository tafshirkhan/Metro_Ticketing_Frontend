import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrainService } from 'src/app/services/train.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
signupForm: FormGroup;

  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService,
    private notifyService: NotificationsService
  ) { }
  ngOnInit(): void {
    this.signupForm = this.getSignUpFormGroup();
  }

  getSignUpFormGroup() {
    return this.formBuilder.group({
      userId: [''],
      name: ['',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9 ]*'),
          Validators.minLength(4),
          Validators.maxLength(10),
        ]
      ],
      email: ['',
        [
          Validators.required
        ]
      ],
      address: ['',
        [
          Validators.required
        ]
      ],
      mobile: ['',
        [
          Validators.required,
          Validators.pattern('[0-9 ]*'),
          Validators.minLength(11),
          Validators.maxLength(11),
        ]
      ],
      password: ['',
        [
          Validators.required
        ]
      ],
      role: ['',
        [
          Validators.required
        ]
      ]
    })
  }

  goToLoginPage(pageName: string) {
    this.router.navigate([`${pageName}`])
  }
  
  onSubmit() {
    console.log(this.signupForm);
    if (this.signupForm.valid) {
      this.trainService.registerUser(this.signupForm.value).subscribe(res => {
        console.log(res);
        alert("Sign Up Successful");
        this.router.navigate(['login']);
      })
    }
  }

}
