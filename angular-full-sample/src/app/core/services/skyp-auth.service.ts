import {Injectable} from '@angular/core';
import {BaseAuthService} from './base-auth.service';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkypAuthService extends BaseAuthService implements AuthService {

  constructor() {
    super(null, null);
  }

  isUserLogged(): boolean {
    return true;
  }

  getUserLogged(): string {
    return null;
  }

  getToken(): string {
    return null;
  }

  login(username: string, password: string): Observable<any> {
    // DO nothing
    return null;
  }

  logout(): void {
    // DO nothing
  }

}
