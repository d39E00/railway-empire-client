import {Component, OnInit} from '@angular/core';
import {StationService} from '../../service/station.service';

@Component({
  selector: 'app-table-stations',
  templateUrl: './table-stations.component.html',
  styleUrls: ['./table-stations.component.css']
})
export class TableStationsComponent implements OnInit {

  stations: any = [];

  constructor(private stationService: StationService) {
  }

  ngOnInit() {
    this.stationService.getDeleted().subscribe(res => this.stations = res,
      error => alert(JSON.stringify(error)));
  }

  reestablishStation(station, i) {
    this.stationService.reestablishStation(station).subscribe(
      res => {
        console.log(res);
        this.stations.splice(i, 1);
      },
      error => alert(JSON.stringify(error)));
  }
}
