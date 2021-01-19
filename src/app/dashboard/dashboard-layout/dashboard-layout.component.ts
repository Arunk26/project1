import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServices } from 'src/app/Services/API_Services';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantity','Price','total',"action"];
  dataSource : any
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private serviceProvider : ApiServices, private  _router : Router
   , private toastar : ToastrService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.serviceProvider.getProduct().subscribe(result => {
      this.dataSource = new MatTableDataSource<any>(result);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
   }

   addProduct() {
    this._router.navigate(['/Dashboard/product']);
  }

  delete(data){
    this.serviceProvider.deleteProduct(data).subscribe(result => {
      this.toastar.success("Deleted SuccesFully")
      this.getProduct()
    })
  }
}
