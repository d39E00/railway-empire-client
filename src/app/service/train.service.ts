import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TrainService {

  URL_ADD_TRAIN = 'http://localhost:8000/train/add';
  URL_GET_DELETED_TRAIN = 'http://localhost:8000/train/deletedTrains';
  URL_REESTABLISH_TRAIN = 'http://localhost:8000/train/reestablish/';
  URL_EDIT_TRAIN = 'http://localhost:8000/train/update';
  URL_DELETE_TRAIN = 'http://localhost:8000/train/delete/';
  URL_GET_ALL = 'http://localhost:8000/train/allTrains';

  constructor(private httpClient: HttpClient) {
  }

  add(train) {
    return this.httpClient.post(this.URL_ADD_TRAIN, train);
  }

  getDeleted() {
    return this.httpClient.get(this.URL_GET_DELETED_TRAIN);
  }

  reestablishTrain(train) {
    return this.httpClient.get(this.URL_REESTABLISH_TRAIN + train);
  }

  getAll() {
    return this.httpClient.get(this.URL_GET_ALL);
  }

  edit(train) {
    return this.httpClient.put(this.URL_EDIT_TRAIN, train);
  }

  delete(train) {
    return this.httpClient.delete(this.URL_DELETE_TRAIN + train);
  }
}
