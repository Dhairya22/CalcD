import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-discount-calculator',
  templateUrl: './discount-calculator.component.html',
  styleUrls: ['./discount-calculator.component.css']
})
export class DiscountCalculatorComponent implements OnInit {
  
  discountForm!: FormGroup;
  discount: number;
  payableAmount: number;
  formValues: any;

  constructor() { }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm(){
    this.discountForm = new FormGroup({
      amount: new FormControl('',Validators.required),
      discount: new FormControl('',Validators.required)
    })
  }

  calculate(){


    // if (value >= 1000) {
    //   return Math.round(value / 1000) + '%';
    // }
    this.discount = this.discountForm.controls.amount.value - ((this.discountForm.controls.amount.value * this.discountForm.controls.discount.value) / 100);
    this.payableAmount = this.discountForm.controls.amount.value - ((this.discount / 100) * this.discountForm.controls.amount.value);
    // this.payableAmount = Math.round(this.payableAmount*100)/100;
  }

  formatLabel(value: number) {
  }

  resetForm(){
    this.discountForm.reset();
  }

}
