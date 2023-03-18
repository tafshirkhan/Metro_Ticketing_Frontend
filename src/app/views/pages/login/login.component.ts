import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrainService } from 'src/app/services/train.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
  isUserValid: boolean = false;
  
  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private trainService: TrainService,
    private notifyService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.getLoginFormGroup();
  }

  getLoginFormGroup() {
    return this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15)
        ]
      ],
    })
  }

  goToSignupPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }

  onSubmit() {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.trainService.loginUser(this.loginForm.value).subscribe(res => {
        console.log(res);
        if (res == "Login Failed") {
          this.isUserValid = false;
          alert("Something is wrong");
        }
        else {
          this.isUserValid = true;
          this.trainService.setToken(res);
          //this.router.navigate(['admin-dashboard']);
          this.router.navigateByUrl('/user/train');
        }
        
      });
    }
  }



}
