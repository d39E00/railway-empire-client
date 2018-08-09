import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ScheduleService} from '../../service/schedule.service';
import {Schedule} from '../../models/schedule';
import {TrainService} from '../../service/train.service';
import {StationService} from '../../service/station.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  stationsList: any = [];
  trainsList: any = [];

  constructor(private scheduleService: ScheduleService, private trainService: TrainService, private stationService: StationService) {
    this.stationService.getAllForAutoComplete().subscribe(res => {
      this.stationsList = res;
    });
    this.trainService.getAllForAutoComplete().subscribe(res => {
      this.trainsList = res;
    });
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const schedule = new Schedule();
    schedule.stationDepartureName = f.value.stationDeparture;
    schedule.stationArrivalName = f.value.stationArrival;
    schedule.dateDeparture = f.value.dateDeparture.replace('T', ' ') + ':00';
    schedule.dateArrival = f.value.dateArrival !== '' ? f.value.dateArrival.replace('T', ' ') + ':00' : '';
    schedule.trainName = f.value.trainSchedule;
    this.scheduleService.add(schedule).subscribe(
      data => alert('success'),
      error => alert(JSON.stringify(error)));
  }
}
