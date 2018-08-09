import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {StationService} from '../../service/station.service';
import {GoogleService} from '../../service/google.service';
import {Station} from '../../models/station';
import swal from 'sweetalert2';

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
        swal({
          title: station.name,
          text: 'latitude = ' + latitude + ', longitude = ' + longitude,
          type: 'info',
          showCancelButton: true,
          cancelButtonText: 'Wrong parameters ...',
          confirmButtonText: 'It\'s OK!'
        }).then((result) => {
          if (result.value) {
            station.latitude = f.value.latitude;
            station.longitude = f.value.longitude;
            this.stationService.add(station).subscribe(
              () => swal({title: 'Congratulations!', text: 'You add new station!', type: 'success'}),
              error => {
                console.log(error);
                swal({
                  title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
                });
              });
          }
        });
      }, error => {
        console.log(error);
        swal({
          title: 'Oops..', text: 'Wrong station name, can\'t find anything', type: 'error'
        });
      });
    } else {
      this.stationService.add(station).subscribe(
        data => {
          console.log(data);
          swal({title: 'Congratulations!', text: 'You add new station!', type: 'success'});
        },
        error => {
          console.log(error);
          swal({
            title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
          });
        });
    }
  }
}
