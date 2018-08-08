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

  stations: any = [];

  ngOnInit() {
    this.stationService.getAll().subscribe(
      res => this.stations = res,
      error => alert(error));
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
    this.stationService.edit(stationDTO).subscribe(
      res => {
        alert('success');
        console.log(res);
      },
      error => alert(JSON.stringify(error)));
  }

  delete(stationName, i) {
    this.stationService.delete(stationName).subscribe(res => {
        this.stations.splice(i, 1);
        console.log(res);
      },
      error => alert(JSON.stringify(error)));
  }
}
