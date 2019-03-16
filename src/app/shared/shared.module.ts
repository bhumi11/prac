import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RendererPracDirective } from './directives/renderer-prac.directive';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [SearchPipe, RendererPracDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, SearchPipe, RendererPracDirective],
})
export class SharedModule { }
