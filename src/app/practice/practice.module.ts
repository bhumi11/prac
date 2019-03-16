import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeComponent } from './practice.component';

@NgModule({
  declarations: [PracticeComponent],
  imports: [
    SharedModule,
    PracticeRoutingModule,
  ],
})
export class PracticeModule { }
