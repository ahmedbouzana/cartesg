import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemaComponent } from './components/schema/schema.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarteRoutingModule } from './carte-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SchemaComponent
  ],
  imports: [
    CommonModule,
    CarteRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ]
})
export class CarteModule { }
