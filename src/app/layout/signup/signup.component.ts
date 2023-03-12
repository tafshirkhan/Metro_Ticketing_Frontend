import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  constructor(
    private Router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
