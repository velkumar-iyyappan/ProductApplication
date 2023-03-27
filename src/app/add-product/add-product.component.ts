
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form!: FormGroup; 
  data: any;
  

  constructor(private router:Router,private route: ActivatedRoute,private fb: FormBuilder,private api: ProductService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
    
      name: '',
      price: ''
    });

    this.route.params.subscribe(params => {
      this.data = JSON.parse(params['data']);

      console.log(this.data);

      if(this.data.id >0)
      {
        this.form.setValue({
          name: this.data.name,
          price: this.data.price
        });
      }
      
    });
    
  }

  onSubmit()
  {
    const formData = this.form.value;
    console.log(this.form.value);

    //const productData: Product = { id:0,name: this.form.value.name, price: this.form.value.price };

    if(this.data != null && this.data.id>0)
    {
      this.api.updateProduct(this.data.id,formData).subscribe((data:any)=>{
      
        if(data == true)
        {
         this.router.navigateByUrl('/displayproduct');
        }
         
       });

       this.data  ={};
    }
    else{

      this.api.createProduct(formData).subscribe((data:any)=>{
      
        if(data == true)
        {
         this.router.navigateByUrl('/displayproduct');
        }
         
       });
      }    
  }
}
