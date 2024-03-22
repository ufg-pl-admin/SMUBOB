import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationPopupComponent } from '@common/components/confirmation-popup/confirmation-popup.component';
import { AlertService } from '../../core/service/alert.service';
import { UtilsValidators } from '@common/utils/utils-validators';
import { NEVER, Observable, Subject, throwError } from 'rxjs';
import { catchError, switchMap, take, takeUntil } from 'rxjs/operators';
import {AnonimoweZawiadomienie} from "@common/model/tekst";
import {Title} from '@angular/platform-browser';
import {AttachmentListComponent} from "@common/components/attachment-list/attachment-list.component";



@Component({
  selector: 'app-zgloszenie-braku-oc',
  templateUrl: './zgloszenie-braku-oc.component.html',
  styleUrls: ['./zgloszenie-braku-oc.component.scss'],
})
export class ZgloszenieBrakuOcComponent implements OnInit, OnDestroy {

  @ViewChild(AttachmentListComponent) attachment: AttachmentListComponent;
  public form!: UntypedFormGroup;
  public zalaczniki: File[] = [];
  public daneZglaszajacegoVisible: boolean = false;

  private unsub$: Subject<any> = new Subject<any>();




  constructor(
    private alertService: AlertService,
    private matDialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title) {
    this.title.setTitle("Anonimowe e-zawiadomienie")
  }


  ngOnInit(): void {
    this.form = this.createForm();
  }

  ngOnDestroy(): void {
    this.unsub$.next(() => {});
    this.unsub$.unsubscribe();
  }

  private createForm(): UntypedFormGroup {
    return new UntypedFormGroup({
      nrRejestracyjny: new UntypedFormControl(null, [UtilsValidators.numerRejestracyjnyValid, Validators.minLength(4), Validators.maxLength(9)]),
      nrVin: new UntypedFormControl(null, [UtilsValidators.walidacjaAlfanumeryczna, Validators.minLength(6), Validators.maxLength(17)]),
      marka: new UntypedFormControl(null, [Validators.required]),
      model: new UntypedFormControl(null),
      formaPrawna: new UntypedFormControl(null),
      imieWlascicielaPojazdu: new UntypedFormControl(null, Validators.maxLength(200)),
      nazwiskoWlascicielaPojazdu: new UntypedFormControl(null, Validators.maxLength(200)),
      nazwaFirmyWlascicielaPojazdu: new UntypedFormControl(null, Validators.maxLength(200)),
      peselWlascicielaPojazdu: new UntypedFormControl(null, [UtilsValidators.peselValid, Validators.maxLength(11)]),
      plecWlascicielaPojazdu: new UntypedFormControl(null),
      imieZglaszajacego: new UntypedFormControl(null, Validators.maxLength(200)),
      nazwiskoZglaszajacego: new UntypedFormControl(null, Validators.maxLength(200)),
      informacjeDodatkowe: new UntypedFormControl(null, Validators.maxLength(500)),
      listaZalacznikow: new UntypedFormArray([])
      // response: new FormControl(null, [Validators.required]),
    });
  }

  /**
   * Wywołanie otworzenia popup'u z potwierdzeniem przesłania zgłoszenia i uruchomienie odpowiednich procesów w zależności od odpowiedzi i uzyskanych danych.
   */
  public sendForm() {
    if(!this.czyVinLubNrRejestracyjnyUzupelniony()) {
      this.alertService.error(AnonimoweZawiadomienie.NR_REJ_LUB_VIN_WYMAGANE)
      return
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.alertService.error('Pole nie może być puste!')
    }

    this.clearFormArray();
    this.form.reset();
    this.alertService.info(
      `Anonimowe zgłoszenie o nr example/id zostało zarejestrowane`
    );



  }

  private clearFormArray() {
    const fa = this.form.controls['listaZalacznikow'] as UntypedFormArray;
    while (fa.length > 0) {
      fa.removeAt(0);
    }
  }

  /**
   * Przekierowanie do wcześniejszego adresu
   */
  public goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private openConfirmationDialog(text: string): Observable<boolean> {
    return this.matDialog
      .open(ConfirmationPopupComponent, {
        data: text,
      })
      .afterClosed()
      .pipe(take(1));
  }

  public dodajZalacznik(zalcznik: File) {
    this.zalaczniki.push(zalcznik);
    this.zalaczniki = [...this.zalaczniki];
    this.attachment.pokazLoader = false;
  }

  public usunZalacznik(nazwaZalacznika: string) {
    this.zalaczniki.splice(this.zalaczniki.findIndex(zalacznik => zalacznik.name === nazwaZalacznika), 1);
    this.zalaczniki = [...this.zalaczniki]
  }

  /**
   * Przełączenie widoczności dodatkowych pól - danych zgłaszającego
   */
  public zmienWidocznosc(): void {
    this.daneZglaszajacegoVisible = !this.daneZglaszajacegoVisible;
    if (!this.daneZglaszajacegoVisible) {
      this.form.controls['imieZglaszajacego'].disable();
      this.form.controls['nazwiskoZglaszajacego'].disable();
    } else {
      this.form.controls['imieZglaszajacego'].enable();
      this.form.controls['nazwiskoZglaszajacego'].enable();
    }
  }

  private czyVinLubNrRejestracyjnyUzupelniony(): boolean {
    const nrVin = this.form.controls['nrVin']
    const nrRejestracyjny = this.form.controls['nrRejestracyjny'];

    const isNrVinEmpty = nrVin.value === null || nrVin.value === '';
    const isNrRejestracyjnyEmpty = nrRejestracyjny.value === null || nrRejestracyjny.value === '';

    return !(isNrVinEmpty && isNrRejestracyjnyEmpty);
  }
}
