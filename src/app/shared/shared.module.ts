import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    // CommentsComponent,
    // ShortenPipe,
    // UsernamePipe,
    // TimeAgoPipe,
    // HighlightDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,    
  ],
  exports: [
    // CommentsComponent,
    MaterialModule,
    ReactiveFormsModule,
    // ShortenPipe,
    // UsernamePipe,
    // TimeAgoPipe,
    // HighlightDirective
  ]
})
export class SharedModule { }
