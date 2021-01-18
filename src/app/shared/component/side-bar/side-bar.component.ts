import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  hiddenSideBar = false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("Usertype") === "student"){
      this.hiddenSideBar = true
    }
  }

}
 