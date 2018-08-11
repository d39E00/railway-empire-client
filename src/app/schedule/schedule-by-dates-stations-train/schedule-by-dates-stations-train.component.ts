import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {StationService} from '../../service/station.service';
import {TrainService} from '../../service/train.service';
import {ScheduleService} from '../../service/schedule.service';
import {Schedule} from '../../models/schedule';
import swal from 'sweetalert2';

@Component({
  selector: 'app-schedule-by-dates-stations-train',
  templateUrl: './schedule-by-dates-stations-train.component.html',
  styleUrls: ['./schedule-by-dates-stations-train.component.css']
})
export class ScheduleByDatesStationsTrainComponent implements OnInit {

  stationsList: any = [];
  trainsList: any = [];
  schedules: Schedule[] = [];
  @Output() messageEvent = new EventEmitter<Schedule[]>();

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
    schedule.trainName = f.value.train;
    schedule.dateDeparture = f.value.dateDeparture;
    schedule.dateArrival = f.value.dateArrival;
    this.scheduleService.getByAllParameters(schedule).subscribe(res => {
      this.schedules = res;
      this.messageEvent.emit(this.schedules);
    }, error => {
      console.log(error);
      swal({
        title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
      });
    });
  }

  getDelayBetweenTwoDates(dateDeparture, dateArrival) {
  }

  findTicket(schedule, i) {

  }
}
