import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootModuleRoutingModule } from './root-module-routing.module';
import {SmubobCommonModule} from "../common/smubob-common.module";
import {MaterialModule} from "../common/material/material.module";
import {MatSnackBar} from "@angular/material/snack-bar";
import { DatePipe } from '@angular/common';
import { AlertService } from '../core/service/alert.service';
import {MaterialAdapterModule} from "@common/material/material.adapter";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RootModuleRoutingModule,
    SmubobCommonModule,
    MaterialModule,
    MaterialAdapterModule
  ],
  providers: [
    MatSnackBar,
    AlertService,
    DatePipe
  ]
})
export class RootModuleModule { }
