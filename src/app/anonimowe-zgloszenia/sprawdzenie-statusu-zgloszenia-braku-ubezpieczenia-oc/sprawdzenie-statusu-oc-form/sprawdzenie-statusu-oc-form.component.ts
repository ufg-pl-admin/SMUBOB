import {Component, Input, OnInit} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ErrorService } from "../../../core/service/error.service";
import {catchError, map, take} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-sprawdzenie-status-oc-form',
  templateUrl: './sprawdzenie-statusu-oc-form.component.html',
  styleUrls: ['./sprawdzenie-statusu-oc-form.component.scss']
})
export class SprawdzenieStatusOcFormComponent implements OnInit{

  @Input() form!: UntypedFormGroup;

  public siteKeyV2: string;

  constructor(public errorService: ErrorService
  ) { }


  ngOnInit(): void {
  }




  /**
   * Dodanie informacji o captcha do formularza
   * @param captchaResponse
   */
  public resolved(captchaResponse: any): void {
    this.form.patchValue({
      response: captchaResponse
    })
  }
  /**
   * Zwrócenie pola formularza jako FormControl
   * @param controlName
   * @returns
   */
  public getFormControl(controlName: string) {
    return this.form.get(controlName) as UntypedFormControl;
  }
}
