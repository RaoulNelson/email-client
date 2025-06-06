import {AbstractControl} from "@angular/forms";

export class AuthValidators {
  static matchFields(field1: string, field2: string) {
    return (form: AbstractControl) => {
      const val1 = form.value[field1];
      const val2 = form.value[field2];
      if (val1 === val2) {
        return null;
      }
      // Sets to true if not matching (that means error present)
      return {matchFields: true}
    }
  }
}
