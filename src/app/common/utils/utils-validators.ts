import {AbstractControl, UntypedFormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";

export class UtilsValidators {

  /**
   * Waliduje numer pesel
   */
  static peselValid(ac: AbstractControl): ValidationErrors | null {
    if (ac.value === null || ac.value === '') {
      return null;
    }
    const pesel = ac.value.toString();
    const peselLength = pesel.length;
    if (peselLength !== 11) {
      return {peselInvalid: true};
    }
    const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3] as const;
    let sum = 0;
    let controlNumber = parseInt(pesel.substring(10, 11));
    for (let i = 0; i < weight.length; i++) {
      const digit = parseInt(pesel.substring(i, i + 1));
      if (isNaN(digit)) {
        return {peselInvalid: true};
      }
      sum += (digit * weight[i]);
    }
    sum = sum % 10;
    const validControlNumber = (10 - sum) % 10;
    return controlNumber === validControlNumber ? null : {peselInvalid: true};
  }


  static walidacjaAlfanumeryczna(ac: AbstractControl): ValidationErrors | null {
    if (ac.value === null || ac.value === '') return null;
    return /^[a-zA-Z0-9]+$/.test(ac.value) ? null : {walidacjaAlfanumeryczna: true};
  }

  /**
   * Waliduje numer sprawy
   * @param ac
   */
  static numerSprawyValid(ac: AbstractControl): ValidationErrors | null {
    const reg = /^[a-zA-Z0-9\/-]*$/g;
    if (String(ac.value).length === 0 || !ac.dirty) {
      return null
    }
    return (ac.value && reg.test(ac.value)) ? null : {numerSprawyInvalid: true}
  }

  /**
   * Waliduje numer rejestracyjny
   * @param ac
   */
  static numerRejestracyjnyValid(ac: AbstractControl): ValidationErrors | null {
    const reg = /^[a-zA-Z0-9 ]*$/g;

    if (ac.value === null || ac.value.length === 0) {
      return null;
    }

    if ((!ac.value?.substring(0, 1).match(/^[a-zA-Z]/) ||
      ac.value.replace(/\s/g, '').length > 9 ||
      !reg.test(ac.value)) && ac.dirty)
      return {numerRejestracyjnyInvalid: true};
    return null;
  }


}
