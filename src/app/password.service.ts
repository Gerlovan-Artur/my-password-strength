import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  calculatePasswordStrength(password: string): string {
   if (!password || password.length === 0) {
      return 'empty';
    }

    if (password.length < 8) {
      return 'weak';
    }

    
    const hasLetters = /[a-zA-Zа-яА-ЯіІїЇёЁэЭъЪьЬ]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      return 'medium';
    } else {
      return 'easy';
    }
  }
  getPasswordStrengthClass(password: string): string {
    const strength = this.calculatePasswordStrength(password);

    
    switch (strength) {
      case 'easy':
        return 'easy'; 
      case 'weak':
        return 'weak'; 
      case 'medium':
        return 'medium'; 
      case 'strong':
        return 'strong'; 
      default:
        return 'empty'; 
    }
  }
}

