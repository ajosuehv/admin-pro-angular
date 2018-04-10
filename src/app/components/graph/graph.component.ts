import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styles: []
})
export class GraphComponent implements OnInit {

  @Input() ChartLabels: string[] = ['Dummy'];
  @Input() ChartData: number[] = [350];
  @Input() ChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
