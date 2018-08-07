import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-stations',
  templateUrl: './table-stations.component.html',
  styleUrls: ['./table-stations.component.css']
})
export class TableStationsComponent implements OnInit {

  stations = [];
  constructor() { }

  ngOnInit() {
    const station = { name: 'station', latitude: '22', longitude: '34' };
    this.stations.push(station);
  }

}
