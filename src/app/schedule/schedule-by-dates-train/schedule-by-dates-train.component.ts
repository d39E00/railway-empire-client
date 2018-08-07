import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-schedule-by-dates-train',
  templateUrl: './schedule-by-dates-train.component.html',
  styleUrls: ['./schedule-by-dates-train.component.css']
})
export class ScheduleByDatesTrainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onSubmit(f: NgForm) {
    alert(f.value.dateDeparture + ' ' + f.value.dateArrival + ' ' + f.value.train);
  }
}