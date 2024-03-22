import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { AlertService } from "../../core/service/alert.service";
import { throwError } from "rxjs";
import {catchError, finalize} from "rxjs/operators";
import { UtilsValidators } from '../../common/utils/utils-validators';
import { SprawdzenieStatusuZgloszeniaDialogComponent } from "./sprawdzenie-statusu-zgloszenia-dialog/sprawdzenie-statusu-zgloszenia-dialog.component";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-sprawdzenie-statusu-zgloszenia-braku-ubezpieczenia-oc',
  templateUrl:
    './sprawdzenie-statusu-zgloszenia-braku-ubezpieczenia-oc.component.html',
  styleUrls: [
    './sprawdzenie-statusu-zgloszenia-braku-ubezpieczenia-oc.component.scss',
  ],
})
export class SprawdzenieStatusuZgloszeniaBrakuUbezpieczeniaOcComponent
  implements OnInit {
  public form!: UntypedFormGroup;

  constructor(
    private matDialog: MatDialog,
    private alertService: AlertService,
    private title: Title) {
    this.title.setTitle("Sprawdzenie statusu zgłoszenia braku ubezpieczenia OC")
  }

  ngOnInit(): void {
    this.createForm();
  }


  private createForm(): void {
    this.form = new UntypedFormGroup(
      {
        identyfikatorEZawiadomienia: new UntypedFormControl(null, [Validators.required, UtilsValidators.numerSprawyValid]),
        nrRejestracyjny: new UntypedFormControl(null, [Validators.minLength(4), Validators.maxLength(9), UtilsValidators.walidacjaAlfanumeryczna]),
        nrVin: new UntypedFormControl(null, [Validators.maxLength(17), UtilsValidators.walidacjaAlfanumeryczna]),
        // response: new UntypedFormControl(null, [Validators.required]),
      },
      [this.VINorRegistrationNumber()]
    );
  }

  /**
   * Wyczyszczenie pól formularza
   */
  public clearForm(): void {
    this.form.reset();
  }

  /**
   * Wywołanie usługi pobrania statusu zawiadomienia i otworzenie odpowiedniego powiadomienia
   */
  public sendForm(): void {
    console.log('sukces');
          this.openDialog('Przyjęto', this.numerEzaw.value)


  }

  /**
   * Zwrócenie informacji czy formularz nie zawiera błędów
   * @returns
   */
  public isFormValid(): boolean {
    return this.form.valid;
  }

  get numerEzaw(): UntypedFormControl {
    return this.form.get('identyfikatorEZawiadomienia') as UntypedFormControl;
  }

  private openDialog(status: string, nrEzaw: string): void {
    const dialogRef = this.matDialog.open(SprawdzenieStatusuZgloszeniaDialogComponent, {
      width: '800px',
      data: {
        status: status,
        nrEzaw: nrEzaw
      }
    });

    dialogRef.afterClosed().subscribe();
  }

  /**
   * Zwrócenie informacji czy numer rejestracyjny albo numer vin są uzupełnione
   * @returns
   */
  public VINorRegistrationNumber(): ValidatorFn {
    return (formGroup: AbstractControl) => {
      const numerVIN = formGroup.get('nrVin');
      const numerRejestracji = formGroup.get('nrRejestracyjny');
      if ((numerRejestracji?.value === null || numerRejestracji?.value === '') && (numerVIN?.value === null || numerVIN?.value === ''))
        return { VINorRegistrationNumber: true }
      return null;
    }
  }

}
