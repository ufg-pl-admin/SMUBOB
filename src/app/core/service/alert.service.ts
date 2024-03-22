import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snack: MatSnackBar) { }

  /**
   * Uruchomienie popup'u z informacją o błędzie usługi sieciowej
   * @param text
   */
  public error(text: string = 'Wystąpił błąd usługi sieciowej, prosimy spróbować ponownie później.') {
    this.custom(text, 'blue-snackbar', 5000);
  }

  /**
  * Uruchomienie popup'u z przesłanym tekstem
  * @param text
  */
  public info(text: string) {
    this.custom(text, 'blue-snackbar', 5000);
  }

  /**
   * Uruchomienie usługi z dodatkowymi parametrami
   * @param text
   * @param color
   * @param duration
   */
  public custom(text: string, color: string, duration: number) {
    this.snack.open(text, 'OK', {
      duration: duration,
      panelClass: [color]
    });
  }
}
