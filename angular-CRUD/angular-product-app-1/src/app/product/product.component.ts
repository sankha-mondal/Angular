import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Array<Product>=[];   // product array memory created..
  storeMsg:string ="";
  deleteMsg:string="";
  flagU:boolean = false;
  flagS:boolean = false;
  pid:number=0;
  price:number=0.0;
  searchText: string="";
  updateMsg:string ="";

  constructor(public ps:ProductService) { } // DI for ProductService 

  // this is life cycle method it will call only once.
  ngOnInit(): void {
    this.loadAllProduct();  //  To load the products automatically
  }

  //  Retrive Operation:
  loadAllProduct(): void {
    this.ps.loadAllProductInfo().subscribe(result=> {
      this.products=result;
    })    
  }

  //  Store Product Operation: 
  storeRec(): void {
    this.flagS = true;
  }

  storeProductDb(productRef:NgForm): void {
    let product = productRef.value;
    console.log(product);
    this.ps.storeProduct(product).subscribe(result=> {
      this.storeMsg=result;
      alert(this.storeMsg);
    },error=>console.log(error),()=> {
      this.flagS=false;
      this.loadAllProduct();
      this.flagS = false;
    })
    productRef.reset();
  }

  // Delete Product Operation:
  deleteRec(pid:number): void {
   // console.log(pid);
   if(confirm("Are you sure..!?")) {
    this.ps.deleteProduct(pid).subscribe(result=> {
      this.deleteMsg=result;
      alert(this.deleteMsg);
    },error=>console.log(error),()=> {
      this.loadAllProduct();
    })
   }

  }


  //  Update Product Operation:
  updateRec(product:Product): void {
    this.flagU = true;
    this.pid = product.pid;
    this.price=product.price;
    //console.log(product);
  }

  updateProductFromDb() {
    let product = {pid:this.pid,price:this.price}
    this.ps.updateProdcut(product).subscribe(result=> {
      this.updateMsg=result
    },error=> console.log(error),()=> {
      this.flagU=false;
      this.loadAllProduct();
    })
  }

  
}