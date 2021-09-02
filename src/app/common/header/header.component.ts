import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AgeCalculatorComponent } from 'src/app/components/age-calculator/age-calculator.component';
import { BasicCalculatorComponent } from 'src/app/components/basic-calculator/basic-calculator.component';
import { BmiCalculatorComponent } from 'src/app/components/bmi-calculator/bmi-calculator.component';
import { BmiInfoComponent } from 'src/app/components/bmi-info/bmi-info.component';
import { InfoComponent } from 'src/app/components/info/info.component';
import { SalaryCalculatorComponent } from 'src/app/components/salary-calculator/salary-calculator.component';
// import information from 'src/app/json/info.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data: any;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.data = information
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

  // info(id: number) {
  //   this.route.queryParams
  //     .subscribe(params => {
  //       // console.log(params.id);
  //       if (id == 1) {
  //         this.router.navigate(['/info']);
  //         // console.log("id = 1");
  //       } else if (id == 2) {
  //         this.router.navigate(['/info']);
  //         // console.log("id = 2");          
  //       } else if (id == 3) {
  //         this.router.navigate(['/info']);
  //       }
  //     })
  // }

  info(){
    const dialogRef = this.dialog.open(BmiInfoComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}