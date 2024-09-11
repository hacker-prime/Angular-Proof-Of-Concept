import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaryService } from '../salary/salary.service';
import { Salary } from '../models/salary';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrl: './salary-form.component.css'
})
export class SalaryFormComponent implements OnInit {
 
  salaryForm: FormGroup = new FormGroup({});  

  constructor(
    private formBuilder: FormBuilder,
    private salaryService: SalaryService){

  }

  ngOnInit(): void {

    this.salaryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', Validators.required]
    })

  }

  onSubmit(){
    if(this.salaryForm.valid){
      // console.log("valid")
      let salary: Salary = this.salaryForm.value;
      this.salaryService.addSalary(salary) 
    }
  }


}
