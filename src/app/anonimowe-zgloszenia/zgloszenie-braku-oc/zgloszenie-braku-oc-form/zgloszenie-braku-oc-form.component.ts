import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { CustomErrorStateMatcher } from "@common/classes/custom-error-state-matcher";
import { ErrorService } from "../../../core/service/error.service";
import { Subject, throwError } from "rxjs";
import {catchError, map, take, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-zgloszenie-braku-oc-form',
  templateUrl: './zgloszenie-braku-oc-form.component.html',
  styleUrls: ['./zgloszenie-braku-oc-form.component.scss']
})
export class ZgloszenieBrakuOcFormComponent implements OnInit {

  @Input() form!: UntypedFormGroup;
  @Input() daneZglaszajacegoVisible = false;

  @Output() token = new EventEmitter<string>();
  @Output() changeDaneZglaszajacegoEvent: EventEmitter<any> = new EventEmitter<any>()

  public modeleSamochodow!: string[];
  public markiSamochodow!: string[];
  public matcher = new CustomErrorStateMatcher();
  public siteKeyV2: string;
  private unsub$: Subject<any> = new Subject<any>();


  constructor(public errorService: ErrorService) {
  }


  /**
   * Zwrócenie wartości pola formularza jako FormControl
   * @param controlName
   * @returns
   */
  public getFormControl(controlName: string) {
    return this.form.get(controlName) as UntypedFormControl;
  }

  /**
   * Zapisanie odpowiedzi captcha w formularzu
   * @param captchaResponse
   */
  public resolved(captchaResponse: any): void {
    this.form.patchValue({
      response: captchaResponse
    })
  }

  /**
   * Przełączenie widoczności dodatkowych pól - danych zgłaszającego
   */
  public changeVisibility() {
    this.changeDaneZglaszajacegoEvent.emit();
  }

  ngOnInit(): void {
    this.getMarkiSamochodow();
    this.setMarkiListiner();
  }




  private getMarkiSamochodow() {

    this.markiSamochodow=['MARKA1','MARKA2','MARKA3']

  }

  private getModeleSamochodw(marka: string) {

    this.modeleSamochodow =['MODEL1','MODEL2','MODEL3'];
  }

  private setMarkiListiner() {
    this.form.controls['marka'].valueChanges.pipe(takeUntil(this.unsub$)).subscribe(value => {
      this.getModeleSamochodw(value);
    })
  }

  public setFormaPrawna(ev: any): void {

    switch (ev.value) {
      case 'OSFIZYCZNA':
        this.clearControls(['nazwaFirmyWlascicielaPojazdu'])
        break;
      case 'OSPRAWNA':
        this.clearControls(['imieWlascicielaPojazdu', 'nazwiskoWlascicielaPojazdu', 'peselWlascicielaPojazdu', 'plecWlascicielaPojazdu'])
        break;
      default:
    }
  }

  public clearControls(kontrolki: Array<string>): void {
    kontrolki.forEach((el: any) => {
      this.form.controls[el].setValue(null)
    })
  }
}
