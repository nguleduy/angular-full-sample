import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule, TranslateService} from 'ng2-translate';
import {Http} from '@angular/http';
import {TranslateLoaderFactory} from './core/utils/app.translate.factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: TranslateLoaderFactory,
      deps: [Http]
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
