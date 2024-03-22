import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {StronaGlownaInfoportalComponent} from "./strona-glowna-infoportal/strona-glowna-infoportal.component";

const routes: any = [
  {
    path: '',
    component: StronaGlownaInfoportalComponent,
  },
  {
    path: 'wniosek',
    redirectTo: 'wniosek/udostepnienie-informacji-szkody-oc'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoportalRoutingModule { }
