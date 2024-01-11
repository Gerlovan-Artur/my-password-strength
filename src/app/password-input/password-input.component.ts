import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  password: string = '';
  passwordStrength: string = ''; 

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private passwordService: PasswordService) {}

  writeValue(value: any): void {
    this.password = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  onPasswordChange(event: any): void {
    this.password = event.target.value;
    this.passwordStrength = this.passwordService.calculatePasswordStrength(this.password);  
    this.onChange(this.password);
    this.onTouched();
  }
}