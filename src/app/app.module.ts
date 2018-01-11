import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SumComponent } from './sum/sum.component';

import { CalcService } from './calc.service';


@NgModule({
  declarations: [
    AppComponent,
    SumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CalcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
