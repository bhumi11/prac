import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from '../shared/shared.module';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';
import { ManageVacancyRoutingModule } from './manage-vacancy-routing.module';
import { ManageVacancyComponent } from './manage-vacancy.component';
import { EmployeeService } from './services/employee.service';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { VacancyComponent } from './vacancy/vacancy.component';
@NgModule({
  declarations: [ManageVacancyComponent, VacancyComponent, VacancyDetailComponent, AddVacancyComponent],
  imports: [
    SharedModule,
    Ng2SearchPipeModule,
    ManageVacancyRoutingModule,
  ],
  providers: [EmployeeService],
})
export class ManageVacancyModule { }
