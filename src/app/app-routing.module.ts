import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cartes', loadChildren: () => import('./carte/carte.module').then(m => m.CarteModule) },
  { path: 'carte', loadChildren: () => import('./carte/carte.module').then(m => m.CarteModule) },
   { path: '**', redirectTo: 'cartes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
