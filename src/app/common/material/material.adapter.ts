import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatPaginatorIntl} from '@angular/material/paginator';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD'
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY'
  }
};
export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();
  customPaginatorIntl.itemsPerPageLabel = 'Elementów na stronie';
  customPaginatorIntl.nextPageLabel = 'Następna strona';
  customPaginatorIntl.previousPageLabel = 'Poprzednia strona';
  customPaginatorIntl.lastPageLabel = 'Przejdź na ostatnią stronę';
  customPaginatorIntl.firstPageLabel = 'Przejdź na pierwszą stronę';
  customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return '1 z ' + 1;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' z  ' + length;
  };
  return customPaginatorIntl;}

@NgModule({
  declarations : [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useValue: CustomPaginator()},
    { provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }

  ]
})
export class MaterialAdapterModule { }
