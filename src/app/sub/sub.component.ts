import { Component } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {
  model1 = 0;
  model2 = 0;
  result: number;

  constructor(private calcService: CalcService) { }

  calc(): number {
    return this.result = this.calcService.sub(this.model1, this.model2);
  }

}
