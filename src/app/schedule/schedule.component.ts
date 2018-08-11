import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from '../models/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input() schedules: Schedule[];

  constructor() {
  }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.schedules = $event;
  }

  getDelayBetweenTwoDates(dateDeparture, dateArrival) {
  }

  findTicket(schedule, i) {

  }
}
