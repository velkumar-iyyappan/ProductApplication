import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'price','edit','delete'];

  constructor(private router:Router,private api: ProductService)
  {
    
  }

  ngOnInit(): void {
    
    this.dataSource = new MatTableDataSource<any>();


    this.api.getProducts().subscribe((data:any)=>{
      
      //console.log(data);
      this.dataSource.data = data;
      this.dataSource._updateChangeSubscription();
      
    });
  }

  edit(element:any)
  {
      //console.log(element);      
      this.router.navigate(['/addproduct', JSON.stringify(element)]);
      //this.router.navigate(['/addproduct']);
  }

  delete(id:any)
  {
    this.api.deleteProduct(id).subscribe((res:any)=>{
      //console.log(res);
      this.api.getProducts().subscribe((data:any)=>{      
        
        this.dataSource.data = data;
        this.dataSource._updateChangeSubscription();
        
      });
      
    });
  }

  
}
