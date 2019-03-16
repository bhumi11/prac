import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vacancy',
    loadChildren: 'src/app/manage-vacancy/manage-vacancy.module#ManageVacancyModule',
  },
  {
    path: 'practice',
    loadChildren: 'src/app/practice/practice.module#PracticeModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
