import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryFormComponent } from '../salary-form/salary-form.component';
import { SalaryListComponent } from '../salary-list/salary-list.component';



@NgModule({
  declarations: [
    SalaryFormComponent,
    SalaryListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SalaryModule { }
