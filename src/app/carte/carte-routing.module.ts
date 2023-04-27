import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemaComponent } from './components/schema/schema.component';

const routes: Routes = [
  { path: 'schema', component: SchemaComponent },
  { path: 'schema', component: SchemaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'schema' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteRoutingModule { }
