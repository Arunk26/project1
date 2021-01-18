import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/Services/API_Services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() togglesidebar : EventEmitter<any> = new EventEmitter();
    constructor(private serviceProvider : ApiServices ,private router : Router) { }

  ngOnInit(): void {
  }
  toggeleSideBar() {
   this.togglesidebar.emit();
  }
  logout(){
    this.serviceProvider.logout()
    this.router.navigate(['/Login'])
  }
} 
