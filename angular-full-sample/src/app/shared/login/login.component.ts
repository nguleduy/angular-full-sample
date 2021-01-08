import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  f: FormGroup;
  authError: string;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('AuthService') private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    // reset login status
    this.authService.logout();

    this.f = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isInvalid(control): boolean {
    return control && control.touched && !control.valid;
  }

  errorClass(control): any {
    const condition = this.isInvalid(control);
    return {
      'has-error': condition,
      'has-feedback': condition
    };
  }

  login(): void {
    if (this.f.dirty && this.f.valid) {
      this.loading = true;
      const username = this.f.value.username;
      const password = this.f.value.password;

      this.authService.login(username, password)
        .subscribe(userData => {
          this.loading = false;

          // navigate to returnUrl just if login successfully
          if (userData.access_token) {
            this.router.navigate([this.route.snapshot.queryParams.returnUrl || '/']);
          } else {
            this.showAuthError('Token not sent from service during authentication.');
          }
        }, error => {
          this.showAuthError('The user is not authorized');
          this.loading = false;
        });
    }
  }

  showAuthError(message): void {
    const that = this;
    this.authError = message;
    setTimeout(() => {
      that.authError = null;
    }, 1000);
  }

}
