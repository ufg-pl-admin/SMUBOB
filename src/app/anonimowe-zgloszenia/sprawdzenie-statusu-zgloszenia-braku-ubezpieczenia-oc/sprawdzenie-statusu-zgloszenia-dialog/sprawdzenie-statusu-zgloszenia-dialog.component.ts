import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-sprawdzenie-statusu-zgloszenia-dialog',
  templateUrl: './sprawdzenie-statusu-zgloszenia-dialog.component.html',
  styleUrls: ['./sprawdzenie-statusu-zgloszenia-dialog.component.scss']
})
export class SprawdzenieStatusuZgloszeniaDialogComponent {

  public status!: string;
  public nrEzaw!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.status = this.data.status
    this.nrEzaw = this.data.nrEzaw
  }

}
