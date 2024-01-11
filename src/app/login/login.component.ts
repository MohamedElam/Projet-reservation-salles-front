import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  loginErrors = false;

  constructor(
              private fb: FormBuilder,
              private router: Router,
            ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control(""),
    });
  }

  handleLogin() {
    const email = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (!email || !password) {
      this.loginErrors = true;
      return;
    }


    this.loginForm.reset();
  }
}
