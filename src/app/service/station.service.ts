import { Injectable } from '@angular/core';

@Injectable()
export class StationService {
  stations = [];

  constructor() { }

  add(station) {
    /* add google.map
    '/station/add'
    */
    alert('add');
  }

  getDeleted() {
    // "/station/deletedStations";
    let station = { name: 'station', latitude: '22', longitude: '34' };
    this.stations.push(station);
    return this.stations;
  }

  reestablishStation(station) {
    alert(station);
    // station/reestablish/" + station
  }

  getAll() {
    let station = { name: 'station', latitude: '22', longitude: '34' };
    this.stations.push(station);
    return this.stations;
  }

  edit(train) {
    // /station/update"; put
    alert(JSON.stringify(train));
  }

  delete(train) {
    // /station/delete/" + name;
  }
}