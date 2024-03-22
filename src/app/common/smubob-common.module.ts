import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AttachmentListComponent } from "@common/components/attachment-list/attachment-list.component";
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from "./material/material.module";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    HeaderComponent,
    AttachmentListComponent,
    ConfirmationPopupComponent,
  ],



    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule
    ],
    exports: [
        HeaderComponent,
        AttachmentListComponent,
        NgbPaginationModule,
    ]
})
export class SmubobCommonModule { }
