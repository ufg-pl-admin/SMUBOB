import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatCardModule } from '@angular/material/card';

const mat_list = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSnackBarModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatDialogModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatSortModule,
  MatCardModule,
  MatSortModule,
  MatDatepickerModule,
];

@NgModule({
  exports: [...mat_list],
  declarations: [],
  imports: [CommonModule],
})
export class MaterialModule {}
