import { Injectable } from '@angular/core';
import { UntypedFormControl } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  private errorMap: { [key: string]: (c: UntypedFormControl) => string } = {
    'required': () => `Pole nie może być puste!`,
    'minlength': (c: any) =>
        `Pole musi zawierać minimum ${c.errors['minlength']['requiredLength']} ${c.errors['minlength']['requiredLength'] > 4 ? 'znaków' : 'znaki'}.`,
    'maxlength': (c: any) =>
        `Maksymalna liczba znaków to ${c.errors['maxlength']['requiredLength']}!`,
    'onlyNumbers': () => 'Dozwolone są tylko cyfry',
    'onlyLetters': () => 'Dozwolone są tylko litery',
    'timeFormat': () => 'Poprawny format czasu to HH:MM',
    'postCode': () => 'Niepoprawny kod pocztowy',
    'regonInvalid': () => 'Niepoprawny numer REGON',
    'nipInvalid': () => 'Niepoprawny NIP.',
    'VINorRegistrationNumberRequired': () => 'Proszę podać numer VIN lub numer rejestracyjny',
    'numerRejestracyjnyInvalid': () => 'Niepoprawny numer rejestracyjny.',
    'vinInvalid': () => 'Niepoprawny numer VIN.',
    'peselInvalid': () => 'Niepoprawny numer PESEL.',
    'peselOrRegonInvalid': () => 'Niepoprawny numer PESEL lub REGON.',
    'max': (c: any) => `Maksymalna liczba znaków to ${c.errors['max'].max}!`,
    'numerSprawyInvalid': () => 'Niepoprawny numer sprawy.',
    'min': (c: any) => `Minimalna wartość to ${c.errors['min']['min']}`,
    'matDatepickerParse': () => 'Niepoprawny format daty.',
    'walidacjaAlfanumeryczna' : () => 'Dozwolone są tylko cyfry i litery',
    'amountMismatch' : () => 'Kwota wpłaty przekracza saldo sprawy',
    'matDatepickerMin': () => 'Data do nie może być mniejsza od daty od',
    'noLeadingSpace': () => 'Pole nie może zaczynać się od spacji',
    'noTrailingSpace': () => 'Pole nie może kończyć się spacją',
    'containsPercent': () => 'Pole nie może zawierać znaku %',
    'containsDot': () => 'Pole nie może zawierać znaku ,'
  };

  /**
   * Zwrócenie odpowiedniego opisu błedu
   * @param control
   * @returns
   */
  public mapErrors(control: UntypedFormControl): string[] {
    return Object.keys(control.errors || {})
      .map(key => {
        return this.errorMap[key](control)
      });
  }

}
