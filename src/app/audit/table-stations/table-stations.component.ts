import {Component, OnInit} from '@angular/core';
import {StationService} from '../../service/station.service';
import {Station} from '../../models/station';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-table-stations',
  templateUrl: './table-stations.component.html',
  styleUrls: ['./table-stations.component.css']
})
export class TableStationsComponent implements OnInit {

  stations: Station[] = [];

  constructor(private stationService: StationService) {
  }

  ngOnInit() {
    this.stationService.getDeleted().subscribe(res => {
      this.stations = res;
    }, error1 => {
      alert(JSON.stringify(error1));
    });
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
