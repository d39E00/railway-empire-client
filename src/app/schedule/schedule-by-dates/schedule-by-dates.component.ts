import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Schedule} from '../../models/schedule';
import swal from 'sweetalert2';
import {ScheduleService} from '../../service/schedule.service';


@Component({
  selector: 'app-schedule-by-dates',
  templateUrl: './schedule-by-dates.component.html',
  styleUrls: ['./schedule-by-dates.component.css']
})
export class ScheduleByDatesComponent implements OnInit {

  schedules: Schedule[] = [];
  @Output() messageEvent = new EventEmitter<Schedule[]>();

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const schedule = new Schedule();
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
}

