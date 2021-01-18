import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { DashboardLayoutComponent } from 'src/app/dashboard/dashboard-layout/dashboard-layout.component';
import {RouterModule} from "@angular/router"
import { SharedModule } from 'src/app/shared/shared.module';
import { DemoMaterialModule } from 'src/app/material-module';
import {DefaultLayoutRoutingModule} from './default-layout-routing.module'
import {AgmCoreModule} from '@agm/core'
@NgModule({
  declarations: [
    DefaultLayoutComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,DemoMaterialModule,
    DefaultLayoutRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDVJACDMfVpoEKasBx_YhrbcAlVuET9vAw"
    })
  ]
}) 
export class DefaultLayoutModule { }
