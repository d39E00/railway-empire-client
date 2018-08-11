import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Schedule} from '../../models/schedule';
import {ScheduleService} from '../../service/schedule.service';
import swal from 'sweetalert2';
import {TrainService} from '../../service/train.service';


@Component({
  selector: 'app-schedule-by-dates-train',
  templateUrl: './schedule-by-dates-train.component.html',
  styleUrls: ['./schedule-by-dates-train.component.css']
})
export class ScheduleByDatesTrainComponent implements OnInit {

  trainsList: any = [];
  schedules: Schedule[] = [];
  @Output() messageEvent = new EventEmitter<Schedule[]>();

  constructor(private scheduleService: ScheduleService, private trainService: TrainService) {
    trainService.getAllForAutoComplete().subscribe(res => {
      this.trainsList = res;
    });
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const schedule = new Schedule();
    schedule.trainName = f.value.trainName;
    schedule.dateDeparture = f.value.dateDeparture;
    schedule.dateArrival = f.value.dateArrival;
    this.scheduleService.getByDates(schedule).subscribe(res => {
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
