import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ScheduleService {

  constructor(private httpClient: HttpClient) {
  }

  URL_ADD_SCHEDULE = 'http://localhost:8000/schedule/add';
  URL_GET_ALL_SCHEDULE = 'http://localhost:8000/schedule/add';


  add(schedule) {
    return this.httpClient.post(this.URL_ADD_SCHEDULE, schedule);
  }

  getAll() {
    return this.httpClient.get(this.URL_GET_ALL_SCHEDULE);
  }

  delete(scheduleName) {
    // get id
    return scheduleName;
  }

  edit(schedule) {
  }

  info(schedule) {
  }

}
