import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@common/material/material.module";
import { SmubobCommonModule } from "@common/smubob-common.module";
import { RECAPTCHA_LANGUAGE } from "ng-recaptcha";
import { InfoportalRoutingModule } from "./infoportal-routing.module";
import { StronaGlownaInfoportalComponent } from './strona-glowna-infoportal/strona-glowna-infoportal.component';

@NgModule({
  declarations: [
    StronaGlownaInfoportalComponent
  ],


  imports: [
    CommonModule,
    InfoportalRoutingModule,
    SmubobCommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: "pl",
    },
  ]
})
export class InfoportalModule {

}
