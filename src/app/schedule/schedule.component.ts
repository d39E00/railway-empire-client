import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from '../models/schedule';
import {ScheduleTransfer} from '../models/schedule.transfer';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input() schedules: Schedule[];
  @Input() schedulesTransfer: ScheduleTransfer[];


  constructor() {
  }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.schedules = $event;
  }

  receiveMessageTransfer($event) {
    this.schedulesTransfer = $event;
  }

  getDelayBetweenTwoDates(dateDeparture, dateArrival) {
  }

  findTicket(schedule, i) {
  }

  findTicketTransfer(schedule) {
  }
}
