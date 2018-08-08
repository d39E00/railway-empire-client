import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  visibleStation = true;
  visibleTrain = false;
  visibleSchedule = false;

  constructor() {
  }

  ngOnInit() {
  }

  visibledTrain() {
    this.visibleTrain = true;
    this.visibleSchedule = false;
    this.visibleStation = false;
  }

  visibledSchedule() {
    this.visibleTrain = false;
    this.visibleSchedule = true;
    this.visibleStation = false;
  }

  visibledStation() {
    this.visibleTrain = false;
    this.visibleSchedule = false;
    this.visibleStation = true;
  }
}
