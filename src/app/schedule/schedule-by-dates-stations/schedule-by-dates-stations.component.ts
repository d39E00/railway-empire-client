import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {StationService} from '../../service/station.service';
import {TrainService} from '../../service/train.service';
import {ScheduleService} from '../../service/schedule.service';
import {Schedule} from '../../models/schedule';
import swal from 'sweetalert2';
import {ScheduleTransfer} from '../../models/schedule.transfer';

@Component({
  selector: 'app-schedule-by-dates-stations',
  templateUrl: './schedule-by-dates-stations.component.html',
  styleUrls: ['./schedule-by-dates-stations.component.css']
})
export class ScheduleByDatesStationsComponent implements OnInit {

  stationsList: any = [];
  trainsList: any = [];
  schedules: Schedule[] = [];
  schedulesTransfer: ScheduleTransfer[] = [];
  transfer = false;
  @Output() messageEvent = new EventEmitter<Schedule[]>();
  @Output() messageTransferEvent = new EventEmitter<ScheduleTransfer[]>();



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
    schedule.dateDeparture = f.value.dateDeparture;
    schedule.dateArrival = f.value.dateArrival;
    this.scheduleService.getByStationsAndDates(schedule).subscribe(res => {
      this.schedules = res;
      this.messageEvent.emit(this.schedules);
    }, error => {
      console.log(error);
      swal({
        title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
      });
    });
    if (this.transfer) {
      alert('hey');
      this.scheduleService.getTransfer(schedule).subscribe(res => {
        this.schedulesTransfer = res;
        this.messageTransferEvent.emit(this.schedulesTransfer);
      }, error => {
        console.log(error);
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
    }
  }
}
