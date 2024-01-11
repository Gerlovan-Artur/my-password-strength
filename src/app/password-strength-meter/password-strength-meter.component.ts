import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css'],
})
export class PasswordStrengthMeterComponent implements OnChanges {
  @Input() password: string = '';
  passwordStrength: string = '';
 

  constructor(private passwordService: PasswordService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['password']) {
      this.updatePasswordStrengthClass();
    }
  }

  private updatePasswordStrengthClass() {
    
    this.passwordStrength = this.passwordService.getPasswordStrengthClass(this.password);
  }
}

