import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordStrengthMeterComponent } from './password-strength-meter/password-strength-meter.component';
import { PasswordService } from './password.service';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    PasswordStrengthMeterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }