import {Component, OnInit} from '@angular/core';
import {StationService} from '../../service/station.service';

@Component({
  selector: 'app-table-edit-item-station',
  templateUrl: './table-edit-item-station.component.html',
  styleUrls: ['./table-edit-item-station.component.css']
})
export class TableEditItemStationComponent implements OnInit {

  constructor(private stationService: StationService) {
  }

  stations = [];

  ngOnInit() {
    this.stations = this.stationService.getAll();
  }

  edit(station, i) {
    const newName = 'new name';
    this.stations[i].name = newName;
    const stationDTO = {
      name: station.name,
      newName: newName,
      latitude: station.latitude,
      longitude: station.longitude
    };
    this.stationService.edit(stationDTO);
  }

  delete(stationName, i) {
    this.stations.splice(i, 1);
    this.stationService.delete(stationName);
  }
}
