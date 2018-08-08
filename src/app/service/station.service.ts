import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StationService {
  constructor(private httpClient: HttpClient) {
  }

  URL_GET_DELETED_STATIONS = 'http://localhost:8000/station/deletedStations';
  URL_REESTABLISH_STATION = 'http://localhost:8000/station/reestablish/';
  URL_DELETE_STATION = 'http://localhost:8000/station/delete/';
  URL_UPDATE_STATION = 'http://localhost:8000/station/update/';
  URL_ADD_STATION = 'http://localhost:8000/station/add';
  URL_GET_ALL = 'http://localhost:8000/station/all';

  add(station) {
    return this.httpClient.post(this.URL_ADD_STATION, station);
  }

  getDeleted() {
    return this.httpClient.get(this.URL_GET_DELETED_STATIONS);
  }

  reestablishStation(station) {
    return this.httpClient.get(this.URL_REESTABLISH_STATION + station);
  }

  getAll() {
    return this.httpClient.get(this.URL_GET_ALL);
  }

  edit(station) {
    return this.httpClient.put(this.URL_UPDATE_STATION, station);
  }

  delete(station) {
    return this.httpClient.delete(this.URL_DELETE_STATION + station);
  }
}
