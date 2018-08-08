import {Component, OnInit} from '@angular/core';
import {TrainService} from '../../service/train.service';

@Component({
  selector: 'app-table-train',
  templateUrl: './table-train.component.html',
  styleUrls: ['./table-train.component.css']
})
export class TableTrainComponent implements OnInit {

  trains = [];

  constructor(private trainService: TrainService) {
  }

  ngOnInit() {
    this.trains = this.trainService.getDeleted();
  }

  reestablishTrain(trainName, i) {
    this.trains.splice(i, 1);
    this.trainService.reestablishTrain(trainName);
  }
}
