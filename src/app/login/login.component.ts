import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServices } from '../Services/API_Services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private serviceProvider: ApiServices, private toastr: ToastrService,private router: Router ) { }

  ngOnInit(): void {
    this.addFormControl()
    this.serviceProvider.logout()
  }
  addFormControl() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });

  }
  login() {
    const email = this.loginForm.controls[`userName`].value;
    const password = this.loginForm.controls[`password`].value;
    //  alert(JSON.stringify(this.loginForm.value));
    if(this.loginForm.valid){
     this.serviceProvider.login(email, password).subscribe(
       
       result => {
        
        if(result.message !== "Email not exist!"){
           if (result.message === 'Logged in successfully!') {
            if(result.token !== null){
            localStorage.setItem('id', JSON.stringify(result.auth) );
            localStorage.setItem('Usertype', result.Usertype );
            localStorage.setItem('token', JSON.stringify(result.token) );
            localStorage.setItem('authToken', JSON.stringify(result.token) );
           this.router.navigate(['/Dashboard/defaultlayout'])
           // window.location.replace("http:\\localhost:4200");
            this.toastr.success('Logged in successfully!');
            }
           }else if (result.message === 'Incorrect password') {
            this.toastr.error('Incorrect password'); 
          } 
           
        } else 
        this.toastr.error('Email Does not Exit');
        }, err => {
          this.toastr.error('Internal server Error')
        }
        )  
      
      } else if (this.loginForm.controls[`userName`].value === '') {
        this.toastr.warning('Fill the email'); 
      }  else  {
        this.toastr.warning('Fill the password'); 
      }
    } 
    }
