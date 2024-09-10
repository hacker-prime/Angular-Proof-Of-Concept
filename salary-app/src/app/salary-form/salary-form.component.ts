import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrl: './salary-form.component.css'
})
export class SalaryFormComponent implements OnInit {
 
  salaryForm: FormGroup = new FormGroup({});  

  constructor(private formBuilder: FormBuilder){

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
      console.log("valid")
    }
  }


}
