import {Component, OnInit} from '@angular/core';
import {TrainService} from '../../service/train.service';
import {Train} from '../../models/train';
import swal from 'sweetalert2';

@Component({
  selector: 'app-table-train',
  templateUrl: './table-train.component.html',
  styleUrls: ['./table-train.component.css']
})
export class TableTrainComponent implements OnInit {

  trains: Train[] = [];

  constructor(private trainService: TrainService) {
  }

  ngOnInit() {
    this.trainService.getDeleted().subscribe(
      res => this.trains = res,
      error => {
        console.log(error);
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
  }

  reestablishTrain(trainName, i) {
    this.trainService.reestablishTrain(trainName).subscribe(
      res => {
        swal({title: 'Congratulations!', text: 'You reestablish station!', type: 'success'});
        console.log(res);
        this.trains.splice(i, 1);
      },
      error => {
        console.log(error);
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
  }
}
