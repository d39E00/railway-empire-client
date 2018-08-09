import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Station} from '../models/station';

@Injectable()
export class StationService {
  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
  }

  URL_GET_DELETED_STATIONS = 'http://localhost:8000/station/deletedStations';
  URL_REESTABLISH_STATION = 'http://localhost:8000/station/reestablish/';
  URL_DELETE_STATION = 'http://localhost:8000/station/delete/';
  URL_UPDATE_STATION = 'http://localhost:8000/station/update/';
  URL_ADD_STATION = 'http://localhost:8000/station/add';
  URL_GET_ALL = 'http://localhost:8000/station/all';
  URL_FOR_AUTO_COMPLETE = 'http://localhost:8000/station/auto/stations';

  add(station) {
    return this.httpClient.post<Station>(this.URL_ADD_STATION, station, {headers: this.authService.getHeaderPost()});
  }

  getDeleted() {
    return this.httpClient
      .get<Station[]>(this.URL_GET_DELETED_STATIONS, {headers: this.authService.getHeader()});
  }

  reestablishStation(station) {
    return this.httpClient.get(this.URL_REESTABLISH_STATION + station, {headers: this.authService.getHeader(), responseType: 'text'});
  }

  getAll() {
    return this.httpClient.get(this.URL_GET_ALL, {headers: this.authService.getHeader(), responseType: 'text'});
  }

  edit(station) {
    return this.httpClient.put(this.URL_UPDATE_STATION, station, {headers: this.authService.getHeader(), responseType: 'text'});
  }

  delete(station) {
    return this.httpClient.delete(this.URL_DELETE_STATION + station, {headers: this.authService.getHeader(), responseType: 'text'});
  }

  getAllForAutoComplete() {
    return this.httpClient.get(this.URL_FOR_AUTO_COMPLETE, {headers: this.authService.getHeader()});
  }
}
