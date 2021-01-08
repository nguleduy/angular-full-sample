import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {NavComponent} from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    AppRoutingModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent, SpinnerComponent],
  // providers: [
  //   LoggerService,
  //   {provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions]},
  //   {provide: ErrorHandler, useClass: HagueErrorHandler},
  // ]
})
export class CoreModule {

}
