import {Component, OnInit} from '@angular/core';
import {TrainService} from '../../service/train.service';


@Component({
  selector: 'app-table-edit-item-train',
  templateUrl: './table-edit-item-train.component.html',
  styleUrls: ['./table-edit-item-train.component.css']
})
export class TableEditItemTrainComponent implements OnInit {

  trains: any = [];

  constructor(private trainService: TrainService) {
  }

  ngOnInit() {
    this.trainService.getAll().subscribe(
      res => this.trains = res,
      error1 => alert(JSON.stringify(error1)));
  }

  edit(train, i) {
    const newName = 'new train';
    // TODO swal
    this.trains[i].name = newName;
    const trainDTO = {
      trainName: train.trainName,
      trainNewName: newName,
      cntCarriage: train.cntCarriage,
      cntSeats: train.cntSeats
    };
    this.trainService.edit(trainDTO).subscribe(
      res => alert(JSON.stringify(res)),
      error => alert(JSON.stringify(error)));
  }

  delete(trainName, i) {
    this.trainService.delete(trainName).subscribe(
      res => this.trains.splice(i, 1),
      error1 => alert(JSON.stringify(error1)));
  }
}
