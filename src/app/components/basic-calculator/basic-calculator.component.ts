import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-calculator',
  templateUrl: './basic-calculator.component.html',
  styleUrls: ['./basic-calculator.component.css']
})
export class BasicCalculatorComponent implements OnInit {

  basicCalculatorForm!: FormGroup;
  result: number;

  constructor() { }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm(){
    this.basicCalculatorForm = new FormGroup({
      num1: new FormControl('',Validators.required),
      num2: new FormControl('',Validators.required)
    })
  }

  addition(){
    this.result = this.basicCalculatorForm.controls.num1.value + this.basicCalculatorForm.controls.num2.value;
  }

  substraction(){
    this.result = this.basicCalculatorForm.controls.num1.value - this.basicCalculatorForm.controls.num2.value;
  }

  multiplication(){
    this.result = this.basicCalculatorForm.controls.num1.value * this.basicCalculatorForm.controls.num2.value;
  }
  division(){
    this.result = this.basicCalculatorForm.controls.num1.value / this.basicCalculatorForm.controls.num2.value;
    this.result = Math.round(this.result*100)/100;
  }

}
