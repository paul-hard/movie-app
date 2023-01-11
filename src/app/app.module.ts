import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginPageComponent } from './modules/auth/login-page.component';
import { CabinetComponent } from './modules/cabinet/cabinet.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { searchForMoviesReducer } from './modules/store/main-page/main.reducers';
import { IAppState } from './modules/store/app.state';
import { MultiSearchEffect } from './modules/store/main-page/main.effects'
import { AuthInterceptor } from './modules/shared/auth/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginPageComponent,
    CabinetComponent,
    StoreModule.forRoot<IAppState>({
      movieApiSearch: searchForMoviesReducer
    }),
    EffectsModule.forRoot([MultiSearchEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production,
      autoPause: true,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),

  ],
  exports: [
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
