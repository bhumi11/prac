import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';
import { ManageVacancyComponent } from './manage-vacancy.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'vacancy',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: ManageVacancyComponent,
  },
  {
    path: 'add',
    component: AddVacancyComponent,
  },
  {
    path: 'edit',
    component: AddVacancyComponent,
  },
  {
    path: 'view-detail',
    component: VacancyDetailComponent,
  },
  /* {
    path: 'edit/:id',
    component: AddVacancyComponent,
  } */
  // {
  //   path: 'view-detail/:id',
  //   component: VacancyDetailComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageVacancyRoutingModule { }
