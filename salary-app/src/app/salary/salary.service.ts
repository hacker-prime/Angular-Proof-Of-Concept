import { Injectable } from '@angular/core';
import { Salary } from '../models/salary';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private salaries: Salary[] = [];

  constructor(){
    let savedSalaries = localStorage.getItem("salaries")
    this.salaries = savedSalaries? JSON.parse(savedSalaries) : []; 
  }

  // CRUD

  getSalaries(): Salary[] {
    return this.salaries;
  }

  getSalary(id: string): Salary | undefined {
    return this.salaries.find(sal => sal.id === id);
  }

  addSalary(Salary: Salary): void {

    Salary.id = Date.now().toString(); 

    this.salaries.push(Salary);
    console.log(this.salaries);
    localStorage.setItem("salaries", JSON.stringify(this.salaries));
  }  

  deleteSalary(id: string): void {
    let index = this.salaries.findIndex(sal => sal.id === id);
    this.salaries.splice(index,1)
    localStorage.setItem("salaries", JSON.stringify(this.salaries));
  } 

  updateSalary(id: string, updatedSalary: Salary): void {
    let index = this.salaries.findIndex(sal => sal.id === id)
    updatedSalary.id = id;
    this.salaries[index] = updatedSalary;
    localStorage.setItem("salaries", JSON.stringify(this.salaries));
  }

  




}


