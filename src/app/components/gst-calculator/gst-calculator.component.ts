import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gst-calculator',
  templateUrl: './gst-calculator.component.html',
  styleUrls: ['./gst-calculator.component.css']
})
export class GstCalculatorComponent implements OnInit {

  gstForm! : FormGroup;
  result: any;
  totalAmount: number;
  formValues: Object;

  constructor() { }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm(){
    this.gstForm = new FormGroup({
      amount: new FormControl('',Validators.required),
      gst: new FormControl('',Validators.required)
    })
  }

  calculate(){
    this.result = this.gstForm.controls.amount.value - (this.gstForm.controls.amount.value * (100 / (100 + this.gstForm.controls.gst.value)));
    this.result = Math.round(this.result*100)/100;
    this.totalAmount = this.result + this.gstForm.controls.amount.value;
    this.totalAmount = Math.round(this.totalAmount*100)/100;
  }

  resetForm(){
    this.gstForm.reset();
  }

}
