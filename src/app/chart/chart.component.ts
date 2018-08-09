import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() {
  }

  visibleChartPeople = true;
  visibleChartProfit = false;
  visibleChartTickets = false;
  visibleChartStation = false;

  ngOnInit() {
  }

  visibledChartPeople() {
    this.visibleChartProfit = false;
    this.visibleChartTickets = false;
    this.visibleChartPeople = true;
    this.visibleChartStation = false;
  }

  visibledChartProfit() {
    this.visibleChartProfit = true;
    this.visibleChartTickets = false;
    this.visibleChartPeople = false;
    this.visibleChartStation = false;
  }

  visibledChartTickets() {
    this.visibleChartProfit = false;
    this.visibleChartTickets = true;
    this.visibleChartPeople = false;
    this.visibleChartStation = false;
  }

  visibledChartStations() {
    this.visibleChartProfit = false;
    this.visibleChartTickets = false;
    this.visibleChartPeople = false;
    this.visibleChartStation = true;
  }
}
