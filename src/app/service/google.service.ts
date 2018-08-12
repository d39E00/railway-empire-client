import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GoogleService {

  constructor(private httpClient: HttpClient) {
  }

  getCoordinates(city) {
    return this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address=$' +
      city + '&key=AIzaSyBDlLcHvt_VzI-31mvgHNtD_nyyTE9Qa5E');
  }
}
