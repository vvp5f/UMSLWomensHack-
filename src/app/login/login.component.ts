import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../core/user.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private _userService: UserService
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this._userService.toggleLogin();
      this.router.navigate(['/user']);
    })
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
    .then(res => {
      this._userService.toggleLogin();
      this.router.navigate(['/user']);
    })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this._userService.toggleLogin();
      this.router.navigate(['/user']);
    })
  }

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      this._userService.toggleLogin();
      this.router.navigate(['/user']);
    }, err => {
      console.log(err);

      this.errorMessage = err.message;
    })
  }
}
