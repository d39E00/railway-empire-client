import {Component, OnInit} from '@angular/core';
import {StationService} from '../../service/station.service';

@Component({
  selector: 'app-table-stations',
  templateUrl: './table-stations.component.html',
  styleUrls: ['./table-stations.component.css']
})
export class TableStationsComponent implements OnInit {

  stations = [];

  constructor(private stationService: StationService) {
  }

  ngOnInit() {
    this.stations = this.stationService.getDeleted();
  }

  reestablishStation(station, i) {
    this.stationService.reestablishStation(station);
    this.stations.splice(i, 1);
  }

}
