import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: any = [
  {
    path: '',
    redirectTo: 'infoportal',
    pathMatch: 'full',
  },
  {
    path: 'infoportal',
    loadChildren: () => import('src/app/infoportal/infoportal.module').then(m => m.InfoportalModule)
  },
  {
    path: 'anonimowe-zawiadomienie',
    loadChildren: () => import('src/app/anonimowe-zgloszenia/anonimowe-zgloszenia.module').then(m => m.AnonimoweZgloszeniaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
