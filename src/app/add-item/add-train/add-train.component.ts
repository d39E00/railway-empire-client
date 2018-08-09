import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TrainService} from '../../service/train.service';
import {Train} from '../../models/train';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  constructor(private trainService: TrainService) {
  }

  cntSeats = 30;

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const train = new Train();
    train.trainName = f.value.train;
    train.cntCarriage = f.value.cntCarriage;
    train.cntSeats = this.cntSeats;
    this.trainService.add(train).subscribe(
      res => alert(JSON.stringify(res)),
      error => alert(JSON.stringify(error)));
  }
}
