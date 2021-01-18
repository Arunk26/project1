import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as model from '../model/index';
import { ApiServices } from '../Services/API_Services';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  public registerAdded : model.RegisterModel ={}
  constructor(private serviceProvider : ApiServices ,private router : Router,private toastar : ToastrService) { }

  ngOnInit(): void {
    this.addFormControl()
  }
  addFormControl() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])

    });

  }
  submit(){
  this.registerAdded.name = this.registerForm.controls[`name`].value;
  this.registerAdded.password = this.registerForm.controls[`password`].value;
  this.registerAdded.email = this.registerForm.controls[`email`].value;
  if(this.registerForm.valid){
    this.serviceProvider.createuser(this.registerAdded).subscribe(result =>{ 
     if (result.message === 'email already registered') {
        this.toastar.error('email already registered'); 
      } else {
        this.router.navigate(['/Login'])
      this.toastar.success('Register SuccessFully')
      }
    } ,  err => { 
      this.toastar.error('Internal server Error')
    })
    } else if(this.registerForm.controls[`name`].value === ''){
      this.toastar.warning('Fill the UserName')
    } else if(this.registerForm.controls[`password`].value === ''){
      this.toastar.warning('Fill the password')
    } else if(this.registerForm.controls[`email`].value === ''){
      this.toastar.warning('Fill the email')
    } else {
      this.toastar.warning('Fill the Valid email')
    } 
  } 
  
}
