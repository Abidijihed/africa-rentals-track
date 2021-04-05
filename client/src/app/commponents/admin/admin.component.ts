import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from "../../services/products.service"
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productForm: FormGroup
  constructor(private add: FormBuilder,private objectService:ProductsService) { 
    this.productForm = this.add.group({
      name: [''],
      imageurl: [''],
      price: [''],
      type: [''],
      description: ['']

    });
  }
  submit() {
      this.objectService
      .addProduct(this.productForm.value)
      .subscribe(object =>{console.log(object,'hhhhhhhhhhhhh')})
    }
  ngOnInit(): void {
  }

}