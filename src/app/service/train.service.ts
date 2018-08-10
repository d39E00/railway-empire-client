import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Train} from '../models/train';

@Injectable()
export class TrainService {

  URL_ADD_TRAIN = 'http://localhost:8000/train/add';
  URL_GET_DELETED_TRAIN = 'http://localhost:8000/train/deletedTrains';
  URL_REESTABLISH_TRAIN = 'http://localhost:8000/train/reestablish/';
  URL_EDIT_TRAIN = 'http://localhost:8000/train/update';
  URL_DELETE_TRAIN = 'http://localhost:8000/train/delete/';
  URL_GET_ALL = 'http://localhost:8000/train/allTrains';
  URL_FOR_AUTO_COMPLETE = 'http://localhost:8000/train/auto/trains';


  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
  }

  add(train) {
    return this.httpClient.post<Train>(this.URL_ADD_TRAIN, train, {headers: this.authService.getHeaderPost()});
  }

  getDeleted() {
    return this.httpClient.get<Train[]>(this.URL_GET_DELETED_TRAIN, {headers: this.authService.getHeader()});
  }

  reestablishTrain(train) {
    return this.httpClient.get<Train>(this.URL_REESTABLISH_TRAIN + train, {headers: this.authService.getHeader()});
  }

  getAll() {
    return this.httpClient.get<Train[]>(this.URL_GET_ALL, {headers: this.authService.getHeader()});
  }

  edit(train) {
    return this.httpClient.put(this.URL_EDIT_TRAIN, train, {headers: this.authService.getHeaderPost()});
  }

  delete(train) {
    return this.httpClient.delete(this.URL_DELETE_TRAIN + train, {headers: this.authService.getHeader()});
  }

  getAllForAutoComplete() {
    return this.httpClient.get(this.URL_FOR_AUTO_COMPLETE, {headers: this.authService.getHeader()});
  }
}
