import {Component, OnInit} from '@angular/core';
import {TrainService} from '../../service/train.service';

@Component({
  selector: 'app-table-train',
  templateUrl: './table-train.component.html',
  styleUrls: ['./table-train.component.css']
})
export class TableTrainComponent implements OnInit {

  trains: any = [];

  constructor(private trainService: TrainService) {
  }

  ngOnInit() {
    this.trainService.getDeleted().subscribe(
      res => this.trains = res,
      error1 => alert(JSON.stringify(error1)));
  }

  reestablishTrain(trainName, i) {
    this.trainService.reestablishTrain(trainName).subscribe(
      res => this.trains.splice(i, 1),
      error1 => alert(JSON.stringify(error1)));
  }
}
