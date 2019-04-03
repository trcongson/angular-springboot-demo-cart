import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private route: Router) { }

  onSubmit(){
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayLoad {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
  }
  ngOnInit() {
  }

}
