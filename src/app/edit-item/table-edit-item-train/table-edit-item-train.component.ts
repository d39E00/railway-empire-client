import {Component, OnInit} from '@angular/core';
import {TrainService} from '../../service/train.service';
import swal from 'sweetalert2';
import {Train} from '../../models/train';


@Component({
  selector: 'app-table-edit-item-train',
  templateUrl: './table-edit-item-train.component.html',
  styleUrls: ['./table-edit-item-train.component.css']
})
export class TableEditItemTrainComponent implements OnInit {

  trains: Train[] = [];

  constructor(private trainService: TrainService) {
  }

  ngOnInit() {
    this.trainService.getAll().subscribe(
      res => this.trains = res,
      error1 => alert(JSON.stringify(error1)));
  }

  edit(train, i) {
    const cnt = this;
    swal({
      title: 'EDIT TRAIN',
      html:
      '<input id=\'swal-input1\' class=\'swal2-input\' value=\'' + train.trainName + '\'>' +
      '<input id=\'swal-input2\' class=\'swal2-input\' value=\'' + train.cntCarriage + '\' disabled>' +
      '<input id=\'swal-input3\' class=\'swal2-input\' value=\'' + train.cntSeats + '\' disabled>',
      focusConfirm: false,
      confirmButtonText: 'EDIT',
    }).then(function () {
      const trainDTO = new Train();
      trainDTO.trainName = train.trainName;
      trainDTO.trainNewName = (document.getElementById('swal-input1') as HTMLInputElement).value;
      trainDTO.cntSeats = train.cntSeats;
      trainDTO.cntCarriage = train.cntCarriage;
      if (/^[a-zA-Z]+$/.test(trainDTO.trainNewName.charAt(0)) && trainDTO.trainNewName.length > 3 && trainDTO.trainNewName.length < 6) {
        cnt.trainService.edit(trainDTO).subscribe(
          res => {
            swal({title: 'Congratulations!', text: 'You edit station!', type: 'success'});
            console.log(res);
            cnt.trains[i].trainName = trainDTO.trainNewName;
          },
          error => {
            console.log(error);
            swal({
              title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
            });
          });
      } else {
        swal({title: 'Opps..', text: 'Wrong train name', type: 'error'});
      }
    }).catch(swal.noop);
  }

  delete(trainName, i) {
    this.trainService.delete(trainName).subscribe(
      res => {
        this.trains.splice(i, 1);
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
