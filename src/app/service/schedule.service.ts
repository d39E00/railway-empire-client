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
  URL_GET_BY_ALL_PARAMETERS = 'http://localhost:8000/schedule/direct';
  URL_GET_BY_STATIONS_AND_DATES = 'http://localhost:8000/schedule/directByStations';
  URL_GET_BY_DATES = 'http://localhost:8000/schedule/directByDates';
  URL_GET_BY_TRAIN_AND_DATES = 'http://localhost:8000/schedule/directByTrain';



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

  getByAllParameters(schedule) {
    return this.httpClient.post<Schedule[]>(this.URL_GET_BY_ALL_PARAMETERS, schedule, {headers: this.authService.getHeaderPost()});
  }

  getByStationsAndDates(schedule) {
    return this.httpClient.post<Schedule[]>(this.URL_GET_BY_STATIONS_AND_DATES, schedule, {headers: this.authService.getHeaderPost()});
  }

  getByDates(schedule) {
    return this.httpClient.post<Schedule[]>(this.URL_GET_BY_DATES, schedule, {headers: this.authService.getHeaderPost()});
  }

  getByDatesAndTrain(schedule) {
    return this.httpClient.post<Schedule[]>(this.URL_GET_BY_TRAIN_AND_DATES, schedule, {headers: this.authService.getHeaderPost()});
  }
}
