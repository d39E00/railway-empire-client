import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-train',
  templateUrl: './table-train.component.html',
  styleUrls: ['./table-train.component.css']
})
export class TableTrainComponent implements OnInit {

  trains = [];

  constructor() {
  }

  ngOnInit() {
    const train = {trainName: 'first', cntCarriage: '12', cntSeats: '30'};
    this.trains.push(train);
  }

}
