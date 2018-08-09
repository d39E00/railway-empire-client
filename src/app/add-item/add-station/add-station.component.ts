import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {StationService} from '../../service/station.service';
import {GoogleService} from '../../service/google.service';
import {Station} from '../../models/station';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  constructor(private stationService: StationService, private googleService: GoogleService) {
  }
  data: any = [];

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const station = new Station();
    station.name = f.value.stationName;
    station.latitude = f.value.latitude;
    station.longitude = f.value.longitude;


    if (station.latitude === '' || station.longitude === '') {
      this.googleService.getCoordinates(station.name).subscribe(response => {
        this.data = response;
        const latitude = this.data.results[0].geometry.location.lat;
        const longitude = this.data.results[0].geometry.location.lng;
        alert(latitude + longitude);
      }, error => alert(JSON.stringify(error)));
    } else {
      this.stationService.add(station).subscribe(
        res => alert(JSON.stringify(res)),
        error => alert(JSON.stringify(error)));
    }
  }
}
