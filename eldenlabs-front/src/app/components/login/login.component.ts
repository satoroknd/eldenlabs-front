import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   implements OnInit {

  loginForm: FormGroup;
  loading: boolean = false;
  constructor( private fb: FormBuilder, private _snackBar: MatSnackBar, private _router: Router) {
    this.loginForm = fb.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    singIn(){
      console.log(this.loginForm);
      const user = this.loginForm.value.user;
      const password = this.loginForm.value.password;
      if(user == 'sa' && password == 'sa'){
        this.fakeLogin();
      } else {
        this.errorLogin();
        this.loginForm.reset();
      }
    }

    errorLogin(){
      this._snackBar.open('Login failed', 'Dismiss');
    }

    fakeLogin(){
      this.loading = true;
      setTimeout(()=>{
        this._router.navigate(['dashboard']);
      },1500);
    }
    ngOnInit() {
    }
}
