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

  schedules: any = [];

  ngOnInit() {
    this.scheduleService.getAll().subscribe(
      res => this.schedules = res,
      error1 => alert(JSON.stringify(error1)));
  }

  delete(scheduleName, i) {
    this.scheduleService.delete(scheduleName).subscribe(
      res => this.schedules.splice(i, 1),
      error => alert(JSON.stringify(error)));
  }

  edit(schedule, i) {
    // TODO
  }

  info(i) {
    // TODO
  }
}
