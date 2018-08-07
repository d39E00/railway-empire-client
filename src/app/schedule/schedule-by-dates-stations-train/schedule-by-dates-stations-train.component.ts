import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-schedule-by-dates-stations-train',
  templateUrl: './schedule-by-dates-stations-train.component.html',
  styleUrls: ['./schedule-by-dates-stations-train.component.css']
})
export class ScheduleByDatesStationsTrainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    alert(f.value.dateDeparture + ' '
      + f.value.dateArrival + ' ' + f.value.stationDeparture + ' ' + f.value.stationArrival + ' ' + f.value.train);
  }

}
