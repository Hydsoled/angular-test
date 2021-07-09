import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode = false;

  constructor(private authService: AuthService) {
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm): void {
    if (!form.form.valid) {
      return;
    }
    let authObs: Observable<AuthResponseData>;
    const mail = form.form.value.email;
    const password = form.form.value.password;
    if (this.isLoginMode) {
      authObs = this.authService.login(mail, password);
    } else {
      authObs = this.authService.signup(mail, password);
    }
    authObs
      .subscribe((resData) => {
        console.log(resData);
      }, error => {
        console.log(error);
      });
  }
}
