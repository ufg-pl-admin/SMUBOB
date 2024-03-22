import {ErrorStateMatcher} from "@angular/material/core";
import {UntypedFormControl, FormGroupDirective, NgForm} from "@angular/forms";

export class CustomErrorStateMatcher implements ErrorStateMatcher {

  /**
   * Sprawdzenie stanu kontrolki
   */
  public isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const controlTouched = !!(control && (control.dirty || control.touched));
    const controlInvalid = !!(control && control.invalid);
    const parentInvalid = !!(control && control.parent && control.parent.errors && (control.parent.dirty || control.parent.touched));

    return (controlTouched && (controlInvalid || parentInvalid));
  }
}
