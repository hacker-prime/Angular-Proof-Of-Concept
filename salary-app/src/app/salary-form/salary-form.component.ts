import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrl: './salary-form.component.css'
})
export class SalaryFormComponent {

  salaryForm: FormGroup = new FormGroup({});  

  onSubmit(){
    
  }


}
