import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment'


@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent implements OnInit {

  dateValue;
  monDiff;
  age_dt;
  year;
  age;

  dateForm! : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.dateForm = new FormGroup({
      datePicker: new FormControl('',Validators.required)
    });
  }

  calculate(){
    console.log("working !!!");
    this.dateValue = this.dateForm.controls.datePicker.value;
    console.log("date :",this.dateValue);
    this.monDiff = Date.now() - this.dateValue.getTime();
    console.log("mon Diff ",this.monDiff);
    this.age_dt = new Date(this.monDiff);
    this.year = this.age
    
  }

  dateInString;
  dateInNumber;
  dateChangedCheck(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.dateInString = moment(event.value).format("DD/MM/YYYY")
    console.log(typeof(this.dateInString));
    
  }

  resetForm(){
    this.dateForm.reset();
  }

}
