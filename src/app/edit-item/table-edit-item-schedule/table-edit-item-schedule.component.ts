import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../../service/schedule.service';


@Component({
  selector: 'app-table-edit-item-schedule',
  templateUrl: './table-edit-item-schedule.component.html',
  styleUrls: ['./table-edit-item-schedule.component.css']
})
export class TableEditItemScheduleComponent implements OnInit {

  constructor(private scheduleService: ScheduleService) {
  }

  schedules = [];

  ngOnInit() {
    this.schedules = this.scheduleService.getAll();
  }

  delete(scheduleName, i) {
    this.schedules.splice(i, 1);
    this.scheduleService.delete(scheduleName);
  }

  edit(schedule, i) {

  }

  info(i) {
  }

}
