import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZgloszenieBrakuOcComponent} from "./zgloszenie-braku-oc/zgloszenie-braku-oc.component";
import { SprawdzenieStatusuZgloszeniaBrakuUbezpieczeniaOcComponent } from './sprawdzenie-statusu-zgloszenia-braku-ubezpieczenia-oc/sprawdzenie-statusu-zgloszenia-braku-ubezpieczenia-oc.component';

const routes: Routes = [
  {
    path: '',
    component: ZgloszenieBrakuOcComponent
  },
  {
    path: 'sprawdzenie-statusu-anonimowego-zgloszenia',
    component: SprawdzenieStatusuZgloszeniaBrakuUbezpieczeniaOcComponent,   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnonimoweZgloszeniaRoutingModule { }
