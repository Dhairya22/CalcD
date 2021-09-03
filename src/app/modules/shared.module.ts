import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from './material.module';
import { BmiCalculatorComponent } from '../components/bmi-calculator/bmi-calculator.component';
import { AgeCalculatorComponent } from '../components/age-calculator/age-calculator.component';
import { BasicCalculatorComponent } from '../components/basic-calculator/basic-calculator.component';
import { SalaryCalculatorComponent } from '../components/salary-calculator/salary-calculator.component';
import { BmiInfoComponent } from '../components/bmi-info/bmi-info.component';
import { MarkupCalculatorComponent } from '../components/markup-calculator/markup-calculator.component';
import { GstCalculatorComponent } from '../components/gst-calculator/gst-calculator.component';



@NgModule({
  declarations: [
    BmiCalculatorComponent,
    AgeCalculatorComponent,
    BasicCalculatorComponent,
    SalaryCalculatorComponent,
    MarkupCalculatorComponent,
    GstCalculatorComponent,
    BmiInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],

  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
