import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
import awsmobile from '../aws-exports';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthService } from './auth/auth.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/store/reducers';
import { EffectsModule } from '@ngrx/effects';

/* Configure Amplify resources */
Amplify.configure(awsmobile);

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
  ],
  imports: [
    AmplifyAuthenticatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FooterModule,
    HeaderModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }