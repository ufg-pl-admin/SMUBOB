import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sprawdzenie-status-oc-form-buttons',
  templateUrl: './sprawdzenie-status-oc-form-buttons.component.html',
  styleUrls: ['./sprawdzenie-status-oc-form-buttons.component.scss']
})
export class SprawdzenieStatusOcFormButtonsComponent {

  @Input() formValid!: boolean;

  @Output() resetFormEvent = new EventEmitter()
  @Output() sendFormEvent = new EventEmitter()

  constructor(private location: Location) { }

  /**
   * Wyemitowanie informacji o wyczyszczeniu formularza
   */
  public clearForm() {
    this.resetFormEvent.emit()
  }

  /**
 * Wyemitowanie informacji o wysłaniu formularza
 */
  public sendForm() {
    this.sendFormEvent.emit()
  }
}
