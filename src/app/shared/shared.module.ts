import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SideBarComponent } from './component/side-bar/side-bar.component'
import { DemoMaterialModule } from '../material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router'
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
  ],
})
export class SharedModule { }
