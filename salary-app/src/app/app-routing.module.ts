import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { SalaryFormComponent } from './salary-form/salary-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (home page)
  { path: 'list', component: SalaryListComponent }, // Salary list
  { path: 'new', component: SalaryFormComponent },   // Salary form
  { path: 'edit/:id', component: SalaryFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
