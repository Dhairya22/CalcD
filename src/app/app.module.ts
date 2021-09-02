import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared.module';
import { HeaderComponent } from './common/header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InfoComponent } from './components/info/info.component';
// import { SalaryCalculatorComponent } from './components/salary-calculator/salary-calculator.component';
// import { AgeCalculatorComponent } from './components/age-calculator/age-calculator.component';
// import { BasicCalculatorComponent } from './components/basic-calculator/basic-calculator.component';
// import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    // SalaryCalculatorComponent,
    // AgeCalculatorComponent,
    // BasicCalculatorComponent,
    // BmiCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
