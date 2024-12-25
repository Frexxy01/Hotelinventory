import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[hotelinventoryappEmailvalidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailvalidatorDirective, multi: true}],
  standalone: true
})
export class EmailvalidatorDirective implements Validator {

  constructor() { }


  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as string
    console.log("Validator in action!")
    if (!value || !value.includes('@')) {
      return {
        invalidEmail: true
      }
    }
    return null
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // } 

}
