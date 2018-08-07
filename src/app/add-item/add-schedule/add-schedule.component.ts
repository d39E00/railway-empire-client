import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    alert(
      f.value.stationArrival
      + f.value.stationArrival +
      f.value.dateDeparture
      + f.value.dateArrival
      + f.value.trainSchedule);  
  }

}