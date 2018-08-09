import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TrainService} from '../../service/train.service';
import {Train} from '../../models/train';
import swal from 'sweetalert2';

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
      data => {
        console.log(data);
        swal({title: 'Congratulations!', text: 'You add new train!', type: 'success'});
      },
      error => {
        console.log(error);
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
  }
}
