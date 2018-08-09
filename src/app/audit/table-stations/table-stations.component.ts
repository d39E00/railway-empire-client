import {Component, OnInit} from '@angular/core';
import {StationService} from '../../service/station.service';
import {Station} from '../../models/station';
import {Observable} from 'rxjs';
import swal from 'sweetalert2';

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
    }, error => {
      console.log(error);
      swal({
        title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
      });
    });
  }

  reestablishStation(station, i) {
    this.stationService.reestablishStation(station).subscribe(
      res => {
        swal({title: 'Congratulations!', text: 'You reestablish station!', type: 'success'});
        console.log(res);
        this.stations.splice(i, 1);
      },
      error => {
        console.log(error);
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
  }
}
