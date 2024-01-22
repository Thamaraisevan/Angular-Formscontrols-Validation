import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AngularFormcontrolsValidationService {

  constructor() { }

    /** this function for validation name fields*/
 nameFieldCheck(): ValidatorFn {

  var pattern = /^[A-Za-z' \-.]+$/;
  // var pattern =/^[a-zA-Z ]+(?:\s+[a-zA-Z ]+)*.$/;

  return (control: AbstractControl): { [key: string]: boolean } | null => {

      const inputValue = control.value || '';

      if (inputValue?.toString().length >= 1) {

          if (inputValue.trim() == "sam") {
              return { 'nameCheck': true };
          }
          if (inputValue[0] == " ") {
              return { 'emptynotAllowed': true }
          }
          if (!pattern.test(inputValue)) {
              return { 'specialCharacter': true }
          }
      }

      return null;
  }

}

/** this function for email validtion*/
emailValidation(): ValidatorFn {

  var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return (control: AbstractControl): { [key: string]: boolean } | null => {

      const emailValue = control.value || '';

      if (emailValue?.toString().length >= 1) {
          if (emailValue[0] == " ") {
              console.log("inside mail")
              return { 'emptynotAllowed': true }
          }
          if (!emailPattern.test(emailValue)) {
              return { 'notvalidemail': true };
          }
      }

      return null;
  }
}

/** mobile number field validation*/
numberValidation(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: boolean } | null => {
      const check_value = control.value || '';

      if (check_value?.toString().length >= 1) {
          if (check_value?.toString().length < 3) {
              return { "minimumLength": true }
          }
          if (check_value?.toString().length < 10) {
              return { "phoneNumberDigit": true }
          }
      }

      return null;
  }

}


/**password field validation */
passwordValidation(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: boolean } | null => {
      const passValue = control.value || '';
      if (passValue?.toString().length >= 1) {
          if (passValue[0] == " ") {
              return { "emptynotallowed": true }
          }
          if (passValue.length < 7) {
              return { 'minimumcharacter': true }
          }
          if (passValue.length > 50) {
              return { 'maximumCharacter': true }
          }
          // var specialcharacterreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
          // var specialcharacterreg = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^@$!%*#?&]*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
          // var specialcharacterreg =  /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;

          var specialcharacterreg = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^@$!%*#?&]*[@$!%*#?&])[A-Za-z\d@$!%*#?&]*$/;

          if (passValue?.toString().length >= 1) {
              if (!specialcharacterreg.test(passValue)) {
                  return { "strongPassword": true };
              }
          }
      }

      return null;
  }
}



/**confirm password validation */
confirmPasswordValidators(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {

      /**                            condtion  (ternay operator)           ?  true : false; */     
      return control.value.password == control.value.cpass ? null : { "passwordmismatch": true };

      // if (control.value.password != control.value.cpass) {
      //     console.log('contr !== alue.cpass',control.value.password != control.value.cpass)
      //     return { "passwordmismatch": true };
      // }
      // return null;

  }
}


/**strong password validation */ 
strongPasswordValidation(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
      const passValue = control.value || '';
      var specialcharacterreg = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^@$!%*#?&]*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/;
      if (passValue?.toString().length >= 1) {
          if (!specialcharacterreg.test(passValue)) {
              return { "strongPassword": true };
          }
      }

      return null;
  }

}



/**future date restriction */
futureDaterestrict(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
      const dateValue = control.value || '';
      if (dateValue?.toString().length >= 1) {
          const currentDate = new Date();

          /** Parse the input date*/ 
          const parsedInputDate = new Date(dateValue);
          if (parsedInputDate > currentDate) {
              return { "futureDate": true }
          }

      }

      return null;
  }
}
}
