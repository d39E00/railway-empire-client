import {Component, OnInit} from '@angular/core';
import {StationService} from '../../service/station.service';
import swal from 'sweetalert2';
import {Station} from '../../models/station';

@Component({
  selector: 'app-table-edit-item-station',
  templateUrl: './table-edit-item-station.component.html',
  styleUrls: ['./table-edit-item-station.component.css']
})
export class TableEditItemStationComponent implements OnInit {

  constructor(private stationService: StationService) {
  }

  stations: Station[] = [];

  ngOnInit() {
    this.stationService.getAll().subscribe(
      res => this.stations = res,
      error => alert(JSON.stringify(error)));
  }

  edit(station, i) {
    const cnt = this;
    swal({
      title: 'EDIT STATION',
      html:
      '<input id=\'swal-input1\' class=\'swal2-input\' value=\'' + station.name + '\'>' +
      '<input id=\'swal-input2\' class=\'swal2-input\' value=\'' + station.latitude + '\' disabled>' +
      '<input id=\'swal-input3\' class=\'swal2-input\' value=\'' + station.longitude + '\' disabled>',
      focusConfirm: false,
      confirmButtonText: 'EDIT',
    }).then(function () {
      const stationDTO = new Station();
      stationDTO.name = station.name;
      stationDTO.newName = (document.getElementById('swal-input1') as HTMLInputElement).value;
      stationDTO.latitude = station.latitude;
      stationDTO.longitude = station.longitude;
      if (/^[a-zA-Z]+$/.test(stationDTO.newName)) {
        cnt.stationService.edit(stationDTO).subscribe(
          res => {
            swal({title: 'Congratulations!', text: 'You edit station!', type: 'success'});
            console.log(res);
            cnt.stations[i].name = stationDTO.newName;
          },
          error => {
            console.log(error);
            swal({
              title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
            });
          });
      } else {
        swal({title: 'Opps..', text: 'Wrong station name', type: 'error'});
      }
    }).catch(swal.noop);
  }

  delete(stationName, i) {
    this.stationService.delete(stationName).subscribe(res => {
        this.stations.splice(i, 1);
        console.log(res);
        swal({title: 'Congratulations!', text: 'You delete station!', type: 'success'});
      },
      error => {
        console.log(error);
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
  }
}
