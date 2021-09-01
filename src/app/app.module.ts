import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared.module';
import { HeaderComponent } from './common/header/header.component';
// import { AgeCalculatorComponent } from './components/age-calculator/age-calculator.component';
// import { BasicCalculatorComponent } from './components/basic-calculator/basic-calculator.component';
// import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // AgeCalculatorComponent,
    // BasicCalculatorComponent,
    // BmiCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
