import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './common/material/material.module';
import { SmubobCommonModule } from './common/smubob-common.module';
import { RootModuleModule } from './root-module/root-module.module';
import {QuillModule} from "ngx-quill";
import {ReactiveFormsModule} from "@angular/forms";
import {RecaptchaModule} from "ng-recaptcha";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    HttpClientModule,
    MaterialModule,
    SmubobCommonModule,
    RootModuleModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    RecaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
