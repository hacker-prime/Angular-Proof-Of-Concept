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
    return this.salaries.find(res => res.id === id);
  }

  addSalary(Salary: Salary): void {
    this.salaries.push(Salary);
    console.log(this.salaries);
    localStorage.setItem("salaries", JSON.stringify(this.salaries));
  }  

  deleteSalary(id: string): void {
    let index = this.salaries.findIndex(res => res.id === id);
    this.salaries.splice(index,1)
    localStorage.setItem("salaries", JSON.stringify(this.salaries));
  } 

  updateSalary(updatedSalary: Salary): void {
    let index = this.salaries.findIndex(res => res.id === updatedSalary.id)
    this.salaries[index] = updatedSalary;
    localStorage.setItem("salaries", JSON.stringify(this.salaries));
  }




}


