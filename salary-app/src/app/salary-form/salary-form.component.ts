import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaryService } from '../salary/salary.service';
import { Salary } from '../models/salary';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrl: './salary-form.component.css'
})
export class SalaryFormComponent implements OnInit {
 
  salaryForm: FormGroup = new FormGroup({});  

  constructor(
    private formBuilder: FormBuilder,
    private salaryService: SalaryService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ){

  }

  ngOnInit(): void {

    this.salaryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', Validators.required]
    })

    let id = this.activatedroute.snapshot.paramMap.get('id')

    // If we are at the '/new' endpoint we do not have an ID because we are creating a new salary
    if(id){
      
      let salary = this.salaryService.getSalary(id)

      if(salary)
         this.salaryForm.patchValue(salary)   

    }

  }

  onSubmit(){
    if(this.salaryForm.valid){
      // console.log("valid")
      let salary: Salary = this.salaryForm.value;

      let id = this.activatedroute.snapshot.paramMap.get('id')

      if(id){

        // UPDATE - If we have an id we know we are updating/editing your/an employee's salary info
        this.salaryService.updateSalary(id, salary)  
        console.log('UPDATED')
        
      } else{

        // NEW - We are at the new endpoint
        this.salaryService.addSalary(salary) 

      }

      //this is how you can navigate/redirect the user inside the applicaton from one page to the next
      this.router.navigate(['/list'])
    }
  }


}
