import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryFormComponent } from '../salary-form/salary-form.component';
import { SalaryListComponent } from '../salary-list/salary-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SalaryFormComponent,
    SalaryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalaryModule { }


