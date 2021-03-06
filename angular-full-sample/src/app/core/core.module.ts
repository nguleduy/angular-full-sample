import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {NavComponent} from './nav/nav.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SkypAuthService} from './services/skyp-auth.service';

@NgModule({
  imports: [
    AppRoutingModule
  ],
  exports: [NavComponent, SpinnerComponent, HeaderComponent, FooterComponent],
  declarations: [NavComponent, SpinnerComponent, HeaderComponent, FooterComponent],
  providers: [
  //   LoggerService,
  //   {provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions]},
  //   {provide: ErrorHandler, useClass: HagueErrorHandler},
    { provide: 'AuthService', useClass: SkypAuthService }
  ]
})
export class CoreModule {

}
