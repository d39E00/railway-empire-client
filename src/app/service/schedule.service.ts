import { Injectable } from '@angular/core';

@Injectable()
export class ScheduleService {

  constructor() { }

  schedules = [];
  add(schedule) {
    /*
    '/schedule/add'
    */
    alert('add schedule');
  }

  getAll() { return this.schedules; }

  delete(scheduleName) { 
    // get id
  }

  edit(schedule) { }

  info(schedule) { }

}