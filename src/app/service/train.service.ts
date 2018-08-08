import { Injectable } from '@angular/core';

@Injectable()
export class TrainService {

  trains = [];
  constructor() { }

  add(train) {
    /*
    '/train/add'
    */
    alert('add train');
  }

  getDeleted() {
    //  "/train/deletedTrains";
    let train = { trainName: 'first', cntCarriage: '12', cntSeats: '30' };
    this.trains.push(train);
    return this.trains;
  }

  reestablishTrain(train) {
    //"/train/reestablish/" + train
    alert(train);
  }

  getAll() {
    // var urlSearching = "/train/allTrains";
    let train1 = { trainName: 'first', cntCarriage: '12', cntSeats: '30' };
    let train2 = { trainName: 'first', cntCarriage: '12', cntSeats: '30' };
    let train3 = { trainName: 'first', cntCarriage: '12', cntSeats: '30' };
    this.trains.push(train1);
    this.trains.push(train2);
    this.trains.push(train3);
    return this.trains;
  }

  edit(train) { 
    // "/train/update";
    alert(JSON.stringify(train));

  }

  delete(train) { 
    // "/train/delete/" + name;
  }
}