import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../../layout/default-layout/default-layout.component';
import { DashboardLayoutComponent } from '../../dashboard/dashboard-layout/dashboard-layout.component';
import { AuthGuardService } from 'src/app/Services/auth-guard.service';

const routes: Routes = [
  { path: '', component : DefaultLayoutComponent,
   children:[ 
    { path: 'defaultlayout', component: DashboardLayoutComponent, canActivate:[AuthGuardService] },
   ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultLayoutRoutingModule { }
