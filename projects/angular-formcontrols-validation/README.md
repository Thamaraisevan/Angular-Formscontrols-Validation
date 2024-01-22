# Angular Formscontrols Validation

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

These packages create validation for form controls, providing a space using Angular's AbstractControl and validation. These validations are customizable and reusable, allowing us to add new errors to the package and change the pattern for validation.

Client-side Validation should be simple and clean.
Don't let Client-side Validation dirty your controller.

Setup your Validation on config phase by using some rules (example)
If you prefer schema over html attributes , try Angular Formscontrols Validation (Demo)
And add Validation in your view only.


## Requirement

Angular 11.0.0 (for  AngularFormcontrolsValidation 0.0.1)
Angular 12.0.0 (for  AngularFormcontrolsValidation 0.0.2)
Angular 13.0.0 (for  AngularFormcontrolsValidation 0.0.5)
Angular 14.0.0 (for  AngularFormcontrolsValidation 0.0.5)
Angular 15.0.0 (for  AngularFormcontrolsValidation 0.0.6)


## DEMO

````
Stackblitz link : https://stackblitz.com/edit/angular-app-initialize-ygbbd6?file=src%2Fapp%2Fapp.component.html

````

This is  [Stackblitz link](https://stackblitz.com/edit/angular-app-initialize-ygbbd6?file=src%2Fapp%2Fapp.component.html).



## Installation

`npm i angular-formcontrols-validation`


## UsingAngular Formscontrols Validation

#### 1. Import Angular Forms Controls Validation
In the module where you want to use the  Angular Formscontrols Validation, import the  Angular Formscontrols Validation as follows:

 ````
import {AngularFormcontrolsValidationService} from 'angular-formcontrols-validation';

````


#### 2. Configuration
To configure the validation messages, you need to perform the following steps:

````
constructor(private validation:AngularFormcontrolsValidationService) { }
````


#### Step 2.1
````

 this.signupForm = this.fb.group({
     fullName: ['', [Validators.required,this.validateService.nameFieldCheck( )]],})


````

 ## 3. Usage in templates

Now, in your component's template, you can use the ValidationMessagesComponent to display the validation messages. 



#### Step 1

````
this.signupForm = this.fb.group({
      fullName: ['', [Validators.required, this.validation.nameFieldCheck()]],
      mobileNumber: ['', [Validators.required, this.validation.numberValidation()]],
      email: ['', [Validators.required, this.validation.emailValidation()]],
      dob: ['', [Validators.required, this.validation.futureDaterestrict()]],
      password: ['', [Validators.required, this.validation.passwordValidation()]],
      cpass: ['', [Validators.required, this.validation.passwordValidation()]],
    },
       {
        validators: this.validation.confirmPasswordValidators(),
      }),

 ````
 after importing and declaring in the constructor. When you need a FormGroup, just call the local name and get a particular function to add it to your form controls. This way, it checks using abstract control and then gives errors in the form controls if there are any.

````
 <div class="text-danger" *ngIf="form['fullName'].invalid && (form['fullName'].dirty || form['fullName'].touched)">
  <small class="required-field " *ngIf="form['fullName'].errors?.['required']">Name is required.</small></div>
````

When an error occurs, we can throw default errors in form control errors. For example, the error added to the form control will then be thrown in the template

 ## Message  

 Regex pattern used 
   ^[^\s$&*!#^@]+@[^\s@]+\.([^\s@]{2,3})+$
Message key will throw an error  if  there is an Regex Error in the entered EmailID.

| Propert | Definition    |                
| :---:   | :---: | 
| nameFieldCheck | This function alidates name fields, ensuring that the first character is not a whitespace and validate special character. (example:nameFieldCheck(value))    |  
| emailValidation |This function validates a valid email using regex. (example:emailValidation(value)) | 
| numberValidation |This function checks a number field for minimum and maximum length. (example:numberValidation(value))   |  
| passwordValidation | This function validates strong passwords, ensuring there are no whitespace characters, and checks for both minimum and maximum password lengths. Additionally, it uses regex to verify the strength of the password. (example:passwordValidation(value))   |   
| confirmPasswordValidators | This function checks whether the new password and the confirm password values are the same.  (example:confirmPasswordValidators(value1,value2))  | 
| value | The parameter type for this function is now set to 'any' for the value  (example:passwordValidation(value))  |  
| value1,value2 | Two values are present: value1 represents the new password, and value2 represents the confirm password.(example:confirmPasswordValidators(value1,value2))  |    




 ## Regex  



| Regex | Definition    | 
| :---:   | :---: | 
|name field  | This regex validates the presence of special characters in a name field.  (example: /^[A-Za-z' \-.]+$/ ) | 
| email pattern | This regex validates the correct email pattern. (example:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)   | 
| Specialcharacter| This regex checks for a strong password in password fields.(example:/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^@$!%*#?&]*[@$!%*#?&])[A-Za-z\d@$!%*#?&]*$/)   | 



## Code scaffolding

Run `ng generate component component-name --project angular-inputs-validation` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project angular-inputs-validation`.
> Note: Don't forget to add `--project angular-inputs-validation` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build angular-inputs-validation` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build angular-inputs-validation`, go to the dist folder `cd dist/angular-inputs-validation` and run `npm publish`.

## Running unit tests

Run `ng test angular-inputs-validation` to execute the unit tests via [Karma](https://karma-runner.github.io).

