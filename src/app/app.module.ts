
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule }from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {DefaultLayoutModule} from "./layout/default-layout/default-layout.module";
import { SharedModule } from "./shared/shared.module";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { ApiServices } from './Services/API_Services';
import { AuthGuardService } from './Services/auth-guard.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    DefaultLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  
  providers: [HttpClientModule,ApiServices,AuthGuardService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }