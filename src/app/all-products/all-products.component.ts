import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService, ToastToken } from 'ngx-toastr';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
products:Array<any>=[]
  constructor(private productService:ProductService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    console.log("oninit allproductall");
    
    this.productService.getAllProduct().subscribe(resp=>{
      console.log("allproducts",resp);
      this.products=resp.data;
    })

  }

  deleteProduct(productId:any)
  {
    this.productService.deleteProduct(productId).subscribe(resp=>{
      this.toastr.success("Category Deleted...")
      this.products=this.products.filter(p=>p.productId!=productId)
      this.router.navigateByUrl("/allproduct")
    },err=>{
      this.toastr.success("errer")
    })
  }

}
