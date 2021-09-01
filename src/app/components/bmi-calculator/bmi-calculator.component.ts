import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  displayedColumns: string[] = ['evaluatedBmi', 'weight'];
  dataSource = [];
  tempArray = [];
  bmi: number;
  underWeight: "under weight";
  normalRange: "normal";
  Overweight: "over weight";
  obese: "obese";
  
  bmiForm! : FormGroup;
  
  constructor() { }
  
  ngOnInit(): void {
    this.prepareForm();
  }
  
  prepareForm(){
    this.bmiForm = new FormGroup({
      height: new FormControl(0,Validators.required),
      weight: new FormControl(0,Validators.required)
    })
  }
  
  resetForm(){
    this.bmiForm.reset();
  }

  name;
  
  caculate(){
    this.bmi = (this.bmiForm.controls.weight.value / (this.bmiForm.controls.height.value * this.bmiForm.controls.height.value)) * 10000;
    console.log(this.bmi);
    Math.round(this.bmi);
    this.tempArray.push(this.bmi);
    // this.name = "dhaiyra"
    if(this.bmi){
      if(this.bmi < 18){
        return this.underWeight
      } else if(this.bmi >=18 && this.bmi <= 24.9){
        return this.normalRange
      } else if(this.bmi > 25 && this.bmi <=29.9) {
        return this.Overweight
      } else {
        return this.obese
      }
    }
  }

  deleteRecord(index: number){
    this.tempArray.splice(index,1)
  }

}
