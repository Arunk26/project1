  import { Injectable } from '@angular/core';
  import {  CanActivate, Router } from '@angular/router';
  import { ApiServices } from "../Services/API_Services";
  
  @Injectable()
  export class AuthGuardService implements CanActivate {
    constructor(private authService: ApiServices, private router: Router) { }

    canActivate(): boolean {
      if (this.authService.loggedin()) {
        return true;
      } else {
        this.router.navigate(['/Login']);
        return false;
  
      }
    }
  
  } 
