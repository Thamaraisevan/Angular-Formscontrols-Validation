import { NgModule } from '@angular/core';
import { AngularFormcontrolsValidationComponent } from './angular-formcontrols-validation.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AngularFormcontrolsValidationComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AngularFormcontrolsValidationComponent
  ]
})
export class AngularFormcontrolsValidationModule { }
