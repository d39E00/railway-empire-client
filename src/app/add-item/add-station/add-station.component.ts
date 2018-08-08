import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {StationService} from '../../service/station.service';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  constructor(private stationService: StationService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const station = {
      name: f.value.stationName,
      latitude: f.value.latitude,
      longitude: f.value.longitude
    };
    this.stationService.add(station);
  }

}
