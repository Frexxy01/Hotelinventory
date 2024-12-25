import { AbstractControl, FormGroup } from "@angular/forms";
import { of } from "rxjs";

export class CustomValidator {
  static ValidateName(control: AbstractControl) {
    const value = control.value as string;
    if (value.includes('test')) {
      return {
        invalidName: true
      }
    }
    return null
  }

  static ValidateSpecialChar(char: string) {
    return (control: AbstractControl) => {
      const value = control.value as string
      if (value.includes(char)) {
        return {
          invalidSpecialChar: true
        }
      }
      return null
    }
  }

  static ValidateDate(control: FormGroup) {
    const checkinDate = new Date(control.get('checkinDate')?.value)
    const checkoutDate = new Date(control.get('checkoutDate')?.value)
    const diffTime = checkinDate.getTime() - checkoutDate.getTime()


    if (diffTime > 0) {
      control.get('checkoutDate')?.setErrors({
        invalidDate: true
      })
      return {
        invalidDate: true
      }
    }
    return null
  }
}
