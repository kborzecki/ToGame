import { Component, Input } from '@angular/core';

@Component({
  selector: 'to-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  @Input()
  money: number;
  @Input()
  income: number;
}
