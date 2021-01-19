import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscriber } from 'rxjs';
import *  as model from   "../model/index";
import { ApiServices } from '../Services/API_Services';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productModel : model.Product = {}
public productForm : FormGroup;
  productId: any;
  constructor(private serviceProvider : ApiServices,private toastar : ToastrService,private _router : Router ,private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.addFormControl(null)
    
    this.router.params.subscribe((params =>{
         this.productId = params.id
    }))
    this.getProduct();
  }
  addFormControl(data){
    if(data === null){
      this.productForm = new FormGroup({
        productName : new FormControl('', Validators.required),
        quantity : new FormControl('',Validators.required),
        price : new FormControl('',Validators.required),
      })
    } else {
      this.productForm = new FormGroup({
        productName : new FormControl(data.productName, Validators.required),
        quantity : new FormControl(data.quantity,Validators.required),
        price : new FormControl(data.price,Validators.required),
      })
    }
   
  }
  getProduct(){
    this.serviceProvider.getProduct().subscribe(result =>{
      const filterdata = result.filter(obj => obj._id === this.productId)
      this.addFormControl(filterdata[0])
    })
  }
  submit(){
    this.productModel.productName = this.productForm.controls[`productName`].value
    this.productModel.quantity = this.productForm.controls[`quantity`].value
    this.productModel.price = this.productForm.controls[`price`].value
    this.serviceProvider.createProduct(this.productModel,this.productId).subscribe(reuslt=>{
      this.toastar.success("Product Added SuccessFully")
      this._router.navigate(['/Dashboard/defaultlayout']);
    })
 
  }
}
