import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class ScheduleService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
  }

  URL_ADD_SCHEDULE = 'http://localhost:8000/schedule/add';
  URL_GET_ALL_SCHEDULE = 'http://localhost:8000/schedule/add';


  add(schedule) {
    return this.httpClient.post(this.URL_ADD_SCHEDULE, schedule, {headers: this.authService.getHeaderPost()});
  }

  getAll() {
    return this.httpClient.get(this.URL_GET_ALL_SCHEDULE, {headers: this.authService.getHeader(), responseType: 'text'});
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
