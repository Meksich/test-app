import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {
  errors: number = 0;

  constructor() { }

  validateName(name: string) {
    let nameRegex = /^[A-Z][a-z|\s]{0,50}$/;
    let messageText = "";
    if (!nameRegex.test(name)) {
      messageText = "*text format is invalid. Example: India, Bravo Mike.";
      this.errors++;
    }
    return messageText;
  }

  validatePhone(phone: string) {
    let phoneRegex = /^[0-9]{10}$/;
    let messageText = "";
    if (!phoneRegex.test(phone)) {
      messageText = "*phone format is invalid. Example: 0963611949.";
      this.errors++;
    }
    return messageText;
  }

  validateNumeric(numeric: string) {
    let messageText = "";
    if (numeric == "") {
      messageText = "*number should not be empty. Example: 1215.";
      this.errors++;
      return messageText;
    }
    if (numeric.charAt(0) == "0") {
      messageText = "*number should not start from 0. Example: 1215.";
      this.errors++;
      return messageText;
    }
    for (var i = 0; i < numeric.length; i++) {
      if (numeric.charAt(i) < "0" || numeric.charAt(i) > "9") {
        messageText = "*number should contaiin only digits. Example: 1215.";
        this.errors++;
        return messageText;
      }
    }
    return messageText;
  }

  validateDate(date: string) {
    let dateRegex = /^\d{4}[-]\d{2}[-]\d{2}$/;
    let messageText = "";
    if (!dateRegex.test(date)) {
      messageText = "*date format is invalid. Example: 2022-03-24.";
      this.errors++;
    }
    return messageText;
  }
}
