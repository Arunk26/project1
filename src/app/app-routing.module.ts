import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes : Routes  = [
  {path:'',redirectTo:"/Login",pathMatch:"full"},
  {path: 'Dashboard',  loadChildren: './layout/default-layout/default-layout.module#DefaultLayoutModule'},  
  {path: 'Login', component : LoginComponent},             
  {path: 'register', component : RegisterComponent},
  {path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
