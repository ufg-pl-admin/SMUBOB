import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ZgloszenieBrakuOcComponent} from "./zgloszenie-braku-oc/zgloszenie-braku-oc.component";
import {ZgloszenieBrakuOcFormComponent} from "./zgloszenie-braku-oc/zgloszenie-braku-oc-form/zgloszenie-braku-oc-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@common/material/material.module";
import {SmubobCommonModule} from "@common/smubob-common.module";
import {AnonimoweZgloszeniaRoutingModule} from "./anonimowe-zgloszenia-routing.module";
import {RecaptchaModule ,RECAPTCHA_LANGUAGE} from "ng-recaptcha";
import { SprawdzenieStatusuZgloszeniaBrakuUbezpieczeniaOcComponent } from './sprawdzenie-statusu-zgloszenia-braku-ubezpieczenia-oc/sprawdzenie-statusu-zgloszenia-braku-ubezpieczenia-oc.component';
import { SprawdzenieStatusOcFormComponent } from './sprawdzenie-statusu-zgloszenia-braku-ubezpieczenia-oc/sprawdzenie-statusu-oc-form/sprawdzenie-statusu-oc-form.component';
import { SprawdzenieStatusOcFormButtonsComponent } from './sprawdzenie-statusu-zgloszenia-braku-ubezpieczenia-oc/sprawdzenie-status-oc-form-buttons/sprawdzenie-status-oc-form-buttons.component';
import { SprawdzenieStatusuZgloszeniaDialogComponent } from './sprawdzenie-statusu-zgloszenia-braku-ubezpieczenia-oc/sprawdzenie-statusu-zgloszenia-dialog/sprawdzenie-statusu-zgloszenia-dialog.component';

@NgModule({
    declarations: [
        ZgloszenieBrakuOcComponent,
        ZgloszenieBrakuOcFormComponent,
        SprawdzenieStatusuZgloszeniaBrakuUbezpieczeniaOcComponent,
        SprawdzenieStatusOcFormComponent,
        SprawdzenieStatusOcFormButtonsComponent,
        SprawdzenieStatusuZgloszeniaDialogComponent

    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        SmubobCommonModule,
        AnonimoweZgloszeniaRoutingModule,
        RecaptchaModule,
        FormsModule
    ],
    providers: [
        {
            provide: RECAPTCHA_LANGUAGE,
            useValue: "pl",
        },
    ]
})
export class AnonimoweZgloszeniaModule { }
