import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../salary/salary.service';
import { Salary } from '../models/salary';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrl: './salary-list.component.css'
})
export class SalaryListComponent implements OnInit {
  
  salaries: Salary[] = [];

  constructor(private salaryService: SalaryService){

  }
  
  ngOnInit(): void {

    this.salaries = this.salaryService.getSalaries();

  }

  deleteSalary(id: string){
    // The component calls the service method (salary) to delete something
    this.salaryService.deleteSalary(id);

  }  


}
