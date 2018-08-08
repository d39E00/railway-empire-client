import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  visibleSchedule = true;
  visibleTrain = false;
  visibleStation = false;

  constructor() {
  }

  ngOnInit() {
  }

  trainSubmit() {
    this.visibleSchedule = false;
    this.visibleStation = false;
    this.visibleTrain = true;
  }

  scheduleSubmit() {
    this.visibleSchedule = true;
    this.visibleStation = false;
    this.visibleTrain = false;
  }

  stationSubmit() {
    this.visibleSchedule = false;
    this.visibleStation = true;
    this.visibleTrain = false;
  }

}
