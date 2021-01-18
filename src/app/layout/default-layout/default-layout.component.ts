import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/Services/API_Services';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  sidebarOpened = true;
  constructor(private serviceProvider : ApiServices) { }

  ngOnInit(): void {
  }
  sidebartoggle(data) {
    this.sidebarOpened = !this.sidebarOpened
  }
} 
