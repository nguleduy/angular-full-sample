import {Component, Inject, OnInit} from '@angular/core';
import {Menu} from './core/nav/menu';
import {AuthService} from './core/services/auth.service';
import {TranslateService} from 'ng2-translate';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes and Villains';
  menus: Menu[] = [
    new Menu('Heroes', '/heroes', 'fa-flash'),
    new Menu('Villains', '/villains', 'fa-user-secret ')
  ];
  languages = [{id: 'en', value: 'English'}, {id: 'es', value: 'Spanish'}];

  constructor(
    // @Inject('AuthService')
    // private authService: AuthService,
    // private translate: TranslateService,
    // private router: Router
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    console.log('test');
  }

  isActive(): boolean {
    // return this.authService.isUserLogged();
    return null;
  }

  getUser(): string {
    // return this.authService.getUserLogged();
    return null;
  }

  onLogout(): void {
    // this.authService.logout();
    // this.router.navigate(['/login']);
  }
}
