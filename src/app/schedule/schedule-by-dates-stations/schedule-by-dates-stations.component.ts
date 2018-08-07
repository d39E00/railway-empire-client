import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-schedule-by-dates-stations',
  templateUrl: './schedule-by-dates-stations.component.html',
  styleUrls: ['./schedule-by-dates-stations.component.css']
})
export class ScheduleByDatesStationsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    alert(f.value.dateDeparture + ' ' + f.value.dateArrival + ' ' + f.value.stationDeparture + ' ' + f.value.stationArrival);
  }
}
