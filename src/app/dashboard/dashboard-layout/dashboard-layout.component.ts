import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/Services/API_Services';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email','Usertype'];
  dataSource : any
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private serviceProvider : ApiServices, private  router : Router) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.serviceProvider.getUser().subscribe(result => {
      this.dataSource = new MatTableDataSource<any>(result);
      this.dataSource.paginator = this.paginator;
    })
  }
  navigate(data){
    alert('asaaa')
    this.router.navigate([`/Dashboard/Userdetails/${data}`])
  }
}
