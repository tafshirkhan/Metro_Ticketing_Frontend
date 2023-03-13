import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup;

  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
  }
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

  onSubmit() {
    console.log(this.signupForm);
    if (this.signupForm.valid) {
      this.authService.registerUser(this.signupForm.value).subscribe(res => {
        console.log(res);
        alert("Sign Up Successful");
        this.router.navigate(['login']);
      })
    }
  }

}
