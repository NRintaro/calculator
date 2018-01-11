import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CalcService } from './calc.service';

import { AppComponent } from './app.component';
import { SumComponent } from './sum/sum.component';
import { SubComponent } from './sub/sub.component';


@NgModule({
  declarations: [
    AppComponent,
    SumComponent,
    SubComponent
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
