import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-schedule-by-dates',
  templateUrl: './schedule-by-dates.component.html',
  styleUrls: ['./schedule-by-dates.component.css']
})
export class ScheduleByDatesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    alert(f.value.dateDeparture + '' + f.value.dateArrival);
  }
}
