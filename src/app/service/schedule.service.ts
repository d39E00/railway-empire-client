import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Schedule} from '../models/schedule';

@Injectable()
export class ScheduleService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
  }

  URL_ADD_SCHEDULE = 'http://localhost:8000/schedule/add';
  URL_GET_ALL_SCHEDULE = 'http://localhost:8000/schedule/all';
  URL_DELETE_SCHEDULE = 'http://localhost:8000/schedule/delete/';
  URL_UPDATE_SCHEDULE = 'http://localhost:8000/schedule/update';


  add(schedule) {
    return this.httpClient.post(this.URL_ADD_SCHEDULE, schedule, {headers: this.authService.getHeaderPost()});
  }

  getAll() {
    return this.httpClient.get<Schedule[]>(this.URL_GET_ALL_SCHEDULE, {headers: this.authService.getHeader()});
  }

  delete(schedule) {
    return this.httpClient.delete(this.URL_DELETE_SCHEDULE + schedule, {headers: this.authService.getHeader()});
  }

  edit(schedule) {
    return this.httpClient.put(this.URL_UPDATE_SCHEDULE, schedule, {headers: this.authService.getHeaderPost()});
  }

  info(schedule) {
  }

}
