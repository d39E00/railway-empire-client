import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GoogleService {

  constructor(private httpClient: HttpClient) {
  }

  getCoordinates(city) {
    return this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address=$' +
      city + '&key=AIzaSyArC_Xw9Sto8WokyBDa-xMN5HmcYmkNsGU');
  }
}
