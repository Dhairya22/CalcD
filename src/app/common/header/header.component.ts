import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AgeCalculatorComponent } from 'src/app/components/age-calculator/age-calculator.component';
import { BasicCalculatorComponent } from 'src/app/components/basic-calculator/basic-calculator.component';
import { BmiCalculatorComponent } from 'src/app/components/bmi-calculator/bmi-calculator.component';
import { SalaryCalculatorComponent } from 'src/app/components/salary-calculator/salary-calculator.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openBMICalculator(): void {
    const dialogRef = this.dialog.open(BmiCalculatorComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openAgeCalculator(): void {
    const dialogRef = this.dialog.open(AgeCalculatorComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openBasicCalculator(): void {
    const dialogRef = this.dialog.open(BasicCalculatorComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openSalaryCalculator(): void {
    const dialogRef = this.dialog.open(SalaryCalculatorComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
