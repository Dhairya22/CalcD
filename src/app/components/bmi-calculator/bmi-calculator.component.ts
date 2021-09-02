import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {
  
  @ViewChild(MatTable) table: MatTable<any>;
  
  displayedColumns: string[] = ['evaluatedBmi', 'weight'];
  dataSource = [];
  tempArray = [];
  bmi: number;
  roundOfBmi: number;

  tempObj = {
    message : "",
    weightMessage: ""
  };
  message: string = "";
  weightMessage: string = "";
  // underWeight: "under weight";
  // normalRange: "normal";
  // Overweight: "over weight";
  // obese: "obese";
  
  bmiForm! : FormGroup;
  
  constructor() { }
  
  ngOnInit(): void {
    this.prepareForm();
  }
  
  prepareForm(){
    this.bmiForm = new FormGroup({
      height: new FormControl('',Validators.required),
      weight: new FormControl('',Validators.required)
    })
  }
  
  resetForm(){
    this.bmiForm.reset();
  }


  calculate(){
    this.bmi = (this.bmiForm.controls.weight.value / (this.bmiForm.controls.height.value * this.bmiForm.controls.height.value)) * 10000;
    console.log(this.bmi);
    this.bmi = Math.round(this.bmi*100)/100;
    // this.tempArray.push(this.bmi);
    if(this.bmi){
      if(this.bmi < 18){
        return this.tempObj = {
          message : "Under Weight",
          weightMessage : "Lets start gyming !! 🙁"
        }
      } else if(this.bmi >=18 && this.bmi <= 24.9){
        return this.tempObj = {
          message : "Normal",
          weightMessage : "I'm Fit !! 😎"
        }
      } else if(this.bmi > 25 && this.bmi <=29.9) {
        return this.tempObj = {
          message : "Over Weight",
          weightMessage : "Ohhh Nooo !! 😧"
        }
      } else {
        return this.tempObj = {
          message : "Obese",
          weightMessage : "God Bless me !! 😵"
        }
      }
    }
    
  }

  deleteRecord(index: number){
    this.tempArray.splice(index,1)
    this.table.renderRows();
  }

}
