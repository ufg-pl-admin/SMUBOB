import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: any = [
];

if (/https:\/\/partner/.test(window.location.href)) {
  routes.push(
    {
      path: '',
      redirectTo: 'infoportal',
      pathMatch: 'full'
    },
    {
      path: '',
      loadChildren: () => import('../infoportal/infoportal.module').then(m => m.InfoportalModule)
    },
  )
} else if (/https:\/\/obywatel/.test(window.location.href)) {
  routes.push(
    {
      path: 'infoportal',
      loadChildren: () => import('../infoportal/infoportal.module').then(m => m.InfoportalModule)
    },
    {
      path: '',
      redirectTo: '/powiadomienia',
      pathMatch: 'full'
    },
  )
} else {
  routes.push(
    {
      path: '',
      redirectTo: 'infoportal',
      pathMatch: 'full'
    },
    {
      path: 'infoportal',
      loadChildren: () => import('../infoportal/infoportal.module').then(m => m.InfoportalModule)
    },
    {
      path: 'infoportal/anonimowe-zawiadomienie',
      loadChildren: () => import('../anonimowe-zgloszenia/anonimowe-zgloszenia.module').then(m => m.AnonimoweZgloszeniaModule)
    }
  );
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootModuleRoutingModule { }
