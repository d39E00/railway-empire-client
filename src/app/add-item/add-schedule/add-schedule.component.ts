import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ScheduleService} from '../../service/schedule.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const schedule = {
      stationDepartureName: f.value.stationDeparture,
      stationArrivalName: f.value.stationArrival,
      dateDeparture: f.value.dateDeparture.replace('T', ' ') + ':00',
      dateArrival: f.value.dateArrival !== '' ? f.value.dateArrival.replace('T', ' ') + ':00' : '',
      trainName: f.value.trainSchedule
    };
    this.scheduleService.add(schedule);
  }
}
