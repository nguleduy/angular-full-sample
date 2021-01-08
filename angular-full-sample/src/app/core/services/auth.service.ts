import {Observable} from 'rxjs';

export interface AuthService {

  /**
   * Determine if there is a user correctly logged in the app
   */
  isUserLogged(): boolean;

  /**
   * Returns the name of the user logged in the app
   */
  getUserLogged(): string;

  /**
   * Returns the token stored after login
   */
  getToken(): string;

  /**
   * Log-in into the app using user and password
   * @param username a valid user id
   * @param password a valid password
   */
  login(username: string, password: string): Observable<any>;

  /**
   * Logout from the app
   */
  logout(): void;
}
